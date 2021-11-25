import * as React from "react";
import Close from "../svg/close.svg";
import Button from "./Button";
import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement("#root");

const MailingModal = ({ show, toggleFunc }) => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(email);
    event.preventDefault();
    toggleFunc();
  };

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={toggleFunc}
      contentLabel="mail modal"
      className="opacity-100 z-50"
      overlayClassName="justify-center bg-black bg-opacity-20 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40"
    >
      <div className="bg-white opacity-100 rounded-4xl w-80 relative md:w-auto md:max-w-2xl lg:max-w-3xl">
        <button onClick={toggleFunc}>
          <Close className="absolute right-6 top-6" />
        </button>
        <div className="flex flex-col items-center space-y-5 pt-5 lg:pt-10">
          <h3 className="text-mh3 text-black font-header lg:text-h3 px-16 text-center">
            Sign up for our mailing list!
          </h3>
          <p className="text-body font-body text-black px-10 md:text-tbody lg:text-body md:pb-3 lg:pb-7">
            Receive updates on ALUM events and get notified when program
            registration opens.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pb-10 md:pb-6 lg:pb-11">
              <div className="flex flex-col items-center space-y-5 md:flex-row md:space-y-0">
                <label>
                  <input
                    type="email"
                    required
                    placeholder="timthewolf@alumfornorthwood.org"
                    onChange={handleChange}
                    className="w-64 h-12 text-grey bg-blue-lightest text-body md:text-tbody lg:text-body focus:placeholder-transparent focus:text-black
                   font-body p-3 overflow-ellipsis rounded-xl md:rounded-r-none z-60 md:w-96 lg:max-w-xl md:pl-6 md:h-11 lg:h-12"
                  />
                </label>
                <p className="font-body text-body invisible md:hidden">
                  Please enter a valid email address.
                </p>
                <Button
                  padding="py-3 px-5"
                  textSize="text-body md:text-tbody lg:text-body md:h-11 lg:h-12"
                  description="Submit"
                  isModal={true}
                >
                  <input type="submit" />
                </Button>
              </div>
              <p className="hidden md:block font-body text-tbody lg:text-body text-center pt-2 lg:pt-3">
                Please enter a valid email address.
              </p>
            </div>
          </form>
        </div>
      </div>
    </ReactModal>
  );
};

export default MailingModal;
