"use client";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";

import React from "react";
import BookingForm from "./booking-form";

const BookingFormPopup = ({
  trigger,
  serviceType,
}: {
  trigger: React.ReactNode;
  serviceType: "one-time-audit" | "monthly-helpline";
}) => {
  return (
    <Credenza>
      <CredenzaTrigger asChild>{trigger}</CredenzaTrigger>
      <CredenzaContent>
        <CredenzaBody>
          <BookingForm serviceType={serviceType} />
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};

export default BookingFormPopup;
