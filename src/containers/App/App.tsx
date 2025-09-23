import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping } from "../../utils";
import { useEffect } from "react";
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

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <div className="bg-primary">
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
                  <div>
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
    </div>
  );
};

export default App;
