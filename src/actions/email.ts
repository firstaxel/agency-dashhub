"use server";

import { render } from "@react-email/components";
import BookingEmailTemplate from "@/email/booking-template";
import { resend } from "@/lib/resend";

export const sendBookingMail = async (
  email: string,
  name: string,
  serviceType: string,
  subject: string,
  message: string
) => {
  try {
    await resend.emails.send({
      from: "ecommerce@dashhub.tech",
      to: [email, "dashhubviral@gmail.com"],
      subject: `New Form Submission from ${name}"`,
      html: await render(
        BookingEmailTemplate({
          name,
          email,
          serviceType,
          subject,
          message,
        })
      ),
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
