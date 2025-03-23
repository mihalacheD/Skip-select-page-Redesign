import { Card, Box, Skeleton } from "@chakra-ui/react";

const SkipCardSkeleton = () => {
  return (
    <Card.Root
      p={6}
      borderRadius="xl"
      height="100%"
      display="flex"
      flexDirection="column"
      maxW="400px"
      width="100%"
      bg="var(--gray)"
    >
      {/* Imagine Skeleton */}
      <Skeleton height="150px" borderRadius="md" mb={4} width="100%" />

      {/* Titlu și descriere */}
      <Skeleton height="24px" width="40%" mb={2} />
      <Skeleton height="18px" width="60%" mb={4} />
      <Skeleton height="18px" width="60%" mb={4} />

      {/* Buton Skeleton */}
      <Box mt={4}>
        <Skeleton height="45px" width="100%" borderRadius="md" />
      </Box>
    </Card.Root>
  );
};

export default SkipCardSkeleton;
