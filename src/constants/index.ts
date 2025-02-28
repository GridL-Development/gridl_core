/** @format */

// Accounts
export const incomeStmtCodes = [
  "income",
  "cogs",
  "expense",
  "non_op_income",
  "non_op_expense",
];

export const balanceSheetCodes = ["assets", "liabilities", "equity"];

export const accountTypeTagDisplayMap = {
  PnL: "P&L",
  BalanceSheet: "Balance Sheet",
  Custom: "Custom",
  Cube: "Cube",
};

// Alerts
export const alertMessageDuration = 1;
export const alertMessageDurationError = 4;

// Integration
export const datasourceTypesWithCredentials = [
  "NetSuite",
  "Quickbooks",
  "Adaptive",
];

export const integrationDataTypes = [
  {
    value: "string",
    label: "String",
  },
  {
    value: "integer",
    label: "Integer",
  },
  {
    value: "decimal",
    label: "Decimal",
  },
  {
    value: "date",
    label: "Date",
  },
  {
    value: "boolean",
    label: "Boolean",
  },
  {
    value: "object",
    label: "Object",
  },
  {
    value: "array",
    label: "Array",
  },
  {
    value: "null",
    label: "Null",
  },
  {
    value: "undefined",
    label: "Undefined",
  },
];

export const requiredColumnsLevel = [
  "name",
  "code",
  "parent",
  "currency",
  "description",
];

export const requiredColumnsAccount = [
  "name",
  "code",
  "parent",
  "description",
  "accountType",
  "displayAs",
  "containsSalaryInfo",
  "accountTypeTag",
];

export const datasourceTableTypes = [
  { label: "Symbolic", value: "Symbolic" },
  { label: "Union", value: "Union" },
  { label: "Join", value: "Join" },
];

// Misc / Uncategorized
export const constSchemasCollectionName = "table_schemas";
export const constLinkTablesCollectionName = "link_tables";
export const expectedColumnsForImportLevel = [
  "name",
  "code",
  "parent",
  "currency",
  "description",
];
export const expectedColumnsForImportAccount = [
  "name",
  "code",
  "parent",
  "description",
  "account_type",
  "account_type_tag",
  "display_as",
  "contains_salary_info",
];
export const expectedColumnsForImportDimension = [
  "name",
  "code",
  "description",
];
export const expectedColumnsForImportDimensionValue = [
  "name",
  "code",
  "dimensionCode",
  "description",
];

// Cubes
export const cube_table_status = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

// Grids
export enum GridType {
  Cube = "Cube",
  Table = "Table",
}

// Versions
export const versionStatus = [
  { value: "Locked", label: "Locked" },
  { value: "Unlocked", label: "Unlocked" },
];
