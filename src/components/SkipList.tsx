import useSkips from "@/hooks/useSkips";
import { Container, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import SkipCard from "./SkipCard";

interface Props {
  selectedSkip: number | null;
  setSelectedSkip: (id: number | null) => void;
}


const SkipList =  ({ selectedSkip, setSelectedSkip }: Props) => {
  const { data: skips, isLoading, error } = useSkips();


  if (isLoading) return <Spinner color="blue.500" size="xl" />;
  if (error) return <Text color="red.500">Error loading skips</Text>;

  return (
    <Container my={5}>
      <Flex direction='column' textAlign="center" mt={5} mb={8} gap={3}>
        <Text fontSize={{ base: "2xl", lg: "3xl"}} fontWeight="bold">
            Choose Your Skip Size
        </Text>
        <Text fontSize={{ base: "lg", lg: "xl"}} fontWeight='medium' color='var(--lightgray)'>
            Select the skip size that best suits your needs
        </Text>
    </Flex>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} gap={{ base: 4, md: 5, lg: 6, xl: 7 }} my={10}>
      {skips?.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip === skip.id}
            onSelect={() => setSelectedSkip(skip.id)} />
      ))}
    </SimpleGrid>
  </Container>
  )
}

export default SkipList
