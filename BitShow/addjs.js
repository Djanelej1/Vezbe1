function getShows() {
    $.ajax({
        url: '  http://api.tvmaze.com/shows',
        method: 'GET'
    }).done(function (data) {
        
        
var dataNames = rangeNames(data);
        console.log(dataNames);
 var dataImages =  rangeImages(data); 
 console.log(dataImages);     
    }) .fail(function(dataAll){
        console.log(dataAll);
        alert(dataAll.message);
    })
  
  
  
 

  $(dataImages).each(function( index ) {
    $('#column-picture').append($('<img>').attr("src", dataImages[index])).append($('<p>'+`${dataNames[index]}`+'</p>'));
  });
        
    
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