"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredColumnsForAccountImport = exports.accountTypeTagDisplayMap = exports.balanceSheetCodes = exports.incomeStmtCodes = exports.containsSalaryInfoToggleDescription = exports.actualsToggleDescription = exports.timeStratum = exports.displayAs = exports.actualsBy = exports.plannedBy = void 0;
exports.plannedBy = [
    { value: "Balance", label: "Balance" },
    { value: "Delta", label: "Delta" },
];
exports.actualsBy = [
    { value: "Balance", label: "Balance" },
    { value: "Delta", label: "Delta" },
];
exports.displayAs = [
    { value: "Currency", label: "Currency" },
    { value: "Decimal", label: "Decimal" },
    { value: "Percentage", label: "Percentage" },
];
exports.timeStratum = [
    { value: "Week", label: "Week" },
    { value: "Month", label: "Month" },
];
exports.actualsToggleDescription = "This option enables Actuals to flow through into this account.  Disabling this will prevent Actuals to overlay";
exports.containsSalaryInfoToggleDescription = "This option enables security features related to data driven by salary level specific modeling";
exports.incomeStmtCodes = [
    "income",
    "cogs",
    "expense",
    "non_op_income",
    "non_op_expense",
];
exports.balanceSheetCodes = ["assets", "liabilities", "equity"];
exports.accountTypeTagDisplayMap = {
    pnl: "P&L",
    balance_sheet: "Balance Sheet",
    custom: "Custom",
    cube: "Cube",
};
exports.requiredColumnsForAccountImport = [
    "name",
    "code",
    "parent",
    "description",
    "account_type",
    "account_type_tag",
    "display_as",
    "contains_salary_info",
];
//# sourceMappingURL=accounts.js.map