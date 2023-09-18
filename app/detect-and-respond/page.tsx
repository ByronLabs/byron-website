import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleFeature from "@/components/Services/SingleFeature";
import servicesData from "@/components/Services/servicesData";

const ServicesPage = () => {
  return (
    <>
      <section className="mt-14 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Detect and Respond"
            paragraph="Are you able to detect adversaries as they try to intrude your environment?"
          />

          <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-5xl">
            Are you prepared?
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span> Are you able to detect and respond to a fast-paced ransomware actor?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span> Are you able to detect and respond to a fast-paced ransomware actor?
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span>Are you able to detect and respond to a fast-paced ransomware actor?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span>Are you able to detect and respond to a fast-paced ransomware actor?
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
              <h2 className="text-4xl font-bold text-center">Whatever your situation and capability: Our experts are ready to bring you to the next level!</h2>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[27/25]  max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/services/hosting.svg"
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
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path d="M22.08 11.04h-2V4h-7.03V2h-2.01v2H4v7.04H2v2.01h2v7.03h7.04v2h2.01v-2h7.03v-7.03h2v-2.01m-4.01 7.03h-5.02v-2.01h-2.01v2.01H6v-5.02h2.03v-2.01H6V6h5.04v2.03h2.01V6h5.02v5.04h-2.01v2.01h2.01v5.02m-5.02-6.02a1 1 0 01-1 1c-.55 0-1.01-.45-1.01-1s.46-1.01 1.01-1.01 1 .46 1 1.01z" />
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
                      <svg
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path d="M22.08 11.04h-2V4h-7.03V2h-2.01v2H4v7.04H2v2.01h2v7.03h7.04v2h2.01v-2h7.03v-7.03h2v-2.01m-4.01 7.03h-5.02v-2.01h-2.01v2.01H6v-5.02h2.03v-2.01H6V6h5.04v2.03h2.01V6h5.02v5.04h-2.01v2.01h2.01v5.02m-5.02-6.02a1 1 0 01-1 1c-.55 0-1.01-.45-1.01-1s.46-1.01 1.01-1.01 1 .46 1 1.01z" />
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
                      <svg
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        className="fill-current"
                      >
                        <path d="M22.08 11.04h-2V4h-7.03V2h-2.01v2H4v7.04H2v2.01h2v7.03h7.04v2h2.01v-2h7.03v-7.03h2v-2.01m-4.01 7.03h-5.02v-2.01h-2.01v2.01H6v-5.02h2.03v-2.01H6V6h5.04v2.03h2.01V6h5.02v5.04h-2.01v2.01h2.01v5.02m-5.02-6.02a1 1 0 01-1 1c-.55 0-1.01-.45-1.01-1s.46-1.01 1.01-1.01 1 .46 1 1.01z" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServicesPage;
