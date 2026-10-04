# September 2026

## Assignment 01 - Web Fundamentals, HTML & JavaScript

The first assignment focuses on the fundamentals of **HTML and JavaScript**.

For Part A, I created a simple application website for **GeoDev Lab Africa**, a geospatial learning initiative focused on developing GIS developers and geospatial technology professionals across Africa.

For Part B, I worked through five JavaScript problems focused on objects, recursion, closures, and data validation.

---

# Part A - HTML

## GeoDev Lab Africa Application Form

The HTML assignment required the development of an application form inspired by the structure of an AltSchool application form.

The implementation was completed **without CSS**, allowing the focus to remain on HTML structure, semantics, forms, navigation, and accessibility.

### Objectives

* Understand the structure of an HTML document.
* Create multiple HTML pages.
* Implement navigation between pages.
* Build a structured application form.
* Practise semantic HTML.
* Practise accessible form design.
* Work with different HTML input types.
* Group related form elements using fieldsets.
* Create meaningful labels for form controls.
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

The [form.html](form.html) file contains the GeoDev Lab Africa application form.

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

### HTML Forms

The application form uses:

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

Different input types were also used:

```html
<input type="text">
<input type="email">
<input type="tel">
<input type="date">
<input type="number">
<input type="radio">
<input type="checkbox">
```

### Accessibility

Accessibility was considered through descriptive labels, associated form controls, logical field grouping, and accessible navigation.

```html
<label for="email">Email Address:</label>

<input
    type="email"
    id="email"
    name="email"
    required
>
```

Navigation was also labelled using:

```html
<nav aria-label="Main navigation">
```

### Global Navigation

Both pages contain navigation that allows users to move between the homepage and application form.

```html
<nav aria-label="Main navigation">
    <a href="index.html">Home</a>
    <a href="form.html">Application Form</a>
</nav>
```

---

# Part B - JavaScript

Part B focused on solving five JavaScript problems involving objects, recursion, closures, and validation.

## Problems

### Problem 1 - Deep Equal

Implemented `deepEqual(objA, objB)` to recursively compare two objects and determine whether they contain the same keys and values.

**Concepts:** Objects, recursion, `Object.keys()`, and nested data.

### Problem 2 - Object Diff

Implemented `diffObjects(oldObj, newObj)` to identify added, removed, and changed top-level properties.

**Concepts:** Object iteration, comparison, and object manipulation.

### Problem 3 - Deep Freeze

Implemented `deepFreeze(obj)` to recursively freeze an object and its nested objects.

**Concepts:** Recursion, `Object.freeze()`, and immutable objects.

### Problem 4 - Private Counter Factory

Implemented `createCounter()` using a closure to keep the counter value private while exposing increment, decrement, and a value getter.

**Concepts:** Closures, encapsulation, and getters.

### Problem 5 - Schema Validator

Implemented `validateSchema(obj, schema)` to check object properties against their expected JavaScript types.

**Concepts:** `typeof`, object iteration, validation, and arrays.

---

## Technologies Used

* HTML5
* JavaScript
* Git
* Git Bash
* GitHub
* Visual Studio Code
* Vim

No CSS was used for Part A because the assignment specifically required the implementation to be completed without CSS.

[view solution here](solution.js)
---

## What I Learned

This assignment strengthened my understanding of fundamental HTML and JavaScript concepts, including:

* Semantic HTML
* HTML forms
* Accessibility
* Page navigation
* JavaScript objects
* Recursion
* Closures
* Getters
* Object manipulation
* Data validation
* Git and GitHub workflows

These fundamentals provide the foundation for the more advanced software engineering concepts I will encounter throughout the programme.
