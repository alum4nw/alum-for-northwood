import * as React from "react";
import PageLayout from "../components/PageLayout";
import TextBubble from "../svg/textBubble.svg";
import CryingWolf from "../svg/cryingWolf.svg";
import Button from "../components/Button";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="Page not found" bgColor="bg-blue-lightest">
      <div className="bg-blue-lightest flex flex-col items-center pt-16 pb-40 space-y-8">
        <h1 className="text-center font-header text-sh1 font-bold">
          Page not found
        </h1>
        <div className="relative">
          <TextBubble className="absolute" />
          <div className="flex flex-col items-center z-10 relative p-6 space-y-4">
            <p className="text-left w-60 font-body text-body">
              We're sorry, we couldn't find the page you're looking for. Let's
              get you back on track!
            </p>
            <Link to="/">
              <Button
                padding="py-3 px-5"
                textSize="text-mh4 font-body"
                description="ALUM Website Home"
              />
            </Link>
          </div>
        </div>
        <CryingWolf />
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
