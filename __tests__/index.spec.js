(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.headerNormalize lowerCase/compact options(1/0) composite case', function () {
      var header = {
        'AcceptLanguage': 'zh-CN',
        'contentLength': 521,
        'X-Powered-By': null,
        'Content-Type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=31536000',
        'authorization': 'Bearer xxx.my-token+'
      };

      var result1 = nx.headerNormalize(header, { lowerCase: true, compact: true });
      var result2 = nx.headerNormalize(header, { lowerCase: true, compact: false });
      var result3 = nx.headerNormalize(header, { lowerCase: false, compact: true });
      var result4 = nx.headerNormalize(header, { lowerCase: false, compact: false });

      expect(result1).toEqual({
        'accept-language': 'zh-CN',
        'content-length': 521,
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=31536000',
        'authorization': 'Bearer xxx.my-token+'
      });

      expect(result2).toEqual({
        'accept-language': 'zh-CN',
        'content-length': 521,
        'x-powered-by': null,
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=31536000',
        'authorization': 'Bearer xxx.my-token+'
      });

      expect(result3).toEqual({
        'Accept-Language': 'zh-CN',
        'Content-Length': 521,
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=31536000',
        'Authorization': 'Bearer xxx.my-token+'
      });

      expect(result4).toEqual({
        'Accept-Language': 'zh-CN',
        'Content-Length': 521,
        'X-Powered-By': null,
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=31536000',
        'Authorization': 'Bearer xxx.my-token+'
      });
    });
  });
})();
