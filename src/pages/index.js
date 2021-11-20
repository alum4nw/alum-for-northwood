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
import * as classnames from "classnames";

const IndexPage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    console.log("handle");
    setShow((prev) => !prev);
  };

  return (
    <PageLayout pageTitle="Home" bgColor="bg-blue-light">
      <Hero />
      <Mission />
      <UpcomingEvents />
      <UpcomingSummer />
      <div className="bg-blue-lightest flex flex-col items-center text-center justify-center space-y-8 pt-10 pb-11 lg:py-16">
        <h3 className="text-mh3 lg:text-h3 font-header px-6 md:px-0">
          Get notified when program registration opens.
        </h3>
        <div onClick={handleShow}>
          <Button
            padding="py-3 px-5"
            textSize="text-body md:text-tbody lg:text-body"
            description="Sign up for our mailing list!"
          />
        </div>
        <div
          className={classnames({
            hidden: !show,
            display: show,
          })}
        >
          <MailingModal />
        </div>
        <p className="font-body text-body md:text-tbody lg:text-body w-2/3">
          Questions? Shoot us an email at contact@alumfornorthwood.org
        </p>
      </div>
      <LearnMore />
    </PageLayout>
  );
};

export default IndexPage;
