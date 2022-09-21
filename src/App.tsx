import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main/main';
import Login from './pages/login';
import Navbar from './components/navbar/navbar';
import CreatePost from './pages/create-post/create-post';
import styled from "styled-components/";
import tw from "twin.macro";

const AppContainer = styled.div`${tw`flex items-center justify-center w-full h-full`}`

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppContainer className="appcontainer">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
        </AppContainer>
      </Router>

    </div >
  );
}

export default App;
