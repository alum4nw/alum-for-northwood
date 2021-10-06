import * as React from "react";
import PageLayout from "../components/PageLayout.js";
import Hero from "../components/Hero.js";
import Mission from "../components/Mission.js";
import UpcomingEvents from "../components/UpcomingEvents.js";
import UpcomingSummer from "../components/UpcomingSummer.js";
import Button from "../components/Button.js";
import LearnMore from "../components/LearnMore.js";

const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home">
      <Hero />
      <Mission />
      <UpcomingEvents />
      <UpcomingSummer />
      <div className="bg-blue-lightest flex flex-col items-center justify-center space-y-8 py-16">
        <h3 className="text-h3 font-header">
          Get notified when program registration opens.
        </h3>
        <Button
          padding="py-3 px-5"
          textSize="text-body"
          description="Sign up for our mailing list!"
        />
        <p className="font-body text-body">
          Questions? Shoot us an email at contact@alumfornorthwood.org
        </p>
      </div>
      <LearnMore />
    </PageLayout>
  );
};

export default IndexPage;
