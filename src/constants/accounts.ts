/** @format */

export const plannedBy = [
  { value: "balance", label: "Balance" },
  { value: "delta", label: "Delta" },
];

export const actualsBy = [
  { value: "balance", label: "Balance" },
  { value: "delta", label: "Delta" },
];

export const displayAs = [
  { value: "currency", label: "Currency" },
  { value: "decimal", label: "Decimal" },
  { value: "percentage", label: "Percentage" },
];

export const timeStratum = [
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

export const actualsToggleDescription: string =
  "This option enables Actuals to flow through into this account.  Disabling this will prevent Actuals to overlay";

export const containsSalaryInfoToggleDescription: string =
  "This option enables security features related to data driven by salary level specific modeling";

export const rootAccountCodes = [
  "gl_accounts",
  "assets",
  "liabilities",
  "equity",
  "income",
  "expense",
  "cogs",
  "non_op_income",
  "non_op_expense",
  "custom_accounts",
];

export const incomeStmtCodes = [
  "income",
  "cogs",
  "expense",
  "non_op_income",
  "non_op_expense",
];

export const balanceSheetCodes = ["assets", "liabilities", "equity"];

export const accountTypeTagDisplayMap = {
  pnl: "P&L",
  balance_sheet: "Balance Sheet",
  custom: "Custom",
  cube: "Cube",
};

export const requiredColumnsForAccountImport = [
  "name",
  "code",
  "parent",
  "description",
  "account_type",
  "account_type_tag",
  "display_as",
  "contains_salary_info",
];
