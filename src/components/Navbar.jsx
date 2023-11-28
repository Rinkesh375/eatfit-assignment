import React, { useState } from 'react';
import { Grid, GridItem, Image, Flex, IconButton, Box } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"
import { HashLink as NavLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';

const links = [
  { text: 'Menu', to: '#menu' },
  { text: 'Testimonials', to: '#testimonials' },
  { text: 'About Us', to: '#about' },
  { text: 'Contact Us', to: '#contact' }
];

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid
      gridTemplateColumns={isMobile?"8fr 2fr":"2fr 2fr"}
      style={{
        alignItems: 'center',
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        position: 'sticky',
        top: '0rem',
        zIndex: 2,
        opacity: 0.8,
      }}
    >
      <GridItem>
        <Link to="/">
          <Image src={logo} alt="Eatfit-Logo" />
        </Link>
      </GridItem>

      <GridItem>
        {isMobile ? (
          <Flex style={{ justifyContent: 'space-around' }}>
            <IconButton
              icon={<FaBars />}
              aria-label="Toggle Menu"
              onClick={toggleMenu}
            />
            {isOpen && (
              <Box
                position="absolute"
                top="60px"
                right="0"
                p="4"
                backgroundColor="white"
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              >
                {links.map(({ text, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                    onClick={toggleMenu}
                  >
                    {text}
                  </NavLink>
                ))}
              </Box>
            )}
          </Flex>
        ) : (
          <Flex style={{ justifyContent: 'space-around' }}>
            {links.map(({ text, to }) => (
              <NavLink
                key={to}
                to={to}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                {text}
              </NavLink>
            ))}
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
};

export default Navbar;
