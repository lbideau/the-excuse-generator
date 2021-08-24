let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let random = who[Math.floor(Math.random() * who.length)];
let random2 = what[Math.floor(Math.random() * what.length)];
let random3 = when[Math.floor(Math.random() * when.length)];
let fusion = random + " "  + random2 + " " + random3;
document.getElementById("excuse").innerHTML = fusion;
console.log("Hello World");