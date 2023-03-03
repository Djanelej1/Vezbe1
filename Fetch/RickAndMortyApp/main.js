import  './pagination.js'
const urlPage ='https://rickandmortyapi.com/api/character?page=';
const url = 'https://rickandmortyapi.com/api/character';

$(document).ready(function(){

function fetchAll(){
  fetch(url)
  .then (function(response){
    return response.json();
  }).then (function (response2){
    console.log();
    var numberOfItems = response2.results.length;
    var limitPerPage = 20;
    var totalPages = 42;
    $(".pagination").append("<li id='current-page' class= active'><a href='javascript:void(0)'>" + 1 + "</a></li>");
    for (var i = 2; i <= totalPages; i++) {
      $(".pagination").append("<li id='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); 
    }
    $(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");
    $("#current-page").on("click", function() {
      // Check if page number that was clicked on is the current page that is being displayed
      if ($(this).hasClass('active')) {
        return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
      } else {
        var currentPage = $(this).index(); // Get the current page number
        $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
        $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
        $("#page .list-group").hide(); // Hide all items in loop, this case, all the list groups
        var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on
    
        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
          $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
        }
      }
    
    });
    console.log(numberOfItems);
    response2.results.forEach(results => {
             var card = $(`<div class='col-3'><div class= 'card'><img src='${results.image}'><div class='card-body'>
              <h5 class='card-title'> ${results.name}</h5>
               <div class ="like-button"><input type='button'value ='Like'> <i class =class="fa fa-thumbs-up"></i>  </div>
               
              </div>
               </div>`);
               $('#picture-container').append(card);
              }); 
  })
} fetchAll();
  
// function fetchPagebyPage(index){
//       fetch(urlPage +index)
//       .then(function (response){
//         return response.json();
//       }).then(function (jsObject) {
//         console.log(jsObject.results)
//         jsObject.results.forEach(results => {
//          var card = $(`<div class='col-3'><div class= 'card'><img src='${results.image}'><div class='card-body'>
//          <h5 class='card-title'> ${results.name}</h5>
//          <div class ="like-button"><input type='button'value ='Like'> <i class =class="fa fa-thumbs-up"></i>  </div>
         
//          </div>
//          </div>`);
//          $('#picture-container').append(card);
//         });    
     
//              })

    
// };  ;
  
// id;
   
 
});
