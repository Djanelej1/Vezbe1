$(document).ready(function(){

$("#btn").on("click", function(){
    
const url = 'https://api.chucknorris.io/jokes/random';

fetch(url)

.then(function (response) {

return response.json();

}).then(function (jsObject) {
    $('#joke').html(""); 
$('#joke').append('<p> '+ jsObject.value+ '</p>')
;

});


})})