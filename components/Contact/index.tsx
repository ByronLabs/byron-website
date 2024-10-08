"use client";

import { sendContactEmailAction } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [state, formAction] = useFormState(sendContactEmailAction, undefined);

    useEffect(() => {
        console.log("state", state);
        if (!!state) {
            setSubmitted(true);
        }
    }, [state]);

    return !submitted ? (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12 xl:w-2/12"></div>
                    <div className="w-full px-6 lg:w-7/12 xl:w-8/12">
                        <div
                            className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s"
                        >
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Need Help? Contact Us
                            </h2>
                            <br />
                            <form action={formAction}>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="name"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label
                                                htmlFor="message"
                                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                            >
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="Enter your Message"
                                                className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <label className="mb-[20px] ml-[20px]">
                                        <input type="checkbox" required />
                                        <span className="ml-2.5 text-md text-dark dark:text-white">
                                            I agree to the{" "}
                                            <a href="https://byronlabs.io/privacy-policy.html">
                                                {" "}
                                                <em>
                                                    <strong>
                                                        {" "}
                                                        terms and conditions and collection of personal data
                                                    </strong>
                                                </em>
                                            </a>
                                            .
                                        </span>
                                    </label>

                                    <div className="w-full px-4">
                                        <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <div className="flex flex-col items-center justify-center py-16">
            <h1 className="text-4xl font-bold text-black dark:text-white">Thanks for contacting us!</h1>
            <p className="text-xl font-medium text-body-color">We will get back to you ASAP.</p>
        </div>
    );
};

export default Contact;
