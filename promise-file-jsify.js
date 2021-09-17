/**
 * 01-23-2017
 * Convert html files into JavaScript text strings with promise flow control.
 * ~~ Scott Johnson
 */

const read = require( 'promise-file-read' );
const jsify = function( aSrc, lMinify ){
    return new Promise(function( resolve, reject ){
        var cSrcType = typeof aSrc;

        switch( true ) {
        case ( cSrcType === 'string' ):
            aSrc = [aSrc];
            break;

        case Array.isArray( aSrc ):
            break;

        default:
            return reject( 'Invalid source path argument: '.concat( aSrc ) );

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
                resolve( aContent[0] );
            }
            else {
                resolve( aContent );
            }

        });
    });
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

module.exports = jsify;
