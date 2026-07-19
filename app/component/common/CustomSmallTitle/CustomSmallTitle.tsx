import { Text } from "@chakra-ui/react";
import type { ResponsiveValue } from "@chakra-ui/react";
import type { Property } from "csstype";

interface Props {
  children: React.ReactNode;
  textAlign?: ResponsiveValue<Property.TextAlign>;
  fontSize?: ResponsiveValue<string>;
  color?: string;
  fontFamily?: string;
}

const CustomSmallTitle = ({
  children,
  textAlign = { base: "center", lg: "center" },
  fontSize = { base: "14px", md: "16px" },
  color = "#D4A843", // brand gold
  fontFamily = "'ALESHA', 'Georgia', serif",
  ...props
}: Props) => {
  return (
    <Text
      textTransform="uppercase"
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight="600"
      letterSpacing="wide"
      fontFamily={fontFamily}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomSmallTitle;