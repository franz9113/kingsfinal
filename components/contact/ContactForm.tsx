import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

const ContactForm = () => {
  return (
    <section className="bg-black padding-component">
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center">
          <div className="border-t border-[#cba563] w-16 mr-2"></div>
          <h2 className="text-[#cba563] bold-32 uppercase">Contact us</h2>
          <div className="border-t border-[#cba563] w-16 ml-2"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full max-w-lg justify-center">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input_contact"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input_contact mt-4"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="input_contact mt-4"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="input_contact mt-4"
          />
          <div className="flex justify-center">
            <button className="border border-[#D8B270] hover:bg-[#C9B45B] text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center">
              Submit
              <ArrowLongRightIcon className="h-6 w-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
