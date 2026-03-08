function checkMarks(marks) {
    let result;

    if (0 <= marks && marks <= 25) {
        result = 'Unfortunately, you are fail. Better luck next time.';
    }
    else if (25 < marks && marks < 50) {
        result = 'You are pass , but you need to work hard.';
    }
    else if (50 <= marks && marks < 80) {
        result = ' You are doing great . Keep it up .';
    }
    else if (80 <= marks && marks <= 100) {
        result = 'Exellente . you are doing very good . Keep it up .';
    };

    console.log(result);

}

let arisha_marks = 98.89;
checkMarks(arisha_marks);

let amina_marks = 99.64;
checkMarks(amina_marks);

let samara_marks = 20;
checkMarks(samara_marks);
