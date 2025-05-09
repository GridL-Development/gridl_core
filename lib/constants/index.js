"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridType = exports.cube_table_status = exports.constLinkTablesCollectionName = exports.constSchemasCollectionName = exports.datasourceTableTypes = exports.requiredColumnsForLevelImport = exports.requiredColumnsForImportDimensionValueImport = exports.requiredColumnsForImportDimensionImport = exports.integrationDataTypes = exports.datasourceTypesWithCredentials = exports.alertMessageDurationError = exports.alertMessageDuration = void 0;
// Alerts
exports.alertMessageDuration = 1;
exports.alertMessageDurationError = 4;
// Integration
exports.datasourceTypesWithCredentials = [
    "NetSuite",
    "Quickbooks",
    "Adaptive",
];
exports.integrationDataTypes = [
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
exports.requiredColumnsForImportDimensionImport = [
    "name",
    "code",
    "description",
];
exports.requiredColumnsForImportDimensionValueImport = [
    "name",
    "code",
    "dimension_code",
    "parent",
];
exports.requiredColumnsForLevelImport = [
    "name",
    "code",
    "parent",
    "currency",
    "description",
];
exports.datasourceTableTypes = [
    { label: "Symbolic", value: "symbolic" },
    { label: "Union", value: "union" },
    { label: "Join", value: "join" },
];
// Misc / Uncategorized
exports.constSchemasCollectionName = "table_schemas";
exports.constLinkTablesCollectionName = "link_tables";
// Cubes
exports.cube_table_status = [
    { value: "Active", label: "Active" },
    { value: "Archived", label: "Archived" },
];
// Grids
var GridType;
(function (GridType) {
    GridType["cube"] = "Cube";
    GridType["table"] = "Table";
})(GridType || (exports.GridType = GridType = {}));
//# sourceMappingURL=index.js.map