# October 2026

## GeoDev Lab Africa Application Form

The first assignment focuses on the fundamentals of **HTML and semantic web structure**.

For this assignment, I created a simple application website for **GeoDev Lab Africa**, a geospatial learning initiative focused on developing GIS developers and geospatial technology professionals across Africa.

The assignment required the development of an application form inspired by the structure of an AltSchool application form.

The implementation was intentionally completed **without CSS**, allowing the focus to remain on HTML structure, semantics, forms, navigation, and accessibility.

---

## Assignment Objectives

The objectives of this assignment were to:

* Understand the basic structure of an HTML document.
* Create multiple HTML pages.
* Implement navigation between pages.
* Build a structured application form.
* Practise semantic HTML.
* Practise accessible form design.
* Work with different HTML input types.
* Group related form elements using fieldsets.
* Create meaningful labels for form controls.
* Create a structured footer.
* Practise basic Git and GitHub workflows.

---

## Pages

### `index.html`

The [index.html](index.html) file serves as the homepage for the GeoDev Lab Africa application website.

It contains:

* GeoDev Lab Africa introduction
* Programme description
* Learning areas
* Target participants
* Application call-to-action
* Global navigation
* Footer information

### `form.html`

The [form.html](/form.html) file contains the GeoDev Lab Africa application form.

The form is divided into logical sections:

1. Personal Information
2. Location Information
3. Educational Background
4. GeoDev Lab Africa Programme
5. Application Questions
6. How Did You Hear About Us?
7. Declaration

---

## HTML Concepts Practised

This assignment provided an opportunity to practise several important HTML concepts.

### Semantic HTML

The pages use semantic elements such as:

```html
<header>
<nav>
<main>
<section>
<footer>
<address>
```

These elements provide meaningful structure to the webpage and make the content easier for browsers, assistive technologies, and developers to understand.

---

## HTML Forms

The application form makes use of several HTML form elements:

```html
<form>
<fieldset>
<legend>
<label>
<input>
<select>
<textarea>
<button>
```

Different input types were used depending on the information being collected.

Examples include:

```html
<input type="text">
<input type="email">
<input type="tel">
<input type="date">
<input type="number">
<input type="radio">
<input type="checkbox">
```

---

## Accessibility

Accessibility was considered throughout the assignment.

Form controls are associated with descriptive labels.

For example:

```html
<label for="email">Email Address:</label>

<input
    type="email"
    id="email"
    name="email"
    required
>
```

The `for` attribute connects the label to the corresponding input through the input's `id`.

Related form controls are also grouped using:

```html
<fieldset>
    <legend>Personal Information</legend>
</fieldset>
```

The navigation also includes an accessible label:

```html
<nav aria-label="Main navigation">
```

---

## Global Navigation

Both pages contain the same navigation structure.

```html
<nav aria-label="Main navigation">
    <a href="index.html">Home</a>
    <a href="form.html">Application Form</a>
</nav>
```

This allows users to move between the homepage and application form regardless of which page they are currently viewing.

---

## Technologies Used

For this assignment:

* HTML5
* Git
* Git Bash
* GitHub
* Visual Studio Code
* Vim

No CSS or JavaScript was used because the assignment specifically required the implementation to be completed without CSS.

---

## What I Learned

This assignment helped strengthen my understanding of the fundamentals of HTML and how webpages are structured.

I learned how to:

* Create an HTML document from scratch.
* Organise a project using multiple files.
* Connect pages using relative links.
* Build structured HTML forms.
* Use different input types.
* Create accessible form controls.
* Use semantic HTML.
* Group related form elements.
* Use Git Bash to create and manage files.
* Commit and push code to GitHub.

More importantly, it reinforced the idea that **good software development starts with understanding the fundamentals**.

Before building complex applications, APIs, GIS platforms, or AI-powered systems, I need to be comfortable with the underlying technologies that make those systems possible.
