export function createDropdownList(list, oneMovie) {
  let names10 = [];
  if (list === []) {
    $(".alert").text("There is no data for your input");
    $(".alert").toggle();
  }
  for (let i = 0; i < list.length; i++) {
    names10.push(list[i].show.name);
    if (i == 9) {
      break;
    }
  }
  console.log(names10);
  $(names10).each(function (index) {
    oneMovie =
      "<li id=" +
      `${list[index].show.id}` +
      ' class="clickMe1" ><a href="" id="search-listA" >' +
      `${names10[index]}` +
      "</a><hr></li>";
    $(".dropdown-menu").append(oneMovie);
  });
}

export function getDataForPage(list, oneMovie) {
  let id = [];
  let names = [];
  let images = [];
  for (let i = 0; i < list.length; i++) {
    id.push(list[i].id);
    names.push(list[i].name);
    images.push(list[i].image.medium);
    if (i == 49) {
      break;
    }
  }

  $("#picture-container").html("");
  if (list.length == 0) {
    $(".alert").text("No results");
    return;
  }

  $(names).each(function (index) {
    oneMovie =
      $(`<div class='col-4'><div class= 'movie'> <img id='${id[index]}' class="clickMe" src='${images[index]}'><div class='movie-body'>
    <h4 class='movie-title'> ${names[index]}</h4>
    </div>
    </div>
    </div>`);

    $("#picture-container").append(oneMovie);
  });
}

export function getTitleAndPicture(show) {
  if (show.length == 0) {
    $(".alert").text("No results");
    return;
  }

  $("#movie-title").append(show.name);
  $("#poster").append("<img src=" + `${show.image.original}` + ">");

  $("#details")
    .append("<h2>Show Details</h2>")
    .append("<p>" + show.summary + "</p>");
}

export function getSeason(response) {
  if (response.length == 0) {
    $(".alert").text("No results for seasons");
    return;
  }

  $("#list-of-seasons").append("<h5>SEASONS (" + response.length + ")</h5>");

  $.each(response, function (i) {
    $("#list-of-seasons").append(
      "<li>" + response[i].premiereDate + " -- " + response[i].endDate + "</li>"
    );
  });
}
export function getCast(cast) {
  $("#list-of-cast").append("<li>" + cast.castName + "</li>");
}

export function getCrew(crew) {
  if (crew.length == 0) {
    $(".alert").text("No results for crew");
    return;
  }
  $("#crew-list").append(
    "<li>" + "<b>" + crew.type + ": </b>" + crew.crewName + "</li>"
  );
}
export function getAkas(aka) {
  if (aka.length == 0) {
    $(".alert").text("No results for Aka's");
    return;
  }

  $("#aka-list").append(
    "<li><u>" + aka.name + "</u>" + " in " + aka.countryName + "</li>"
  );
}

export function getEpisodes(episode) {
  if (episode.length == 0) {
    $(".alert").text("No results for episodes");
    return;
  }
  $("#episodes-list").append("<li><u>" + episode.episodeName + "</u></li>");
}

export function clearAll(){
    $(".secondPage").show();
    $(".landingPage").hide();
    $(".landingPage").empty();
    $(".header-row").show();
    $(".list-of-seasons").empty();
    $(".poster").empty();
    $(".movie-title").empty();
    $(".list-of-cast").empty();
    $(".details").empty();
    $(".crew-list").empty();
    $(".aka-list").empty();
    $(".episodes-list").empty();
    
}