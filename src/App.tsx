import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CatDetailsPage from "./pages/auth/CatDetailsPage";
import DonePage from "./pages/auth/DonePage";

export type PageType = "home" | "login" | "register" | "cat-details" | "done";

export const AppContext = {
  currentPage: "home" as PageType,
  setCurrentPage: (_page: PageType) => {}
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Update context
  AppContext.currentPage = currentPage;
  AppContext.setCurrentPage = setCurrentPage;

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "login":
        return <LoginPage />;
      case "register":
        return <RegisterPage />;
      case "cat-details":
        return <CatDetailsPage />;
      case "done":
        return <DonePage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}

export default App;
