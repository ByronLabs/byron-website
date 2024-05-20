import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "Read the legal disclaimer for Byron Labs, including information on terms of use, intellectual property, and limitations of liability. Ensure you are aware of our legal policies and user responsibilities.",
  keywords: [
    "legal disclaimer",
    "terms of use",
    "intellectual property",
    "liability",
    "user responsibilities",
    "privacy policy",
    "Byron Labs legal",
  ],
  openGraph: {
    title: "Legal Disclaimer",
    description:
      "Read the legal disclaimer for Byron Labs, including information on terms of use, intellectual property, and limitations of liability. Ensure you are aware of our legal policies and user responsibilities.",
    url: "https://byronlabs.io/disclaimer",
  },
  twitter: {
    title: "Legal Disclaimer",
    description:
      "Read the legal disclaimer for Byron Labs, including information on terms of use, intellectual property, and limitations of liability. Ensure you are aware of our legal policies and user responsibilities.",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Legal Disclaimer" description="" />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            First - Information Society Services Law
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            In compliance with Law 34/2002, of 11 July, on Information Society
            Services and Electronic Commerce, and European Directive 2000/31/EC,
            we hereby inform you that this website www.byronlabs.io belongs to
            Byron Labs, S.L., (hereinafter Byron Labs).
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Second - Purpose of the website
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            For the purposes of compliance with Law 34/2002, of 11 July, on
            information society services and electronic commerce, hereinafter
            LSSI, and Organic Law 15/1999 of 13 December, on the Protection of
            Personal Data, the owner of the referenced domain informs you that
            the purpose of the Website is to advertise and provide information
            on the services it provides, and also allows you to send queries
            about these services through the contact form on the website.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Third - User access conditions
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            The user undertakes to use the information contained in this
            Internet site exclusively for the purposes of the Portal, not
            carrying out any type of commercial exploitation other than
            authorised uses. The user of the website shall have the right to
            free and unrestricted access to the public information contained
            therein, although Byron Labs reserves the right to restrict access
            to certain sections and services of the Portal to registered users.
            The User shall be liable to Byron Labs or third parties for any
            damages that may be caused as a result of non-compliance with this
            obligation. Access to the Portal is free of charge, and the user
            shall only be liable for the costs derived from the cost of access
            to the network. However, some parts of the Portal may involve access
            to paid services, which will be indicated before accessing them.
          </p>

          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Fourth - Limitation of liability
          </h1>
          <p className="mb-3 text-base font-medium text-body-color text-justify">
            Although the portal manager makes every effort to ensure that the
            contents of the Portal or third parties included in it, are free of
            any error, the owner of the Portal is not responsible for and does
            not guarantee their veracity, suitability or the consequences
            arising from the use of these. The owner of the Portal is not
            responsible for the existence of viruses, worms, or any other
            equivalent element, and the user is solely responsible for providing
            the necessary mechanisms to prevent the verification of damage to
            their equipment or information systems. Byron Labs assumes no
            liability whatsoever for the transmission, dissemination, storage,
            availability, reception, access or use of the website, and, in
            particular, for the following:
          </p>
          <ul className="mb-12 text-base font-medium text-body-color text-justify list-disc list-inside">
            <li>
              The existence of any access failure, causing an interruption, or
              of programming, related to the website and its operation, whatever
              its origin, any harmful element, or the intervention of a third
              party, as well as: server downtime, updating and accuracy of data,
              maintenance work, insufficient capacity to support the computer
              systems necessary for the use of the service offered, etc...
            </li>
            <li>
              The carrying out of acts of unfair competition and illegal
              advertising as a consequence of the transmission, dissemination,
              storage, availability, reception, obtaining or access to the
              website or its contents.
            </li>
            <li>
              The lack of truthfulness, accuracy, completeness, relevance and/or
              timeliness of the website or its contents.
            </li>
            <li>
              The possible lack of suitability for purposes or fulfilment of
              expectations that may be generated by the website or its contents.
            </li>
          </ul>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Fifth - Intellectual property
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            The information used and displayed on the website, including
            software, graphics, illustrations, names, logos and trademarks, is
            the property of Byron Labs, and is protected by International
            Intellectual and Industrial Property Laws and in particular by Royal
            Legislative Decree 1/1996, of 12 April. It is forbidden to copy,
            modify, create a derivative work, reverse engineer, reverse merge or
            in any other way attempt to find the source code, sell, attribute,
            sublicense or transfer in any way whatsoever any rights relating to
            the software. Furthermore, it is also forbidden to modify the
            software or to use modified versions of the software and, in
            particular, when this is done in order to (without this list being
            exhaustive) obtain unauthorised access to the service and to access
            the website by any means other than the interface provided by Byron
            Labs.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Sixth - Links to the Portal
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            Links to the portal are permitted, but they must point directly to
            the homepage in full. In order to establish any other type of link,
            the interested party must have the written permission of the Portal
            administrators. It is strictly forbidden, regardless of the type of
            link to the Portal, to establish frames or any other mechanism that
            allows the visualisation of the contents through a site other than
            the Portal.
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Seventh - Use of the website
          </h1>
          <p className="mb-3 text-base font-medium text-body-color text-justify">
            Within the limits established by law, the user assumes all legal
            responsibility derived from the incorrect, inappropriate or illicit
            use of the website, such as:
          </p>
          <ul className="mb-12 text-base font-medium text-body-color text-justify list-disc list-inside">
            <li>
              Using any device, software, virus, malware, or routine to
              interfere or attempt to interfere with the proper working of the
              site.
            </li>
            <li>
              The use of &quot;phishing&quot;, or impersonation of another
              person acting on your behalf.
            </li>
            <li>
              The use of the website to advertise through the presence of links,
              on-line marketing or any other means that could involve the use of
              fraudulent advertising.
            </li>
            <li>
              The publication of any content that is threatening or violent.
            </li>
          </ul>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Eighth - Consent and Jurisdiction
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            The user agrees with the conditions described and assumes any type
            of legal responsibility if he/she fails to comply with the terms
            described herein. For any type of controversy derived from the use
            of the services offered or the contents of the Portal, the parties
            expressly waive any legal jurisdiction, and the competent
            jurisdiction shall be the Courts and Tribunals of Madrid (Spain).
          </p>
          <h1 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Ninth - Validity of the conditions of use
          </h1>
          <p className="mb-12 text-base font-medium text-body-color text-justify">
            These conditions of use of the Portal are indefinite. However, Byron
            Labs reserves the right to unilaterally modify these conditions
            whenever it deems appropriate. Any modification shall enter into
            force at the time it is published on the Portal&apos;s home page.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
