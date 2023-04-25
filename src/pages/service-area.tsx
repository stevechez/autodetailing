import type { NextPage } from "next";
import Image from "next/image";
const ServiceArea: NextPage = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        Service Area
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

        <p className="text-xl mb-4 w-full mr-12 text-center">
          At our Auto Detailing company, we are proud to serve the Santa Cruz
          County community. Our service area includes all of Santa Cruz County,
          and we are committed to providing our customers with the highest
          quality of car care services. Whether you&apos;re in Santa Cruz,
          Capitola, Scotts Valley, or any other part of the county, we&apos;re
          here to provide you with exceptional detailing services. Contact us
          today to schedule an appointment and experience the best auto
          detailing services in Santa Cruz County.
        </p>

        <h4 className="permanent-marker text-xl text-blue-950 text-center mt-12">
          Contact us today to experience the difference for yourself.
        </h4>
      </div>
    </div>
  );
};

export default ServiceArea;
