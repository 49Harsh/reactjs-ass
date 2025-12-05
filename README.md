# 🛍️ ShopHub - React Product Management App

Hey there! 👋 This is a React application I built for managing products. It fetches real data from the Fake Store API (as per the assignment) and uses **Context API** for state management along with **Tailwind CSS** for styling.

## 🎯 What It Does

### ✅ Key Features

1.  **User Authentication**

    - I've built a simple login system.
    - It remembers you! Your login state is saved in session storage, so you don't get logged out if you refresh the page.
    - **Try it out:** Username: `user`, Password: `password`

2.  **Product Dashboard**

    - Displays all products in a clean, responsive grid.
    - Each card shows the essential stuff: image, title, price, category, and rating.

3.  **Detailed View**

    - Click on any product to see the full details in a nice modal overlay.
    - You can see the full description, reviews, and larger images here.

4.  **Manage Products**

    - **Edit:** You can update product details right from the modal. The UI updates instantly (optimistic updates) so it feels super snappy.
    - **Delete:** Remove products with a confirmation check. Again, the UI updates immediately.

5.  **Search & Filter**

    - Find what you need quickly. Search by name, description, or category.
    - Filter products by specific categories using the dropdown.
    - The search is "debounced" (it waits for you to stop typing), so it doesn't lag.

6.  **Pagination**
    - To keep things tidy, I show 12 products per page. You can easily navigate through the pages.

---

## ⚡ Under the Hood (Technical Details)

- **Performance:**
  - I used `useMemo` to make sure filtering and pagination don't slow things down.
  - Search is debounced to save resources.
  - Images are lazy-loaded for faster initial page loads.
- **UI/UX:**
  - Designed with a "Glassmorphism" look (frosted glass effect).
  - Fully responsive – looks great on your phone, tablet, or laptop.
  - Includes a Dark Mode that automatically respects your system settings.

## 📁 Project Structure

Here's how I organized the code:

```
aman-r/
├── src/
│   ├── components/          # Reusable UI blocks (Header, Cards, Modals)
│   ├── pages/               # Main pages (Login, Products)
│   ├── context/             # Global state (Auth & Products data)
│   ├── services/            # API calls (keeping them separate is cleaner)
│   ├── utils/               # Helper functions
│   ├── constants/           # Config values
│   └── App.jsx              # Main entry point
```

## 🚀 How to Run It

1.  **Clone the repo:**

    ```bash
    git clone <repository-url>
    cd aman-r
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Fire it up:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Go to `http://localhost:5173`

## 🛠️ Tech Stack

- **React 18** - The core library.
- **Vite** - For lightning-fast development and building.
- **Context API** - For managing app-wide state (Products, Auth).
- **React Router v6** - For navigation.
- **Axios** - For making HTTP requests.
- **Tailwind CSS** - For rapid and beautiful styling.

## 👨‍💻 Developer Notes

### Why Context API?

I initially considered other libraries, but **Context API** was the best fit here because:

- It's built into React (no extra heavy dependencies).
- It's perfect for global data like "User Auth" and "Product List" that many components need.
- It keeps the bundle size small and the architecture simple.

### Known Limitations

- Since I'm using the **Fake Store API**, changes (like edits or deletes) aren't _actually_ saved to a real server database. They will reset if you refresh the page. But I've made the UI act as if they are saved for a better experience!
- If you clear your browser session, you'll be logged out.

---

**Built with ❤️ using React.**
