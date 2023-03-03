var errorElement = $(".alert");
var endpoint = "https://api.tvmaze.com/search/shows";
$(document).ready(function () {
  var movieId = Number(localStorage.getItem("movie_id"));
  getTitleAndPicture(movieId);
  getSeassons(movieId);
  getCast(movieId);
  getCrew(movieId);
  getAkas(movieId);
  getEpisodes(movieId);
});

function getTitleAndPicture(id) {
  $.ajax({
    url: "https://api.tvmaze.com/shows/" + id,
    method: "GET",
  })
    .done(function (response) {
      if (response.length == 0) {
        errorElement.text("No results");
        return;
      }

      $("#movie-title").append(response.name);
      $("#poster").append("<img src=" + `${response.image.original}` + ">");

      $("#details")
        .append("<h2>Show Details</h2>")
        .append("<p>" + response.summary + "</p>");
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}

function getSeassons(id) {
  $.ajax({
    url: "https://api.tvmaze.com/shows/" + id + "/seasons",
    method: "GET",
  })
    .done(function (response) {
      if (response.length == 0) {
        errorElement.text("No results for seasons");
        return;
      }
      
      $("#list-of-seasons").append(
        "<h5>SEASONS (" + response.length + ")</h5>"
      );

      for (var i = 0; i < response.length; i++) {
        $("#list-of-seasons").append(
          "<li>" +
            response[i].premiereDate +
            " -- " +
            response[i].endDate +
            "</li>"
        );
      }
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}

function getCast(id) {
  $.ajax({
    url: "https://api.tvmaze.com/shows/" + id + "/cast",
    method: "GET",
  })
    .done(function (response) {
      if (response.length == 0) {
        errorElement.text("No results for cast");
        return;
      }
      
      $("#list-of-cast").append("<h5>CAST</h5>");

      for (var i = 0; i < response.length; i++) {
        $("#list-of-cast").append("<li>" + response[i].person.name + "</li>");
      }
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}
function getCrew(id) {
  $.ajax({
    url: "https://api.tvmaze.com/shows/" + id + "/crew",
    method: "GET",
  })
    .done(function (response) {
      if (response.length == 0) {
        errorElement.text("No results for crew");
        return;
      }
      
      $("#crew-list").append("<h5>CREW</h5>");

      for (var i = 0; i < response.length; i++) {
        $("#crew-list").append(
          "<li>" +
            response[i].type +
            "<b>: </b>" +
            response[i].person.name +
            "</li>"
        );
      }
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}

function getAkas(id) {
  $.ajax({
    url: "https://api.tvmaze.com/shows/" + id + "/akas",
    method: "GET",
  })
    .done(function (response) {
      
      if (response.length == 0) {
        errorElement.text("No results for Aka's");
        return;
      }
      $("#aka-list").append("<h5>AKA's</h5>");
      for (var i = 0; i < response.length; i++) {
        $("#aka-list").append(
          "<li><u>" +
            response[i].name +
            "</u>" +
            " in " +
            response[i].country.name +
            "</li>"
        );
      }
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}
function getEpisodes(id) {
  $.ajax({
    url: "https://api.tvmaze.com/shows/" + id + "/episodes",
    method: "GET",
  })
    .done(function (response) {
      if (response.length == 0) {
        errorElement.text("No results for episodes");
        return;
      }
      
      $("#episodes-list").append("<h5>List of Episodes</h5>");

      for (var i = 0; i < response.length; i++) {
        $("#episodes-list").append("<li><u>" + response[i].name + "</u></li>");
      }
    })
    .fail(function () {
      errorElement.text("Network error!");
      errorElement.toggle();
    });
}

$("#input-text-show").on("keyup", function (e) {
  if (e.which == 13) {
    var input = $("#input-text-show").val();
    if (!input) {
      errorElement.text("Input is required");
      errorElement.toggle();
      return;
    }
    getShowsForInput();
  }
});
function getShowsForInput() {
  var input = $("#input-text-show").val();
  
  var searchable = "?q=" + input;
  $.ajax({
    url: endpoint + searchable,
    method: "GET",
  })
    .done(function (dataAll) {
      

      function rangeNamesForDropdown(list) {
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
            ' class="clickMe1" onclick="replyClick1(this.id)"><a  id="search-listA" target="_blank" >' +
            `${names10[index]}` +
            "</a><hr></li>"
        );
      });
    })
    .fail(function (dataAll) {
      alert(dataAll.message);
    });
}
function clearInput() {
  $("#input-text-show").val("");
  names10 = [];
  errorElement.text("");
  errorElement.css("display", "none");
  getShowsForInput();
}
var input = $("#input-text-show");
input.on("click", clearInput);

function replyClick1(clicked) {
  window.localStorage.clear();
  window.localStorage.setItem("movie_id", clicked.toString());
  location.assign("show-info-page.html");
}
