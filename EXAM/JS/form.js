function collectData(subject, student, grade){
    var result =[];
    var studentNameLastname =student.split(" ");
   var studentName = studentNameLastname[0];
    var studentLastname =studentNameLastname[1];
    studentNameLastname.join("");
    var predmet = new Subject(subject);
   var studentObj = new Student(studentName, studentLastname);
    var result = new Exam(predmet,studentObj,grade);
    
    return (result);
}

function validateForm(name, grade){
    var nameList = name.split(" ");
    if (nameList[0][0]!=nameList[0][0].toUpperCase()
    && nameList[1][0]!=nameList[1][0].toUpperCase()){
     return alert ("Name and lastname must be start with capital letters")
    }
    if  (grade >10 && grade<1){
        return alert ("Grade must be values from 1 to 10");
    }
} 

function addValuesToList(exam){
    var studentList = exam.getExamInfo();
     return studentList;}




