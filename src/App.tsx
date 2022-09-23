import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main/main';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import CreatePost from './pages/create-post/create-post';
import styled from "styled-components/";
import tw from "twin.macro";

const AppContainer = styled.div`${tw`h-full`}`
const RoutesContainer = styled.div`${tw` flex items-center justify-center w-full h-3/4`}`

function App() {
  return (
    <AppContainer className="App">
      <Router>
        <Navbar />
        <RoutesContainer className="appcontainer">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
        </RoutesContainer>
      </Router>

    </AppContainer >
  );
}

export default App;
