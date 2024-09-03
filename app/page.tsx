import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Features from "@/components/Services";

export default function Home() {
    return (
        <>
            <ScrollUp />
            <Hero />
            <Features />
            <Brands />
            <AboutSectionOne />
            {/*<Blog />*/}
            <Contact />
        </>
    );
}
