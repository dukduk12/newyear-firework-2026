# 🎆 2026 New Year Firework Card

A professional web-based interactive New Year greeting card project. This application allows users to experience real-time firework animations and create personalized messages for the year 2026.

---

## 📺 Demo

![Project Demo](docs/demo.mp4)

> **Note**: The card features smooth pastel-toned fireworks and dynamic text updates that respond instantly to user input.

---

## ✨ Key Features

* **Real-time Firework Animation**: Beautiful, high-performance pastel fireworks powered by `p5.js`.
* **Custom Messaging**: Users can input their own New Year wishes, which are reflected on the card in real-time.
* **Traditional Aesthetics**: Displays the 2026 Zodiac year (**丙午年 - Year of the Red Horse**) with modern neon CSS effects.
* **Fully Responsive**: Optimized layout for both mobile devices and desktop browsers.

---

## 🛠 Tech Stack

* **Framework**: React (Vite)
* **Animation**: p5.js / HTML5 Canvas
* **Styling**: CSS3 (Custom Neon Glows & Flexbox)

---

## 🚀 Getting Started

### Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    cd newyear-firework
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Launch the development server**
    ```bash
    npm run dev
    ```

### Usage

1.  Open `http://localhost:5173` in your browser.
2.  Type your custom greeting in the message input field.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── FireworkCanvas.jsx  # Firework logic & Canvas rendering
│   └── MessageInput.jsx    # UI for user message input
├── App.jsx                 # Main application logic & Sharing features
├── App.css                 # Styling for the card and neon effects
└── main.jsx                # Application entry point
```

> Future improvements:
> * Export animation as GIF or MP4
> * Support multiple fireworks themes
> * Add custom colors for text and fireworks