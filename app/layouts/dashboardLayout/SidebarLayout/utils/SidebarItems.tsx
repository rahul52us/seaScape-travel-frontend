import { CalendarIcon } from "@chakra-ui/icons";
import {
  FaAddressBook,
  FaBlog,
  FaChartPie,
  FaCogs,
  FaCommentAlt,
  FaGlobeAsia,
  FaLandmark,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaPlusCircle
} from "react-icons/fa";
import { dashboard } from "../../../../config/utils/routes";

interface SidebarItem {
  id: number;
  name: string;
  icon: any;
  url: string;
  role?: string[];
  children?: SidebarItem[];
}

const sidebarDatas: SidebarItem[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: <FaChartPie />,
    url: "/dashboard",
    role: ["user"],
  },
  {
    id: 6,
    name: "Locations",
    icon: <FaMapMarkedAlt />,
    url: "/dashboard/locations",
    role: ["user"],
  },
  {
    id: 75,
    name: "Journey Overviews",
    icon: <FaGlobeAsia />,
    url: "/dashboard/journey-overviews",
    role: ["user"],
  },
  {
    id: 3,
    name: "Contacts",
    icon: <FaAddressBook />,
    url: "/dashboard/contacts",
    role: ["user"],
  },
];

export const sidebarFooterData: SidebarItem[] = [
  {
    id: 34,
    name: "Settings",
    icon: <FaCogs />,
    url: "/profile",
    role: ["user", "admin", "superadmin", "manager"],
  },
];

const getSidebarDataByRole = (role: string[] = ["user"]): SidebarItem[] => {
  const filterByRole = (items: SidebarItem[]): SidebarItem[] => {
    return items
      .filter((item) => !item.role || item.role.some((r) => role.includes(r)))
      .map((item) => ({
        ...item,
        children: item.children ? filterByRole(item.children) : undefined,
      }));
  };
  return filterByRole(sidebarDatas);
};

// Example usage
const userRole = ["user"]; // Example role
const sidebarData = getSidebarDataByRole(userRole);

export { getSidebarDataByRole, sidebarData };

