function showEmail(){ //avoid bots by prompting the user to answer a question before displaying my email
    var result = prompt("What is 1 + 3?");
    if(result === '4'){
        alert("npiecyk@nd.edu")
    }
    else{
        alert("Sorry, try again!")
    }
}