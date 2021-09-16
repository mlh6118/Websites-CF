'use strict'

//let numberOfPlayers = 0;

let numberPlayers = 0;

function todaysDate(){
    // Add today's date in the upper right corner.
    let today = new Date();
    let currentDate = today.toDateString();

    document.write('<font size="5px"><p align="center">' + currentDate + '</p></font>');
}

function userName(){
    let userName = prompt('What is your name? ');
    alert('Welcome to the Escape Rooms.  Can you escape, ' + userName + '?');
}

function numberPlaying(){
    // Ask how many players are in the group.  For 1-2, suggest Solos and Pairs.  For 3 or more, ask user if anyone is under 17.  If under 17, suggest Family Friendly, otherwise, suggest Mature Audience.
    let numberPlayers = prompt('How many people are in your group (1-6): ');
    
    // Validate value entered.
    while(numberPlayers < 1 || numberPlayers > 6)
        let numberPlayers = prompt('How many people are in your group (1-6): ');

    //    if(numberPlayers < 1 || numberPlayers > 6){
//        alert("Please enter a number between 1 and 6.");
        // console.log(numberPlayers);
        // numberPlaying();
//    }
//    numberOfPlayers = numberPlayers; // assign value to global variable.
    // console.log('numberPlayers: ' + numberPlayers);
    // console.log('numberOfPlayers: ' + numberOfPlayers);
}

function roomRecommendations(){
    // console.log(numberOfPlayers);
//    if(numberOfPlayers <= 2){
    if(numberPlayers <= 2){
        alert('We suggest looking at rooms for Solos and Pairs.');
    }
    else{
        let under17 = prompt('Is anyone under 17 years of age? (Y/N): ');
        if(under17.toUpperCase() === 'Y'){
            alert('We suggest looking at Family Friendly rooms.');
        }
        else{
            alert('We suggest looking at Mature Audience rooms.');
        }
    }
}