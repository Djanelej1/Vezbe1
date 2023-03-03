export function createDropdownList(list, oneMovie) {
  var names10=[];
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
console.log(names10)
$(names10).each(function (index) {
  
    oneMovie = "<li id=" +
      `${list[index].show.id}` +
      ' class="clickMe1" ><a href="./showInfoPage.html" id="search-listA" target="_blank" >' +
      `${names10[index]}` +
      "</a><hr></li>"
      $(".dropdown-menu").append(oneMovie);
});
}

export function getDataForPage(list,oneMovie){
    var id = [];
    var names = [];
    var images =[];
    for (var i = 0; i < list.length; i++) {
      id.push(list[i].id);
      names.push(list[i].name);
      images.push(list[i].image.medium);
      if (i == 49) {
        break;
      }
    }
  
  $("#picture-container").html("");
      if (list.length == 0) {
        errorElement.text("No results");
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




export function getTitleAndPicture(show){
  if (show.length == 0) {
    errorElement.text("No results");
    return;
  }

  $("#movie-title").append(show.name);
  $("#poster").append("<img src=" + `${show.image.original}` + ">");

  $("#details")
    .append("<h2>Show Details</h2>")
    .append("<p>" + show.summary + "</p>");
}

export function getSeason(response){
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
}
export function getCast(response){
  if (response.length == 0) {
    errorElement.text("No results for cast");
    return;
  }
  
  $("#list-of-cast").append("<h5>CAST</h5>");

  for (var i = 0; i < response.length; i++) {
    $("#list-of-cast").append("<li>" + response[i].person.name + "</li>");
  }
}

export function getCrew(response){
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
}

export function getAkas(response){
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
}
export function getEpisodes(response){
  if (response.length == 0) {
    errorElement.text("No results for episodes");
    return;
  }
  
  $("#episodes-list").append("<h5>List of Episodes</h5>");

  for (var i = 0; i < response.length; i++) {
    $("#episodes-list").append("<li><u>" + response[i].name + "</u></li>");
  }
}