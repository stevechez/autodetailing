import type { NextPage } from "next";
import Image from "next/image";

const LearnMore: NextPage = () => {
  return (
    <>
      <section className="container w-full mx-auto">
        <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
          Learn More
        </h1>

        <div className="w-10/12 mx-auto">
          <div className="pl-12 mb-8 md:float-right md:m-4">
            <Image
              src="/images/hero-auto.jpg"
              alt="Learn More Image"
              width={300}
              height={300}
              className="w-96 h-96 object-cover"
            />
          </div>

          <p className="text-xl mb-4 w-full mr-12">
            Welcome to our &quot;Learn More&quot; page, where we provide you
            with all the information you need to know about our Auto Detailing
            service.
          </p>

          <p className="text-xl mb-4 w-full mr-12">
            At Signature Shine, we offer a wide range of services that cater to
            all your car care needs. Our services include interior detailing,
            exterior detailing, and bumper-to-bumper detailing. Our team of
            experienced technicians uses only the highest quality products and
            equipment to ensure that your car receives the care and attention it
            deserves.
          </p>

          <p className="text-xl mb-4 w-full mr-12">
            We believe that customer satisfaction is the key to our success.
            That&apos;s why we go above and beyond to make sure that every
            customer is happy with our services. We are always here to answer
            your questions and address any concerns you may have.
          </p>
          <p className="text-xl mb-4 w-full mr-12">
            We believe that the little things matter, and that&apos;s why we pay
            attention to every detail when it comes to your car. From the
            dashboard to the wheels, we leave no stone unturned. Contact us
            today to experience the difference for yourself and discover why our
            Auto Detailing service is the best choice for your car care needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
