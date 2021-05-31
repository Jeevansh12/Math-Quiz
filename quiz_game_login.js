score = 0;
function updateScore(){
    score = score+1;
    document.getElementById("score").innerHTML = "score:" + score;
}
function saveScore(){
    localStorage.setItem("score",score);
}
function nextPage(){
    window.location = "quiz_game_page.html";
}
function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location.replace("game_page.html")

}
function send() {
    number1 = document.getElementById("player1").value;
    number2 = document.getElementById("player2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number= "<h4>"+ number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer:<input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn-btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}