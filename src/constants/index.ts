/** @format */

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

export const requiredColumnsForImportDimensionImport = ["name", "code"];

export const requiredColumnsForImportDimensionValueImport = [
  "name",
  "code",
  "dimension_code",
  "parent",
];

export const requiredColumnsForLevelImport = [
  "name",
  "code",
  "parent",
  "currency",
  "description",
];

export const datasourceTableTypes = [
  { label: "Symbolic", value: "symbolic" },
  { label: "Union", value: "union" },
  { label: "Join", value: "join" },
];

// Misc / Uncategorized
export const constSchemasCollectionName = "table_schemas";
export const constLinkTablesCollectionName = "link_tables";

// Cubes
export const cube_table_status = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

// Grids
export enum GridType {
  cube = "Cube",
  table = "Table",
}

// Versions
export const versionStatus = [
  { value: "locked", label: "Locked" },
  { value: "unlocked", label: "Unlocked" },
];
