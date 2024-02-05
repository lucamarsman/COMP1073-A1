// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');

// Constants for p tag to display query selectors
const noun1P = document.querySelector('#chosenNoun1');
const verbP = document.querySelector('#chosenVerb');
const adjectiveP = document.querySelector('#chosenAdjective');
const noun2P = document.querySelector('#chosenNoun2');
const settingP = document.querySelector('#chosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const storyP = document.querySelector('#story');

// Variables for pre-defined arrays
const noun1Array = ['The turkey ', 'Mom ', 'Dad ', 'The dog ', 'My teacher ', 'The elephant ', 'The cat '];
const verbArray = ['sat on ', 'ate ', 'danced with ', 'saw ', "doesn't like ", 'kissed '];
const adjectiveArray = ['a funny ', 'a scary ', 'a goofy ', 'a slimy ', 'a barking ', 'a fat '];
const noun2Array = ['goat ', 'monkey ', 'fish ', 'cow ', 'frog ', 'bug ', 'worm '];
const settingArray = ['on the moon ', 'on the chair ', 'in my spaghetti ', 'in my soup ', 'on the grass ', 'in my shoes '];

// Variables for count to grab array elements
let i;
const background = document.querySelector('body'); // Grab the body element for changing the background color
background.style.backgroundColor = '#FFFFED'; // Set the initial background color to light yellow

/* Functions
-------------------------------------------------- */
function noun1_on_click() { // function to cycle through the noun1Array using Math.random and display the selected noun to the user
    // variable to get array element and displaying it
    i = Math.floor(Math.random() * noun1Array.length); // Get random index within bounds of noun1Array
    let randNoun = noun1Array[i]; // Get random noun from noun1Array using the random index
    noun1P.innerHTML = randNoun; // Display the selected noun to the user

    background.style.backgroundColor = '#CBC3E3'; // Change background color: light purple for noun1, light blue for verb, light green for adjective, light orange for noun2, light pink for setting
}

function verb_on_click() {
    i = Math.floor(Math.random() * verbArray.length);
    let randVerb = verbArray[i];
    verbP.innerHTML = randVerb;

    background.style.backgroundColor = '#ADD8E6';
}

function adjective_on_click() {
    i = Math.floor(Math.random() * adjectiveArray.length);
    let randAdjective = adjectiveArray[i];
    adjectiveP.innerHTML = randAdjective;

    background.style.backgroundColor = '#90EE90';
}

function noun2_on_click() {
    i = Math.floor(Math.random() * noun2Array.length);
    let randNoun2 = noun2Array[i];
    noun2P.innerHTML = randNoun2;

    background.style.backgroundColor = '#FFD580';
}

function setting_on_click() {
    i = Math.floor(Math.random() * settingArray.length);
    let randSetting = settingArray[i];
    settingP.innerHTML = randSetting;

    background.style.backgroundColor = '#FFB6C1';
}

// concatenate the user story and display
function playback_on_click() {
    storyP.innerHTML = noun1P.innerHTML + verbP.innerHTML + adjectiveP.innerHTML + noun2P.innerHTML + settingP.innerHTML; // concatenate the user story and display it to user
    background.style.backgroundColor = '#FFFFED';
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click(); // calling the functions to get random elements from the arrays
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();

    storyP.innerHTML = noun1P.innerHTML + verbP.innerHTML + adjectiveP.innerHTML + noun2P.innerHTML + settingP.innerHTML; // concatenate the random story and display it to user
    background.style.backgroundColor = '#FFFFED';
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

document.addEventListener('DOMContentLoaded', function () { // Add student name and ID to the bottom of the page once document is loaded
    const nameAndStudentID = document.createElement('p');
    nameAndStudentID.innerHTML = 'Luca Marsman - 1247846'
    nameAndStudentID.style.marginTop = '50px';
    document.body.appendChild(nameAndStudentID);
});
