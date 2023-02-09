class Exam{
    constructor(subject, student, grade){
        this.subject = new Subject(subject.name);
        this.student = new Student(student.name, student.lastname);
        this.grade = grade;
    }

    getExamInfo(){
        return this.subject.getSubjectName() + " - " + this.student.getStudentData() + "\t" + this.grade;
    }
    hasPassed(){
        if (this.grade>5){
            return true;
        }return false;
    }
}