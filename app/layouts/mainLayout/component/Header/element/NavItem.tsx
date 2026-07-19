"use client";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

interface NavItemProps {
  item: {
    title: string;
    link?: string;
    subItems?: { title: string; link: string }[];
  };
  onClose?: () => void;
  isScrolled?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, onClose, isScrolled = false }) => {
  const router = useRouter();
  const textColor = isScrolled ? "#5a2a2a" : "white";
  const hoverColor = isScrolled ? "#8b2a3a" : "#e8b86b";
  const underlineColor = isScrolled ? "#8b2a3a" : "#e8b86b";

  if (item.subItems) {
    return (
      <Menu offset={[0, 8]} flip={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              _hover={{ 
                bg: "transparent", 
                color: hoverColor,
                transform: "translateY(-1px)",
              }}
              _expanded={{ 
                color: hoverColor,
                "& svg": {
                  transform: "rotate(180deg)",
                },
              }}
              rightIcon={
                <ChevronDownIcon 
                  transition="transform 0.3s ease" 
                  transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                />
              }
              variant="ghost"
              fontSize={{ lg: "16px", xl: "18px" }}
              color={textColor}
              textShadow={isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.3)"}
              fontWeight="500"
              p={0}
              transition="all 0.3s ease"
              _focus={{ boxShadow: "none" }}
            >
              {item.title}
            </MenuButton>
            <MenuList
              bg="white"
              border="none"
              boxShadow="0 15px 40px -10px rgba(0,0,0,0.2)"
              borderRadius="2xl"
              py={3}
              minW="220px"
              overflow="hidden"
              zIndex="popover"
              // No keyframe animation – appears instantly
            >
              <Box px={4} pb={2}>
                <Text fontSize="xs" fontWeight="700" color="#8b2a3a" letterSpacing="wider" textTransform="uppercase">
                  Explore {item.title}
                </Text>
                <Divider mt={2} borderColor="#f0e0d8" />
              </Box>
              {item.subItems.map((subItem) => (
                <MenuItem
                  key={subItem.title}
                  onClick={() => {
                    router.push(subItem.link);
                    if (onClose) onClose();
                  }}
                  _hover={{ 
                    bg: "#8b2a3a", 
                    color: "white",
                    pl: 6,
                  }}
                  _focus={{ bg: "#8b2a3a", color: "white" }}
                  color="#5a2a2a"
                  fontWeight="500"
                  transition="all 0.2s ease"
                  fontSize="14px"
                  py={2.5}
                  px={4}
                  borderRadius="lg"
                  mx={2}
                  my={0.5}
                >
                  <Box as="span" display="inline-block" mr={2} fontSize="12px">
                    ✦
                  </Box>
                  {subItem.title}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    );
  }

  return (
    <Box
      as="span"
      fontWeight="500"
      fontSize={{ lg: "16px", xl: "18px" }}
      color={textColor}
      textShadow={isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.3)"}
      position="relative"
      cursor="pointer"
      display="inline-block"
      px={1}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-4px",
        left: "50%",
        width: "0%",
        height: "2.5px",
        backgroundColor: underlineColor,
        borderRadius: "full",
        transform: "translateX(-50%)",
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      _hover={{
        color: hoverColor,
        transform: "translateY(-1px)",
        "&::after": {
          width: "70%",
        },
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      onClick={() => {
        if (item.link) router.push(item.link);
        if (onClose) onClose();
      }}
    >
      {item.title}
    </Box>
  );
};

export default NavItem;