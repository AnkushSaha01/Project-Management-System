import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/react";

const ClerkProviderWithNavigation = ({ children }) => {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
    >
      {children}
    </ClerkProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ClerkProviderWithNavigation>
        <App />
      </ClerkProviderWithNavigation>
    </Provider>
  </BrowserRouter>,
);
