import React from "react";

import "@/styles/ecom.css";
import ContactForm from "@/components/signup-form-demo";
import BookingFormPopup from "@/components/booking-form-popup";
import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";

export const metadata: Metadata = {
  title: "Book a Audit Call",
  description: "Get a detailed review of your business by DashHub Tech",
};

const EcommercePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default EcommercePage;
