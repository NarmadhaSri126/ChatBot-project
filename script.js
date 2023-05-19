function talk(){
    var know = {
    "Who are you" : "Hello, Sri here",
    "How are you" : "Good :)",
    "Your favourite Cricket Team" : "My favorite cricket team is Mumbai Indians",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "Are you a robot?" : "Yes I’m a robot but I’m a smart one!",
    "Good morning" : "Good morning ,Have a great day!",
    "Good afternoon" : "Good afternoon,Hope you enjoyed a lot today!",
    "Good evening" : "Good evening buddy,Hope you had a great day",
    "Good night" : "Goodnight dear! Have a restful sleep and sweet dreams. ",
    "Do you love me":"As an AI language model, I don't have the ability to experience emotions or feelings",
    "Will you marry me":"As an AI language model, I don't have the ability to experience emotions or feelings",
    "You’re smart":"Thank you for the kind compliment!"
    
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }