"use client";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  FaAddressBook,
  FaMapMarkedAlt,
  FaGlobeAsia,
} from "react-icons/fa";
import DashboardCard from "../common/DashboardCard/DashboardCard";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import stores from "../../../store/stores";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Brand colors
const MAROON = "#7B1035";
const GOLD = "#D4A843";
const CREAM = "#F5EDD8";

const theme = extendTheme({
  colors: {
    brand: { 100: CREAM, 500: MAROON, 900: "#4a0a1f" },
  },
});

// Dashboard component
const Dashboard = observer(() => {
  const {
    dashboardStore: { getDashboardCount, count },
  } = stores;

  useEffect(() => {
    getDashboardCount();
  }, [getDashboardCount]);

  const locations = count?.data?.locations || 0;
  const journeyOverviews = count?.data?.journeyOverviews || 0;
  const contacts = count?.data?.contacts || 0;

  const dashboardData = [
    {
      label: "Locations",
      value: locations,
      icon: FaMapMarkedAlt,
      color: "teal",
      href: "/dashboard/locations",
    },
    {
      label: "Journey Overviews",
      value: journeyOverviews,
      icon: FaGlobeAsia,
      color: "purple",
      href: "/dashboard/journey-overviews",
    },
    {
      label: "Contacts",
      value: contacts,
      icon: FaAddressBook,
      color: "orange",
      href: "/dashboard/contacts",
    },
  ];

  // Bar chart – Contacts vs Journey Overviews vs Locations
  const barChartData = {
    labels: ["Locations", "Journey Overviews", "Contacts"],
    datasets: [
      {
        label: "Total Count",
        data: [locations, journeyOverviews, contacts],
        backgroundColor: [
          "rgba(123, 16, 53, 0.75)",
          "rgba(212, 168, 67, 0.75)",
          "rgba(245, 237, 216, 0.9)",
        ],
        borderColor: [MAROON, GOLD, "#c5b08a"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, color: "#6B6B6B" },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: {
        ticks: { color: "#6B6B6B" },
        grid: { display: false },
      },
    },
  };

  // Doughnut chart – distribution
  const doughnutData = {
    labels: ["Locations", "Journey Overviews", "Contacts"],
    datasets: [
      {
        data: [
          locations || 1,
          journeyOverviews || 1,
          contacts || 1,
        ],
        backgroundColor: [MAROON, GOLD, "#c5b08a"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 3,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#2D2D2D", font: { size: 13 } },
      },
    },
    cutout: "65%",
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={{ base: 4, md: 6 }} bg={CREAM} minH="100vh">
        {/* Header */}
        <Flex align="center" mb={6} gap={3}>
          <Box w="4px" h="32px" bg={MAROON} borderRadius="full" />
          <Heading size="lg" color={MAROON} fontFamily="'Playfair Display', serif">
            Dashboard
          </Heading>
        </Flex>

        {/* ── 3-column Cards ── */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={8}>
          {dashboardData.map((item, index) => (
            <Skeleton
              isLoaded={!count?.loading}
              key={index}
              borderRadius="xl"
            >
              <DashboardCard
                label={item.label}
                href={item.href}
                value={item.value}
                icon={item.icon}
                color={item.color}
              />
            </Skeleton>
          ))}
        </SimpleGrid>

        {/* ── Charts ── */}
        <Grid
          templateColumns={{ base: "1fr", lg: "3fr 2fr" }}
          gap={6}
          mb={10}
        >
          {/* Bar Chart */}
          <GridItem>
            <Box bg="white" p={6} borderRadius="xl" boxShadow="sm" border={`1px solid rgba(212,168,67,0.2)`}>
              <Text fontSize="md" fontWeight="700" color={MAROON} mb={5} fontFamily="'Playfair Display', serif">
                Overview by Category
              </Text>
              <Bar data={barChartData} options={barChartOptions} />
            </Box>
          </GridItem>

          {/* Doughnut Chart */}
          <GridItem>
            <Box bg="white" p={6} borderRadius="xl" boxShadow="sm" border={`1px solid rgba(212,168,67,0.2)`}>
              <Text fontSize="md" fontWeight="700" color={MAROON} mb={5} fontFamily="'Playfair Display', serif">
                Distribution
              </Text>
              <Box maxW="280px" mx="auto">
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
});

export default Dashboard;