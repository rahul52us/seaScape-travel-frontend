"use client";

import { observer } from "mobx-react-lite";
import { useState } from "react";
import stores from "../../../store/stores";
import {
  Box,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Spinner,
  IconButton,
  Tooltip,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Pagination from "../../../component/config/component/pagination/Pagination";
import DeleteData from "../DeleteData";

const Layout = observer(({ setFormModal, currentPage, setCurrentPage }: any) => {
  const {
    journeyOverviewStore: { getJourneyOverviews, journeyOverview },
  } = stores;

  const [deleteData, setDeleteData] = useState({ data: null, open: false });

  const handlePageChange = (page: number) => setCurrentPage(page);

  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box>
      {/* Loading State */}
      {journeyOverview.loading ? (
        <Flex justify="center" align="center" minH="60vh">
          <Spinner size="xl" color="blue.500" thickness="4px" />
        </Flex>
      ) : journeyOverview.data?.length > 0 ? (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {journeyOverview.data.map((overview: any) => (
            <VStack
              key={overview._id}
              bg={cardBg}
              borderRadius="xl"
              shadow="base"
              p={4}
              spacing={3}
              align="stretch"
              transition="all 0.3s"
              _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            >
              {/* Name */}
              <Text fontWeight="bold" fontSize="lg" color="blue.600">
                {overview.title}
              </Text>

              <Text fontSize="sm" color="gray.500">
                Duration: {overview.duration}
              </Text>

              {/* Description with Tooltip */}
              <Tooltip label={overview.description} hasArrow>
                <Text fontSize="sm" color={textColor} noOfLines={2}>
                  {overview.description}
                </Text>
              </Tooltip>

              {/* Actions */}
              <Flex justify="space-between">
                <IconButton
                  icon={<EditIcon />}
                  colorScheme="blue"
                  aria-label="Edit Journey Overview"
                  size="sm"
                  onClick={() => setFormModal({ open: true, type: "edit", data: overview })}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  aria-label="Delete Journey Overview"
                  size="sm"
                  onClick={() => setDeleteData({ open: true, data: overview })}
                />
              </Flex>
            </VStack>
          ))}
        </SimpleGrid>
      ) : (
        <Text textAlign="center" fontSize="lg" color={textColor} py={20}>
          No journey overviews found. Create one!
        </Text>
      )}

      {/* Pagination */}
      {journeyOverview.totalPages > 1 && (
        <Flex justify="center" mt={8}>
          <Pagination
            currentPage={currentPage}
            totalPages={journeyOverview.totalPages}
            onPageChange={handlePageChange}
          />
        </Flex>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteData
        getData={() => getJourneyOverviews({ page: currentPage })}
        isOpen={deleteData.open}
        data={deleteData.data}
        onClose={() => setDeleteData({ data: null, open: false })}
      />
    </Box>
  );
});

export default Layout;
