var searchField= $("select-movies").children();
var endpoint = 'https://api.tvmaze.com/search/shows'


$(document).ready(function () {

    function getShows() {
        $.ajax({
            url: '  http://api.tvmaze.com/shows',
            method: 'GET'
        }).done(function (data) {
            
            
    var dataNames = rangeNames(data);
            console.log(dataNames);
     var dataImages =  rangeImages(data); 
     console.log(dataImages);  
     $(dataImages).each(function( index ) {
        $('#column-picture').append($('<div class="item"><img src= '+`${dataImages[index]}`+'>'+'<h5>'+`${dataNames[index]}`+'</h5></div>'))
      });
        }) .fail(function(data){
            console.log(data);
            alert(data.message);
        })
      

      
            
        
    }; getShows()
    
    
    function rangeNames(list){
        var names =[];
        for (var i=1; i<=50; i++){
           names.push(list[i].name); 
           
          } return names;
    }
    function rangeImages(list){
        var images =[];
        for (var i=1; i<=50; i++){
           images.push(list[i].image.medium); 
           
          } return images;
    } 


$("#input-text").on('keypress',function(e) {
    if(e.which == 13) {
        
      
            var input = $('#input-text').val(); 
        console.log(input)
        var searchable = '?q=' + input;
        $.ajax({
            url: endpoint + searchable,
            method: 'GET'
        }).done(function (dataAll) {
            console.log(dataAll) 
            var names10 =rangeNamesForDropdown(dataAll);
            function rangeNamesForDropdown(list){
                var names10=[];
                for (var i=0; i<10; i++){
                   names10.push(list[i].show.name);
                }return names10;
              }
         $(names10).each(function (index){
            $(".dropdown-menu").append('<li><a>'+`${names10[index]}` +'</a><hr></li>');
               

         }) 
    }).fail(function(dataAll){
        console.log(dataAll);
        alert(dataAll.message);
    })
   

  
}
})
function clearInput() {
    input.val("");
    names10 =[];
    
}
var input = $('#input-text');
input.on("click",clearInput);
});
