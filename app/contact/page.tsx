import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Byron Labs for expert cybersecurity solutions and consultancy. Contact our team for inquiries, support, and more information about our services.",
  keywords: [
    "contact Byron Labs",
    "cybersecurity inquiries",
    "cybersecurity support",
    "contact information",
    "get in touch",
    "cybersecurity consultancy contact",
  ],
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Byron Labs for expert cybersecurity solutions and consultancy. Contact our team for inquiries, support, and more information about our services.",
    url: "https://byronlabs.io/contact",
  },
  twitter: {
    title: "Contact Us",
    description:
      "Get in touch with Byron Labs for expert cybersecurity solutions and consultancy. Contact our team for inquiries, support, and more information about our services.",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" description="" />

      <Contact />
    </>
  );
};

export default ContactPage;
