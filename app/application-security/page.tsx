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
            title="Application Security"
            paragraph="Do you have the expertise to proactively identify vulnerabilities and weaknesses in your systems?"
          />

          <h1 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-5xl">
            Have you ever reviewed your software?
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span> Do you have the expertise to identify vulnerabilities and weaknesses in your software?
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span> Can you actively hunt down and neutralize potential threats before they exploit your systems?
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mb-3">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span>Integrate security seamlessly into your development pipeline with DevSecOps practices.
                  </p>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    <span className="mr-2 text-red-500 font-bold text-lg">-</span>Add S-SDLC and DevSecOps to ensure security is built into your software from the ground up.
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
              <h2 className="text-4xl font-bold text-center">Forge a secure path to success for your applications with our expertise, safeguarding your code and user data at every step.</h2>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[27/25]  max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/services/browser_icon_3.svg"
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
                        width="32"
                        height="32"
                        className="fill-current"
                      >
                        <path fill="currentColor" d="M28 14h-1V7c0-1.1-.9-2-2-2h-6v2h6v7h-1c-1.1 0-2 .9-2 2v9H9.9c-.4-1.4-1.5-2.5-2.9-2.9V7h6.2l-2.6 2.6L12 11l5-5l-5-5l-1.4 1.4L13.2 5H7c-1.1 0-2 .9-2 2v15.1c-1.7.4-3 2-3 3.9c0 2.2 1.8 4 4 4c1.9 0 3.4-1.3 3.9-3H22v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2zM6 28c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm18 0V16h4v12h-4z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      S-SDLC Implementation
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Add S-SDLC and DevSecOps to ensure security is built into your software from the ground up.
                  </p>
                </div>
                <div className="mb-9">
                  <div className="mb-10 flex items-center">
                    <div className="h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary flex justify-center">
                      <svg
                        viewBox="0 0 1024 1024"
                        width="32"
                        height="32"
                        className="fill-current"
                      >
                        <path fill="currentColor" d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z"/>
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      DevSecOps Consulting
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Add experience App Security Engineers to your development team.
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
                        <path fill="currentColor" d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96l-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974L2.647 6.681L12 1.388l7.76 4.368l.668-.411v-.566L12 0L.95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52L1.516 9.56l-.565.308Z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 ml-4 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Source Code Reviews
                    </h3>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Use code reviews to identify security flaws in your source code.
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
