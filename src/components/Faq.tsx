const PianoFaq = () => {
  return (
    <div className="mt-6 mb-20 md:my-20">
      <h1 className="text-3xl font-bold text-blue-950 text-center mb-10">
        FAQs
      </h1>
      <div className="accordion flex flex-col items-center justify-center mb-6">
        {/* <!--  Panel 1  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-1" className="hidden" />
          <label
            htmlFor="panel-1"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What is auto detailing?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p
              className="text-gray-900 dark:text-gray-900 p-4 text-base"
              id="panel1"
            >
              Auto detailing is the process of thoroughly cleaning and restoring
              a vehicle to its original condition. This process includes both
              interior and exterior cleaning, as well as minor cosmetic repairs.
            </p>
          </div>
        </div>
        {/* <!--  Panel 2  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-2" className="hidden" />
          <label
            htmlFor="panel-2"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            How often should I get my car detailed?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              It is recommended to get your car detailed at least twice a year
              to keep it in top condition. However, the frequency of detailing
              depends on various factors such as driving habits, climate, and
              storage conditions.
            </p>
          </div>
        </div>
        {/* <!--  Panel 3  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-3" className="hidden" />
          <label
            htmlFor="panel-3"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What is the difference between detailing and washing a car?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Washing a car is a simple process of cleaning the exterior with
              water and soap. Detailing involves a more thorough cleaning
              process that includes cleaning the interior, polishing, and minor
              repairs.
            </p>
          </div>
        </div>
        {/* <!--  Panel 4  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-4" className="hidden" />
          <label
            htmlFor="panel-4"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            How long does it take to detail a car?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              The time it takes to detail a car depends on the size and
              condition of the vehicle. On average, a full detail service can
              take between 3-5 hours.
            </p>
          </div>
        </div>
        {/* <!--  Panel 5  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-4" className="hidden" />
          <label
            htmlFor="panel-4"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What sets Signature Shine apart from others?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Our Auto Detailing service stands out because of our attention to
              detail, high-quality products, and exceptional customer service.
              We use eco-friendly and safe products, and our experienced
              technicians are dedicated to providing the best possible care for
              your vehicle.
            </p>
          </div>
        </div>
        {/* <!--  Panel 6  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-4" className="hidden" />
          <label
            htmlFor="panel-4"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            Do you offer mobile detailing services?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Yes, we offer mobile detailing services for your convenience. Our
              mobile detailing services allow us to come to your location and
              perform the detailing service on-site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoFaq;
