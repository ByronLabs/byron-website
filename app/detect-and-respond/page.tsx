import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Detect and Respond",
    description:
        "Enhance your cybersecurity posture with Byron Labs' Detect and Respond services. Identify and neutralize threats in real-time, and customize your security strategies to stay ahead of evolving risks. Partner with us for expert threat intelligence, EDR, XDR, and CISO as a Service solutions.",
    keywords: [
        "detect and respond",
        "cybersecurity services",
        "threat intelligence",
        "threat detection",
        "threat response",
        "EDR solutions",
        "XDR solutions",
        "CISO as a Service",
        "cyber threat hunting",
        "real-time threat response",
    ],
    openGraph: {
        title: "Detect and Respond",
        description:
            "Enhance your cybersecurity posture with Byron Labs' Detect and Respond services. Identify and neutralize threats in real-time, and customize your security strategies to stay ahead of evolving risks. Partner with us for expert threat intelligence, EDR, XDR, and CISO as a Service solutions.",
        url: "https://byronlabs.io/detect-and-respond",
    },
    twitter: {
        title: "Detect and Respond",
        description:
            "Enhance your cybersecurity posture with Byron Labs' Detect and Respond services. Identify and neutralize threats in real-time, and customize your security strategies to stay ahead of evolving risks. Partner with us for expert threat intelligence, EDR, XDR, and CISO as a Service solutions.",
    },
};

const ServicesPage = () => {
    return (
        <>
            <section className="mt-14 py-16 md:py-20 lg:py-28">
                <div className="container">
                    <SectionTitle
                        title="Detect and Respond"
                        paragraph="Are you equipped to react swiftly when faced with a high-speed ransomware attacker?"
                    />

                    <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-5xl">
                        Are you prepared?
                    </h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mb-12">
                            <div className="w-full">
                                <div className="wow fadeInUp" data-wow-delay=".15s">
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span> Detect and
                                        respond to emerging threats before they escalate into crises.
                                    </p>
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span> Adjust your
                                        cybersecurity strategies to stay one step ahead of evolving threats.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="wow fadeInUp" data-wow-delay=".15s">
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span>
                                        Partner with us to fortify your cybersecurity defenses and readiness.
                                    </p>
                                    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                                        <span className="mr-2 text-red-500 font-bold text-lg">-</span>
                                        Customized cybersecurity solutions to match your unique requirements and
                                        capabilities.
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
                                Ensure constant vigilance over your digital assets, with around-the-clock threat
                                detection
                            </h2>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="wow fadeInUp relative mx-auto mb-12 aspect-[27/25]  max-w-[500px] text-center lg:m-0"
                                data-wow-delay=".15s"
                            >
                                <Image src="/images/services/hosting.svg" alt="about image" fill />
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 mt-12">
                            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                                <div className="mb-9">
                                    <div className="mb-10 flex items-center">
                                        <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                                            <svg viewBox="0 0 24 24" width="40" height="40" className="fill-current">
                                                <path
                                                    fill="currentColor"
                                                    d="M2 2h20v20H2V2Zm2 2v16h16V4H4Zm14 4v3h-2V8h2Zm-5 2v3h-2v-3h2Zm-5 2v6H6v-6h2Zm10 1v5h-2v-5h2Zm-5 2v3h-2v-3h2Z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                            Next level Threat Intelligence
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                        Assessment & Threat Hunting
                                    </p>
                                </div>
                                <div className="mb-9">
                                    <div className="mb-10 flex items-center">
                                        <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                                            <svg viewBox="0 0 24 24" width="40" height="40" className="fill-current">
                                                <path
                                                    fill="currentColor"
                                                    d="M6 22q-.825 0-1.413-.588T4 20v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 22H6ZM4 11V4q0-.825.588-1.413T6 2h8l6 6v3h-2V9h-5V4H6v7H4Zm-3 4v-2h22v2H1Zm11-4Zm0 6Z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                            EDR and XDR Solutions
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                        Endpoint Detection and Response
                                    </p>
                                </div>
                                <div className="mb-9">
                                    <div className="mb-10 flex items-center">
                                        <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                                            <svg viewBox="0 0 24 24" width="40" height="40" className="fill-current">
                                                <path
                                                    fill="currentColor"
                                                    d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59l.3-.29M20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7v1m.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6Z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                            Ciso as a Service (CaaS)
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                        Cybersecurity Strategy and Leadership
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
