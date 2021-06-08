(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxKebabCase = nx.kebabCase || require('@jswork/next-kebab-case');
  var nxCapitalize = nx.capitalize || require('@jswork/next-capitalize');
  var defaults = { lowerCase: false, compact: false };
  var CHAR_DASH = '-';

  nx.headerNormalize = function (inObject, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var result = {};
    nx.forIn(inObject, function (key, value) {
      var dashlized = nxKebabCase(key);
      var str = dashlized.split(CHAR_DASH).map(nxCapitalize).join(CHAR_DASH);
      var newKey = options.lowerCase ? str.toLowerCase() : str;
      (!options.compact || (options.compact && value != null)) && (result[newKey] = value);
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.headerNormalize;
  }
})();
