import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

const DropdownNavComponent = ({ mainheading, link1, link2, link3, to1, to2, to3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown-navbar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Heading as="h4" size="md">
        {mainheading}
      </Heading>
      {isOpen && (
        <div
          className="dropdown-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <Link to={to1}>{link1}</Link>
          <Link to={to2}>{link2}</Link>
          <Link to={to3}>{link3}</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownNavComponent;
