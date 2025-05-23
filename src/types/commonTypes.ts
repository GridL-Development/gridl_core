/** @format */

import {
  Account,
  AccountAttribute,
  AccountAttributeAndValue,
  AccountAttributeValue,
  AccountType,
  AccountTypeTag,
  Client,
  Country,
  Currency,
  CurrencyIsoCode,
  DataSource,
  DataSourceCredential,
  DataSourceLoader,
  DataSourceTask,
  Dimension,
  DimensionValue,
  DimensionValueAttribute,
  DimensionValueAttributeAndValue,
  DimensionValueAttributeValue,
  Instance,
  Level,
  LevelAttribute,
  LevelAttributeAndValue,
  LevelAttributeValue,
  User,
  Version,
  CubeAccountStructure,
  CubeLevelStructure,
} from "../prisma/generated/client";
import { GridType } from "../constants";

export type PagePropsWithSearchParamsAndParams = {
  params: Promise<{ [key: string]: string | string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface IntegrationComponentLibrary {
  datasources: DataSource[];
  loaders: DataSourceLoader[];
  tasks: DataSourceTask[];
  credentials: DataSourceCredential[];
}

export interface AccountAttributeValueWithPath extends AccountAttributeValue {
  path: string[];
}

export interface AccountAttributeValueOptions {
  value: string;
  label: string;
  children: TreeSelectDataNode[];
}

export interface AccountWithAttributesAndValues extends Account {
  AttributeAndValues: AccountAttributeAndValue[];
}

export interface AccountWithPathAndParent extends Account {
  path: string[];
  parent: Account | null;
}

export interface ClientWithCountry extends Client {
  country: Country;
}

export interface CSVAccountImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  parentCodeToId: Map<string, string>;
}

export interface CSVAccountAttributeImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  existingRecords: Map<string, { code: string; name: string }>;
}

export interface CSVAccountAttributeValuesImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  attributeMapping: Record<string, string>;
  parentCodeToId: Map<string, string>;
}

export interface CSVDimensionImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  existingRecords?: Map<string, { code: string; name: string }>;
}

export interface CSVDimensionValueImportContext {
  clientId: string;
  instanceId: string;
  dimensionMapping: Record<string, string>;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  parentCodeToId: Map<string, string>;
}

export interface CSVDimensionValueAttributeImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
}

export interface CSVDimensionValueAttributeValuesImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  attributeMapping: Record<string, string>;
  parentCodeToId: Map<string, string>;
}

export interface CSVLevelImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  currencyCodeToId: Map<string, string>;
  parentCodeToId: Map<string, string>;
}

export interface CSVLevelAttributeImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  existingRecords: Map<string, { code: string; name: string }>;
}

export interface CSVLevelAttributeValuesImportContext {
  clientId: string;
  instanceId: string;
  existingCodes: Set<string>;
  existingNames: Set<string>;
  attributeMapping: Record<string, string>;
  parentCodeToId: Map<string, string>;
}

export interface CSVCubeDataImportContext {
  clientId: string;
  instanceId: string;
  cubeId: string;
  versionId: string;
}

export interface CurrencyWithCurrencyIsoCode extends Currency {
  currencyIsoCode: CurrencyIsoCode;
}

export interface CurrencyWithOptionalParts
  extends Pick<Currency, "code" | "currencyIsoCodeId" | "name" | "isDefault"> {}

export interface DataSourceLoaderMappingTable {
  name: string;
  columns: string[];
}

export interface DimensionIdWithDimensionValues {
  dimensionId: string;
  dimensionValues: DimensionValue[];
}

export interface DimensionValueWithAttributesAndValues extends DimensionValue {
  AttributeAndValues: DimensionValueAttributeAndValue[];
}

export interface DimensionValueAttributeValueExtended
  extends DimensionValueAttributeValue {
  attribute: DimensionValueAttribute;
  parent: DimensionValueAttributeValue | null;
  path: string[];
}

export interface DimensionValueExtended extends DimensionValue {
  dimension: Dimension;
  path: string[];
  parent?: DimensionValueExtended | null;
}

export interface ExportAccount
  extends Pick<
    Account,
    | "code"
    | "name"
    | "containsSalaryInfo"
    | "actualsBy"
    | "plannedBy"
    | "displayAs"
    | "description"
  > {
  parent: Pick<Account, "code"> | null;
}

export interface ExportAccountAttribute
  extends Pick<AccountAttribute, "code" | "name" | "description"> {}

export interface ExportAccountAttributeValue {
  code: AccountAttributeValue["code"];
  name: AccountAttributeValue["name"];
  parent_code: string | null;
  attribute_code: string;
}

export interface ExportAccountAttributeValueArray {
  ExportAccountAttributeValue: ExportAccountAttributeValue[];
}

export interface ExportDimension
  extends Pick<Dimension, "code" | "name" | "description"> {}

export interface ExportDimensionValue {
  code: DimensionValue["code"];
  name: DimensionValue["name"];
  parent_code: string | null;
  dimension_code: string;
}

export interface ExportDimensionValueArray {
  ExportDimensionValue: ExportDimensionValue[];
}

export interface ExportDimensionValueAttribute
  extends Pick<DimensionValueAttribute, "code" | "name" | "description"> {}

export interface ExportLevel
  extends Pick<Level, "code" | "name" | "description"> {
  parent: string | null;
  currency: string;
}

export interface ExportLevelAttribute
  extends Pick<LevelAttribute, "code" | "name" | "description"> {}

export interface ExportLevelAttributeValue {
  code: LevelAttributeValue["code"];
  name: LevelAttributeValue["name"];
  parent_code: string | null;
  attribute_code: string;
}

export interface ExportLevelAttributeValueArray {
  ExportLevelAttributeValue: ExportLevelAttributeValue[];
}

export interface ExportVersion
  extends Pick<
    Version,
    "code" | "name" | "begin" | "end" | "status" | "startOfPlan" | "description"
  > {}

export interface importValidationResult {
  error: boolean;
  message: string;
}

export interface InstanceWithClient extends Instance {
  client: Client;
}

export interface LevelAttributeValueWithPath extends LevelAttributeValue {
  path: string[];
}

export interface LevelWithAttributesAndValues extends Level {
  AttributeAndValues: LevelAttributeAndValue[];
}

export interface LevelWithCurrencyPathAndParent extends Level {
  currency: Currency;
  path: string[];
  parent: Level | null;
}

export interface LevelWithCurrencyAndParent extends Level {
  currency: Currency;
  parent: Level | null;
}

export interface LevelWithCurrencyParentChildLevelsAttributesAndValues
  extends Level {
  currency?: Currency;
  parent?: Level | null;
  childLevels?: Level[];
  AttributeAndValues?: LevelAttributeAndValue[];
}

export interface LevelAttributeValueWithPathAndParent
  extends LevelAttributeValue {
  path: string[];
  parent: LevelAttributeValue | null;
}

export interface LoaderColumnMappingType {
  tableType: string;
  tableId: string;
  tableCode: string;
  tableName: string;
  columnMappings: ({
    levelId: string;
    accountId: string;
    value: string | number | null;
  } & Record<string, any>)[];
}

export interface CubeAccount {
  id: string;
  code: string;
  name: string;
  cubeId: string;
  parentId: string | undefined;
  accountId: string;
  accountTypeTag: AccountTypeTag;
}

export interface CubeAccountStructureWithAccount {
  id: string;
  isRoot: boolean;
  cubeId: string;
  parentId: string | null;
  accountId: string;
  account: {
    id: string;
    code: string;
    name: string;
    accountType?: AccountType;
    accountTypeTag: AccountTypeTag;
  };
}

export interface CubeAccountStructureWithCodeAndName
  extends CubeAccountStructure {
  code: string;
  name: string;
  accountTypeTag: AccountTypeTag;
}

export interface CubeDimensionWithDimensionValuesData {
  id: string;
  name: string;
  code: string;
  dimensionValueName: string;
  dimensionValueId: string;
  dimensionValueCode: string;
}

export interface CubeLevelStructureWithLevel extends CubeLevelStructure {
  level: {
    id: string;
    code: string;
    name: string;
  };
}

export interface CubeObjForGrid {
  name: string;
  dimensionality: string[];
  dimensions: Dimension[];
}

export interface CubeVersionData {
  timespanColumns: { headerName: string; monthNumber: number; year: number }[];
  availableVersions: Version[];
  selectedVersion: Version | null;
}

export interface Grid {
  _id?: string;
  name: string;
  code: string;
  id: string;
  status: string;
  type: GridType;
  description: string | null;
  lastModified: Date;
  createdAt: Date;
}

export interface SourceTableColumnProperty {
  columnKey: string;
  dataType: string;
  excludeFromImport: boolean;
}

export interface TreeSelectDataNode {
  value: string;
  label: string;
  disabled?: boolean;
  code?: string;
  children?: TreeSelectDataNode[];
}

export interface UserExtended extends User {
  client: Client;
  country: Country;
}

export interface ValueLabelType {
  value: string;
  label: string;
}

export interface ValueLabelTypeWithChildren {
  value: string;
  label: string;
  children?: ValueLabelTypeWithChildren[];
}
