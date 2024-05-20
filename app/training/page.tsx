import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Specialized Training",
  description:
    "Equip your team with the latest cybersecurity skills through Byron Labs' Specialized Training services. Learn secure software development, SIEM deployment, and incident response to enhance your organization's cybersecurity resilience.",
  keywords: [
    "specialized training",
    "cybersecurity training",
    "secure development training",
    "SIEM deployment training",
    "incident response training",
    "cybersecurity skills",
    "security awareness",
    "cybersecurity certification",
    "security challenges",
  ],
  openGraph: {
    title: "Specialized Training",
    description:
      "Equip your team with the latest cybersecurity skills through Byron Labs' Specialized Training services. Learn secure software development, SIEM deployment, and incident response to enhance your organization's cybersecurity resilience.",
    url: "https://byronlabs.io/training",
  },
  twitter: {
    title: "Specialized Training",
    description:
      "Equip your team with the latest cybersecurity skills through Byron Labs' Specialized Training services. Learn secure software development, SIEM deployment, and incident response to enhance your organization's cybersecurity resilience.",
  },
};

const ServicesPage = () => {
  return (
    <>
      <section className="mt-14 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Specialized training"
            paragraph="Is your organization prepared to defend against the ever-evolving landscape of cyber threats?"
          />

          <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-5xl">
            Looking for an expert to train your team?
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>{" "}
                    Is your workforce equipped with the latest cybersecurity
                    skills?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>{" "}
                    Struggling to address specific security challenges or
                    technologies?
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>
                    Concerned about employee cybersecurity awareness?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">
                      -
                    </span>
                    Looking to certify your security professionals?
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
                Expert-led courses are tailored to enhance your cybersecurity
                resilience.
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
                  src="/images/services/training.svg"
                  alt="about image"
                  fill
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 mt-12">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <div className="mb-10 flex items-center">
                    <div className="h-[60px] w-[60px] items-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                      <svg
                        viewBox="0 0 48 48"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <g
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d="M6 6v28h22.387v-2H8V8h27v2.12h2V6H6Zm31 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
                          <path d="M30.093 21.83a3 3 0 0 1 2.07-.83h4.082c1.464 0 2.827.498 3.877 1.49c1.01.954 1.536 2.177 1.751 3.336c.338 1.822-.012 3.813-.873 5.578V39.5a2.5 2.5 0 0 1-4.966.411l-.534-3.204l-.534 3.204A2.5 2.5 0 0 1 30 39.5v-9.407a3 3 0 0 1-1.5.402h-5.102a3 3 0 0 1 0-6h3.9l2.795-2.666ZM32 33.475V39.5a.5.5 0 0 0 .993.082l1.043-6.256a1 1 0 0 1 .986-.836h.956a1 1 0 0 1 .986.836l1.043 6.256A.5.5 0 0 0 39 39.5v-8.334a1 1 0 0 1 .112-.46c.772-1.49 1.053-3.123.795-4.515c-.157-.846-.524-1.648-1.158-2.247c-.647-.611-1.505-.944-2.504-.944h-4.081c-.257 0-.505.099-.691.276l-3.084 2.942a1 1 0 0 1-.69.277h-4.301a1 1 0 0 0 0 2H28.5a1 1 0 0 0 .69-.277l1.12-1.068a1 1 0 0 1 1.69.724v5.602Z" />
                        </g>
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Secure Development Training
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Master the art of secure software development with our
                    Secure Development Training courses. Gain the skills to
                    build robust, resilient applications that stand strong
                    against today&apos;s cyber threats
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
                          fill="currentColor"
                          d="m6.03 12.03l2 3.47l-2.53 3.18L2 12.62l4.03-.59M17 18v-2.71c.88-.39 1.5-1.26 1.5-2.29c0-.57-.2-1.1-.53-1.5l1.97-1.15c1.01-.59 1.36-1.88.77-2.89l-1.38-2.4a2.125 2.125 0 0 0-2.89-.78L8.31 9c-.95.53-1.28 1.75-.73 2.71l1.5 2.6c.55.95 1.78 1.28 2.73.73l1.88-1.08c.25.59.72 1.07 1.31 1.33V18c0 1.1.9 2 2 2h5v-2h-5Z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      SIEM Deployment and management Training
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Learn to harness the full potential of SIEM solutions for
                    proactive threat detection and effective security incident
                    response.
                  </p>
                </div>
                <div className="mb-9">
                  <div className="mb-10 flex items-center">
                    <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                      <svg
                        viewBox="0 0 256 256"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path
                          fill="currentColor"
                          d="M177.62 159.6a52 52 0 0 1-34 34a12.2 12.2 0 0 1-3.6.55a12 12 0 0 1-3.6-23.45a28 28 0 0 0 18.32-18.32a12 12 0 0 1 22.9 7.2ZM220 144a92 92 0 0 1-184 0c0-28.81 11.27-58.18 33.48-87.28a12 12 0 0 1 17.9-1.33l19.69 19.11L127 19.89a12 12 0 0 1 18.94-5.12C168.2 33.25 220 82.85 220 144Zm-24 0c0-41.71-30.61-78.39-52.52-99.29l-20.21 55.4a12 12 0 0 1-19.63 4.5L80.71 82.36C67 103.38 60 124.06 60 144a68 68 0 0 0 136 0Z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Incident Response Training
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Equip your team to efficiently detect, analyze, and mitigate
                    security incidents, minimizing their impact on your
                    organization.
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
