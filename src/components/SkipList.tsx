import useSkips from "@/hooks/useSkips";
import { Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import SkipCard from "./SkipCard";
import SkipCardSkeleton from "./SkipCardSkeleton";

interface Props {
  selectedSkip: number | null;
  setSelectedSkip: (id: number | null) => void;
}


const SkipList =  ({ selectedSkip, setSelectedSkip }: Props) => {
  const { data: skips, isLoading, error } = useSkips();
  const skeletons = [1, 2, 3, 4, 5, 6]


  if (error) return <Text color="red.500">Error loading skips</Text>;

  return (
    <Container my={5} maxW='7xl'>
      <Flex direction='column' textAlign="center" mt={5} mb={8} gap={3}>
        <Text fontSize={{ base: "2xl", lg: "3xl"}} fontWeight="bold">
            Choose Your Skip Size
        </Text>
        <Text fontSize={{ base: "lg", lg: "xl"}} fontWeight='medium' color='var(--lightgray)'>
            Select the skip size that best suits your needs
        </Text>
    </Flex>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} gap={{ base: 4, md: 5, lg: 6, xl: 7 }} my={10}>
      {isLoading && skeletons.map(skeleton => <SkipCardSkeleton key={skeleton}/>)}
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
