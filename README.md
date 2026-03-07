# Form Validation UI (Sign In / Register)

## Overview

This project is a simple **Sign In and Register form interface** built using **HTML, CSS, and JavaScript**.
The interface allows users to switch between a **Sign In form** and a **Register form**, and includes basic client-side validation.

The goal of this project was to practice **DOM manipulation, event handling, and form validation using vanilla JavaScript**.

---

## Features

* Toggle between **Sign In** and **Register** forms
* Basic **client-side form validation**
* Password confirmation check in the register form
* Input field validation for empty values
* Simple and responsive UI layout
* Button state changes when switching forms

---

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – DOM manipulation and validation logic

---

## Project Structure

```
project-folder/
│
├── index.html
├── style.css
└── script.js
```

---

## How It Works

### Form Switching

Two buttons allow the user to switch between the **Sign In** and **Register** forms.
JavaScript listens for click events and toggles the visibility of the forms.

### Register Validation

When the register form is submitted:

1. The script checks if all fields are filled.
2. It verifies that the password and confirm password fields match.
3. If validation fails, form submission is prevented.

### Sign In Validation

When the sign-in form is submitted:

1. The script checks that the username and password fields are not empty.
2. If fields are empty, submission is prevented.

---

## Learning Goals

This project helped practice:

* DOM element selection
* Event listeners
* Form submission handling
* Preventing default browser behavior
* Basic client-side validation
* Simple UI state changes

---

## Future Improvements

Possible improvements for this project:

* Use **CSS classes instead of inline styles**
* Add **better error messages in the UI instead of alerts**
* Improve **form accessibility**
* Add **localStorage for remembering users**
* Add **stronger password validation**
* Improve UI responsiveness

---

## Author

Piyush Kumar
