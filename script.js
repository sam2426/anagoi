var database=[
    {
        username:"ramiz",
        password:"123",
    },
    {
        username:"jayant",
        password:"456",
    },
    {
        username:"sourav",
        password:"789"
    }
];
var timeline=[
    {
        username:"jayant",
        feed:"hello, jacky aaa gaya"
    },
    {
        username:"sourav",
        feed:"ki go, dadabhai.. kemon acho!!"
    },
    {
        username:"jayant",
        feed:"bye, jacky chala jaa rha hai!!"
    }
];

var userNamePrompt=prompt("Please enter your username");
var userPasswordPrompt=prompt("Enter your password");

function signIn(user, pass){
    if(user === database[0].username && pass===database[0].password){
        console.log(timeline);
    }
    else{
        alert("Please enter your credentials correctly!")
    }
}


