import {spawn} from 'child_process';
import {existsSync, statSync} from 'fs-extra';
import {join} from 'path';
import {task} from 'gulp';
import {execTask} from '../util/task_helpers';
import {buildConfig} from './build-config';
import {green, grey, yellow} from 'chalk';
import * as minimist from 'minimist';

/** Parse command-line arguments for release task. */
const argv = minimist(process.argv.slice(3));

const npm = process.platform === "win32" ? "npm.cmd" : "npm";

/** Make sure we're logged in. */
task(':publish:whoami', execTask(npm, ['whoami'], {
    //silent: true,
    errMessage: 'You must be logged in to publish.'
}));

task(':publish:logout', execTask(npm, ['logout']));

function _execNpmPublish(label: string, packageName: string): Promise<{}> {
    const packageDir = join(buildConfig.outputDir, '@rdkmaster', packageName);

    if (!statSync(packageDir).isDirectory()) {
        return;
    }

    if (!existsSync(join(packageDir, 'package.json'))) {
        throw new Error(`"${packageDir}" does not have a package.json.`);
    }

    if (!existsSync(join(packageDir, 'LICENSE'))) {
        throw new Error(`"${packageDir}" does not have a LICENSE file`);
    }

    process.chdir(packageDir);
    console.log(green(`Publishing ${packageName}...`));

    const command = npm;

    const args = ['publish', '--access', 'public', '--loglevel=warn'];
    if (label) {
        args.push('--tag', label);
    }

    return new Promise((resolve, reject) => {
        console.log(grey(`Executing: ${command} ${args.join(' ')}`));
        if (argv['dry']) {
            resolve();
            return;
        }

        const childProcess = spawn(command, args);
        childProcess.stdout.on('data', (data: Buffer) => {
            console.log(`  stdout: ${data.toString().split(/[\n\r]/g).join('\n          ')}`);
        });
        childProcess.stderr.on('data', (data: Buffer) => {
            console.error(`  stderr: ${data.toString().split(/[\n\r]/g).join('\n          ')}`);
        });

        childProcess.on('close', (code: number) => {
            if (code == 0) {
                resolve();
            } else {
                reject(new Error(`Could not publish ${packageName}, status: ${code}.`));
            }
        });
    });
}

export async function publishPackage(packageName: string) {
    const label = argv['tag'];
    const currentDir = process.cwd();

    console.log('');
    if (!label) {
        console.log(yellow('You can use a label with --tag=labelName.'));
        console.log(yellow('Publishing using the latest tag.'));
    } else {
        console.log(yellow(`Publishing using the ${label} tag.`));
    }
    console.log('');

    await _execNpmPublish(label, packageName);

    process.chdir(currentDir);
}

