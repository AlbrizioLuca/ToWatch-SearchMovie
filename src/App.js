import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/InfoReact';
import Liste from './pages/ListeChoseAFaire';
import Fetch from './pages/RequetesFetch';
import MovieSearch from './pages/MovieApi';
import NotFound from './pages/NotFound';

export default function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="to-do-list" element={<Liste />}></Route>
          <Route path="fetch-request" element={<Fetch />}></Route>
          <Route path="search-movie" element={<MovieSearch />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}