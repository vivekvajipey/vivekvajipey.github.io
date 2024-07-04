import React, { useState } from 'react';

const AppContainer = ({ children }) => (
  <div style={{ 
    fontFamily: 'Georgia, serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#faf9f7',
    color: '#333',
    minHeight: '100vh',
    lineHeight: 1.6
  }}>
    {children}
  </div>
);

const Header = ({ children }) => (
  <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '60px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '20px'
  }}>
    {children}
  </header>
);

const Logo = ({ children }) => (
  <h1 style={{
    fontSize: '28px',
    fontWeight: 'normal',
    margin: 0
  }}>
    {children}
  </h1>
);

const Nav = ({ children }) => (
  <nav style={{
    display: 'flex',
    gap: '30px'
  }}>
    {children}
  </nav>
);

const NavLink = ({ children, isActive, onClick }) => (
  <a 
    href="#" 
    onClick={onClick}
    style={{
      textDecoration: 'none',
      color: '#333',
      fontWeight: isActive ? 'bold' : 'normal',
      fontSize: '18px'
    }}
  >
    {children}
  </a>
);

const MainContent = ({ children }) => (
  <main style={{
    fontSize: '18px',
    lineHeight: '1.8'
  }}>
    {children}
  </main>
);

const Section = ({ children, title }) => (
  <section style={{
    marginBottom: '40px',
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }}>
    <h2 style={{ 
      fontSize: '36px', 
      marginBottom: '20px',
      fontWeight: 'normal'
    }}>{title}</h2>
    {children}
  </section>
);

const PlaceholderImage = () => (
  <div style={{
    width: '100%',
    height: '200px',
    background: 'linear-gradient(45deg, #f3ec78, #af4261)',
    borderRadius: '12px',
    marginBottom: '20px'
  }} />
);

const UpdatedWebsitePreview = () => {
  const [activePage, setActivePage] = useState('Home');

  const pages = {
    Home: (
      <>
        <Section title="Welcome">
          <PlaceholderImage />
          <p>This is a simple, clean React website inspired by the Inflection AI design. It showcases a minimalist approach with a focus on typography and whitespace.</p>
        </Section>
      </>
    ),
    About: (
      <>
        <Section title="About Me">
          <p>Here you can add information about yourself, your skills, and your interests. The clean design helps to highlight your content and make it easy to read.</p>
        </Section>
      </>
    ),
    Projects: (
      <>
        <Section title="My Projects">
          <PlaceholderImage />
          <p>This section can showcase your personal or professional projects. Each project could be presented in a card-like format, similar to this section's design.</p>
        </Section>
      </>
    )
  };

  return (
    <AppContainer>
      <Header>
        <Logo>Vivek Vajipey</Logo>
        <Nav>
          {Object.keys(pages).map(page => (
            <NavLink 
              key={page} 
              isActive={activePage === page}
              onClick={() => setActivePage(page)}
            >
              {page}
            </NavLink>
          ))}
        </Nav>
      </Header>
      <MainContent>
        {pages[activePage]}
      </MainContent>
    </AppContainer>
  );
};

export default UpdatedWebsitePreview;