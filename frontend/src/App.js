import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Main from "./Components/Main";
import Cse from "./Routes/Cse";
import Ee from "./Routes/Ee";
import Ce from "./Routes/Ce";
import Footer from "./Components/Footer";
import Ie from "./Routes/Ie";
import Me from "./Routes/Me";
import Profile from "./Routes/Profile";
import Register from "./Routes/Register";
import AuthenticateUser from "./Components/AuthenticateUser";
import Welcome from "./Routes/Welcome";
import dataContext, { DataProvider } from "./dataContext";
import Upload from "./Routes/Transaction/Upload";
import { useEffect, useContext } from "react";
import Buy from "./Routes/Transaction/Buy";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<AuthenticateUser />} />
        <Route path="/exclusive" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="cse" element={<Cse />} />
          <Route path="ee" element={<Ee />} />
          <Route path="ce" element={<Ce />} />
          <Route path="ie" element={<Ie />} />
          <Route path="me" element={<Me />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upload/new-book" element={<Upload />} />
          <Route path="buy" element={<Buy />} />
        </Route>
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
