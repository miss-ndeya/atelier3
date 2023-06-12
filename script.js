function listeTache() {
    let valeur = document.getElementById("Myinput").value;
    document.getElementById("text").innerHTML = "voici l'element que vous avait saisi: " + valeur
    console.log(valeur); 
}