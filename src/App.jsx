import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
// import { SelectedProductProvider } from "./context/SelectedProductContext";
import i18n from "./components/common/components/LangConfig";
import routes from "./routes";
import Loading from "./components/common/components/Loading";
import ScrollToTop from "./components/common/components/ScrollToTop";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
      
        // For demonstration, we'll just wait for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoaded(true); 
      } catch (error) {
        console.error("Error loading data:", error);
        // Handle errors (e.g., display error message)
      }
    };

    fetchData(); // Call the function to start data loading
  }, []);

  return (
    <Router>
      <div dir={i18n.t("dir")} className={`${i18n.t("font")} max-w-[2536px] mx-auto`}>
        <LangProvider>
          
          <CartProvider>
            <WishlistProvider>
              {isLoaded ? (
                <React.Fragment>
                  <Routes>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        element={<route.element />}
                      >
                        {route.children &&
                          route.children.map((childRoute, childIndex) => (
                            <Route
                              key={childIndex}
                              path={childRoute.path}
                              element={<childRoute.element />}
                            />
                          ))}
                      </Route>
                    ))}
                  </Routes>
                  <ScrollToTop />
                </React.Fragment>
              ) : (
                <Loading />
              )}
            </WishlistProvider>
          </CartProvider>
         
        </LangProvider>
      </div>
    </Router>
  );
}

export default App;
