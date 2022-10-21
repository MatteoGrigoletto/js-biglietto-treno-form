// button - Genera --> ticket calculation
const generate = document.getElementById("generate");
generate.addEventListener("click", function() {

   // get values from inputs
   const name = document.getElementById("name").value;
   const distance = document.getElementById("distance").value;
   const age = document.getElementById("age").value;

   // calculate ticket price
  
   let price = distance * 0.21;
   if (age == "minorenne") {
      price = (price * 0.8).toFixed(2);  
   } else if (age == "over 65") {
      price *= 0.6;
   }
   console.log(price)

 
});