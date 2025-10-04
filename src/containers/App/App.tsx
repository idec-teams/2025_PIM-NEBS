import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping } from "../../utils";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";

const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${import.meta.env.VITE_TEAM_YEAR}_${import.meta.env.VITE_TEAM_NAME}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-primary flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { title, lead, banner, hideBanner, component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  {!hideBanner && <Header title={title || ""} lead={lead || ""} banner={banner || ""} /> }
                  <div className="flex-1 flex flex-col">
                    <Component />
                  </div>
                </>
              }
            />
          ),
        )}
        <Route
          path="*"
          element={
            <>
              <Header
                title="Not Found"
                lead="The requested URL was not found on this server."
                banner=""
              />
              <NotFound />
            </>
          }
        />
      </Routes>
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-2 "
          aria-label="Scroll to top"
        >
          <img src="./images/top.png" alt="Top" className="w-16 h-16 cursor-pointer hover:scale-110 transition-all " />
        </button>
      )}
    </div>
  );
};

export default App;