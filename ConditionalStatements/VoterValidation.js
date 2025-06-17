// Check the user is vaild for voating or not

function isvalidVoter(age, name){
    if (age >= 18) {
        console.log(name + " is a valid voter.");
    } else {
        console.log(name + " is not a valid voter.");
    }
}

let voterAge = 20;
let voterName = "Aksh";
isvalidVoter(voterAge, voterName);
let anotherVoterAge = 16;
let anotherVoterName = "Ravi";
isvalidVoter(anotherVoterAge, anotherVoterName); 