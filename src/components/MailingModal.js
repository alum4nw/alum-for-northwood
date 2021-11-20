import * as React from "react";
import CloseModal from "../svg/closeModal.svg";
import Button from "./Button";

const MailingModal = () => {
  return (
    <div className="bg-blue rounded-4xl">
      <CloseModal />
      <div className="flex flex-col justify-center items-center space-y-5">
        <h3 className="text-mh3 text-white font-header">
          Sign up for our mailing list!
        </h3>
        <p className="text-body font-body text-white">
          Receive updates on ALUM events and get notified when program
          registration opens.
        </p>
        <Button padding="py-3 px-5" textSize="text-body" description="Submit" />
      </div>
    </div>
  );
};

export default MailingModal;
