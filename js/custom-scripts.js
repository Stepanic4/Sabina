var options = [];
 
$( '.dropdown-menu a' ).on( 'click', function( event ) {
 
   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;
 
   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      $inp.prop( 'checked', false );
   } else {
      options.push( val );
      $inp.prop( 'checked', true );
   }
 
   $target.blur();
 
   return false;
});