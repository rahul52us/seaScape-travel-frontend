import { Heading, ResponsiveValue, Text } from "@chakra-ui/react";
import type { Property } from "csstype";

interface HeadingProps {
  children: React.ReactNode;
  textAlign?: ResponsiveValue<Property.TextAlign>;
  fontWeight?: number;
  fontSize?: { base: string; md: string };
  my?: { base: number; md: number };
  px?: number;
  highlightText?: string;
  highlightFontWeight?: number;
  color?: string;          // main text color
  highlightColor?: string; // highlighted text color
  fontFamily?: string;
}

const CustomSubHeading = ({
  children,
  textAlign = "center",
  fontWeight = 400,
  fontSize = { base: "24px", md: "38px" },
  my = { base: 1, md: 2 },
  px = 1,
  highlightText = "",
  highlightFontWeight = 600,
  color = "#7B1035",         // brand maroon
  highlightColor = "#D4A843", // brand gold
  fontFamily = "'ALESHA', 'Georgia', serif",
  ...props
}: HeadingProps) => {
  return (
    <Heading
      textAlign={textAlign}
      as="h2"
      fontWeight={fontWeight}
      fontSize={fontSize}
      my={my}
      px={px}
      color={color}
      fontFamily={fontFamily}
      {...props}
    >
      {children}{" "}
      {highlightText && (
        <Text as="span" fontWeight={highlightFontWeight} color={highlightColor}>
          {highlightText}
        </Text>
      )}
    </Heading>
  );
};

export default CustomSubHeading;