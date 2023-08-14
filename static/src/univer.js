import { Tools, UniverSheet } from '@univer/core';
import { RenderEngine } from '@univer/base-render';
import { DEFAULT_WORKBOOK_DATA } from '@univer/common-plugin-data';
import { UniverComponentSheet } from '@univer/style-universheet';
import { SheetPlugin } from '@univer/base-sheets';


export class Univer {
    constructor() {
        this._initialize()
    }
    _initialize() {


        const uiDefaultConfigUp = {
            container: 'univer-demo',
            layout: {
                innerRight: false,
                outerLeft: false,
                infoBar: false,
                formulaBar: false,
                toolBar: false,
                sheetBar: false,
                countBar: false,
            },
        };
        DEFAULT_WORKBOOK_DATA.id = Tools.generateRandomId()
        const univerSheetUp = UniverSheet.newInstance(DEFAULT_WORKBOOK_DATA);
        univerSheetUp.installPlugin(new RenderEngine());
        univerSheetUp.installPlugin(new UniverComponentSheet());

        let sheetPlugin = new SheetPlugin(uiDefaultConfigUp);

        univerSheetUp.installPlugin(sheetPlugin);

    }
}