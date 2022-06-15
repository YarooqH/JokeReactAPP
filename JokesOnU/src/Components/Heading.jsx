import React from 'react'
import { Center, Flex, Text, VStack} from '@chakra-ui/react';
import '../Styles/Heading.css';

import Refresh from '../Assets/new-joke.png';

let Heading = () => {
  return (
    <div>
      <Flex float="right" className="heading">
        <VStack  spacing={4}>
          <img className='refresh-btn' src={Refresh} alt="new-joke" />
          <Text textColor='#FF611E' fontSize="2xl" fontWeight="bold">New Joke</Text>
        </VStack>
      </Flex>
    </div>
  );
}

export default Heading;