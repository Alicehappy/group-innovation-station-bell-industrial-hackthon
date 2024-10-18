import "./App.scss";
import "./styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EventsPage from "./pages/EventsPage/EventsPage.jsx";
import TherapyPage from "./pages/TherapyPage/TherapyPage.jsx";
import GroupPage from "./pages/GroupPage/GroupPage.jsx";
import Header from "./components/Header/Header";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/therapy" element={<TherapyPage />} />
        <Route path="/group/:id" element={<GroupPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
