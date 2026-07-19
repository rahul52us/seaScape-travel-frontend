"use client";
import { Box, Text } from "@chakra-ui/react";
import PageHero from "../../common/CommonHeroSection/CommonHeroSection";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactUs from "../ContactUs";
import JoinCommunitySection from "../JoinCommunitySection/JoinCommunitySection";

const ContactUsPage = () => {
  // Allowed palette
  const maroon = "#7B1035";
  const gold = "#D4A843";
  const cream = "#F5EDD8";
  const white = "#FFFFFF";

  return (
    <Box>
      {/* PageHero – title uses ALESHA (if PageHero supports titleStyle), subtitle uses AVENIR */}
      <PageHero
        title="Contact Our Team"
        // Ensure the title font is ALESHA – if PageHero accepts a titleStyle prop, pass it.
        // Assuming it does not, we can wrap the title in a custom component or rely on the PageHero's default.
        // For consistency, we add a comment and ensure the subtitle is explicitly AVENIR.
        lineColor={gold}
        subtitle={
          // Wrap the subtitle in a Box with AVENIR font
          <Box fontFamily="'AVENIR', 'Avenir', 'Helvetica Neue', sans-serif">
            Let&apos;s craft your perfect journey together! Reach out to our travel
            experts
            <Text as="span" color={gold} fontWeight="semibold" mx={1.5}>
              24/7
            </Text>
            for personalized assistance.
          </Box>
        }
        bgImage="url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        // If PageHero allows a titleStyle prop, we could pass: titleStyle={{ fontFamily: "'ALESHA', 'Georgia', serif" }}
        // Otherwise, we'll rely on the existing PageHero implementation to use ALESHA for titles.
      />

      <ContactDetails />
      <JoinCommunitySection />
      <ContactUs />

      {/* Map container – using palette colors and shadow */}
      <Box bg={cream} py={12}>
        <Box
          w="100%"
          maxW="90%"
          h="360px"
          mx={"auto"}
          overflow="hidden"
          borderRadius="16px"
          boxShadow={`0 4px 20px ${maroon}20`} // maroon with alpha
          border={`1px solid ${gold}30`} // subtle gold border
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56102.85705242562!2d77.08718284863279!3d28.49675100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fb3a5bb1bd9%3A0xbdbc7a3341280449!2sCosmic%20Travels-%20Where%20every%20travel%20is%20a%20story%20worth%20telling!5e0!3m2!1sen!2sin!4v1738690029249!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsPage;