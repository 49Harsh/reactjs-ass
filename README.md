markdown# 🛍️ ShopHub - React Product Management Application

it is a react application for managing products It fetches data from fake store api as you give me in assignment and uses react query and tailwind css

## 🎯 Features

### ✅ What I've Implemented

1. **User Authentication**

   - Simple login page with static credentials
   - Login state saves in session storage (you stay logged in even after page reload)
   - Protected routes (products page is only accessible after login)
   - Demo login details: username `user` and password `password`

2. **Product List**

   - All products shown in grid layout
   - Each product card has:
     - Product image
     - Title
     - Price (in USD format)
     - Category badge
     - Rating (stars and how many people rated)

3. **Product Detail View**

   - Complete product details in modal overlay
   - Full description
   - Rating score and reviews count
   - High quality product images

4. **Product Update**

   - Can edit from detail view itself
   - Can update title, price, description and category
   - Optimistic UI updates (cache updates instantly)
   - Sends PUT request to Fake Store API

5. **Product Delete**

   - Delete button with confirmation modal
   - UI updates instantly after deletion
   - Sends DELETE request to API

6. **Search & Filter**

   - Real-time search in title, description and category
   - Dropdown to filter by category
   - Search is debounced for better performance

7. **Pagination**
   - 12 products per page
   - Controls to change pages
   - Shows how many results are there

### ⚡ Technical Stuff

- **React Query** used for data fetching and caching
  - Intelligent caching (doesn't go stale for 5 minutes)
  - Automatic refetch on window focus
  - Optimistic updates in mutations
  - Cache invalidation on update/delete
- **Performance Optimizations**
  - Filtered and paginated data is memoized
  - Search input is debounced
  - Images lazy load
  - Skeleton loaders until data fetches
  - Minimum re-renders
- **Modern UI/UX**
  - Glassmorphism design
  - Smooth animations and transitions
  - Dark mode support
  - Mobile-first responsive layout
  - Good loading states and error handling
  - Toast-like notifications

## 📁 Project Structure

```
aman-r/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ErrorMessage.jsx
│   │   ├── Header.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetailModal.jsx
│   │   └── SkeletonGrid.jsx
│   ├── pages/               # Page components
│   │   ├── LoginPage.jsx
│   │   └── ProductsPage.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useProducts.js
│   ├── services/            # API services
│   │   └── api.js
│   ├── context/             # React Context
│   │   └── AuthContext.jsx
│   ├── utils/               # Helper functions
│   │   └── helpers.js
│   ├── constants/           # Constants
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 How to Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone
cd aman-r
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open this link in browser:

```
http://localhost:5173
```

### Login Credentials

```
Username: user
Password: password
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server (very fast)
- **React Query** - For data fetching and state management
- **React Router v6** - For routing
- **Axios** - For API calls
- **Tailwind CSS** - For styling
- **Fake Store API** - For product data

## 📦 Available Commands

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run preview` - Previews production build
- `npm run lint` - Checks code with ESLint

## 🎨 Design Features

- **Glassmorphism** - Modern glass-like UI
- **Gradient Backgrounds** - Colorful gradients
- **Animations** - Smooth hover and transition effects
- **Responsive** - Works well on mobile, tablet and desktop
- **Dark Mode** - Automatic dark mode support
- **Custom Scrollbar** - Scrollbar is also styled
- **Loading States** - Skeleton loaders and spinners

## 🔧 Configuration

### React Query Config

```javascript
{
  staleTime: 5 * 60 * 1000,      // 5 minutes
  cacheTime: 10 * 60 * 1000,     // 10 minutes
  refetchOnWindowFocus: true,     // Refresh when coming back to tab
  refetchOnReconnect: true,       // Refresh when internet reconnects
  retry: 1                        // Retries once
}
```

### Pagination

- 12 products shown per page (you can change this in `src/constants/index.js`)

## 🌟 Important Features in Detail

### 1. Intelligent Caching

React Query automatically caches API responses and reuses them when component remounts, so unnecessary network requests don't happen.

### 2. Window Focus Refetch

When you come back to the application tab, React Query automatically refetches data so you see the latest info.

### 3. Optimistic Updates

When you update or delete a product, UI updates instantly without waiting for server response. You get instant feedback.

### 4. Session Persistence

Login state saves in session storage, so you stay logged in after page refresh (until you close the browser tab).

### 5. Debounced Search

Search input is debounced (300ms delay) so filtering doesn't happen repeatedly while typing.

## 🐛 Error Handling

- User-friendly messages on network errors
- Retry buttons for failed requests
- Loading states for all async operations
- Validation in login and edit forms

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px to 1024px
- Desktop: > 1024px

## 🎯 Performance Optimizations Done

1. **Memoization** - `useMemo` for heavy calculations
2. **Debouncing** - Search input is debounced
3. **Lazy Loading** - Images load only when needed
4. **Code Splitting** - Split based on routes
5. **Efficient Re-renders** - Component structure is optimized

## 📄 API Endpoints Used

- `GET /products` - Fetches all products
- `GET /products/:id` - Fetches single product
- `GET /products/categories` - Fetches categories
- `PUT /products/:id` - Updates product
- `DELETE /products/:id` - Deletes product

## 🤝 Contributing

This is an assignment project. For production use, these things should be added:

- Real authentication with JWT
- Proper error boundaries
- Unit and integration tests
- CI/CD pipeline setup
- Analytics and monitoring

## 📝 License

Made for educational purposes.

## 👨‍💻 Developer Notes

### State Management Strategy

- **React Query** handles server state (API data)
- **React Context** used for auth state
- **Local State** for UI state (modals, forms)

### Why Used React Query?

- Automatic caching and background updates
- Built-in loading and error states
- Optimistic updates support
- Refetching on window focus
- Request deduplication (same request doesn't go multiple times)
- Less boilerplate code

### Code Quality

- Used functional components with hooks
- Made reusable components
- Clear separation of concerns
- Followed consistent naming
- Added comments where needed

---

**Built with ❤️ using React and modern web tech**

---

## Some Issues That Might Happen

- Sometimes API responds slowly so loading might take a bit longer
- Fake Store API is limited so all features don't fully work (edit and delete only shows in UI, doesn't happen in database)
- You'll get logged out if session storage clears

## Future Improvements

- Can integrate with real backend
- Can add more filters (price range, by rating)
- Can add cart functionality
- Wishlist feature
- Product comparison
- Better image zoom
