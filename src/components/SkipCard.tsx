import { Skip } from "@/hooks/useSkips"
import { Badge, Box, Button, Card, Flex, Image, Text} from "@chakra-ui/react"
import cardImg from '../assets/waste-container.jpg'
import { ArrowRight, TriangleAlert } from 'lucide-react';

interface Props {
  skip: Skip,
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: Props) => {
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;


  return (
    <Card.Root
    p={6}
    borderRadius="xl"
    border='solid 0.2em'
    height="100%"
    display="flex"
    flexDirection="column"
    maxW="max"
    transition="all 0.3s ease-in-out"
    bg={isSelected ? "var(--transparentblue)" : "var(--gray)"}
    _hover={isSelected ? {} : { borderColor: 'var(--lightblue)', boxShadow: "md"  }}
    position="relative"
    borderColor={isSelected ? "var(--blue)" : "gray.800"}
    opacity={isDisabled ? 0.6 : 1}
    cursor={isDisabled ? "not-allowed" : "pointer"}
    onClick={isDisabled ? undefined : onSelect}
  >

    <Box position="relative">
      <Image
        src={cardImg}
        alt={skip.postcode}
        objectFit="fill"
        borderRadius="xl"
        mb={4}
      />
      <Flex position="absolute" bottom="8" left="4" flexDirection="column" gap="2">
        {!skip.allowed_on_road && (
          <Badge
            bg="black"
            color="yellow.500"
            px={3}
            py={2}
            fontSize="large"
          >
            <TriangleAlert /> Private Property Only
          </Badge>
        )}

        {!skip.allows_heavy_waste && (
          <Badge
            bg="black"
            color="red.500"
            px={3}
            py={2}
            fontSize="large"
          >
             <TriangleAlert /> Not Suitable for Heavy Waste
          </Badge>
        )}
      </Flex>
    </Box>

      {/* Badge for Skip size */}
     <Badge
          position="absolute"
          top="6"
          right="6"
          bg="var(--blue)"
          color="white"
          fontSize="large"
          fontWeight="medium"
          px={3}
          py={2}
          zIndex="1"
          borderRadius="md"
        >
          {skip.size} Yards
        </Badge>


      <Card.Body gap={{ base: 3, md: 4 }} p='0'>
        <Text fontSize={{ base: "xl", lg: "2xl"}} fontWeight="bold" color='white'>{skip.size} Yard Skip</Text>
        <Text fontSize={{ base: "lg", lg: "xl"}} color='var(--lightgray)'>{skip.hire_period_days} day hire period</Text>

        <Flex gap='3' alignItems='baseline' direction='row'>
          <Text fontSize='2xl' fontWeight='bold' color='var(--blue)'>£{skip.totalPricePerWeek}</Text>
          <Text fontSize='lg' color='var(--lightgray)'>per week</Text>
        </Flex>

        <Button
           color='white'
           size={{ base: "lg", lg: "xl"}}
           variant="subtle"
           borderRadius="lg"
           bg={isSelected ? "var(--blue)" : "gray.800"}
           _active={{ transform: "scale(0.98)" }}
           onClick={!isDisabled ? onSelect : undefined}
           disabled={isDisabled}
           >

          <Text fontSize={{ base: "md", lg: "lg"}} fontWeight='semibold'>
            {isSelected ? "Selected" : "Select This Skip"}
          </Text>

          {!isSelected && <ArrowRight />}
        </Button>

      </Card.Body>
  </Card.Root>
  )
}

export default SkipCard
