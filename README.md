<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# slice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a shallow copy of a portion of an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-slice
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var slice = require( '@stdlib/array-slice' );
```

#### slice( x\[, start\[, end]] )

Returns a shallow copy of a portion of an array.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = slice( x );
// returns [ 1, 2, 3, 4, 5, 6 ]

var bool = ( out === x );
// returns false
```

The function accepts the following arguments:

-   **x**: input array.
-   **start**: starting index (inclusive). Default: `0`.
-   **end**: ending index (exclusive). Default: `x.length`.

By default, the function returns a shallow copy beginning from the first element of the provided input array. To begin copying from an alternative element, provide a starting index (inclusive).

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = slice( x, 2 );
// returns [ 3, 4, 5, 6 ]
```

By default, the function copies through the end of the provided input array. To copy up until a specific element, provide an ending index (exclusive).

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var out = slice( x, 1, 4 );
// returns [ 2, 3, 4 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `slice` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.slice( start, end )
    ```

-   If provided an array-like object without a `slice` method, the function copies input array elements to a new generic array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var zeroTo = require( '@stdlib/array-zero-to' );
var slice = require( '@stdlib/array-slice' );

var x = zeroTo( 6, 'float64' );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var s = slice( x );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

s = slice( x, 0, 4 );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0 ]

s = slice( x, 2 );
// returns <Float64Array>[ 2.0, 3.0, 4.0, 5.0 ]

s = slice( x, 2, 4 );
// returns <Float64Array>[ 2.0, 3.0 ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-take`][@stdlib/array/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-slice.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-slice

[test-image]: https://github.com/stdlib-js/array-slice/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-slice/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-slice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-slice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-slice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-slice/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-slice/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-slice/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-slice/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-slice/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-slice/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-slice/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-slice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-slice/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/take]: https://github.com/stdlib-js/array-take

<!-- </related-links> -->

</section>

<!-- /.links -->
