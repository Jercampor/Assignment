# Assignment

This project was made as a wiki for the game Helldivers 2, as such the code was made simple and standardised for replication of more data, with some pages still being a work in progress


When it comes to HTML I used sections and bootstrap for holding the information cards inside, and used bootstrap and CSS for the Navigation bar and look of the website, theres only 1 CSS and JS file which is used throughout every page

The code is similar for all pages, with the Contact, Quiz and Gallery being the most different.

All images are located inside 1 file



# Search bar code

Has a slight issue which I intend to fix, but it is very simple, using Javascript to find content that matches what the user input, by searching all text within the enemy-report sections, and hiding those that do not match what was written, currently it is too broad, I need to add a clause for the filter to only search for the name and classification

# Tooltip code

I used querySelectorAll and a forEach loop to initialize Bootstrap Tooltips across the site. This allows for data (like weapon stats) to appear instantly when a user hovers over a button, keeping the UI clean while providing quick info.

Rather than creating multiple modal elements, I implemented a single Universal Modal.When a See More button is clicked, the script uses getAttribute to pull specific data (title, image, description, and stats) from that button's Data Attributes and injects it into the modal's HTML. This ensures the website is lightweight, efficient, and easily scalable for more weapons.

# Quiz Code

The Quiz utilizes a scoring variable combined with a for loop and the template literal `q${i}` to efficiently iterate through all 10 questions. The script identifies whether an answer is correct, incorrect, or left empty by targeting the :checked radio buttons. Once the loop is complete, the data is passed to the quizResult element, which dynamically displays a final score and a performance-based message with distinct color coding to match the game's aesthetic.

# Contact Code

The Contact Form uses a custom validation script to ensure the data is correct before submission. The validateForm function prevents the default form submission to first check if all fields (Name, Email, Contact, and Feedback) are populated. If valid, the script triggers the mailTo function, which utilizes the window.location.href method to dynamically generate a "mailto" link. This opens the user's local email client and automatically populates the subject line and message body with the user's input.