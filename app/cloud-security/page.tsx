import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cloud Security",
  description:
    "Strengthen your cloud infrastructure with Byron Labs' Cloud Security services. Assess vulnerabilities, implement monitoring, and conduct continuous security testing to protect your data against evolving threats.",
  keywords: [
    "cloud security",
    "cybersecurity services",
    "cloud infrastructure security",
    "AWS security",
    "Azure security",
    "Google Cloud security",
    "cloud security assessment",
    "cloud security monitoring",
    "continuous cloud security testing",
    "cloud threat protection",
  ],
  openGraph: {
    title: "Cloud Security",
    description:
      "Strengthen your cloud infrastructure with Byron Labs' Cloud Security services. Assess vulnerabilities, implement monitoring, and conduct continuous security testing to protect your data against evolving threats.",
    url: "https://byronlabs.io/cloud-security",
  },
  twitter: {
    title: "Cloud Security",
    description:
      "Strengthen your cloud infrastructure with Byron Labs' Cloud Security services. Assess vulnerabilities, implement monitoring, and conduct continuous security testing to protect your data against evolving threats.",
  },
};

const ServicesPage = () => {
  return (
    <>
      <section className="mt-14 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Cloud Security"
            paragraph="Is your cloud environment truly secure? Explore our Cloud Security services to fortify your cloud infrastructure and protect your data from evolving threats."
          />

          <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-5xl">
            Are you prepared?
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>{" "}
                    Are you able to detect and respond to a fast-paced
                    ransomware actor?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>{" "}
                    Are you able to detect and respond to a fast-paced
                    ransomware actor?
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>
                    Are you able to detect and respond to a fast-paced
                    ransomware actor?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>
                    Are you able to detect and respond to a fast-paced
                    ransomware actor?
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
                Whatever your situation and capability: Our experts are ready to
                bring you to the next level!
              </h2>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[27/25]  max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/services/cloud.svg"
                  alt="about image"
                  fill
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 mt-12">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <div className="mb-10 flex items-center">
                    <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                      <svg
                        viewBox="0 0 32 32"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path
                          fill="currentColor"
                          d="M18 26h8v2h-8zm0-4h12v2H18zm0-4h12v2H18z"
                        />
                        <path
                          fill="currentColor"
                          d="M20.549 11.217L16 2l-4.549 9.217L1.28 12.695l7.36 7.175L6.902 30L14 26.269v-2.26l-4.441 2.335l1.052-6.136l.178-1.037l-.753-.733l-4.458-4.347l6.161-.895l1.04-.151l.466-.943L16 6.519l2.755 5.583l.466.943l1.04.151l7.454 1.085L28 12.3l-7.451-1.083z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Cloud Security Assessment
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Conduct comprehensive assessments of cloud infrastructure
                    and configurations (e.g., AWS, Azure, Google Cloud) to
                    identify vulnerabilities and misconfigurations.
                  </p>
                </div>
                <div className="mb-9">
                  <div className="mb-10 flex items-center">
                    <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                      <svg
                        viewBox="0 0 512 512"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path
                          fill="currentColor"
                          d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16ZM121.69 429.122C70.056 388.972 36.741 326.322 36.741 256a218.519 218.519 0 0 1 9.587-64.122l102.9-17.895l-.121 10.967l-13.943 2.013s-.144 12.5-.144 19.549a12.778 12.778 0 0 0 4.887 10.349l9.468 7.4Zm105.692-283.27l8.48-7.618s6.934-5.38-.143-9.344c-7.188-4.024-39.53-34.5-39.53-34.5c-5.348-5.477-8.257-7.347-15.46 0c0 0-32.342 30.474-39.529 34.5c-7.078 3.964-.144 9.344-.144 9.344l8.481 7.618l-.048 4.369l-73.507-19.176c39.644-56.938 105.532-94.3 180.018-94.3a218.754 218.754 0 0 1 164.934 75.025l-193.512 37.7Zm34.063 329.269l-33.9-250.857l9.467-7.4a12.778 12.778 0 0 0 4.888-10.349c0-7.044-.144-19.549-.144-19.549l-13.943-2.013l-.116-10.474l241.711 31.391a218.872 218.872 0 0 1 5.851 50.13c0 119.074-95.428 216.212-213.814 219.121Z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Cloud Security Monitoring and Logging
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Let us help you logging and monitoring your cloud
                    infrastructure to detect and respond to threats in
                    real-time.
                  </p>
                </div>
                <div className="mb-9">
                  <div className="mb-10 flex items-center">
                    <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M13 20c6-1 8-6 8-10m-7 6l-2 4l4 3M0 9l4-3l3 4m2 10c-6-3-7-8-5-14m16 1C16 1 10 1 6 4.006M20 2v5h-5"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Continuous Cloud Security Testing
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Let us help you to continuously test your cloud
                    infrastructure to ensure that your security controls are
                    working as intended.
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
