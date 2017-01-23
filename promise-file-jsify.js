/**
 * 01-23-2017
 * Convert html files into JavaScript text strings with promise flow control.
 * ~~ Scott Johnson
 */


/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */
/* global JSON:false */

var Q = require( 'q' );
var read = require( 'promise-file-read' );
var jsify = module.exports = function( aSrc, lMinify ){ // jshint ignore:line
    var deferred = Q.defer();
    var cSrcType = typeof aSrc;

    switch( true ) {
    case ( cSrcType === 'string' ):
        aSrc = [aSrc];
        break;

    case Array.isArray( aSrc ):
        break;

    default:
        deferred.reject( 'Invalid source path argument: '.concat( aSrc ) );
        return deferred.promise;

    }// /switch()

    // Determines if we should also minify the content.
    lMinify = lMinify || false;


    read( aSrc )
    .then(function( aContent ){
        var i, l = aContent.length;

        // Loop over each string.
        for( i = 0; i < l; i++ ){

            if( lMinify ){
                aContent[ i ] = minify( aContent[ i ] );
            }
            else{
                aContent[ i ] = stringify( aContent[ i ] );
            }
        }// /for()



        if( cSrcType === 'string' )  {
            deferred.resolve( aContent[0] );
        }
        else {
            deferred.resolve( aContent );
        }

    }).done();



    return deferred.promise;
};// /jsify()


var stringify = function( cText ){    
  return cText.replace(/\"/g, '\\"').replace(/\n/g, '\\n').replace(/\s$/, '').replace(/\s+/g, ' ');
};// /stringify()



var minify = function( cContent ){
	cContent = cContent.replace( /\t+/g, ' ' );
	cContent = cContent.replace( /\r\n|\n/g, ' ' );
	cContent = cContent.replace( /\s+/g, ' ' );
	return cContent;
};// /minify()