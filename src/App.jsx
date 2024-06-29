import {
  HomePage,
  ProductsPage,
  AboutUsPage,
  ContactUsPage,
  Product,
  Error,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { createContext, useState } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<HomePage />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      <Route path="/ContactUs" element={<ContactUsPage />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export const ShoppingCartContext = createContext(null);

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{ cartProducts, setCartProducts }}>
      <main className="relative h-dvh">
        <RouterProvider router={router} />
      </main>
    </ShoppingCartContext.Provider>
  );
};

export default App;
