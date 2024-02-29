import React from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';

function Header() {
  return (
    <header className="header" style={headerStyle}>
      <div className="header-content">
        <h1 className="header-title">Your Name</h1>
        <NavigationMenu />
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#121212', // Dark background color
  color: '#fff', // White text color
  padding: '20px', // Add padding for content
  borderBottom: '1px solid #333', // Border at the bottom
};

export default Header;
