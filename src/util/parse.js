import parser from 'fast-xml-parser';

/**
 * Parse XML -> Obj helper function to use with requests to GG REST API
 *
 * @param {string} body - Response XML to parse
 * @param {string} property - Optional property to target
 * @return {object} Response as object
 *
 * @example
 *
 *     parse(loginData, 'LoginMinigameResponse')
 */

export default (body, property = null) => {
  const result = parser.parse(body, {
    parseNodeValue: false
  });
  return property ? result[property] : result;
};
