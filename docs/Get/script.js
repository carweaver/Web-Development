$.get( " https://data.fixer.io/api/latest", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
  console.log(data)
});