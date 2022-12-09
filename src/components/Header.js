import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // const [yOffset, setYOffset] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // function handleScroll() {
  //   const currentYOffset = window.pageYOffset;
  //   const visible = yOffset > currentYOffset;

  //   setYOffset(currentYOffset);
  //   setVisible(visible);
  // }


  const [scrollDirection, setScrollDirection] = useState()

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY: 0
    }
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])
  

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform= { scrollDirection==="down"? "translateY(-200px)" : null }
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={100}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(social => (
                <a key={social.url} href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
