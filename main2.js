//1
// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-error

let monH1 = document.querySelector("h1");

monH1.addEventListener("click",()=>{
    monH1.setAttribute("class","text-error")
})

// ### 2. Au double clique du h3, rajoute la class text-error


let monH3 = document.querySelector("h3");

monH3.addEventListener("dblclick", ()=>{
    monH3.setAttribute("class","text-error");
})



// ### 3. Ajoute la class text-style, quand on clique sur le paragraphe, trouve une methode qui retire la class si elle est déjà sur le paragraphe

let p = document.querySelector("p");

p.addEventListener("click",()=>{
     p.classList.toggle("text-style");
})
console.log(p);



// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique

let spanP2 = Array.from(p.nextElementSibling.children);

spanP2.forEach(element => {
    element.addEventListener("click", ()=>{
        element.setAttribute("class", "bolder")
    });
});


// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !


let span=Array.from(document.querySelectorAll("p")[2].children);
console.log(span);

span[0].addEventListener("click",()=>{
     span[0].setAttribute("class","bolder-red");
     span[1].classList.remove("bolder-red");
     span[2].classList.remove("bolder-red");
})

span[1].addEventListener("click",()=>{
     span[1].setAttribute("class","bolder-red")
     span[0].classList.remove("bolder-red");
     span[2].classList.remove("bolder-red")
     
 })
 
 span[2].addEventListener("click",()=>{
     span[2].setAttribute("class","bolder-red")
     span[1].classList.remove("bolder-red");
     span[0].classList.remove("bolder-red")
 })
 

