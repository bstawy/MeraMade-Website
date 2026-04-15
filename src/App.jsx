import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import BakeryPage from "./pages/bakery/BakeryPage";
import EventsPage from "./pages/events/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";

import Header from "./components/layout/header/Header";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bakery" element={<BakeryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
