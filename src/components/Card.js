import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  
  return (
    <Box borderRadius='lg' bg='white' color='black'>
      <Image src={imageSrc} borderRadius='lg' />
      <Box m={3}>
        <Heading size='xs' mb={3}>{title}</Heading>
        <Text fontSize='xs' mb={3} color="gray">{description}</Text>
        <Text justifyContent="flex-start" fontSize='xs'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>
    </Box>
  );
};

export default Card;
