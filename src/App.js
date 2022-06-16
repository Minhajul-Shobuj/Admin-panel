import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
