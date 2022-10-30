import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar, { navbarSet } from './Navbar';

let pageItem = navbarSet.map((prop) => <Route key={prop[1]} path={prop[0]} element={prop[2]}/>);

const App=()=>{
  return(
    <HashRouter>
      <Navbar>
        <Routes>
          {pageItem}
        </Routes>
      </Navbar>
    </HashRouter>
  );
};

export default App;