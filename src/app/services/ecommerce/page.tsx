import React from "react";

import "@/styles/ecom.css";
import ContactForm from "@/components/signup-form-demo";
import { Separator } from "@/components/ui/separator";
import BookingFormPopup from "@/components/booking-form-popup";

const EcommercePage = () => {
  return (
    <main className="space-y-10">
      <section className="main-content">
        <h1>Stuck Under $10K/Month? Let’s Fix That?</h1>
        <p>
          Let us guide you through a growth audit and a personalized strategy to
          skyrocket your sales.
        </p>
        <a
          href="https://calendly.com/dashhubtech/30min"
          className="cta-btn"
          style={{
            textDecoration: "none",
          }}
        >
          Book Free Call
        </a>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Ad Strategy</h3>
          <p>
            Expert ad reviews and strategies for platforms like Facebook,
            Google, and TikTok.
          </p>
        </div>
        <div className="feature-box">
          <h3>Growth Roadmap</h3>
          <p>
            Tailored plans designed to scale your business faster with
            actionable steps.
          </p>
        </div>
        <div className="feature-box">
          <h3>Sourcing Help</h3>
          <p>
            Get guidance on finding the best suppliers and optimizing your
            product selection.
          </p>
        </div>
      </section>

      <section className="pricing">
        <h2>Choose Your Plan</h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "1rem auto 3rem",
            fontSize: "1.1rem",
            color: "#4a5568",
          }}
        >
          Whether you're just getting started or looking to scale aggressively,
          we offer tailored support to match your stage of growth. Pick the plan
          that works best for your business needs.
        </p>
        <div className="pricing-table">
          <div className="pricing-card">
            <h3>One-Time Audit</h3>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "1rem ",
                fontStyle: "italic",
              }}
            >
              For new or struggling stores needing fast, actionable advice.
            </p>
            <div className="price">$149</div>
            <p>
              ✅ Full eCom Audit
              <br />✅ Growth Strategy Blueprint
              <br />✅ 7-Day Post Support
            </p>
            <BookingFormPopup
              trigger={
                <button
                  className="cta-btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Book Now
                </button>
              }
              serviceType="one-time-audit"
            />
          </div>
          <div className="pricing-card">
            <h3>Monthly Helpline</h3>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "1rem",
                fontStyle: "italic",
              }}
            >
              Perfect for growing stores needing consistent expert support.
            </p>
            <div className="price">$499/month</div>
            <p>
              ✅ Weekly Strategy Calls
              <br />✅ Ad Performance Review
              <br />✅ 24/7 Messaging Support
              <br />✅ Product & Supplier Help
            </p>
            <BookingFormPopup
              trigger={
                <button
                  className="cta-btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Join Monthly Plan
                </button>
              }
              serviceType="monthly-helpline"
            />
          </div>
        </div>
      </section>

      <section className="container px-4 mx-auto h-full border rounded-2xl py-10">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div>
            <h2 className="mb-4 text-center text-4xl font-bold text-black dark:text-white">
              Contact Us
            </h2>
            <p className="mb-4 text-center text-base text-neutral-500 dark:text-neutral-400">
              For any questions or concerns, please contact us at
              <a
                className="pl-2 hover:underline duration-150 ease-in-out transition"
                href="mailto:support@dashhub.tech"
              >
                support@dashhub.tech
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default EcommercePage;
