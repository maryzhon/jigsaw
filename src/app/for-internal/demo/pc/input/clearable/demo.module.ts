import {NgModule} from "@angular/core";
import {JigsawInputModule, JigsawSwitchModule} from "jigsaw/public_api";
import {JigsawDemoDescriptionModule} from "app/for-internal/description/demo-description";
import {InputClearableDemoComponent} from "./demo.component";

@NgModule({
    declarations: [InputClearableDemoComponent],
    exports: [InputClearableDemoComponent],
    imports: [JigsawInputModule, JigsawDemoDescriptionModule, JigsawSwitchModule]
})
export class InputClearableDemoModule {

}
