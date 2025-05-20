let fun = document.getElementsByClassName("words-a_function")[0];
let nav_sec = document.getElementsByClassName("nav_secondary_box")[0];
let id = document.getElementsByClassName("words-a_id")[0];
let game = document.getElementsByClassName("words-a_game")[0];
let develop = document.getElementsByClassName("words-a_develop")[0];
let year = document.getElementsByClassName("words-a_year")[0];
let free = document.getElementsByClassName("words-a_free")[0];
let all = document.getElementsByClassName("words-a_all")[0];
let leval = document.getElementsByClassName("words-a_leval")[0];
let mission = document.getElementsByClassName("words-a_mission")[0];
let rank = document.getElementsByClassName("words-a_rank")[0];
fun.onmouseover = function(){
    nav_sec.style.display = "block";
    mission.style.display = "none";
    rank.style.display = "none";
    all.style.display = "block";
    leval.style.display = "block";
}
nav_sec.onmouseleave = function(){
    nav_sec.style.display = "none"; 
}
id.onmouseover = function(){
    nav_sec.style.display = "none";
}
game.onmouseover = function(){
    nav_sec.style.display = "none";
}
develop.onmouseover = function(){
    nav_sec.style.display = "none";
}
year.onmouseover = function(){
    nav_sec.style.display = "none";
}
free.onmouseover = function(){
    nav_sec.style.display = "none";
}

develop.onmouseover = function(){
    nav_sec.style.display = "block";
    all.style.display = "none";
    leval.style.display = "none";
    mission.style.display = "block";
    rank.style.display = "block";
}
nav_sec.onmouseleave = function(){
    nav_sec.style.display = "none"; 
}
id.onmouseover = function(){
    nav_sec.style.display = "none";
}
game.onmouseover = function(){
    nav_sec.style.display = "none";
}
year.onmouseover = function(){
    nav_sec.style.display = "none";
}
free.onmouseover = function(){
    nav_sec.style.display = "none";
}