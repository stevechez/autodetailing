import React from "react";

const Pricing = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        Pricing
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
          Thank you for considering our Auto Detailing company for your car care
          needs. We offer a range of detailing services to suit your needs,
          including interior-only, exterior-only, and bumper-to-bumper
          detailing. Our prices are competitive, and we strive to provide the
          best value for your money. Please see our pricing below:
        </p>
        <p className="text-xl mb-4 w-full mr-12 font-semibold">
          Interior Detail
        </p>
        <ul className="text-xl mb-4 w-full mr-12 list-disc ml-6">
          <li>Sedan: $140</li>
          <li>Truck/SUV: $160</li>
          <li>Van/Minivan: $180</li>
        </ul>
        <p className="text-xl mb-4 w-full mr-12">
          Our Interior Detail service includes a deep-cleaning of the
          upholstery, carpets, and mats, as well as detailing of the dashboard,
          console, and other interior surfaces. We also provide a thorough
          vacuuming and deodorizing service to ensure that your car looks and
          smells great.
        </p>
        <p className="text-xl mb-4 w-full mr-12 font-semibold">
          Exterior Detail
        </p>
        <ul className="text-xl mb-4 w-full mr-12 list-disc ml-6">
          <li>Sedan: $140</li>
          <li>Truck/SUV: $160</li>
          <li>Van/Minivan: $180</li>
        </ul>
        <p className="text-xl mb-4 w-full mr-12">
          Our Exterior Detail service is designed to deep clean and revitalize
          the exterior of your vehicle. We focus on washing, waxing, and
          polishing the exterior of your vehicle to give it a showroom-worthy
          finish. We also clean the wheels, tires, and windows, and provide a
          hand-drying service to ensure that your car looks its best.
        </p>
        <p className="text-xl mb-4 w-full mr-12 font-semibold">
          Bumper-to-Bumper Detail:
        </p>
        <ul className="text-xl mb-4 w-full mr-12 list-disc ml-6">
          <li>Sedan: $250</li>
          <li>Truck/SUV: 270</li>
          <li>Van/Minivan: $290</li>
        </ul>
        <p className="text-xl mb-4 w-full mr-12">
          Our Bumper-to-Bumper Detail service is a comprehensive package that
          includes both interior and exterior detailing. We start by
          deep-cleaning the interior of your car, including the seats, carpets,
          mats, dashboard, and console. We then move on to the exterior, where
          we wash, wax, and polish the car, as well as clean the wheels, tires,
          and windows. This package is designed to give your car a complete
          makeover and leave it looking and smelling like new.
        </p>

        <p className="text-xl mb-4 w-full mr-12">
          At our Auto Detailing company, we believe in transparency and want you
          to know exactly what you are paying for. Our pricing is based on the
          size and type of your vehicle, and we never charge any hidden fees.
          Contact us today to schedule your appointment and experience the
          ultimate in auto detailing services.
        </p>

        <h4 className="permanent-marker text-2xl text-blue-950 text-center mt-12">
          Contact us today to schedule your appointment and experience the
          ultimate in auto detailing services.
        </h4>
      </div>
    </div>
  );
};

export default Pricing;
