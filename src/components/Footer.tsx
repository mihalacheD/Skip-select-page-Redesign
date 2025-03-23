import { Skip } from "@/hooks/useSkips";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

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
      bg='var(--gray)'
      color="white"
      p={4}
      borderTop='solid 0.2em'
      borderColor='gray.800'
      zIndex="10"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-around"
        align="center"
        gap={4}
      >

        <Flex direction="row" gap={4} >
          <Text fontSize="lg" fontWeight="bold" color='var(--lightgray)' >{selectedSkip.size} Yard</Text>
          <Text fontSize='xl' fontWeight='bold' color='var(--blue)'>£{selectedSkip.totalPricePerWeek}</Text>
          <Text fontSize='lg' color='var(--lightgray)'>{selectedSkip.hire_period_days} day hire</Text>
        </Flex>

        <Flex gap={4} direction='row' w="auto" justify='center' align='center'>
          <Button
             color='white'
             variant="subtle"
             borderRadius="lg"
             bg="gray.800"
             w={{ base: "75%", md: "100%"}}
             _hover={{ bg: "gray.700", transform: "scale(1.05)" }}
             _active={{ bg: "gray.600", transform: "scale(0.98)" }}
          >
          <Text fontSize={{ base: "md", lg: "lg"}} fontWeight='semibold'>Back</Text>
          </Button>

          <Button
             color='white'
             variant="subtle"
             borderRadius="lg"
             bg="var(--blue)"
             w={{ base: "75%", md: "100%"}}
             _hover={{ bg: "var(--lightblue)", transform: "scale(1.05)" }}
             _active={{ bg: "var(--blue)", transform: "scale(0.98)" }}
          >
           <Text fontSize={{ base: "md", lg: "lg"}} fontWeight='semibold'>Continue</Text>
           <ArrowRight />
          </Button>

        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
