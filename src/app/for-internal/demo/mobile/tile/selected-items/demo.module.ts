import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {JigsawMobileTileSelectModule} from "jigsaw/mobile_public_api";
import {JigsawDemoDescriptionModule} from "app/for-internal/description/demo-description";
import {TileSelectSelectedItemsComponent} from './demo.component';

@NgModule({
    imports: [JigsawMobileTileSelectModule, CommonModule, JigsawDemoDescriptionModule],
    declarations: [TileSelectSelectedItemsComponent],
    exports: [TileSelectSelectedItemsComponent]
})
export class TileSelectSelectedItemsDemoModule {
}
