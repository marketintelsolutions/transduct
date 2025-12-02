import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="bg-white relative z-2">
      <div className="w-full max-w-max-w mx-auto py-20 ">
        <h2 className="text-center uppercase font-semibold text-4xl">
          CONTACT
        </h2>
        <p className="text-xl font-light text-center mt-5">
          Our vision is clear - to stand as the benchmark for transformative
          partnerships and iconic projects
        </p>

        <div className="mt-12 flex gap-4 ">
          <div className="w-full max-w-1/2 ">
            <div className="shadow-[0px_2px_25px_15px_rgba(0,0,0,0.05)] py-8 flex flex-col gap-3 items-center justify-center">
              <span className="inline-flex border-dashed border rounded-full p-3 border-primary text-primary text-4xl">
                <CiLocationOn />
              </span>
              <h3 className="font-semibold text-2xl">Address</h3>
              <p className="font-light">
                30B FOLA OSIBO ROAD, LEKKI, ETI-OSA, LAGOS STATE
              </p>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.621537953061!2d3.4664761752403486!3d6.442618793548665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf45214ad6cb1%3A0xc52903b515c56928!2s30b%20Fola%20Osibo%20Rd%2C%20Lekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1763555707829!5m2!1sen!2sng"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full flex gap-4">
              <div className="w-full shadow-[0px_2px_25px_15px_rgba(0,0,0,0.05)] py-8 flex flex-col gap-3 items-center justify-center">
                <span className="inline-flex border-dashed border rounded-full p-3 border-primary text-primary text-4xl">
                  <BsTelephone />
                </span>
                <h3 className="font-semibold text-2xl">Call Us</h3>
                <p className="font-light">07026679881</p>
              </div>
              <div className="w-full shadow-[0px_2px_25px_15px_rgba(0,0,0,0.05)] py-8 flex flex-col gap-3 items-center justify-center">
                <span className="inline-flex border-dashed border rounded-full p-3 border-primary text-primary text-4xl">
                  <IoMailOutline />
                </span>
                <h3 className="font-semibold text-2xl">Email Us</h3>
                <p className="font-light">info@transductltd.com</p>
              </div>
            </div>
            <form className="mt-4 w-full shadow-[0px_2px_25px_15px_rgba(0,0,0,0.05)] py-6 px-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="py-3 px-2 placeholder:text-black/30 border border-gray-200"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-3 px-2 placeholder:text-black/30 border border-gray-200"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="py-3 px-2 placeholder:text-black/30 border border-gray-200 w-full mt-6"
              />
              <textarea
                placeholder="Message"
                className="py-3 px-2 placeholder:text-black/30 border border-gray-200 w-full mt-6 h-40"
              ></textarea>
              <div className="flex justify-center">
                <button className="bg-primary py-3 px-5 text-white mt-8 hover:text-primary hover:bg-white hover:border-primary border cursor-pointer">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
