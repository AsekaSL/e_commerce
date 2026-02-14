import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

// Lazy load all route components for code splitting
const HomePage = lazy(() => import("./features/home/HomePage"));
const ProductListingPage = lazy(() => import("./features/products/ProductListingPage"));
const ProductDetailsPage = lazy(() => import("./features/product_details/ProductDetailsPage"));
const CartPage = lazy(() => import("./features/cart/CartPage"));
const CheckoutPage = lazy(() => import("./features/checkout/CheckoutPage"));
const UserProfile = lazy(() => import("./features/UserProfile/UserProfile"));


// Loading component for better UX during code splitting
const pageLoader = () => (
  <div className='flex items-center justify-center min-h-screen bg-[#101922]'>
    <div className='flex flex-col items-center gap-4'>
      <div className='w-16 h-16 border-[#1173d4] border-t-transparent rounded-full animate-spin'></div>
      <p className='text-gray-400 text-sm'>Loading...</p>
    </div>
  </div>
)

/**
 * Root application component that provides the global layout and client-side route tree.
 *
 * Renders the application's top-level layout (background, fonts, and global styles) and configures routes for
 * home, products, product details, cart, checkout, account, and a 404 fallback.
 *
 * @returns The root JSX element that renders the application's layout and route configuration
 */
function App() {

  return (
    <body  className="bg-[#101922] font-display text-gray-100 antialiased transition-colors duration-300">
      <Suspense fallback={pageLoader()}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path="/account" element={<UserProfile />} />
          <Route path="*" element={<h1 className='text-center text-3xl mt-20'>404 - Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </body>
  )
}

export default App