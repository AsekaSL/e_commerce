## Lazy loading

- Lazy loading is a performance optimization technique where components are loaded only when required instead of loading all components at initial rendering.

# When to use 

* When to use Lazy Loading

Use for:

✅ Pages
✅ Large Components
✅ Dashboards
✅ Charts
✅ Admin panels

# When NOT to use

- Button
- Navbar
- Footer

# Example

```tsx
const ProductDetails = lazy(() => import("./ProductDetails"));

function App() {

 const [open, setOpen] = useState(false);

 return (

  <>
    <button onClick={() => setOpen(true)}>
      View Details
    </button>

    <Suspense fallback={<h1>Loading...</h1>}>

      {open && <ProductDetails />}

    </Suspense>

  </>

 );
};
```

