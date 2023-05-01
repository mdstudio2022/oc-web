import logo from './logo.svg';
import './styles/fonts.css';
import './styles/index.css';
import './styles/mainpage(index).css';
import './styles/notfound.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indexpage from "./pages/indexpage/indexpage";
import Notfound from "./components/notfoundpage/notfound";
import Editor from "./editor/editor";
import React from "react";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={ <Indexpage /> }>

              </Route>
              <Route exact path="/editor" element={ <Editor /> }>

              </Route>
              <Route exact path="*" element={ <Notfound /> }>

              </Route>
          </Routes>
      </BrowserRouter>
  );
}
export default App;
