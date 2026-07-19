import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack, Text, HStack, Badge } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";

interface BlogCardProps {
  coverImage?: any;
  createdAt?: string;
  subTitle?: string;
  title?: string;
  description?: string;
  tags?: string[];
  otherBlog?: boolean;
  charges?: string;
  slug?: string;
}

const BlogsCard: React.FC<BlogCardProps> = observer(
  ({ coverImage, subTitle, createdAt, title, tags, otherBlog, charges, slug }) => {
    const router = useRouter();
    const { themeStore: { themeConfig } } = stores;

    const formatDate = (createdAt?: string) => {
      if (!createdAt) return { month: "", day: "", year: "" };
      const date = new Date(createdAt);
      return {
        day: date.getDate().toString(),
        month: date.toLocaleString("en-US", { month: "short" }),
        year: date.getFullYear().toString(),
      };
    };
    const formattedDate = formatDate(createdAt);

    return (
      <Box
        rounded="2xl"
        overflow="hidden"
        bg="white"
        transition="all 0.35s cubic-bezier(0.2, 0, 0, 1)"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "0 20px 30px -12px rgba(107,26,42,0.15)",
        }}
        border="1px solid #f0e6d8"
      >
        {/* Image section with improved overlay */}
        <Box position="relative">
          <Image
            src={coverImage?.url}
            h={{ base: "200px", lg: "240px" }}
            w="100%"
            objectFit="cover"
            transition="transform 0.5s"
            _hover={{ transform: "scale(1.02)" }}
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(107,26,42,0.6), rgba(0,0,0,0.1))"
          />
          
          {/* Date badge (always visible, modern style) */}
          <Box
            position="absolute"
            bottom={3}
            left={3}
            bg="rgba(255,255,255,0.95)"
            backdropFilter="blur(4px)"
            rounded="lg"
            px={2.5}
            py={1}
            textAlign="center"
            minW="60px"
            boxShadow="sm"
          >
            <Text fontSize="xs" fontWeight="700" color="#e8b86b" textTransform="uppercase">
              {formattedDate.month}
            </Text>
            <Text fontSize="lg" fontWeight="800" color="#5a2a2a" lineHeight="1">
              {formattedDate.day}
            </Text>
          </Box>

          {/* Tags / Charge badge – top right */}
          {!otherBlog && tags?.length ? (
            <Flex position="absolute" top={3} right={3} gap={1.5} wrap="wrap" justify="flex-end">
              {tags.slice(0, 2).map((tag, idx) => (
                <Badge
                  key={idx}
                  bg="#e8b86b"
                  color="#5a2a2a"
                  rounded="full"
                  px={2.5}
                  py={1}
                  fontSize="10px"
                  fontWeight="600"
                >
                  {tag}
                </Badge>
              ))}
            </Flex>
          ) : otherBlog && (
            <Badge
              position="absolute"
              top={3}
              right={3}
              bg="#6b1a2a"
              color="white"
              rounded="full"
              px={3}
              py={1.5}
              fontSize="xs"
              fontWeight="700"
            >
              {charges}
            </Badge>
          )}
        </Box>

        {/* Content area – cleaner typography */}
        <Box p={{ base: 4, md: 5 }}>
          {!otherBlog && (
            <Text
              onClick={() => router.push(`/blogs/${slug}`)}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="800"
              color="#5a2a2a"
              lineHeight="1.3"
              mb={2}
              cursor="pointer"
              _hover={{ color: "#e8b86b" }}
              transition="color 0.2s"
            >
              {title}
            </Text>
          )}

          {otherBlog ? (
            <>
              <Text
                onClick={() => router.push(`/blogs/${slug}`)}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="800"
                color="#5a2a2a"
                mb={2}
                cursor="pointer"
                _hover={{ color: "#e8b86b" }}
              >
                {title}
              </Text>
              <Text
                fontSize="sm"
                color="#6a4a4a"
                noOfLines={2}
                dangerouslySetInnerHTML={{ __html: subTitle || "" }}
                mb={3}
              />
            </>
          ) : (
            <Text
              fontSize="sm"
              color="#6a4a4a"
              lineHeight="1.6"
              noOfLines={2}
              dangerouslySetInnerHTML={{ __html: subTitle || "" }}
              mb={3}
            />
          )}

          <Flex justify="space-between" align="center" mt="auto" pt={2}>
            {otherBlog ? (
              <CustomButton
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({
                    event: "whatsapp_click",
                    click_text: "WhatsApp Button",
                    blog_title: title || "Unknown Blog",
                  });
                  const phone = "9958805754";
                  const message = `Hi, I am interested in the blog "${title}". Please share more details.`;
                  const encodedMsg = encodeURIComponent(message);
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  const url = isMobile
                    ? `https://wa.me/91${phone}?text=${encodedMsg}`
                    : `https://api.whatsapp.com/send?phone=91${phone}&text=${encodedMsg}`;
                  window.location.href = url;
                }}
                size="sm"
                bg="#6b1a2a"
                color="white"
                _hover={{ bg: "#8b2a3a", transform: "translateY(-2px)" }}
                borderRadius="full"
                px={5}
                fontWeight="600"
              >
                Enquire Now
              </CustomButton>
            ) : (
              <Button
                onClick={() => router.push(`/blogs/${slug}`)}
                variant="link"
                color="#e8b86b"
                _hover={{ color: "#d4a35a", textDecoration: "none" }}
                rightIcon={<ArrowForwardIcon />}
                fontSize="sm"
                fontWeight="600"
              >
                Read full story
              </Button>
            )}
          </Flex>
        </Box>
      </Box>
    );
  }
);

export default BlogsCard;