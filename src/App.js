import Details from "./Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <BrowserRouter>
  <h1>Adopt Me!</h1>
  <Routes>
    <Route path="/details/:id" element={<Details />} />
    <Route path="/" element={<SearchParams />} />
  </Routes>
</BrowserRouter>
)}

render(<App />, document.getElementById("root"));
