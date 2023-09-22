import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image 
                className="rounded-md"
                src="/images/about/Universidad-Alcala.jpg"
                alt="about image"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Born in research and university excellence
                </h3>
                <p className="text-base text-justified font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Byron Labs was founded by former researchers from the Universidad de Alcalá. Born in a research environment has allow the company 
                  to benefit from access to cutting-edge research, emerging technologies, and a pool of skilled researchers. 
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cybersecurity powered by Science
                </h3>
                <p className="text-base text-justified font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  This combination enables Byron Labs to innovate and develop effective solutions for evolving cybersecurity challenges. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
