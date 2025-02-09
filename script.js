let count = document.getElementById("count");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let color = document.getElementById("color");
let seeColors = document.getElementById("seeColors");
let section = document.getElementById("section");


let i = 0;


decrease.onclick = function(){
    i--;
    count.innerHTML = i;
}
reset.onclick = function(){
    i = 0;
    count.innerHTML = i;
}
increase.onclick = function(){
    i++;
    count.innerHTML = i;
}


color.addEventListener("click", () => {
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
});
azure.onclick = function(){
    section.style.backgroundColor = "azure";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "azure";
    brush.style.color = "azure";
    decrease.style.backgroundColor = "azure";
    increase.style.backgroundColor = "azure";
    reset.style.backgroundColor = "azure";
}
red.onclick = function(){
    section.style.backgroundColor = "red";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "red";
    brush.style.color = "red";
    decrease.style.backgroundColor = "red";
    increase.style.backgroundColor = "red";
    reset.style.backgroundColor = "red";
}
aqua.onclick = function(){
    section.style.backgroundColor = "aqua";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "aqua";
    brush.style.color = "aqua";
    decrease.style.backgroundColor = "aqua";
    increase.style.backgroundColor = "aqua";
    reset.style.backgroundColor = "aqua";
}
yellow.onclick = function(){
    section.style.backgroundColor = "yellow";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "yellow";
    brush.style.color = "yellow";
    decrease.style.backgroundColor = "yellow";
    increase.style.backgroundColor = "yellow";
    reset.style.backgroundColor = "yellow";
}
green.onclick = function(){
    section.style.backgroundColor = "green";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "green";
    brush.style.color = "green";
    decrease.style.backgroundColor = "green";
    increase.style.backgroundColor = "green";
    reset.style.backgroundColor = "green";
}
lime.onclick = function(){
    section.style.backgroundColor = "lime";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "lime";
    brush.style.color = "lime";
    decrease.style.backgroundColor = "lime";
    increase.style.backgroundColor = "lime";
    reset.style.backgroundColor = "lime";
}
fuchsia.onclick = function(){
    section.style.backgroundColor = "fuchsia";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "fuchsia";
    brush.style.color = "fuchsia";
    decrease.style.backgroundColor = "fuchsia";
    increase.style.backgroundColor = "fuchsia";
    reset.style.backgroundColor = "fuchsia";
}
purple.onclick = function(){
    section.style.backgroundColor = "purple";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "purple";
    brush.style.color = "purple";
    decrease.style.backgroundColor = "purple";
    increase.style.backgroundColor = "purple";
    reset.style.backgroundColor = "purple";
}
brown.onclick = function(){
    section.style.backgroundColor = "brown";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "brown";
    brush.style.color = "brown";
    decrease.style.backgroundColor = "brown";
    increase.style.backgroundColor = "brown";
    reset.style.backgroundColor = "brown";
}
gray.onclick = function(){
    section.style.backgroundColor = "gray";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "gray";
    brush.style.color = "gray";
    decrease.style.backgroundColor = "gray";
    increase.style.backgroundColor = "gray";
    reset.style.backgroundColor = "gray";
}
white.onclick = function(){
    section.style.backgroundColor = "white";
    seeColors.style.display = seeColors.style.display === "flex" ? "none" : "flex";
    color.style.backgroundColor = "white";
    brush.style.color = "white";
    decrease.style.backgroundColor = "white";
    increase.style.backgroundColor = "white";
    reset.style.backgroundColor = "white";
}




