import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description=""
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            This Privacy Policy outlines how Byron Labs collects, uses, and protects the information you provide when using our website and services.
            We are committed to ensuring the privacy and security of your personal information. By accessing or using our website, you agree to the terms of this Privacy Policy. Please read the following information carefully.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            First - Data Controller
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            Contact details of the data controller: Byron Labs, S.L. (hereinafter Byron Labs) with Tax Identification Code B10664555 and address in Madrid, CP 28050, Av. de Manoteras, 26, 6º C. Data Protection contact details: you can contact us at the postal address indicated above and/or by e-mail: info@byronlabs.io. Contact details of the Data Protection Officer (DPO): info@byronlabs.io.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Second - User consent
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            It will be understood that the user accepts the established conditions from the moment he/she registers on the website. Therefore, the completion of our registration form implies the unequivocal consent of the user to the automated processing of data in accordance with the privacy conditions of Byron Labs. The data collected are adequate, relevant and not excessive in relation to the scope and purposes determined. Notwithstanding the foregoing, such consent may be revoked at any time by the interested party, by unsubscribing by any of the means made available to the user.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Third - Purposes of data processing
          </h1>
          <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
            For what purpose do we process your personal data?
          </h2>
          <p className="mb-3 text-base font-medium text-body-color text-justify">
            We collect personal information necessary to respond to users&apos; requests for information.
          </p>
          <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
            In what cases are personal data requested?
          </h2>
          <p className="mb-3 text-base font-medium text-body-color text-justify">
            Sending information requested through the forms provided on the website.
          </p>
          <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
            What use will we make of the personal information we use?
          </h2>
          <p className="mb-3 text-base font-medium text-body-color text-justify">
            For user service and to provide follow-up services.
          </p>
          <h2 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
            How long will we keep your data?
          </h2>
          <p className="mb-3 text-base font-medium text-body-color text-justify">
            The period of retention of personal data will vary depending on the service you may contract. In any case, your data will be kept for the duration of the contractual relationship. Once the contractual relationship has ended, we will keep your data blocked during the prescription periods of the obligations that may have arisen from the processing and/or the applicable legal periods, remaining at the disposal of the competent authorities, for the attention of the possible responsibilities arising from the processing.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Fourth - Legitimation
          </h1>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Fifth - Recipients
          </h1>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Sixth - Data protection rights
          </h1>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Seventh - Security level
          </h1>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Eighth - Confidentiality
          </h1>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Ninth - Responsibility
          </h1>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Tenth - Modification of the Privacy Policy
          </h1>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
