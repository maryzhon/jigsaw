import {AbstractJigsawComponent} from "../../../common/common"
import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

/**
 * 用于在界面上显示一个步骤条，并且可以实时更新各个步骤的状态，需要配合`JigsawStepItem`组件一起使用。
 * 
 * @internal
 *
 * $demo = steps/basic
 * $demo = steps/step-interactive
 * $demo = steps/vertical
 *
 * $since = v1.1.7
 */
@Component({
    selector: 'jigsaw-steps-fallback, j-steps-fallback',
    template: '<div class="jigsaw-steps-container" [perfectScrollbar]="{wheelSpeed: 0.5, wheelPropagation: true}"><div class="jigsaw-step-left-space"></div><ng-content></ng-content></div>',
    host: {
        '[class.jigsaw-steps-fallback]': 'true',
        '[style.width]': 'width',
        '[style.height]': 'height',
        '[class.jigsaw-steps-size-small]': "preSize === 'small'",
        '[class.jigsaw-steps-size-large]': "preSize === 'large'",
        '[class.jigsaw-steps-direction-vertical]': "direction === 'vertical'",
        '[class.jigsaw-steps-direction-horizontal]': "direction === 'horizontal'",
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JigsawStepsFallback extends AbstractJigsawComponent {
    /**
     * 设置步骤条图标的预设尺寸
     *
     * @NoMarkForCheckRequired
     *
     * $demo = steps/basic
     */
    @Input()
    public preSize: 'small' | 'default' | 'large' = "default";

    /**
     * 设置步骤条的方向，支持水平方向和垂直方向
     *
     * @NoMarkForCheckRequired
     *
     * $demo = steps/vertical
     */
    @Input()
    public direction: 'vertical' | 'horizontal' = "horizontal";
}