/** @format */

export const regexCodeError = `You can only use lowercase letters, numbers, hyphens (-), and underscores (_) in code`;
export const regexNameError = `Only letters, numbers, spaces, hyphens (-), and underscores (_) are allowed`;
export const regexNumericError = `Only numbers are allowed`;

// used for validation of codes
export const minCharacters = 2;
export const maxCharacters = 85;

// This will match any string that contains only lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).
export const regexNoSpecialCharsOrUppercase = /^[a-z0-9_-]*$/;

// This will match any string that contains only lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).
export const regexNamePattern = /^[a-zA-Z0-9\s-_&]+$/;

// This will match any string that contains letters (both lowercase a-z and uppercase A-Z), numbers (0-9), underscores (_), and hyphens (-).
export const regexNoSpecialCharsForName = /^[a-zA-Z0-9_-]*$/;

// Allows which matches alphanumeric characters and underscore:
export const regexNoSpecialCharsAnyCase = /^\w+$/;

// only allow numbers
export const regexOnlyNumbers = /^[0-9]*$/;

export const validExportFileTypes = ["csv", "json"];
