import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CustomCarousel from "../../../../component/common/CustomCarousal/CustomCarousal";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";
import { useEffect } from "react";
import ReviewCardSkeleton from "./ReviewCardSkeletan";

const ReviewCard = (data: any) => {
  return (
    <Box
      p={{ base: 5, lg: 6 }}
      borderWidth="1px"
      borderColor="rgba(212,168,67,0.2)" // gold border
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(123,16,53,0.04)"
      bg="white"
      w="100%"
      height={{ base: "260px", lg: "280px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0 20px 30px -12px rgba(123,16,53,0.15)",
        borderColor: "#D4A843",
      }}
      fontFamily="'ALESHA', 'Georgia', serif"
    >
      <VStack align="start" spacing={{ base: 3, lg: 4 }} flexGrow={1}>
        <Icon as={FaQuoteLeft} w={6} h={6} color="#D4A843" opacity={0.7} />
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          color="#7B1035"
          opacity={0.85}
          lineHeight="1.6"
          noOfLines={4}
        >
          {data?.description}
        </Text>
        <HStack spacing={1}>
          {[...Array(data?.rating || 5)].map((_, i) => (
            <Icon
              key={i}
              as={FaStar}
              w={{ base: 3.5, lg: 4 }}
              h={{ base: 3.5, lg: 4 }}
              color="#D4A843"
            />
          ))}
        </HStack>
      </VStack>
      <HStack mt={{ base: 3, lg: 4 }} spacing={3}>
        <Avatar
          size="md"
          name={data?.name}
          src={data?.image?.url}
          bg="#F5EDD8"
          color="#7B1035"
        />
        <Text fontWeight="600" color="#7B1035" fontSize="sm">
          {data?.name}
        </Text>
      </HStack>
    </Box>
  );
};

const ReviewsList = observer(() => {
  const showArrows = useBreakpointValue({ base: false, md: true });
  const {
    testimonialStore: { testimonials, getTestimonials },
  } = stores;

  useEffect(() => {
    getTestimonials({ limit: 15, page: 1 });
  }, [getTestimonials]);

  return (
    <Box fontFamily="'ALESHA', 'Georgia', serif">
      {testimonials.loading ? (
        <CustomCarousel showDots={true} autoplay={true} showArrows={showArrows}>
          {[...Array(5)].map((_, index) => (
            <ReviewCardSkeleton key={index} />
          ))}
        </CustomCarousel>
      ) : (
        <CustomCarousel showDots={true} autoplay={true} showArrows={showArrows}>
          {testimonials?.data?.map((testimonial, index) => (
            <ReviewCard key={testimonial._id || index} {...testimonial} />
          ))}
        </CustomCarousel>
      )}
    </Box>
  );
});

export default ReviewsList;