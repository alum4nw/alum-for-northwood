import * as React from "react";
import Layout from "/src/components/Layout.js";
import Hero from "../components/Hero.js";
import Mission from "../components/Mission.js";
import UpcomingEvents from "../components/UpcomingEvents.js";
import UpcomingSummer from "../components/UpcomingSummer.js";
import Button from "../components/Button.js";
import LearnMore from "../components/LearnMore.js";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <Mission />
      <UpcomingEvents />
      <UpcomingSummer />
      <div className="bg-blue-lightest flex flex-col items-center justify-center space-y-8 py-16">
        <h3 className="text-h3 font-header">Ready to meet your mentor?</h3>
        <Button
          padding="py-3 px-5"
          textSize="text-body"
          description="Sign up for our program!"
        />
        <p className="font-body text-body">
          Questions? Shoot us an email at contact@alumfornorthwood.org
        </p>
      </div>
      <LearnMore />
    </Layout>
  );
};

export default IndexPage;
