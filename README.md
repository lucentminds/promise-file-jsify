# promise-jsify
Convert html files into JavaScript text strings with promise flow control.


## Installation

Install by npm.

```shell
npm install git+https://github.com/lucentminds/promise-file-jsify.git
```

### Useage:

```js
var jsify = require( 'promise-file-jsify' );

jsify( './test1.txt', true )
.then(function( cResult ){

    console.log( cResult );

})
.fail(function( err ){

    console.log( 'Oops!' );

});
```

## Examples

Single file.

```js
jsify( './test1.txt' )
.then(function( cResult ){

    console.log( 'Result:', cResult );

})
.fail(function( err ){

    console.log( 'Oops!' );

});
```

Multiple files.

```js
jsify( [ './test1.txt', './test2.txt' ] )
.then(function( aResults ){

    console.log( aResults );

})
.fail(function( err ){

    console.log( 'Oops!' );

});
```