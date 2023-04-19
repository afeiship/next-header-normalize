# next-header-normalize
> Normalize http header.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-header-normalize
```

## usage
```js
import '@jswork/next-header-normalize';

const header = {
  'AcceptLanguage': 'zh-CN',
  'contentLength': 521,
  'X-Powered-By': null,
  'Content-Type': 'application/json; charset=utf-8',
  'cache-control': 'public, max-age=31536000',
  'authorization': 'Bearer xxx.my-token+'
};

const result = nx.headerNormalize(header, { lowerCase: true, compact: true });

/*
{
  'accept-language': 'zh-CN',
  'content-length': 521,
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'public, max-age=31536000',
  'authorization': 'Bearer xxx.my-token+'
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-header-normalize/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-header-normalize
[version-url]: https://npmjs.org/package/@jswork/next-header-normalize

[license-image]: https://img.shields.io/npm/l/@jswork/next-header-normalize
[license-url]: https://github.com/afeiship/next-header-normalize/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-header-normalize
[size-url]: https://github.com/afeiship/next-header-normalize/blob/master/dist/next-header-normalize.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-header-normalize
[download-url]: https://www.npmjs.com/package/@jswork/next-header-normalize