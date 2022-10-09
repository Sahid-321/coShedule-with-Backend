import styles from "../Css/Navbar..module.css";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link as ReachLink } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        className={styles.heading}
      >
        {" "}
        <Link as={ReachLink} to="/">
          <img
            src="https://coschedule.com/img/cos-logo-full-color.svg"
            alt=""
            width={"200px"}
          />
        </Link>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          ></Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button 
            className="stop"
            as={"a"}
            // fontSize={"14px"}
            // fontWeight={400}
            variant={"link"}
            _hover={{
                background: "white",
                color: "#f37e5d",
              }}
              p={2}
                
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"#474747"}
          >
            
            <Link style={{textDecoration:"none"}}   as={ReachLink} to="/SignIn"> Sign In </Link>
            
          </Button>
          <Button
            className="stop"
            as={"a"}
            // fontSize={"14px"}
            // fontWeight={400}
            variant={"link"}
            _hover={{
                background: "white",
                color: "#f37e5d",
              }}
              p={2}
                
                fontSize={"sm"}
                fontWeight={"bold"}
                
                color={"#474747"}
          
          >
            
              Get A demo
            
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"14px"}
            
            fontWeight={600}
            color={"white"}
            bg={"#f37e5d"}
            _hover={{
              bg: "#f16b45",
            }}
          >
            
              Create My calender
            
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}











const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box   key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
              _hover={{
                background: "white",
                color: "#f37e5d",
              }}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={"bold"}
                
                color={"#474747"}
                
              >
                {navItem.label}
                {navItem.img}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav  key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Box>
        <button>
          <Link 
          
          
          as={ReachLink} to="/Pricing"
          _hover={{
            background: "white",
            color: "#f37e5d",
          }}
         

          p={2}
                
                fontSize={"sm"}
                fontWeight={"bold"}
                
                // color={linkColor}
                color={"#474747"}
                  >

            Price
          </Link>
        </button>
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem _hover={{
            background: "white",
            color: "#f37e5d",
          }}  key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <HStack
          mt={2}
          pl={4}
          borderLeft={1}
          borderBlockEndColor={"1px solid red"}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
          display={"inline-grid"}
          width={"200px"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </HStack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Products",
    children: [
      {
        label: (
          <Link as={ReachLink} to="/mtkcal">
            <b>Marketing Calender</b>
          </Link>
        ),
        subLabel:
          "A Callender is helps to you see schedule & share your marketing ",
        href: "#",
        img: "	https://coschedule.com/_next/image?url=%2Fimg%2Fpr…t%2Fmarketing-calendar-product-icon.png&w=64&q=75",
      },
      {
        label: (
          <Link as={ReachLink} to="/MarkSuit">
            <b>Marketing Suites</b>
          </Link>
        ),
        subLabel:
          "A family of agils marketing Product to co-ordinate your team Projects and Process",
      },
    ],
  },
  {
    label: "Why Coschedule",
    children: [
      {
        label: (
          <Link as={ReachLink} to="/Customer">
            <b> Customer Storeis</b>
          </Link>
        ),
        subLabel: "See how Coshedule  Customers have to found Success ",
      },
      {
        label: (
          <Link as={ReachLink} to="/Actionable">
            <b> Actionable Marketing</b>
          </Link>
        ),
        subLabel:
          "Get Your Customer ROI report & see what Your team could save by switching to coschedule ",
      },
    ],
  },
  {
    label: "Resource",
    children: [
      {
        label: (<b>TOOLS <Box as='button'  bg='tomato' color='white' px={3} h={5}>
        FREE!  
      </Box></b> ),
        subLabel: ( <p>Headline Analyzer,social message optimizer</p> )
        
      },
      {label: (<b>LEARN</b> ),
      subLabel: ( <p>marketing blogs,CoSchedule Guide, Marketing Dictionary
        </p> )

      },
    ],
  },
];

