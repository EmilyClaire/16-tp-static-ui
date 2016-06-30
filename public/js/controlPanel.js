$( document ).ready( function() {


  createOptions( '#hotel-choices', hotels )
  createOptions( '#restaurant-choices', restaurants )
  createOptions( '#activity-choices', activities )

  logSelection( '.hotel-actions', '#hotel-choices')
  logSelection( '.restaurant-actions', '#restaurant-choices')
  logSelection( '.activity-actions', '#activity-choices')

});

function createOptions( selectorID, array ){
  $( array ).each( function() {
    $( selectorID ).append( $( '<option>' ).attr( 'value', this.id )
                           .text( this.name ) )
  })
}

function logSelection(sectionClass, selectionID){
  $( sectionClass ).find( 'button' ).click( function (){
    console.log($( selectionID ).find(':selected').val());
  })
}
