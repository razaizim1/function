function explainRoutine(name, task, age) {

    console.log('Your name', name);
    console.log('Your age', age);
    task();
}

function washHand() {
    console.log('Wash your hand');
}

function takeShower() {
    console.log('Take a shower');
}

function scrollFacebook() {
    console.log('Scrolling facebook');
}

explainRoutine('Abdul Razzak', scrollFacebook, 15);
explainRoutine('Abdur Rahman', washHand, 23);
explainRoutine('Al-Amin', takeShower, 26);
