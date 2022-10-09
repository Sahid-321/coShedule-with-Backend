import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    
    FiSettings
} from 'react-icons/fi'

import styled from "styled-components"

import NavItem from './navitem'


// const HomeIcon = styled( FiHome) `

// color: white
// `


export default function Sidebar() {

    const [navSize, changeNavSize] = useState("small")
    return (
        <Flex
            pos="sticky"
            left="0"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
               
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu color='gray'/>}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
              <Link to="/Home" >    <NavItem  onClick={'active'} navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard.">
                 

                </NavItem>
                </Link>
           <Link to="/CalendarMain">    <NavItem navSize={navSize} color="white" icon={FiCalendar}  title="Calendar"  ></NavItem>
                
           </Link> 
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                   
                    <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                </Flex>
            </Flex>
        </Flex>
    )
}