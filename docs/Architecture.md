### Feature-Based Architecture 

src/
 ├ features/
 │   ├ auth/
 │   │   ├ AuthPage.jsx
 │   │   ├ authSlice.js
 │   │   ├ authAPI.js
 │   │   └ authService.js
 │   ├ products/
 │   │   ├ ProductList.jsx
 │   │   ├ ProductDetails.jsx
 │   │   ├ productAPI.js
 │   │   └ productSlice.js
 │   └ cart/
 │       ├ CartPage.jsx
 │       ├ cartSlice.js
 │       └ cartAPI.js
 ├ components/   (shared reusable UI)
 │   ├ Button.jsx
 │   └ Modal.jsx
 ├ layouts/
 ├ hooks/
 ├ utils/
 ├ App.jsx