/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var zeroTo = require( '@stdlib/array-zero-to' );
var slice = require( './../lib' );

var x = zeroTo( 6, 'float64' );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

var s = slice( x );
console.log( s );
// => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]

s = slice( x, 0, 4 );
console.log( s );
// => <Float64Array>[ 0.0, 1.0, 2.0, 3.0 ]

s = slice( x, 2 );
console.log( s );
// => <Float64Array>[ 2.0, 3.0, 4.0, 5.0 ]

s = slice( x, 2, 4 );
console.log( s );
// => <Float64Array>[ 2.0, 3.0 ]
