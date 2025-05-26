
/* Content of the popup message but*/
document.addEventListener("DOMContentLoaded", function () {
    const facts = [
        "I’m a cancer survivor — officially 5 years in remission as of 14 June 2025!",
        "I have 2 Beagles. Bella and Benji.",
        "I worked at a corporate salon for 6 years, and proudly earned my way up to Top Stylist and Salon Manager by year 5.",
        "I married the love of my life on 26 April 2025 — best day ever!",
        "I specialize in creative hair color and extensions — if it’s bold, I’m in!",
        "I’ve turned my passion into a purpose by building my own brand, Zané Hair Studio.",
        "I’m not just your stylist — I’m your hype girl, your hair therapist, and your biggest fan.",
        "I love pink hair, gold accents, and anything with a touch of glam.",
        "I was diagnosed it Hopkins-Lymphona in Nov 2019, got Chemo till May 2020- yes, through COVID Lockdown.",
        "I’m a big believer in self-care, strong coffee, and making every client feel like royalty.",
        "My clients become friends — I’m all about real connections and real results.",
        "I’m a goal-getter who went from assistant to boss — and now I’m chasing dreams even bigger than hair!",
        "I've had Pink hair for 4 years",
        "Botswana is my dream vacation",
        "We are moving to Australia soon, Where we'll stay in Brisbane.",
        "I already closed the salon in South Africa, it is sad, but we are looking forward to our adventure and hopefully build a new succesfull truimph",
    ];
 

    const middleButton = document.getElementById("fun-facts");
    const messageBox = document.getElementById("messageBox");
    const closeButton = document.getElementById("close-button");
    const messageboxcontent = document.getElementById("messageBoxContent");


    middleButton.addEventListener("click", function () {
        messageBox.style.display = "block";
        if (facts) {
            const randomIndex = Math.floor(Math.random() * facts.length);
            messageboxcontent.textContent = facts[randomIndex];
          }
      });
    
      closeButton.addEventListener("click", function () {
        messageBox.style.display = "none";
      });



  /* bottom button*/
  
    const button = document.getElementById("mybutton");

        button.addEventListener("click", function(){
        alert("Somewhere on the page you will find a beagle. It is constantly moving. Once you find it, just click on it!");
        });
});
  