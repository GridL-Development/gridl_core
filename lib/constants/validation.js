"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validExportFileTypes = exports.regexOnlyNumbers = exports.regexNoSpecialCharsAnyCase = exports.regexNoSpecialCharsForName = exports.regexNamePattern = exports.regexNoSpecialCharsOrUppercase = exports.maxCharacters = exports.minCharacters = exports.regexNumericError = exports.regexNameError = exports.regexCodeError = void 0;
exports.regexCodeError = `You can only use lowercase letters, numbers, hyphens (-), and underscores (_) in code`;
exports.regexNameError = `Only letters, numbers, spaces, hyphens (-), and underscores (_) are allowed`;
exports.regexNumericError = `Only numbers are allowed`;
// used for validation of codes
exports.minCharacters = 2;
exports.maxCharacters = 120;
// This will match any string that contains only lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).
exports.regexNoSpecialCharsOrUppercase = /^[a-z0-9_-]*$/;
// This will match any string that contains only lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).
exports.regexNamePattern = /^[a-zA-Z0-9\s-_&]+$/;
// This will match any string that contains letters (both lowercase a-z and uppercase A-Z), numbers (0-9), underscores (_), and hyphens (-).
exports.regexNoSpecialCharsForName = /^[a-zA-Z0-9_-]*$/;
// Allows which matches alphanumeric characters and underscore:
exports.regexNoSpecialCharsAnyCase = /^\w+$/;
// only allow numbers
exports.regexOnlyNumbers = /^[0-9]*$/;
exports.validExportFileTypes = ["csv", "json"];
//# sourceMappingURL=validation.js.map