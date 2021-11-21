import * as React from "react";
import CloseModal from "../svg/closeModal.svg";
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
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
    >
      <div className="bg-blue rounded-4xl w-80 h-96 relative md:w-auto md:max-w-2xl md:h-60 lg:h-80 lg:max-w-3xl">
        <button onClick={toggleFunc}>
          <CloseModal className="absolute right-6 top-6" />
        </button>
        <div className="flex flex-col items-center space-y-5 pt-5 lg:pt-10">
          <h3 className="text-mh3 text-white font-header lg:text-h3 px-16 text-center">
            Sign up for our mailing list!
          </h3>
          <p className="text-body font-body text-white px-10 md:text-tbody lg:text-body md:pb-3 lg:pb-7">
            Receive updates on ALUM events and get notified when program
            registration opens.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-5 md:flex-row md:space-y-0">
              <label>
                <input
                  type="text"
                  placeholder="timthewolf@alumfornorthwood.org"
                  onChange={handleChange}
                  className="w-64 h-12 text-grey text-body md:text-tbody lg:text-body
                   font-body p-3 overflow-ellipsis rounded-xl md:rounded-r-none z-60 md:w-96 lg:max-w-xl md:pl-6 md:h-11 lg:h-12"
                />
              </label>
              <Button
                padding="py-3 px-5"
                textSize="text-body md:text-tbody lg:text-body md:h-11 lg:h-12"
                description="Submit"
                isModal={true}
              >
                <input type="submit" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ReactModal>
  );
};

export default MailingModal;
