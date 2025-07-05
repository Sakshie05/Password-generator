#  React Password Generator

A sleek and responsive **Password Generator** app built with **React** and **Tailwind CSS**.  
Users can customize the password length, choose to include numbers and special characters, and easily copy the result to the clipboard.

---

##  Features

-  Generate random, secure passwords
-  Adjustable password length (4–32 characters)
-  Toggle inclusion of **numbers**
-  Toggle inclusion of **special characters**
-  One-click **copy to clipboard** feature
-  Beautiful UI with **Tailwind CSS**
-  Built with modern React hooks (`useState`, `useEffect`, `useRef`, `useCallback`)

---

## Tech Stack

- **React**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Vite (or Create React App, depending on your setup)**

---

## How It Works

- The app uses `useState` to track user preferences like password length, numbers, and special characters.
- `useEffect` ensures a new password is generated automatically whenever preferences change.
- `useCallback` memoizes the generation function for performance.
- `useRef` enables one-click copying of the generated password.

---



