import React from 'react';
import './App.css';
import Navbar from './NavBar';
import TopBanner from './Blah';
import HomeInfo from './Home';
import MovieList from './Movies';
import { Link, Route, Routes } from 'react-router-dom';
import PodcastInfo from './Podcasts';
import styled from 'styled-components';
import './styles.css';

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'blue',
};

function App() {
  return (
    <>
      {/* <NavUnlisted>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/podcasts" style={linkStyle}>
          Podcasts
        </Link>
        <Link to="/movies" style={linkStyle}>
          Movies
        </Link>
      </NavUnlisted> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeInfo />} />
          <Route path="/podcasts" element={<PodcastInfo />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </div>
      {/* <Routes>
        <Route path="/" element={<HomeInfo></HomeInfo>} />
        <Route path="/podcasts" element={<PodcastInfo></PodcastInfo>} />
        <Route path="/movies" element={<MovieList></MovieList>} />
      </Routes> */}
    </>
  );
}

export default App;
