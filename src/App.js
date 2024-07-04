import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Serif', serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #faf9f7;
  color: #333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: normal;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  font-size: 18px;
  line-height: 1.6;
`;

const Home = () => (
  <MainContent>
    <h2>Welcome to My Personal Website</h2>
    <p>This is a simple, clean React website inspired by the Inflection AI design.</p>
  </MainContent>
);

const About = () => (
  <MainContent>
    <h2>About Me</h2>
    <p>Here you can add information about yourself, your skills, and your interests.</p>
  </MainContent>
);

const Projects = () => (
  <MainContent>
    <h2>My Projects</h2>
    <p>This section can showcase your personal or professional projects.</p>
  </MainContent>
);

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Logo>Vivek Vajipey</Logo>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
          </Nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;