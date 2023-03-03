import { Joke } from "./entities/joke.js";
import { getJoke } from "./services/service.js";
import { getNewRandomJoke } from "./view/ui.js";

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
$(document).ready(function(){

    $("#btn").on("click", function(){
     
        getJoke(jokeUrl).then(response =>{
            const joke = new Joke(response.value);
            getNewRandomJoke(joke)
        }).catch(error => {
            console.log(error);
        });


    }) })