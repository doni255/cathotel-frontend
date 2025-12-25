import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CatDetailsPage from "./pages/CatDetailsPage";
import DonePage from "./pages/DonePage";

export type PageType = "login" | "register" | "cat-details" | "done";

export const AppContext = {
  currentPage: "login" as PageType,
  setCurrentPage: (_page: PageType) => {}
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("login");

  // Update context
  AppContext.currentPage = currentPage;
  AppContext.setCurrentPage = setCurrentPage;

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "register":
        return <RegisterPage />;
      case "cat-details":
        return <CatDetailsPage />;
      case "done":
        return <DonePage />;
      default:
        return <LoginPage />;
    }
  };

  return renderPage();
}

export default App;
