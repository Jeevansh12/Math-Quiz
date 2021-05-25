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
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
   console.log(charAt2);

   length_minus_1 = word.length - 1;
   charAt3 = word.charAt(length_minus_1);
   console.log(charAt3);

   remove_charAt1 = word.replace(charAt1, "_");
   remove_charAt2 = remove_charAt1.replace(charAt2,"_");
   remove_charAt3 = remove_charAt2.replace(charAt3,"_");
   console.log(remove_charAt3);
   question_word = "<h4 id = 'word_display'> q. "+ remove_charAt3 + "</h4>";
   input_box = "<br> answer : <input type= 'text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
   row = question_word+ input_box+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value = "";
}