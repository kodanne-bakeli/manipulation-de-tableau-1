function Afficher() {
  let pos1 = document.getElementById("numpos1").value
  let pos2 = document.getElementById("numpos2").value
  let pos3 = document.getElementById("numpos3").value
  let neg1 = document.getElementById("numneg1").value
  let neg2 = document.getElementById("numneg2").value
  let neg3 = document.getElementById("numneg3").value
  
  let tab1 = [pos1, pos2, pos3];
 
  let tab2=  [neg1, neg2, neg3];
if(tab1.find(x => x > 0) && tab2.find(x => x < 0)){

    let tab3 = [tab1, tab2.map(x => x = 0)]
  
  document.getElementById("resultat").value = tab3;
}else {
  alert("veuillez réessayer")
}



}