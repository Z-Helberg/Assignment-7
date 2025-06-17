## Zané Hair Studio – Consultation Booking Form

This project is part of my front-end development course. It simulates a user consultation booking experience on the career page of a stylist (Zané). The user can submit their details for a free consultation, and receive confirmation upon submission.

## PLEASE NOTE FILE NAMING CHANGE


-**career.html** was renamed to **booking.html** to improve clarity and make navigation simpler.
-**script.js** was renamed to **booking.js** to ensure the script file corresponds directly with the form page (booking.html), making it easier to manage and understand.

## Task 1: What the Form Does and How It Works with Vue

- On the **career.html** page, users are invited to book a **free consultation** with a simple call-to-action button.
- Aach of the fields values is saved in the createApp, and referenced when creating the vue component.
- The value is passed in using v-model.
- Clicking the button opens a **registration form** where the user fills in:
  - Full name
  - Email address
  - Phone number
  - Password and confirmation
- The input is continiously checked by using @input to validate as the user types.
- When the form is submitted:
  - **JavaScript validation** checks the inputs (detailed below) I tried to use the same validations as before, but in a way that works with vue.
  - If all data is valid, a modal is shown confirming submission, this is done by setting this.showModal = true;.




## Form Validation (JavaScript)

Form validation is handled in with vue components, and runs on form submission:

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

- Vue is still confusing and required a lot of trial and error to get working as expected.
