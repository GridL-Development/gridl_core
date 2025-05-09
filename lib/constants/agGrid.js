"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultColDefintions = exports.gridLTheme = void 0;
const ag_grid_community_1 = require("ag-grid-community");
// AgGrid Custom Theme
exports.gridLTheme = ag_grid_community_1.themeQuartz.withParams({
    borderRadius: "2px",
    browserColorScheme: "light",
    columnBorder: false,
    fontFamily: {
        googleFont: "Roboto",
    },
    fontSize: "12px",
    headerFontFamily: ["Arial", "sans-serif"],
    headerFontSize: "12px",
    headerFontWeight: 600,
    headerVerticalPaddingScale: 1,
    iconSize: "12px",
    spacing: "4px",
    wrapperBorderRadius: "2px",
});
// Default Column Definitions
exports.defaultColDefintions = {
    flex: 1,
    suppressMovable: true,
    sortable: true,
    enablePivot: false,
    floatingFilter: false,
    enableRowGroup: false,
    enableCellChangeFlash: true,
};
//# sourceMappingURL=agGrid.js.map