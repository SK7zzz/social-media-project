import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main/main';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import CreatePost from './pages/create-post/create-post';
import styled from "styled-components/";
import tw from "twin.macro";

const AppContainer = styled.div`${tw`h-full`}`

function App() {
  return (
    <AppContainer className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>

    </AppContainer >
  );
}

export default App;
