import nx from '@jswork/next';
import '@jswork/next-kebab-case';
import '@jswork/next-capitalize';

const defaults = { lowerCase: false, compact: false };
const CHAR_DASH = '-';

nx.headerNormalize = function (inObject, inOptions) {
  const options = nx.mix(null, defaults, inOptions);
  const result = {};
  nx.forIn(inObject, function (key, value) {
    const dashlized = nx.kebabCase(key);
    const str = dashlized.split(CHAR_DASH).map(nx.capitalize).join(CHAR_DASH);
    const newKey = options.lowerCase ? str.toLowerCase() : str;
    (!options.compact || (options.compact && value != null)) && (result[newKey] = value);
  });
  return result;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.headerNormalize;
}

export default nx.headerNormalize;
