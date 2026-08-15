# QR Code Component - Frontend Mentor

A simple, responsive QR code component built with React and Vite as part of the Frontend Mentor challenge.

## 📋 Project Overview

This project displays a clean, centered QR code card that encourages users to visit Frontend Mentor and improve their front-end development skills.

## ✅ What's Been Done So Far

### 1. **Project Setup**

- Initialized a React project using Vite as the build tool
- Configured package.json with necessary dependencies and scripts
- Set up ESLint for code quality and consistency

### 2. **Core Components**

- **App Component** (`src/App.jsx`): Main application component that serves as the container
- **QrCard Component** (`src/QrCard/index.jsx`): Displays the QR code image with accompanying text content

### 3. **Styling**

- **App.css**: Styles the main background with a light blue color, centers content, and includes responsive design for mobile devices
- **QrCard CSS** (`src/QrCard/index.css`): Styles the card component with:
  - White background card with rounded corners
  - QR code image with rounded borders
  - Responsive typography (heading and description text)
  - Mobile-first responsive design for screens up to 768px width

### 4. **Responsive Design**

- Desktop view: Card displays at 13rem width, centered on screen
- Mobile view (max-width: 768px): Card expands to 20rem width with adjusted padding
- Proper font sizing adjustments for different screen sizes

### 5. **Features**

- Displays QR code image from `images/image-qr-code.png`
- Clean, readable heading and description text
- Fully responsive layout that works on mobile and desktop
- Professional styling with proper spacing and typography

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build

## 📦 Dependencies

- **React** 19.2.8 - UI library
- **React-DOM** 19.2.8 - DOM rendering

## 🔧 Dev Dependencies

- **Vite** 8.2.0 - Build tool and dev server
- **ESLint** 10.8.0 - Code quality tool
- **React Hooks ESLint Plugin** - React-specific linting rules
- Other supporting dependencies for TypeScript support and React optimization

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open your browser and navigate to the provided local URL
4. The QR code component will be displayed in the center of the screen

## 📁 Project Structure

```
QR-Application/
├── src/
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── main.jsx          # Entry point
│   └── QrCard/
│       ├── index.jsx     # QR card component
│       └── index.css     # QR card styles
├── images/               # Image assets
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Design Features

- **Color Scheme**: Light blue background (#D3DCE6) with white card
- **Typography**: Trebuchet MS, Lucida Sans stack for accessibility
- **Spacing**: Consistent 1rem padding with proper alignment
- **Borders**: 10px border radius on images, 1rem on cards for modern look

## ✨ Next Steps (Future Enhancements)

- Add interactivity if needed
- Implement additional QR code generation functionality
- Add animations or transitions
- Further accessibility improvements

1. Share your solution page in the **#finished-projects** channel of the [community](https://www.frontendmentor.io/community).
2. Share on [X (formerly Twitter)](https://x.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in your post. We'd love to take a look at what you've built and help share it around.
3. Share your solution on [LinkedIn](https://www.linkedin.com/company/frontend-mentor/).
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback.

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
