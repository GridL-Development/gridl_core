/** @format */
export declare const alertMessageDuration = 1;
export declare const alertMessageDurationError = 4;
export declare const datasourceTypesWithCredentials: string[];
export declare const integrationDataTypes: {
    value: string;
    label: string;
}[];
export declare const requiredColumnsForImportDimensionImport: string[];
export declare const requiredColumnsForImportDimensionValueImport: string[];
export declare const requiredColumnsForLevelImport: string[];
export declare const datasourceTableTypes: {
    label: string;
    value: string;
}[];
export declare const constSchemasCollectionName = "table_schemas";
export declare const constLinkTablesCollectionName = "link_tables";
export declare const cube_table_status: {
    value: string;
    label: string;
}[];
export declare enum GridType {
    cube = "Cube",
    table = "Table"
}
