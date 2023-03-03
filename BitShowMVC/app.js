import { Serie}  from "./enteties/show.js";
import { getData,getShowId, getShowIdSecondPage} from "./service/service.js";
import { createDropdownList, getDataForPage, getTitleAndPicture, getSeason, getCast,
getCrew,getAkas, getEpisodes} from "./view/ui.js";
let movieId = Number(localStorage.getItem("movie_id"));
let movieI2 = Number(localStorage.getItem("movie_id2"));
const urlAll = "http://api.tvmaze.com/shows"; 
const dropdownUrl = "https://api.tvmaze.com/search/shows?q=";
const InfoUrl = "http://api.tvmaze.com/shows/"
let errorElement = $(".alert");

 
$(document).ready(function () {
    getData(urlAll).then (response =>{
        let serie = new Serie (response.id, response.name, response.image);
        getDataForPage(response, serie);
        getShowId(".clickMe");
        info();
        seasons();
        cast();
        crew();
        akas();
        episodes();
    })
    
    
    
    if (errorElement.text("")) {
      errorElement.css("display", "none");
    }
   
  });
  

 $("#input-text").on("keyup", function (e) {
    let input = $("#input-text").val();
    e.preventDefault();
    
   if (!input) {
     errorElement.text("Input is required");
     errorElement.toggle();
     return;
   }
   getData(dropdownUrl+input).then (response =>{
    console.log(input)
    let serie = new Serie(response.show, response.show, response.show);
    console.log(response)
    createDropdownList(response, serie);
   })
   getShowId(".clickMe1");

});
$("#input-text-show").on("keyup", function (e) {
    let input = $("#input-text-show").val();
    e.preventDefault();
    
   if (!input) {
     errorElement.text("Input is required");
     errorElement.toggle();
     return;
   }
   getData(dropdownUrl+input).then (response =>{
    console.log(input)
    let serie = new Serie(response.show, response.show, response.show);
    console.log(response)
    createDropdownList(response, serie);
   })
   getShowIdSecondPage(".clickMe1");
  

});
function info(){
    getData(InfoUrl+movieId).then(response =>{
        console.log(response)
        let show = new Serie(response.id, response.name, response.image, response.summary);
    
        getTitleAndPicture(show);
    })
}
function seasons(){
    getData(InfoUrl+movieId+ "/seasons").then(response =>{
        
        getSeason(response);
    })
}

function cast(){
    getData(InfoUrl+movieId+ "/cast").then(response =>{
        getCast(response)
    })
}

function crew(){
    getData(InfoUrl+movieId+ "/crew").then(response =>{
        getCrew(response)
    })
}
function akas(){
    getData(InfoUrl+ movieId+"/akas").then(response =>{
        getAkas(response)
    })
}
function episodes(){
    getData(InfoUrl+ movieId+"/episodes").then(response =>{
        getEpisodes(response)
    })
}

function clearInput() {
    $("#input-text").val("");
    $(".dropdown-menu show").val("");
    errorElement.text("");
    errorElement.css("display", "none");
    
  }
  var input = $("#input-text");
  input.on("click", clearInput);