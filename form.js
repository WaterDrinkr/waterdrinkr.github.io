function f1(val) { /** alert for the the new card form */
    alert("Card added!");
}

function f2(val) {  /** turns word boxes red onblur if no text in box and white if text in box*/ 
   var card = document.getElementById("cardn").value
   if (card == "") {
    val.style.background="red"
   }  else {
       val.style.background="white"
   }
}

