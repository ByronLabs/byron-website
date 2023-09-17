import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Services />
    </>
  );
};

export default ServicesPage;
