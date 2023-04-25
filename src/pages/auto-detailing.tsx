import React from "react";

const AutoDetailing = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        Auto Detailing
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

        <p className="text-xl mb-4 w-full mr-12">
          Welcome to Signature Shine, where we offer a range of options to suit
          your needs. We specialize in interior-only, exterior-only, and
          bumper-to-bumper detailing services.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          <span className="font-semibold">Interior-Only Detailing:</span> Our
          interior-only service is designed to deep clean and revitalize the
          inside of your vehicle. We focus on cleaning the upholstery, carpets,
          and mats, as well as detailing the dashboard, console, and other
          interior surfaces. We also provide a thorough vacuuming and
          deodorizing service to ensure that your car looks and smells great.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          <span className="font-semibold">Exterior-Only Detailing:</span> Our
          exterior-only service is perfect for those who want to give their car
          a deep clean and shine. We focus on washing, waxing, and polishing the
          exterior of your vehicle to give it a showroom-worthy finish. We also
          clean the wheels, tires, and windows, and provide a hand-drying
          service to ensure that your car looks its best.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          <span className="font-semibold">Bumper-to-Bumper Detailing:</span> Our
          bumper-to-bumper service is a comprehensive package that includes both
          interior and exterior detailing. We start by deep-cleaning the
          interior of your car, including the seats, carpets, mats, dashboard,
          and console. We then move on to the exterior, where we wash, wax, and
          polish the car, as well as clean the wheels, tires, and windows. This
          package is designed to give your car a complete makeover and leave it
          looking and smelling like new.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          At our Signature Shine Auto Detailing, we pride ourselves on providing
          exceptional service, using only the highest-quality products and
          equipment to ensure that your car receives the care and attention it
          deserves. Our experienced technicians are trained to provide the best
          results possible, and we offer flexible scheduling to make the process
          as convenient as possible for you.
        </p>
        <h4 className="permanent-marker text-2xl text-blue-950 text-center mt-12">
          Contact us today to schedule your appointment and experience the
          ultimate in auto detailing services.
        </h4>
      </div>
    </div>
  );
};

export default AutoDetailing;
