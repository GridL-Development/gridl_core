/** @format */

export const plannedBy = [
  { value: "Balance", label: "Balance" },
  { value: "Delta", label: "Delta" },
];

export const actualsBy = [
  { value: "Balance", label: "Balance" },
  { value: "Delta", label: "Delta" },
];

export const displayAs = [
  { value: "Currency", label: "Currency" },
  { value: "Decimal", label: "Decimal" },
  { value: "Percentage", label: "Percentage" },
];

export const timeStratum = [
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
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
