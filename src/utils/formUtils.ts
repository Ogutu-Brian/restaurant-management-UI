/**
 * @description validates whether all fields in the input field have been filled
 * @param {any} fieldData
 * @returns {boolean}
 */
export const hasAllFieldsFilled = (fieldData: any): boolean => {
  return !Object.values(fieldData).some((value) => !value);
};
