import { NgModule } from "@angular/core";
import { JigsawSelectModule, JigsawHeaderModule } from "jigsaw/public_api";
import { JigsawDemoDescriptionModule } from "app/for-internal/description/demo-description";
import { MultipleSelectDemoComponent } from "./demo.component";

@NgModule({
    imports: [JigsawSelectModule, JigsawDemoDescriptionModule, JigsawHeaderModule],
    declarations: [MultipleSelectDemoComponent],
    exports: [MultipleSelectDemoComponent]
})
export class MultipleSelectDemoModule {}
