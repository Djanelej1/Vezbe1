$(document).ready(function(){

    var movieList =[];
    var movieInst;
    var movieList1;
    var programList =[];
    var programInst;
    var programList1;
    var length1;
$('.create-movie').on("click", function (e){
    e.preventDefault();
    var movie =$(".movie-title").val();
    length1 =$('.movie-length').val();
    var genre = $('.genre-select option:selected').text();
    var error = $('.movie-error');
    var moviePlace = $('.movie-list');
    var errorMessage ='';
    function createMovie(){
        var movieInstance;
        var genreInstance
        errorMessage = checkInput();
        if (!errorMessage){
             genreInstance = new Genre(genre);
             movieInstance = new Movie(movie,genreInstance,length1);
            moviePlace.append('<li/>').append(movieInstance.getMovieData());

        } else { error.html(errorMessage);}
        
        return movieInstance;
        }
        
        movieInst = createMovie();
        console.log(movieInst);
        
        function addMovietoList(movie1){
            return movieList.push(movie1);
        
         };
    
         movieList1 =addMovietoList(movieInst);
         console.log(movieList); // number of movies in the list 
         
       console.log(movieList[0].getMovieData());

         $.each(movieList,function (i,element){          //dodavanje filmova na listu filmova -poslednji fieldset
            $('.movie-select').append($('<option>')).append(movieList[i].getMovieData())
                 
            
         })
        function checkInput(){
            var message ='';
            if (movie ===""){
                message +="Please fill in the name of the movie";
            } else if ( length ===""){
               message +="Please fill in the length of movie";
            } else if (genre==="-"){
               message ="Please choose the genre from the list";
            }
            return message;
        }
            

    })
    $('.create-program').on("click", function (e){
        e.preventDefault();
     var programPlace =$('.program-list');
     var errorProgram = $('.program-error');
     var errorMessage1 ='';
     var date = new Date($('.program-date').val());
     var day = date.getDate();
     var month = date.getMonth() +1;
     var year = date.getFullYear();
     var dateProgram = day +"/"+ month + "/" + year;
     var duration = calculateDuration(movieList);
     var total = movieList1;
     var nameProgram =$('.program-title').val();
     
     function createProgram(){
        errorMessage1 = checkInputDate();
        if(!errorMessage1){  
        var programInstance = new Program (nameProgram,date,movieList1,movieList1.length);
        programPlace.append('<li/>').append(nameProgram + " -" + dateProgram +" " + "movies:" + total + " " + "duration :"+ duration + "min");
        }else { errorProgram.html(errorMessage1);}
        return programInstance;
    };
     programInst = createProgram();
         console.log(programInst);

         function addProgramtoList(program1){
            return programList.push(program1);
        
         };

            programList1 =addProgramtoList(programInst);
          
            
            function checkInputDate(){
                var message ='';
                if (date === ''){
                    message= "please pick a date"
                } else if (nameProgram==="")
                {message ="please provide the name of the program"}
                return message;
            }
            function calculateDuration (list){
                var sum =0;
                for (var i =0; i<list.length;i++){
                    sum += Number(list[i].length1);
                } return sum;
            }
            function totalNumbersOfMovies(list) {
                return list.length;
            }

            
            $.each(programList,function (i,element){          //dodavanje programa na listu programa -poslednji fieldset
                $('.program-select').append($('<option>')).append(programList[i].name + " " + dateProgram + " " + "movies:" + total + " " + "duration :"+ duration + "min");
                
         }) 

        
         $('.add-movie').on("click", function (e){

            e.preventDefault();
        
           
            var movieOption = $('.movie-select option:selected').text();
            var programOption = $('.program-select option:selected').text();
            
            function addMovietoProgram(movieOption){
                return movieList.push(movieOption);
             }
            var funk =  addMovietoProgram();
            console.log(movieList);
            $.each(programList,function (i,element){  
            $('.program-movie-list').append('<li>').append(programList[i] +" \n"+ movieList[i].getMovieData());
            })
         })   
         
        
        
    
        

})



})

