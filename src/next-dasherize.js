(function () {

  var global = global || window || self || this;

  var nx = global.nx || require('next-js-core2');
  var dasherizeRE1 = /::/g,
  dasherizeRE2 = /([A-Z]+)([A-Z][a-z])/g,
  dasherizeRE3 = /([a-z\d])([A-Z])/g,
  dasherizeRE4 = /_/g,
  dasherizeREPLACER = '$1_$2';

  nx.dasherize = function (inStr) {
    return inStr.replace(dasherizeRE1, '/')
      .replace(dasherizeRE2, dasherizeREPLACER)
      .replace(dasherizeRE3, dasherizeREPLACER)
      .replace(dasherizeRE4, '-')
      .toLowerCase()
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.dasherize;
  }

}());
