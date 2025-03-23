import { Box, Flex, Text } from "@chakra-ui/react";
import { MapPin, Trash2, Truck, Shield, Calendar, CreditCard } from "lucide-react";

const pages = [
  { name: "Postcode", icon: MapPin },
  { name: "Waste Type", icon: Trash2 },
  { name: "Select Skip", icon: Truck },
  { name: "Permit Check", icon: Shield },
  { name: "Choose Date", icon: Calendar },
  { name: "Payment", icon: CreditCard },
];

const currentPage = "Select Skip";

const NavBar = () => {
  return (
    <Box
      w="100%"
      bg="black"
      py={4}
      px={2}
      overflowX="auto"
      display="flex"
      justifyContent="center"
    >
      <Flex
        gap={4}
        whiteSpace="nowrap"
        align="center"
        justify="center"
        minWidth="max-content"
      >
        {pages.map((page, index) => {
          const isCompleted = pages.findIndex((p) => p.name === currentPage) > index;
          const isActive = page.name === currentPage;

          return (
            <Flex key={page.name} align="center">
              <Flex align="center" gap={2}>
                <page.icon
                  size={25}
                  color={isActive || isCompleted ? "var(--blue)" : "var(--lightgray)"}
                />
                <Text
                  fontSize="lg"
                  fontWeight="medium"
                  color={isActive || isCompleted ? "white" : "var(--lightgray)"}
                >
                  {page.name}
                </Text>
              </Flex>
              {index < pages.length - 1 && (
                <Box
                  w={{ base: "10", md: "20" }}
                  h="0.5"
                  bg={ isCompleted ? "var(--blue)" : "var(--lightgray)"}
                  ml="4"
                />
              )}
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default NavBar;
