var endpoint = "https://api.tvmaze.com/search/shows";
var errorElement = $(".alert");
var names10 = [];
$(document).ready(function () {
  getShows();
  if (errorElement.text("")) {
    errorElement.css("display", "none");
  }
});
function rangeNames(list) {
  var names = [];
  for (var i = 0; i < list.length; i++) {
    names.push(list[i].name);
    if (i == 49) {
      break;
    }
  }
  return names;
}
function rangeImages(list) {
  var images = [];
  for (var i = 0; i < list.length; i++) {
    images.push(list[i].image.medium);
    if (i == 49) {
      break;
    }
  }
  return images;
}

$("#input-text").on("keyup", function (e) {
     e.preventDefault();
    var input = $("#input-text").val();
    if (!input) {
      errorElement.text("Input is required");
      errorElement.toggle();
      return;
    }
    getShowsForInput();
  
});
function getShowsForInput() {
  var input = $("#input-text").val();
  var searchable = "?q=" + input;
  $.ajax({
    url: endpoint + searchable,
    method: "GET",
  })
    .done(function (dataAll) {

      function rangeNamesForDropdown(list) {
        if (list === []) {
          errorElement.text("There is no data for your input");
          errorElement.toggle();
        }
        for (var i = 0; i < list.length; i++) {
          names10.push(list[i].show.name);
          if (i == 9) {
            break;
          }
        }

        return names10;
      }

      names10 = rangeNamesForDropdown(dataAll);

      $(names10).each(function (index) {
        $(".dropdown-menu").append(
          "<li id=" +
            `${dataAll[index].show.id}` +
            ' class="clickMe1" onclick="replyClick1(this.id)"><a href="#" id="search-listA" target="_blank" >' +
            `${names10[index]}` +
            "</a><hr></li>"
        );
      });
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}
function clearInput() {
  $("#input-text").val("");
  names10 = [];
  errorElement.text("");
  errorElement.css("display", "none");
  getShowsForInput();
}
var input = $("#input-text");
input.on("click", clearInput);

function replyClick1(clicked) {
  window.localStorage.clear();
  window.localStorage.setItem("movie_id", clicked.toString());
  location.assign("show-info-page.html");
}

function getShows() {
  $.ajax({
    url: "  http://api.tvmaze.com/shows",
    method: "GET",
  })
    .done(function (data) {
      $("#picture-container").html("");
      if (data.length == 0) {
        errorElement.text("No results");
        return;
      }
      var dataNames = rangeNames(data);
      var dataImages = rangeImages(data);
      $(dataImages).each(function (index) {
        var oneMovie =
          $(`<div class='col-4'><div class= 'movie'> <img id='${data[index].id}' class="clickMe" onclick="replyClick(this.id)" src='${dataImages[index]}'></a><div class='movie-body'>
    <h4 class='movie-title'> ${dataNames[index]}</h4>
    </div>
    </div>
    </div>`);

        $("#picture-container").append(oneMovie);
      });
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}

function replyClick(clicked) {
  window.localStorage.clear();
  window.localStorage.setItem("movie_id", clicked.toString());
  location.assign("show-info-page.html");
}
