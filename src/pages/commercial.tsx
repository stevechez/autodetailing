import type { NextPage } from "next";
import Image from "next/image";
const Commercial: NextPage = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        Commercial Power Washing
      </h1>
      <div className="w-10/12 mx-auto">
        <div className="pl-12 mb-8 md:float-right md:m-4">
          <Image
            src="/images/commercial-img.jpg"
            alt="Commercial Power Washing"
            width={300}
            height={300}
            className="w-96 h-96 object-cover"
          />
        </div>

        <p className="text-xl mb-4 w-full mr-12">
          Commercial power washing is also an essential part of maintaining the
          appearance and safety of your business. At PowerJet Wash, we
          understand the importance of a clean and well-maintained commercial
          property. That&apos;s why we offer top-notch commercial power washing
          services that are designed to meet the needs of your business. Whether
          you need to clean the exterior of your building, parking lot, or other
          commercial property, we have the equipment and expertise to get the
          job done right. Our experienced technicians use eco-friendly
          detergents and high-pressure water to remove dirt, grime, and other
          stains from your commercial surfaces, leaving them looking clean and
          pristine. We take pride in our commitment to quality workmanship and
          exceptional customer service, and we strive to deliver the best
          results possible for your business.
        </p>

        <h4 className="permanent-marker text-xl text-blue-950 text-center mt-12">
          Contact me today to schedule your next pressure wash!
        </h4>
      </div>
    </div>
  );
};

export default Commercial;