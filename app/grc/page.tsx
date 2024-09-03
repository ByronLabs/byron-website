import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Governance, Risk & Compliance",
    description:
        "Navigate the complex landscape of Governance, Risk, and Compliance (GRC) with Byron Labs' expertise. Ensure regulatory compliance, manage risks effectively, and optimize governance processes to protect your organization.",
    keywords: [
        "governance risk compliance",
        "GRC services",
        "regulatory compliance",
        "risk management",
        "incident response planning",
        "governance challenges",
        "data security",
        "cybersecurity governance",
        "compliance solutions",
        "risk assessments",
    ],
    openGraph: {
        title: "Governance, Risk & Compliance",
        description:
            "Navigate the complex landscape of Governance, Risk, and Compliance (GRC) with Byron Labs' expertise. Ensure regulatory compliance, manage risks effectively, and optimize governance processes to protect your organization.",
        url: "https://byronlabs.io/grc",
    },
    twitter: {
        title: "Governance, Risk & Compliance",
        description:
            "Navigate the complex landscape of Governance, Risk, and Compliance (GRC) with Byron Labs' expertise. Ensure regulatory compliance, manage risks effectively, and optimize governance processes to protect your organization.",
    },
};

const ServicesPage = () => {
    return (
        <>
            <section className="mt-14 py-16 md:py-20 lg:py-28">
                <div className="container">
                    <SectionTitle
                        title="Governance Risk & Compliance"
                        paragraph="Are you confident in your organization's ability to navigate the complex landscape of Governance, Risk, and Compliance (GRC)? "
                    />

                    <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-5xl">
                        Discover how our expertise can help you
                    </h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mb-12">
                            <div className="w-full">
                                <div className="wow fadeInUp" data-wow-delay=".15s">
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span> Are regulatory
                                        changes keeping you up at night?
                                    </p>
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span> Struggling to
                                        manage risks effectively?
                                    </p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="wow fadeInUp" data-wow-delay=".15s">
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span> Is your
                                        organization facing governance challenges?
                                    </p>
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span> Worried about
                                        data breaches and security incidents?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-primary/[.06] py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
                        data-wow-delay=".1s
              "
                    >
                        <div className="wow fadeInUp" data-wow-delay=".15s">
                            <h2 className="text-4xl font-bold text-center">
                                We empower our clients to navigate the complexities with confidence, offering tailored
                                solutions that minimize risks, optimize governance, and ensure regulatory compliance
                            </h2>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="wow fadeInUp relative mx-auto mb-12 aspect-[27/25]  max-w-[500px] text-center lg:m-0"
                                data-wow-delay=".15s"
                            >
                                <Image src="/images/services/grc.svg" alt="about image" fill />
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 mt-12">
                            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                                <div className="mb-9">
                                    <div className="mb-10 flex items-center">
                                        <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    d="M8 6h8V1H8v5Zm8-3h5v20H3V3h5m0 11l3 3l6-6"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                            Regulatory Compliance Assessment
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                        Ensure your organization adheres to the latest regulatory standards and
                                        industry-specific requirements.
                                    </p>
                                </div>
                                <div className="mb-9">
                                    <div className="mb-10 flex items-center">
                                        <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                            >
                                                <g fill="none">
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeWidth="1.5"
                                                        d="M12 7v6"
                                                    />
                                                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeWidth="1.5"
                                                        d="M9.216 3c1.18-.667 1.954-1 2.784-1c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594c-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7C3.996 6.22 4.719 5.682 6 4.9"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                            Risk Management and Assessment
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                        Safeguard your business against unexpected risks with our expert risk
                                        assessments. We help you identify, evaluate, and prioritize risks.
                                    </p>
                                </div>
                                <div className="mb-9">
                                    <div className="mb-10 flex items-center">
                                        <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                                            <svg viewBox="0 0 32 32" width="40" height="40" className="fill-current">
                                                <path
                                                    fill="currentColor"
                                                    d="M26 9.42L24.59 8l-2.585 2.585L22 10.58l-.005.005L19.42 8.01L18 9.42L20.58 12L18 14.58L19.41 16l2.585-2.585l.005.005l.005-.005l2.575 2.575L26 14.58L23.42 12L26 9.42zm-12 8L12.59 16l-2.585 2.585L10 18.58l-.005.005L7.42 16.01L6 17.42L8.58 20L6 22.58L7.41 24l2.585-2.585l.005.005l.005-.005l2.575 2.575L14 22.58L11.42 20L14 17.42zM2 2h2v28H2zm26 0h2v28h-2zM15 2h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                            Incident Response Planning
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                        Be prepared for security incidents with our incident response planning services.
                                        We develop customized incident response plans, conduct tabletop exercises, and
                                        ensure your team is ready to respond effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
