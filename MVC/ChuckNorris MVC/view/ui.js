export function getNewRandomJoke(joke){
    $('#joke').html(""); 
$('#joke').append('<p> '+ joke.value+ '</p>')
};