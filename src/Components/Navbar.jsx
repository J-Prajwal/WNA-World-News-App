import {
  Box,
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Button,
  VisuallyHidden,
  Avatar,
  Tabs,
  Tab,
  TabList,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
  AiFillBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Latest from "./Latest";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button w="full" variant="solid" leftIcon={<AiOutlineInbox />}>
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl">WNA</chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button variant="solid" leftIcon={<AiOutlineInbox />} size="sm">
                Inbox
              </Button>
              <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              rounded="sm"
              _hover={{
                color: "gray.800",
                _dark: {
                  color: "gray.600",
                },
              }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              World
            </Tab>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              Latest
            </Tab>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              Business
            </Tab>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              Custom
            </Tab>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              Billing
            </Tab>
            <Tab py={4} m={0}>
              Advanced
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Latest /> </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
            <TabPanel>4</TabPanel>
            <TabPanel>5</TabPanel>
          </TabPanels>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup
            display={{
              base: "none",
              lg: "block",
            }}
            ml="auto"
          >
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
