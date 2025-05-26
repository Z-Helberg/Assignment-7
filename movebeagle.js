
/* Content of the popup message but*/
document.addEventListener("DOMContentLoaded", function () {
   
/* images search - alert*/    
      const beagle = document.getElementById("beagle");

      const moveBeagle = function(){
        console.log("Going to move the beagle");
        const x =  Math.floor(Math.random() * 100);
        const y =  Math.floor(Math.random() * 100);
        beagle.style.top = ""+x+"vw";
        beagle.style.left = ""+y+"vh";
        setTimeout(moveBeagle, 1000);
      };

      beagle.addEventListener("click", function(){
        alert("CONGRATULATIONS!!!! You've found the beagle");

      });
 
      const message = document.getElementById("firstMessage")
        setTimeout(function(){
            alert("Somewhere on the page there is a beagle. He is moving, Let's see if you can catch him");
            moveBeagle();
        }, 2000)

});
  