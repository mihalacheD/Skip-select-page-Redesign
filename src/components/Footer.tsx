import { Skip } from "@/hooks/useSkips";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

interface Props {
  selectedSkip: Skip | null;
}


const Footer = ({ selectedSkip }: Props) => {
  if (!selectedSkip) return null;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
      bg="black"
      color="white"
      p={4}
      borderTop="1px solid gray"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={4}
      >
        {/* Secțiunea 1: Informații Skip */}
        <Flex direction="column" textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="lg" fontWeight="bold">{selectedSkip.size}</Text>
          <Text fontSize="md">{selectedSkip.totalPricePerWeek} GBP</Text>
          <Text fontSize="sm" color="gray.400">7-day hire</Text>
        </Flex>

        {/* Secțiunea 2: Butoane */}
        <Flex gap={4}>
          <Button variant="outline" colorScheme="gray">Back</Button>
          <Button colorScheme="blue">Continue</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
