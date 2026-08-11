# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![QR Code Component Screenshot](./screenshot.jpg)

A clean, centered QR code card component that displays a QR code image with accompanying text, encouraging users to visit Frontend Mentor and improve their coding skills.

### Links

- Solution URL: [GitHub Repository](https://github.com/yourusername/qr-code-component)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS3 with responsive design
- Flexbox for layout
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- ESLint - Code quality

### What I learned

Through building this project, I reinforced my understanding of:

**React Component Structure:**
```jsx
const QrCard = () => (
  <section className="QR">
    <img src={imageqrcode} className="QR-img" />
    <div className="QRtextcontent">
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </section>
);
```

**Responsive CSS Design:**
```css
.QR {
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  width: 13rem;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .QR {
    width: 20rem;
  }
}
```

Key learnings:
- Building modular React components for better code organization
- Implementing responsive design with media queries
- Using Vite for fast development and optimized builds
- Creating reusable CSS patterns with proper spacing and typography
- Centering content using Flexbox on the main background

### Continued development

Areas I want to continue focusing on:

- Adding more interactive features (e.g., QR code scanning detection)
- Implementing QR code generation from dynamic input
- Adding smooth transitions and animations
- Improving accessibility with ARIA labels and semantic HTML
- Exploring CSS-in-JS solutions for component styling
- Testing components with React Testing Library

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- GitHub - [@yourusername](https://github.com/yourusername)
