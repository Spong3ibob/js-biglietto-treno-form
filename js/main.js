let agetiket =document.getElementById("age")
console.log(agetiket)
const travel = travelKilometers * 0.25;
console.log( "Prezzo intero" + " " + travel + "€");
if(age <= 18){
    resultjunior = travel - (travel * 0.2);
    console.log( "Prezzo scontato junior" + " " + resultjunior + "€")
}else if(age >= 65){
    resultsenior = travel - (travel * 0.4);
    console.log( "Prezzo scontato senior" + " " + resultsenior + "€")
}


   