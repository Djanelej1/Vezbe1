
$(document).ready(function(){
  
    $('#button-add').click(function(e){
        e.preventDefault();
        var subject = $('#subjects option:selected').val();
  var nameStudent = $('#name-lastname').val(); 
  var grade =$('#grades').val();
  var total =$('#total');
  var numPassed = $('#passed-total');
  var numFailed= $('#failed-total');
  var dataCollected =collectData(subject,nameStudent, grade);
        console.log(dataCollected);

      
    var list = addValuesToList(dataCollected);
      validateForm(nameStudent, grade);
        
      
       if (dataCollected.grade>5){
       $("#passed-students").append("<li></li>").append(list);
       }else { $('#failed-students').append("<li></li>").append(list)};
    
    
    function statValues(){
        var totalPassed = $("#passed-students").children().length;
        var totalFailed = $("#failed-students").children().length;
        var totalStudents = $('li').length;
        var failedPercentage = (totalFailed/totalStudents)*100;
        return new Array(totalStudents, totalPassed, totalFailed, failedPercentage);
    }
    var statistic =statValues();
    console.log(statistic)
    $(total).html("Total Students: " + statistic[0]);
    $(numPassed).html("PASSED: " + statistic[1]);
    $(numFailed).html("FAILED: " + statistic[2] + "\t\t\ " + statistic[3].toFixed(2)+"%");

    $('#myform')[0].reset();
    })

});