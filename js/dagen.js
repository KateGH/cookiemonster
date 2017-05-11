dailyMenu();

function dailyMenu(){

var dailyImage = [];
dailyImage[0] = {src:"img/creme_brulee_recipe_page/cb2.jpg", caption:"Crème brûlée", href:"http://gitmizlin.github.io/cookiemonster/creme_brulee.html"};
dailyImage[1] = {src:"img/scones_recipe_page/scones2.jpg", caption:"Scones", href:"http://gitmizlin.github.io/cookiemonster/scones.html"};
dailyImage[2] = {src:"img/vlt.jpg", caption:"varmlandtårta", href:"http://gitmizlin.github.io/cookiemonster/varmlandstarta.html"};
dailyImage[3] = {src:"img/cronut_recipe_page/cronut2.jpg", caption:"Cronut", href:"http://gitmizlin.github.io/cookiemonster/cronut.html"};
dailyImage[4] = {src:"img/tigercake_recipe_page/tigerkaka.jpg", caption:"Tigerkaka", href:"http://gitmizlin.github.io/cookiemonster/tigercake.html"};


var today = new Date();
var day = Math.floor(today/8.64e7);

console.log("today is: " + today);
console.log("day is: " + day);

var dailyNr = day % dailyImage.length;

console.log("dailyNr is: " + dailyNr);
console.log(dailyImage[dailyNr].src);
console.log(dailyImage[dailyNr].href); 

var imgSource = dailyImage[dailyNr].src;
var hrefSource = dailyImage[dailyNr].href;

$("#recepi-of-the-day-img").attr("src", imgSource);
$("#recepi-of-the-day-img").attr("href", hrefSource);

document.getElementById("recepi-of-the-day-img").src = imgSource;
document.getElementById("dailyLink").href = hrefSource;
}
