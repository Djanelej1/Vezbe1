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
            return movieList.push(movie1.getMovieData());
        
         };
    
         movieList1 =addMovietoList(movieInst);
         console.log(movieList); // number of movies in the list 
         
     
         $.each(movieList,function (i,element){          //dodavanje filmova na listu filmova -poslednji fieldset
            $('.movie-select').append($('<option/>')).append(movieList[i])
                 
            
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
     var duration = calculateDuration(movieList);
     var total = totalNumbersOfMovies(movieList1);
     var nameProgram =$('.program-title').val();
     
     function createProgram(){
        errorMessage1 = checkInputDate();
        if(!errorMessage1){  
        var programInstance = new Program (nameProgram,date,movieList1,movieList1.length);
        programPlace.append('<li/>').append(nameProgram + " -" +programInstance.date.toDateString() +" "+duration);
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
                    sum += list[i].length1;
                } return sum;
            }
            function totalNumbersOfMovies(list) {
                return list.length;
            }


         }) 

        
         $('.create-program').on("click", function (e){

            e.preventDefault();
           // var duration = calculateDuration(movieList1); 
            //var total = totalNumbersOfMovies(movieList1);
            console.log(movieList1)
            var movieOption = addToList(movieList1);
            $('.movie-select').append('<option/>').html(movieList1);
            var programOption = addToList(programList1,$('<option/>'));
            $('.program-select').append(programOption);
         })   
         
         function addToList(list){
            var element;
            for (var i =0; i<list.length;i++){
               element = list[i]
            }return element;
         }
    
        

})





