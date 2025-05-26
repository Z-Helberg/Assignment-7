document.addEventListener("DOMContentLoaded", function () {
    const consultation = [
        "What are your hair goals for today's visit?",
        "What hair color are you hoping to achieve, and why?",
        "Have you colored your hair before? If yes, when and what was done?",
        "What is your natural hair color?",
        "How would you describe your hair type? (Fine, thick, curly, straight, etc.)",
        "What is the current condition of your hair? Rate it out of 10.",
        "Do you use heat tools often? (e.g., flat iron, curling wand, hair dryer)",
        "Do you have any known allergies or sensitivities to hair products?",
        "How often do you wash your hair?",
        "How would you describe your face shape? (Round, oval, heart, square, etc.)",
        "Do you have any inspiration photos or styles you love?",
        "Do you want something low-maintenance or are you open to regular upkeep?",
        "Are you open to cutting some length if it helps with overall health or shape?",
        "Do you struggle with any hair concerns like frizz, breakage, or thinning?",
        "What products are you currently using on your hair?",
        "Do you prefer a specific finish: sleek, bouncy, natural, textured?",
        "Would you like to add treatments today, like Olaplex or a moisture boost?",
        "Are you interested in hair extensions now or in the future?",
        "Is there anything you’ve had done in the past that you didn’t like?",
        "How much time do you typically spend styling your hair daily?",
    ];

    const middleButton = document.getElementById("consultation");
    const messageBox = document.getElementById("messageBox");
    const closeButton = document.getElementById("close-button");
    const messageboxcontent = document.getElementById("messageBoxContent");


    middleButton.addEventListener("click", function () {
        messageBox.style.display = "block";
        if (consultation) {
            const randomIndex = Math.floor(Math.random() * consultation.length);
            messageboxcontent.textContent = consultation[randomIndex];
          }
      });
    
      closeButton.addEventListener("click", function () {
        messageBox.style.display = "none";
      });
    });