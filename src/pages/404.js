import * as React from "react";
import PageLayout from "../components/PageLayout";
import TextBubble from "../svg/textBubble.svg";
import TextBubbleCurved from "../svg/textBubbleCurved.svg";
import CryingWolf from "../svg/cryingWolf.svg";
import LargeCryingWolf from "../svg/largeCryingWolf.svg";
import Button from "../components/Button";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="Page not found" bgColor="bg-blue-lightest">
      <div className="bg-blue-lightest flex h-screen w-screen -mt-10">
        <div className="flex flex-col items-center space-y-8 m-auto">
          <h1 className="text-center font-header text-sh1 md:text-th1 lg:text-h1 font-bold">
            Page not found
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-x-16 md:space-y-20">
            <div className="relative">
              <TextBubble className="absolute -ml-1 mt-0.5 md:hidden" />
              <TextBubbleCurved className="absolute hidden md:block lg:w-96 lg:h-60" />
              <div className="flex flex-col items-center z-10 relative p-6 md:pl-8 md:pt-5 space-y-4 md:space-y-3">
                <p className="text-left w-60 md:w-64 lg:w-80 lg:-ml-1 font-body text-body md:text-mh4 lg:text-h4">
                  We're sorry, we couldn't find the page you're looking for.
                  Let's get you back on track!
                </p>
                <Link to="/">
                  <Button
                    padding="py-3 px-5"
                    textSize="text-mh4 lg:text-h4 font-body md:-ml-5"
                    description="ALUM Website Home"
                  />
                </Link>
              </div>
            </div>
            <CryingWolf className="md:hidden" />
            <LargeCryingWolf className="hidden md:block" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
