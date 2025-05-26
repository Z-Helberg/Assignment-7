# Zané Helberg Personal Portfolio Website


This project introduces a fun and interactive way for visitors to **learn more about the creator** through a single button click. Rather than displaying long paragraphs or static bios, the page offers **bite-sized facts** using a randomized popup box triggered by user interaction.
Some fun hint at the bottom on the page to send you on a search for a beagle somewhere. 


## Fun Fact Button::
## What user action triggers it?

- The **popup is triggered when the user clicks the "Give Me A Fun Fact 🐾" button**.
- Once clicked, a random fun fact appears in a custom message box.
- The user can then close the message box using the "Close" button.

## Why was this interaction chosen?

"One click with multiple data points instead of paragraphs or multiple buttons."

- It's a more interactive and user-friendly experience
- Reduces clutter by avoiding long bios or multiple info cards.
- Encourages users to*explore the page longer through curiosity.



## What does the interaction do?

- Shows a random fun fact from a list of personal and professional highlights.
- Keeps the content fresh and engaging with each click.
- Enhances user engagement and gives insight into the personality behind the brand.






## "Find the Beagle" Button
### 🖱️ What user action triggers it?

- The user must lick the button labeled `"mybutton"` to receive a fun challenge:
  
   “Somewhere on the page you will find a beagle. It is constantly moving. Once you find it, just click on it!”


### Why was this interaction chosen?

Instead of showing surprises immediately when the page loads, this button invites the user to feel like part of an interactive game.

- Encourages engagement rather than passive alerts.
- Helps reduce popup fatigue, especially on first visits.


### What does the interaction do?

- reveals a clue that there’s a moving beagle somewhere on the page.






## Popup- Moving Beagle Message


A Popup messages is loaded when you click on the Hobbies page. A beagle image moves randomly across the page, and the user is challenged to find and click it. When clicked, a congratulatory message is shown.

### What triggers this interaction?

- The animation and popup are triggered automatically
  - `setTimeout` delays the first message by **2 seconds** after the page loads.
  - The beagle starts moving right after the message appears.


### Why was this interaction chosen?

- It adds **a surprise element** without requiring any clicks.
- It encourages users to explore the page and adds an unexpected interaction.
- Users spend more time scanning the site, which increases engagement.
- I made it a quick moving beagle for the fun, it can be a bit slower to make it easier to catch.. but where's the fun in that?


### What does the interaction do?

- After 2 seconds (after lots of struggle), a popup alert tells the user:
  
  “Somewhere on the page there is a beagle. He is moving. Let's see if you can catch him.”

- The **beagle image** then begins to move randomly around the screen every second (`setTimeout` recursively calls `moveBeagle()`).
- When clicked on the beagl, popup alert- message for user to see:
  
“CONGRATULATIONS!!!! You've found the beagle”


## Challenges in JavaScript

- I feel like JavaScript isn’t as straightforward as HTML or CSS. I understand that it serves a completely different purpose — it adds interaction and logic rather than just structure or style. I’ll definitely need to put in more practice and self-study to really grasp its full potential. It was fun playing around with it, even if I’m not fully confident yet. I’m excited to keep learning and improving!