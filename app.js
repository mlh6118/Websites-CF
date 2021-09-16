'use strict'

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
    numberPlayers = prompt('How many people are in your group (1-6): ');
    
    // Validate value entered.
    while(numberPlayers < 1 || numberPlayers > 6){
        numberPlayers = prompt('How many people are in your group (1-6): ');
    }
 }

function roomRecommendations(){
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

let pageReview = 'n';
let reviewCategory = 0;

function reviewPage(){
    pageReview = prompt('Would you like to review the room categories? (y/n)');

    console.log(pageReview);

    if(pageReview.toLowerCase() === 'y'){
        reviewCategory = prompt('Please review our page.  How many stars would you give it (0-5)?');
  
        for(let i = 0; i < reviewCategory; i++){
            document.write('<img alt="star" src="./star.png" width="25px" height="25px">');
        }
    }
}