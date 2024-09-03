import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Discover Byron Labs, founded by researchers from Universidad de Alcalá. Our mission, values, and expert team drive our cutting-edge cybersecurity solutions. Learn more about our expertise and innovative approach.",
    keywords: [
        "about Byron Labs",
        "cybersecurity experts",
        "cybersecurity mission",
        "cybersecurity team",
        "cybersecurity company",
        "our values",
        "company mission",
        "research-based cybersecurity",
        "Universidad de Alcalá",
        "cutting-edge cybersecurity solutions",
    ],
    openGraph: {
        title: "About Us",
        description:
            "Discover Byron Labs, founded by researchers from Universidad de Alcalá. Our mission, values, and expert team drive our cutting-edge cybersecurity solutions. Learn more about our expertise and innovative approach.",
        url: "https://byronlabs.io/about",
    },
    twitter: {
        title: "About Us",
        description:
            "Discover Byron Labs, founded by researchers from Universidad de Alcalá. Our mission, values, and expert team drive our cutting-edge cybersecurity solutions. Learn more about our expertise and innovative approach.",
    },
};

const AboutPage = () => {
    return (
        <>
            <AboutSectionOne />
            <AboutSectionTwo />
        </>
    );
};

export default AboutPage;
