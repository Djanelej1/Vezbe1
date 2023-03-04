import { Serie, Cast, Crew, Aka, Episodes } from "./enteties/show.js";
import { getData, getShowId } from "./service/service.js";
import {
  createDropdownList,
  getDataForPage,
  getTitleAndPicture,
  getSeason,
  getCast,
  getCrew,
  getAkas,
  getEpisodes,
} from "./view/ui.js";

const urlAll = "http://api.tvmaze.com/shows";
const dropdownUrl = "https://api.tvmaze.com/search/shows?q=";
const InfoUrl = "http://api.tvmaze.com/shows/";
let errorElement = $(".alert");
let movieId = Number(localStorage.getItem("movie_id"));
let movieId2 = Number(localStorage.getItem("movie_id1"));
$(document).ready(function () {
  getData(urlAll).then((response) => {
    let serie = new Serie(response.id, response.name, response.image);
    getDataForPage(response, serie);
    getShowId(".clickMe");
    info();
    seasons();
    cast();
    crew();
    akas();
    episodes();
  });

  if (errorElement.text("")) {
    errorElement.css("display", "none");
  }
});

search("#input-text");
search("#input-text-show");

function search(element) {
  $(element).on("keyup", function (e) {
    let input = $(element).val();
    e.preventDefault();

    if (!input) {
      errorElement.text("Input is required");
      errorElement.toggle();
      return;
    }
    getData(dropdownUrl + input).then((response) => {
      console.log(input);
      let serie = new Serie(response.show, response.show, response.show);
      console.log(response);
      createDropdownList(response, serie);
      getShowId(".clickMe1");
    });
  });
}

function info() {
  getData(InfoUrl + movieId).then((response) => {
    let show = new Serie(
      response.id,
      response.name,
      response.image,
      response.summary
    );
    getTitleAndPicture(show);
  });
}
function seasons() {
  getData(InfoUrl + movieId + "/seasons").then((response) => {
    getSeason(response);
  });
}

function cast() {
  getData(InfoUrl + movieId + "/cast").then((response) => {
    $.each(response, function (i) {
      let cast1 = new Cast(response[i].person.name);
      getCast(cast1);
    });
  });
}

function crew() {
  getData(InfoUrl + movieId + "/crew").then((response) => {
    $.each(response, function (i) {
      let crew1 = new Crew(response[i].type, response[i].person.name);
      getCrew(crew1);
    });
  });
}
function akas() {
  getData(InfoUrl + movieId + "/akas").then((response) => {
    $.each(response, function (i) {
      let akas1 = new Aka(response[i].name, response[i].country.name);
      getAkas(akas1);
    });
  });
}
function episodes() {
  getData(InfoUrl + movieId + "/episodes").then((response) => {
    $.each(response, function (i) {
      let episode1 = new Episodes(response[i].name);
      getEpisodes(episode1);
    });
  });
}

function clearInput() {
  $("#input-text").val("");
  $(".dropdown-menu show").val("");
  errorElement.text("");
  errorElement.css("display", "none");
}

$("#input-text").on("dblclick", clearInput);
$("#input-text-show").on("dblclick", clearInput);
