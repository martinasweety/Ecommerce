import React from "react";
import ContactImg from "../assets/Image/contact_img.png";

const Contact = () => {
  return (
    <div className="px-4 sm:px-20">
      <div className="text-center text-2xl pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={ContactImg} className="w-full md:max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600 text-xl">Our Store</p>
          <p className="text-gray-500">
            Sowripalayam, Coimbatore <br />
            Tamil Nadu, India
          </p>
          <p className="text-gray-500">
            Phone : (+91) 9876543210 <br />
            Email : elitecollections@gmail.com
          </p>
          <p className="font-semibold text-gray-600 text-xl">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;