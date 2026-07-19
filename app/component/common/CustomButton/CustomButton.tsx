import { Button, Icon, ButtonProps, useBreakpointValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
  icon?: React.ElementType;
  mt?: string | number;
  height?: string | number;
  width?: string | number;
};

const CustomButton: FC<CustomButtonProps> = ({
  children,
  icon,
  mt,
  height,
  width,
  ...props
}) => {
  const fontSizes = useBreakpointValue({ base: "14px", md: "16px" });
  const buttonSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Button
      {...props}
      position="relative"
      mt={mt}
      size={buttonSize}
      height={height}
      width={width}
      alignItems="center"
      justifyContent="center"
      borderRadius="8px"
      // 🔥 SheScapes maroon base
      bg="#6b1a2a"
      color="white"
      fontWeight="600"
      fontSize={fontSizes}
      gap="8px"
      boxShadow="0px 8px 5px rgba(0, 0, 0, 0.05)"
      cursor="pointer"
      transition="all 0.3s ease-in-out"
      overflow="hidden"
      _hover={{
        borderColor: "#e8b86b",
        bg: "#8b2a3a",
        transform: "scale(1.015)",
        boxShadow: "0px 12px 20px rgba(107,26,42,0.3)",
        "&::before": {
          animation: "shine 1.5s ease-out infinite",
        },
      }}
      _active={{
        bg: "#5a1a2a",
        transform: "scale(0.98)",
      }}
      _before={{
        content: "''",
        position: "absolute",
        width: "200px",
        height: "54px",
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(232,184,107,0.6), rgba(255, 255, 255, 0) 70%)",
        top: "0",
        left: "-200px",
        opacity: "0.6",
      }}
      sx={{
        "@keyframes shine": {
          "0%": { left: "-200px" },
          "60%": { left: "100%" },
          "100%": { left: "100%" },
        },
      }}
    >
      {children}
      {icon && <Icon as={icon} boxSize={{ base: 4, md: 5 }} />}
    </Button>
  );
};

export default CustomButton;