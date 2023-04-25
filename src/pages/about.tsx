import type { NextPage } from "next";
import Image from "next/image";
const about: NextPage = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        About
      </h1>
      <div className="w-10/12 mx-auto">
        <div className="lg:pl-12 mb-8 md:float-right md:m-4">
          {/* <Image
            src="/images/about-us.jpg"
            alt="About Us"
            width={350}
            height={300}
            className="w-[460px] h-96 object-cover"
          /> */}
        </div>

        <p className="text-2xl mb-4 w-full mr-12">
          At our Signature Shine company, we pride ourselves on providing a
          service that is different and better than our competitors. Here are
          three reasons why:
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          <span className="font-semibold">Attention to Detail:</span> We believe
          that the little things matter, and that&apos;s why we pay attention to
          every detail when it comes to your car. Our team of experienced
          technicians takes the time to understand your needs and goes the extra
          mile to ensure that every inch of your car is sparkling clean. From
          the dashboard to the wheels, we leave no stone unturned.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          <span className="font-semibold">High-Quality Products:</span> We use
          only the highest-quality products and equipment to ensure that your
          car receives the care and attention it deserves. Our products are
          eco-friendly and safe for you, your car, and the environment. We never
          cut corners when it comes to quality and believe that it&apos;s what
          sets us apart from the competition.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          <span className="font-semibold">Customer Service:</span> At our Auto
          Detailing company, we believe that customer satisfaction is the key to
          our success. That&apos;s why we go above and beyond to make sure that
          every customer is happy with our services. We are always here to
          answer your questions and address any concerns you may have. We
          believe in building long-term relationships with our customers, and we
          do that by providing exceptional customer service every step of the
          way.
        </p>
        <h4 className="permanent-marker text-2xl text-blue-950 text-center mt-12">
          Contact us today to experience the difference for yourself.
        </h4>
      </div>
    </div>
  );
};

export default about;
