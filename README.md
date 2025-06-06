## Zané Hair Studio – Consultation Booking Form

This project is part of my front-end development course. It simulates a user consultation booking experience on the career page of a stylist (Zané). The user can submit their details for a free consultation, and receive confirmation upon submission.

## PLEASE NOTE FILE NAMING CHANGE


-**career.html** was renamed to **booking.html** to improve clarity and make navigation simpler.
-**script.js** was renamed to **booking.js** to ensure the script file corresponds directly with the form page (booking.html), making it easier to manage and understand.


## Task 1: What the Form Does and How It Works

- On the **career.html** page, users are invited to book a **free consultation** with a simple call-to-action button.
- Clicking the button opens a **registration form** where the user fills in:
  - Full name
  - Email address
  - Phone number
  - Password and confirmation
- When the form is submitted:
  - **JavaScript validation** checks the inputs (detailed below).
  - If all data is valid, the user is redirected to `submit.html`, which displays a thank-you message.




## Form Validation (JavaScript)

Form validation is handled in `booking.js`, and runs on form submission:

 **Full Name** -  Must include a space (to ensure both name and surname are entered)                         
 **Email** -  Must include an `@` character                                                              
 **Phone Number**  - Must be 10 digits and start with `0` (e.g., South African mobile format)                   
 **Password**   - Must include at least **1 number** and **1 special character**                             
**Confirm Password** - Must exactly match the password entered                                                 

If any validation fails, relevant error messages are displayed next to each input field, and submission is prevented.




## JavaScript Debugging & Validator Used

- I used **Safari on macOS** for development and testing.
- Errors and script issues were checked using **Inspect Element -> Console** in Safari's Developer Tools.
- No errors were found in the console during submission.


## Modal Interaction's 

Although the form appears on its own page, it functions like a modal interaction:

- The form is displayed prominently on screen with a **close button**, which brings the user back to the main career page.
- JavaScript is used to validate the form and redirect the user based on input success.



## Challenges Faced

- I attempted to add a **burger menu** to the navigation bar but got stuck during implementation. I plan to return to this at a later stage in the project. 
- Another challenge was writing functions in JavaScript. I often understand **what needs to happen**, but I’m still learning **how to write it clearly and correctly**.



##  Personal Reflections

- This was a valuable learning experience. It helped me practice:
  - DOM manipulation
  - Event listeners
  - Form validation
- I'm gaining confidence, especially with HTML and CSS.
- **JavaScript is still challenging**, especially understanding how functions work under the hood — but I will continue to practice!