import * as React from "react";
import PageLayout from "../components/PageLayout.js";
import Hero from "../components/Hero.js";
import Mission from "../components/Mission.js";
import UpcomingEvents from "../components/UpcomingEvents.js";
import UpcomingSummer from "../components/UpcomingSummer.js";
import Button from "../components/Button.js";
import LearnMore from "../components/LearnMore.js";
import MailingModal from "../components/MailingModal.js";
import { useState } from "react";

const IndexPage = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <PageLayout pageTitle="Home" bgColor="bg-blue-light">
      <Hero />
      <Mission />
      <UpcomingEvents />
      <UpcomingSummer />
      <div className="bg-blue-lightest flex flex-col items-center text-center justify-center space-y-8 pt-10 pb-11 lg:py-16">
        <p id="mail"></p>
        <h3 className="text-mh3 lg:text-h3 font-header px-6 md:px-0">
          Get notified when program registration opens.
        </h3>
        <div onClick={toggleModal}>
          <Button
            padding="py-3 px-5"
            textSize="text-body md:text-tbody lg:text-body"
            description="Sign up for our mailing list!"
          />
        </div>
        <MailingModal show={show} toggleFunc={toggleModal} />
        <p className="font-body text-body md:text-tbody lg:text-body w-2/3">
          Questions? Shoot us an email at{" "}
          <a
            href="mailto:contact@alumfornorthwood.org"
            className="hover:text-blue"
          >
            contact@alumfornorthwood.org
          </a>
        </p>
      </div>
      <LearnMore />
    </PageLayout>
  );
};

export default IndexPage;
