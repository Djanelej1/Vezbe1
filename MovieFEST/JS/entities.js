class Genre {
    constructor(name){
     this.name=name;   
    }
     getData(){
        
     return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
        }
 }

 

class Movie {
    constructor (title, genre, length1){
        this.title = title;
        this.genre = new Genre(genre.name);
        this. length1 = length1; 
    }
 
  getMovieData(){
     return this.title + ", " + this.length1 +"min " + ", " + this.genre.getData();
 }
}



class Program {
    constructor (name,date, listOfMovies, totalNumbersOfMovies ){
        this.name =name;
        this.date = new Date(date);
        this.listOfMovies =listOfMovies;
    }
  
  addMovietoList(movie){
    return listOfMovies.push(movie);
 }

 
 totalNumbersOfMovies() {
     var sum = 0;
     for (var i = 0; i <listOfMovies.length; i ++){
         sum +=1;
     }return sum;
 }

 calculateDuration (list){
    var sum =0;
    for (var i =0; i<list.length;i++){
        sum += Number(list[i].length1);
    } return sum;
}
  getProgramData(){
    return ( this.date.toDateString() + "," +  this.listOfMovies);
  
  }
  
 }




class Festival {
    constructor (name, listOfPrograms =[],movieNumbers){
  this.name=name;
  this.listOfPrograms = listOfPrograms;
    }
  addProgram(program){
     return listOfPrograms.push(program)
 }
 movieNumbers (){
     var sum = 0;
     for (var i = 0; i <listOfPrograms.length; i ++){
         sum +=listOfPrograms[i].totalNumbersOfMovies();
     }return sum;
 }
 getFestivalData(){
 var listPrograms = [];
 for (var i = 0; i<listOfPrograms.length;i++){
   listPrograms.push(listOfPrograms[i].data() + "\t");
 }
 return this.name + " has " + this.movieNumbers() + " movie titles " + "\n\t" + listPrograms;
 
}

}

