import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormlyFieldType} from "@ngx-formly/jigsaw/form-field";
import {JigsawRadiosLite} from "@rdkmaster/jigsaw";

@Component({
    selector: 'formly-field-jigsaw-radio',
    template: `
        <jigsaw-radios-lite
            [formlyAttributes]="field"
            [formControl]="formControl"
            [value]="to.value"
            [data]="to.data"
            [valid]="to.valid && !showError"
            [trackItemBy]="to.trackItemBy"
            [labelField]="to.labelField"
            (valueChange)="to.valueChange && to.valueChange($event)"
        ></jigsaw-radios-lite>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.display]': "'flex'",
    },
})
export class FormlyFieldRadio extends FormlyFieldType<JigsawRadiosLite> {
    defaultOptions = {
        templateOptions: {
            valid: true,
            data: [],
            labelField: 'label'
        }
    };

    @ViewChild(JigsawRadiosLite)
    protected _instance: JigsawRadiosLite;
}
