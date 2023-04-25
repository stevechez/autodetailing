import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const Content: NextPage = () => {
  return (
    <>
      <section className="w-full py-4 bg-gray-50">
        <div className="px-10 mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-blue-950 text-center my-6">
            How We&apos;re different
          </h1>

          <p className="text-lg text-gray-600 mb-8 md:pr-12">
            At our Auto Detailing company, we pride ourselves on providing a
            service that is different and better than our competitors. Here are
            three reasons why:
          </p>

          <div className="grid overflow-hidden lg:rounded-xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col justify-center ">
                <p className="text-lg text-gray-600 mb-8 md:pr-12">
                  Attention to Detail: We believe that the little things matter,
                  and that&apos;s why we pay attention to every detail when it
                  comes to your car. Our team of experienced technicians takes
                  the time to understand your needs and goes the extra mile to
                  ensure that every inch of your car is sparkling clean. From
                  the dashboard to the wheels, we leave no stone unturned.
                </p>
              </div>
              <div className="overflow-hidden bg-gray-100 h-96">
                <Image
                  src="/images/content-auto-1.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                <Image
                  src="/images/content-auto-2.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <div className="flex flex-col justify-center md:pl-12">
                <p className="text-lg text-gray-600 mb-8 md:pr-12 mt-8 md:mt-0">
                  High-Quality Products: We use only the highest-quality
                  products and equipment to ensure that your car receives the
                  care and attention it deserves. Our products are eco-friendly
                  and safe for you, your car, and the environment. We never cut
                  corners when it comes to quality and believe that it&apos;s
                  what sets us apart from the competition.
                </p>
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-gray-600 mb-8 md:pr-12 mt-8 md:mt-0">
                  Customer Service: At our Auto Detailing company, we believe
                  that customer satisfaction is the key to our success.
                  That&apos;s why we go above and beyond to make sure that every
                  customer is happy with our services. We are always here to
                  answer your questions and address any concerns you may have.
                  We believe in building long-term relationships with our
                  customers, and we do that by providing exceptional customer
                  service every step of the way.
                </p>
              </div>
              <div className="bg-gray-100 h-96">
                <Image
                  src="/images/content-auto-3.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <p className="text-lg text-gray-600 mb-8 md:pr-12 mt-8 md:mt-0">
                In summary, our attention to detail, high-quality products, and
                exceptional customer service are what sets us apart from our
                competitors. Contact us today to experience the difference for
                yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
