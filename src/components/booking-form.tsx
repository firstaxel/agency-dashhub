"use state";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CredenzaHeader, CredenzaTitle } from "./ui/credenza";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendBookingMail } from "@/actions/email";

// Define the Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  serviceType: z.enum(["one-time-audit", "monthly-helpline"], {
    error: () => ({ message: "Please select a service type." }),
  }),
  subject: z.string(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long.",
  }),
});

// Define the type for form data based on the schema
type ContactFormData = z.infer<typeof contactSchema>;

export default function BookingForm({
  serviceType,
}: {
  serviceType: "one-time-audit" | "monthly-helpline";
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType,
      subject: "",
      message: "",
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate an API call with a 2-second delay
    console.log("Form data:", data);
    await sendBookingMail(
      data.email,
      data.name,
      data.serviceType,
      data.subject,
      data.message
    ).then(() => {
      setIsSubmitted(true);
      reset();
    });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-lg  rounded-2xl shadow-2xl p-8 transition-all duration-300">
        <CredenzaHeader>
          <CredenzaTitle
            asChild
            className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6"
          >
            <h3>Book a Session</h3>
          </CredenzaTitle>
        </CredenzaHeader>

        {isSubmitted ? (
          <div className="text-center p-8 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
            <p className="text-lg font-semibold">
              Thank you! Your message has been sent.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-gray-100"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-gray-100"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Service Type
              </label>
              <Controller
                name="serviceType"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-gray-100">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time-audit">
                        One-Time Audit
                      </SelectItem>
                      <SelectItem value="monthly-helpline">
                        Monthly Helpline
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.serviceType && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.serviceType.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-gray-100"
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-gray-100"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
