var jsify = require( '../promise-file-jsify' );


// Simple jsify.
jsify( './test/test.htm' )
.then(function( cResult ){
    console.log( 'Single' );
    console.log( cResult );
    console.log( ' ' );
}).done();

// Minify
jsify( './test/test.htm', true )
.then(function( cResult ){
    console.log( 'Single minify' );
    console.log( cResult );
    console.log( ' ' );
}).done();


// jsify list of files
jsify( [ './test/test.htm', './test/test.htm' ] )
.then(function( cResult ){
    console.log( 'List' );
    console.log( cResult );
    console.log( ' ' );
}).done();

// jsify list of files with minify
jsify( [ './test/test.htm', './test/test.htm' ], true )
.then(function( cResult ){
    console.log( 'List minify' );
    console.log( cResult );
    console.log( ' ' );
}).done();