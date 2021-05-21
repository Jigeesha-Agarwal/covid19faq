import React from 'react'
import {Box, Flex, Heading, Spacer} from '@chakra-ui/react'
import {ColorModeSwitcher} from './ColorModeSwitcher'

export const Navbar = ({ toggleColorFlag }) => {
    return(
         <div style={{  
                backgroundImage: "url(" + "https://www.brookings.edu/wp-content/uploads/2020/04/AdobeStock_332298426.jpeg" + ")",
                backgroundPosition: 'left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                    <Flex align="center" boxShadow="base" p="2" mb="2" >
                        <Box p="100">
                            <Heading size ="xl"  color ="white" textAlign= "centre" >COVID 19 SUPPORT</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <ColorModeSwitcher color="white" toggleColorFlag={toggleColorFlag} />
                        </Box>
                    </Flex>
        </div>
        
            );
};