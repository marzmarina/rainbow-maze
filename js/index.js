// business logic functions
function showWelcomeMessageAndAddSteps () {
    addStep();
    var steps = getSteps();

    if (steps !== 0) {
        var welcomeMessageElements = document.getElementsByClassName('welcome-message');
        welcomeMessageElements[0].innerHTML = 'You wander here already for ' + steps + ' steps.';
    }
}

function showGoodbyMessageAndResetSteps () {
    var steps = getSteps();

    if (steps !== 0) {
        var goodbyMessageElements = document.getElementsByClassName('goodby-message');
        goodbyMessageElements[0].innerHTML = 'You wandered here for ' + steps + ' steps.';
    }

    resetSteps();
}

// -----------------

// service functions

// sesstion storage used, as it clears when page is closed
function addStep() {
    // get steps amount from session storage
    var steps = getSteps();

    if (!steps) {
        // if it is first function call, steps are empty. Set them to default value 
        steps = 0;
    } else {
        // session storage keeps everything as strings, so to iterate we need to convert it to number
        steps = parseInt(steps, 10);
    
        // iterate
        steps = steps + 1;
    }

    // save steps amount
    setSteps(steps);
}

function setSteps(steps) {
    window.sessionStorage.setItem('steps', steps);
}

function resetSteps() {
    window.sessionStorage.removeItem('steps');
}

function getSteps() {
    var steps = window.sessionStorage.getItem('steps');

    if (!steps) {
        // if it is first function call, steps are empty. Set them to default value 
        return null;
    }
    // session storage keeps everything as strings, so to iterate we need to convert it to number
    steps = parseInt(steps, 10);

    return steps;
}
