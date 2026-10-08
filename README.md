# Student Enrollment Form

A front-end practice assignment: a single-page student enrollment form built with HTML, CSS, JavaScript and Bootstrap 5. Valid entries are added to an "Enrolled Students" table next to the form.

## Features

- Form fields for name, email, website and image link, plus gender (radio buttons) and skills (Java, HTML, CSS checkboxes).
- Regex-based validation for the name, email, website and image link fields, with a "Valid"/"Invalid" message and a green or red border on each field.
- All fields are required: at least one gender and one skill must be selected before a student is enrolled.
- "Enroll Student" adds a row to the table showing the name, gender, email, website (as a link that opens in a new tab), selected skills and the image from the given link.
- "Clear" resets the form.
- Bootstrap tooltips on labels, inputs and buttons.

Enrolled students are kept only in the page; they are not saved anywhere and are lost when the page is reloaded.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.1.3 (loaded from the jsDelivr CDN)

## Project Structure

```
.
├── assignment.html   # Page markup: form and enrolled students table
├── assignment.css    # Custom styles
└── assignment.js     # Validation and table update logic
```

## How to Run

No build step or server is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/iSouvikKhan/Student-Enrollment-Form.git
   cd Student-Enrollment-Form
   ```
2. Open `assignment.html` in a web browser (double-click it, or use `start assignment.html` on Windows, `open assignment.html` on macOS, `xdg-open assignment.html` on Linux).

An internet connection is required for the Bootstrap styles and tooltips, which are loaded from a CDN.

## Usage

1. Fill in the name, email, website and image link (for example, a direct URL to a `.jpg` or `.png` image).
2. Choose a gender and at least one skill.
3. Click **Enroll Student**. If every field is valid, the student appears in the "Enrolled Students" table and the form is cleared.
4. Click **Clear** to reset the form without enrolling.
