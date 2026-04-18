import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageTransition from "./components/layout/PageTransition";
import { useSplash } from "./hooks/useSplash";

import HomePage from "./pages/home/HomePage";
import BakeryPage from "./pages/bakery/BakeryPage";
import EventsPage from "./pages/events/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";

import Header from "./components/layout/header/Header";

const App = () => {
  const location = useLocation();

  useSplash(1500);

  return (
    <>
      <header>
        <Header />
      </header>

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/bakery"
            element={
              <PageTransition>
                <BakeryPage />
              </PageTransition>
            }
          />
          <Route
            path="/events"
            element={
              <PageTransition>
                <EventsPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
