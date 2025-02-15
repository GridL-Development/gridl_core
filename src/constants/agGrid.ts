/** @format */

import { themeQuartz } from "ag-grid-community";

// AgGrid Custom Theme
export const gridLTheme = themeQuartz.withParams({
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
export const defaultColDefintions = {
  flex: 1,
  suppressMovable: true,
  sortable: true,
  enablePivot: false,
  floatingFilter: false,
  enableRowGroup: false,
  enableCellChangeFlash: true,
};
