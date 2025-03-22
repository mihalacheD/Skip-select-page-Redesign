import useSkips from "@/hooks/useSkips";
import { Badge, Box, Button, Container, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";



const SkipList = () => {
  const { data: skips, isLoading, error } = useSkips();

  if (isLoading) return <Spinner color="blue.500" size="xl" />;
  if (error) return <Text color="red.500">Error loading skips</Text>;

  return (
    <Container my={5}>
      <Flex direction='column' textAlign="center" my={5} gap={5}>
        <Text fontSize="3xl" fontWeight="bold">
            Choose Your Skip Size
        </Text>
        <Text fontSize='2xl' fontWeight='medium' color='gray.500'>
            Select the skip size that best suits your needs
        </Text>
    </Flex>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      {skips?.map((skip) => (
        <Box key={skip.id} p={4} borderWidth="1px" borderRadius="lg">
          <Badge>{skip.size} yards</Badge>
          <Text fontSize="lg" fontWeight="bold">{skip.size} Yard Skip</Text>
          <Text>{skip.hire_period_days} day hire period</Text>
          <Text fontSize="sm">£{skip.price_before_vat}+ {skip.vat} per week</Text>
          <Button>Select this Skip</Button>
        </Box>
      ))}
    </SimpleGrid>
  </Container>
  )
}

export default SkipList
