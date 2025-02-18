/** @format */

import {
  Account,
  AccountAttribute,
  AccountAttributeValue,
  Client,
  Currency,
  CurrencyIsoCode,
  DataSource,
  DataSourceCredential,
  DataSourceLoader,
  DataSourceTask,
  Dimension,
  DimensionValue,
  DimensionValueAttribute,
  DimensionValueAttributeValue,
  Instance,
  Level,
  LevelAttribute,
  LevelAttributeValue,
  Model,
  Table,
  User,
  Version,
} from "@prisma/client";
import {
  AccountAttributeValueWithPath,
  AccountWithAttributesAndValues,
  AccountWithPathAndParent,
  ClientWithCountry,
  CurrencyWithCurrencyIsoCode,
  CurrencyWithOptionalParts,
  DataSourceLoaderMappingTable,
  DimensionValueAttributeValueExtended,
  DimensionValueExtended,
  DimensionValueWithAttributesAndValues,
  ExportAccount,
  ExportAccountAttribute,
  ExportDimension,
  ExportDimensionValueAttribute,
  ExportLevel,
  ExportLevelAttribute,
  ExportVersion,
  InstanceWithClient,
  LevelAttributeValueWithPath,
  LevelAttributeValueWithPathAndParent,
  LevelWithCurrencyParentChildLevelsAttributesAndValues,
  LevelWithCurrencyPathAndParent,
  LoaderColumnMappingType,
  ModelAccountStructureWithAccount,
  SourceTableColumnProperty,
  TreeSelectDataNode,
  UserExtended,
  ValueLabelType,
  ValueLabelTypeWithChildren,
} from "./commonTypes";

export interface APIResponseType {
  error: boolean;
  message: string;
}

export interface APIResponseAccount extends APIResponseType {
  data: Account[];
}

export interface APIResponseAccountAttribute extends APIResponseType {
  data: AccountAttribute;
}

export interface APIResponseAccountAttributeArray extends APIResponseType {
  data: AccountAttribute[];
}

export interface APIResponseAccountAttributeValue extends APIResponseType {
  data: AccountAttributeValue;
}

export interface APIResponseAccountAttributeValueArray extends APIResponseType {
  data: AccountAttributeValue[];
}

export interface APIResponseAccountAttributeValueWithPath
  extends APIResponseType {
  data: AccountAttributeValueWithPath[];
}

export interface APIResponseAccountWithAttributesAndValues
  extends APIResponseType {
  data: AccountWithAttributesAndValues;
}

export interface APIResponseAccountWithAttributesAndValuesArray
  extends APIResponseType {
  data: AccountWithAttributesAndValues[];
}

export interface APIResponseAccountWithPathAndParent extends APIResponseType {
  data: AccountWithPathAndParent[];
}

export interface APIResponseBoolean extends APIResponseType {
  data: boolean;
}

export interface APIResponseClient extends APIResponseType {
  data: Client;
}

export interface APIResponseClientArray extends APIResponseType {
  data: Client[];
}

export interface APIResponseClientWithCountry extends APIResponseType {
  data: ClientWithCountry;
}

export interface APIResponseClientWithCountryArray extends APIResponseType {
  data: ClientWithCountry[];
}

export interface APIResponseCurrency extends APIResponseType {
  data: Currency;
}

export interface APIResponseCurrencyArray extends APIResponseType {
  data: Currency[];
}

export interface APIResponseCurrencyWithCurrencyIsoCode
  extends APIResponseType {
  data: CurrencyWithCurrencyIsoCode;
}

export interface APIResponseCurrencyWithCurrencyIsoCodeArray
  extends APIResponseType {
  data: CurrencyWithCurrencyIsoCode[];
}

export interface APIResponseCurrencyWithOptionalParts extends APIResponseType {
  data: CurrencyWithOptionalParts[];
}

export interface APIResponseDatasource extends APIResponseType {
  data: DataSource;
}

export interface APIResponseDatasourceArray extends APIResponseType {
  data: DataSource[];
}

export interface APIResponseDatasourceCredential extends APIResponseType {
  data: DataSourceCredential;
}

export interface APIResponseDatasourceCredentialArray extends APIResponseType {
  data: DataSourceCredential[];
}

export interface APIResponseDataSourceLoaderMappingTable
  extends APIResponseType {
  data: DataSourceLoaderMappingTable;
}

export interface APIResponseDataAny extends APIResponseType {
  data: any[];
}

export interface APIResponseDatasourceLoader extends APIResponseType {
  data: DataSourceLoader;
}

export interface APIResponseDatasourceLoaderArray extends APIResponseType {
  data: DataSourceLoader[];
}

export interface APIResponseDatasourceTask extends APIResponseType {
  data: DataSourceTask;
}

export interface APIResponseDatasourceTaskArray extends APIResponseType {
  data: DataSourceTask[];
}

export interface APIResponseDimension extends APIResponseType {
  data: Dimension;
}

export interface APIResponseDimensionArray extends APIResponseType {
  data: Dimension[];
}

export interface APIResponseDimensionValue extends APIResponseType {
  data: DimensionValue;
}

export interface APIResponseDimensionValueAttribute extends APIResponseType {
  data: DimensionValueAttribute;
}

export interface APIResponseDimensionValueAttributeValue
  extends APIResponseType {
  data: DimensionValueAttributeValue;
}

export interface APIResponseDimensionValueAttributeArray
  extends APIResponseType {
  data: DimensionValueAttribute[];
}

export interface APIResponseDimensionValueAttributeValueExtended
  extends APIResponseType {
  data: DimensionValueAttributeValueExtended;
}

export interface APIResponseDimensionValueAttributeValueExtendedArray
  extends APIResponseType {
  data: DimensionValueAttributeValueExtended[];
}

export interface APIResponseDimensionValueWithAttributesAndValues
  extends APIResponseType {
  data: DimensionValueWithAttributesAndValues;
}

export interface APIResponseDimensionValueExtended extends APIResponseType {
  data: DimensionValueExtended;
}

export interface APIResponseDimensionValueExtendedArray
  extends APIResponseType {
  data: DimensionValueExtended[];
}

export interface APIResponseExportAccount extends APIResponseType {
  data: ExportAccount;
}

export interface APIResponseExportAccountArray extends APIResponseType {
  data: ExportAccount[];
}

export interface APIResponseExportAccountAttribute extends APIResponseType {
  data: ExportAccountAttribute;
}

export interface APIResponseExportAccountAttributeArray
  extends APIResponseType {
  data: ExportAccountAttribute[];
}

export interface APIResponseExportDimension extends APIResponseType {
  data: ExportDimension;
}

export interface APIResponseExportDimensionArray extends APIResponseType {
  data: ExportDimension[];
}

export interface APIResponseExportDimensionValueAttribute
  extends APIResponseType {
  data: ExportDimensionValueAttribute;
}

export interface APIResponseExportDimensionValueAttributeArray
  extends APIResponseType {
  data: ExportDimensionValueAttribute[];
}

export interface APIResponseExportLevelAttribute extends APIResponseType {
  data: ExportLevelAttribute;
}

export interface APIResponseExportLevelAttributeArray extends APIResponseType {
  data: ExportLevelAttribute[];
}

export interface APIResponseExportVersion extends APIResponseType {
  data: ExportVersion;
}

export interface APIResponseExportVersionArray extends APIResponseType {
  data: ExportVersion[];
}

export interface APIResponseInstance extends APIResponseType {
  data: Instance;
}

export interface APIResponseInstanceArray extends APIResponseType {
  data: Instance[];
}

export interface APIResponseInstanceWithClientArray extends APIResponseType {
  data: InstanceWithClient[];
}

export interface APIResponseIsoCurrency extends APIResponseType {
  data: CurrencyIsoCode;
}

export interface APIResponseIsoCurrencyArray extends APIResponseType {
  data: CurrencyIsoCode[];
}

export interface APIResponseLevel extends APIResponseType {
  data: Level;
}

export interface APIResponseLevelAttribute extends APIResponseType {
  data: LevelAttribute;
}

export interface APIResponseLevelAttributeArray extends APIResponseType {
  data: LevelAttribute[];
}

export interface APIResponseLevelAttributeValue extends APIResponseType {
  data: LevelAttributeValue;
}

export interface APIResponseLevelAttributeValueWithPath
  extends APIResponseType {
  data: LevelAttributeValueWithPath[];
}

export interface APIResponseLevelAttributeValueWithPathAndParent
  extends APIResponseType {
  data: LevelAttributeValueWithPathAndParent[];
}

export interface APIResponseLevelWithCurrencyPathAndParent
  extends APIResponseType {
  data: LevelWithCurrencyPathAndParent;
}

export interface APIResponseLevelWithCurrencyPathAndParentArray
  extends APIResponseType {
  data: LevelWithCurrencyPathAndParent[];
}

export interface APIResponseLevelWithCurrencyParentChildLevelsAttributesAndValues
  extends APIResponseType {
  data: LevelWithCurrencyParentChildLevelsAttributesAndValues;
}

export interface APIResponseExportLevel extends APIResponseType {
  data: ExportLevel[];
}

export interface APIResponseLoaderArray extends APIResponseType {
  data: DataSourceLoader[];
}

export interface APIResponseLoaderColumnMappingType extends APIResponseType {
  data: LoaderColumnMappingType;
}

export interface APIResponseModel extends APIResponseType {
  data: Model;
}

export interface APIResponseModelArray extends APIResponseType {
  data: Model[];
}

export interface APIResponseModelData extends APIResponseType {
  data: any;
}

export interface APIResponseModelAccountStructureWithAccount
  extends APIResponseType {
  data: ModelAccountStructureWithAccount;
}

export interface APIResponseModelAccountStructureWithAccountArray
  extends APIResponseType {
  data: ModelAccountStructureWithAccount[];
}

export interface APIResponseModelArray extends APIResponseType {
  data: Model[];
}

export interface APIResponseSheets extends APIResponseType {
  data: {
    models: Model[];
    tables: Table[];
  };
}

export interface APIResponseTable extends APIResponseType {
  data: Table;
}

export interface APIResponseTreeSelectDataNode extends APIResponseType {
  data: TreeSelectDataNode[];
}

export interface APIResponseSourceTableColumnPropertyArray
  extends APIResponseType {
  data: SourceTableColumnProperty[];
}

export interface APIResponseTable extends APIResponseType {
  data: Table;
}

export interface APIResponseUser extends APIResponseType {
  data: User;
}

export interface APIResponseUserArray extends APIResponseType {
  data: User[];
}

export interface APIResponseUserExtended extends APIResponseType {
  data: UserExtended;
}

export interface APIResponseUserExtendedArray extends APIResponseType {
  data: UserExtended[];
}

export interface APIResponseValidateEmail extends APIResponseType {
  data: boolean;
}

export interface APIResponseVersionArray extends APIResponseType {
  data: Version[];
}

export interface APIResponseVersion extends APIResponseType {
  data: Version;
}

export interface APIResponseValueLabelTypeArray extends APIResponseType {
  data: ValueLabelType[];
}

export interface APIResponseValueLabelTypeWithChildrenArray
  extends APIResponseType {
  data: ValueLabelTypeWithChildren[];
}
