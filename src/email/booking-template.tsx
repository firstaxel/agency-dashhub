import * as React from "react";
import {
  Html,
  Head,
  Heading,
  Container,
  Text,
  Section,
  Hr,
  Tailwind,
  Button,
} from "@react-email/components";

// IMPORTANT: This React component is designed to be rendered within the
// @react-email/components framework. It will not compile or run correctly
// in a standard browser environment without the necessary setup.

// Define the props for the email component
interface ContactFormEmailProps {
  name: string;
  email: string;
  serviceType: string;
  subject?: string;
  message: string;
}

// The main email component
const BookingEmailTemplate = ({
  name,
  email,
  serviceType,
  subject,
  message,
}: ContactFormEmailProps) => {
  // Add a null check before calling .replace() to prevent errors
  const formattedServiceType = (serviceType || "").replace(/-/g, " ");

  return (
    // The root HTML element for the email
    <Html>
      <Tailwind>
        <Head />

        <Container className=" my-10 mx-auto p-5 rounded-lg shadow-lg bg-gray-100 text-gray-800 font-sans">
          {/* Header Section */}
          <Section className="text-center my-6">
            <Heading className="text-3xl font-bold text-gray-900">
              New Contact Form Submission
            </Heading>
            <Text className="text-gray-500 mt-2">
              A new message has been received from your website's contact form.
            </Text>
          </Section>

          <Hr className="border-gray-300 my-6" />

          {/* Details Section */}
          <Section className="space-y-4">
            <Text className="text-lg font-semibold text-gray-700">
              Contact Details:
            </Text>

            <div className="flex items-center space-x-2">
              <Text className="font-medium w-32">Name:</Text>
              <Text className="text-gray-600">{name}</Text>
            </div>

            <div className="flex items-center space-x-2">
              <Text className="font-medium w-32">Email:</Text>
              <Text className="text-blue-500 underline">{email}</Text>
            </div>

            <div className="flex items-center space-x-2">
              <Text className="font-medium w-32">Service Type:</Text>
              <Text className="text-gray-600 capitalize">
                {formattedServiceType}
              </Text>
            </div>

            {subject && (
              <div className="flex items-center space-x-2">
                <Text className="font-medium w-32">Subject:</Text>
                <Text className="text-gray-600">{subject}</Text>
              </div>
            )}
          </Section>

          <Hr className="border-gray-300 my-6" />

          {/* Message Section */}
          <Section>
            <Text className="text-lg font-semibold text-gray-700">
              Message:
            </Text>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <Text className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {message}
              </Text>
            </div>
          </Section>

          <Hr className="border-gray-300 my-6" />

          {/* Call to Action (Optional) */}
          <Section className="text-center">
            <Button
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg"
              href={`mailto:${email}`}
            >
              Reply to {name}
            </Button>
          </Section>

          {/* Footer Section */}
          <Section className="text-center mt-6">
            <Text className="text-gray-400 text-sm">
              Sent from your website's contact form.
            </Text>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default BookingEmailTemplate;
