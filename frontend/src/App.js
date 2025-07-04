import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/Home";
import History from "./pages/History";


function App() {
  return (
    <div className="App">
      <Router>

        <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/Home" element={ <HomeComponent />}/>
          <Route path="/history" element={<History />} />
          <Route path="/:url" element={<VideoMeetComponent />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
