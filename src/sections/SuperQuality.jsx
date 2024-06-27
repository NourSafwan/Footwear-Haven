import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" padding fade-scroll "
    >
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mx-auto xl:px-20 pt-16">
        <div>
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            we provide you <span className="text-coral-red">Super</span>{" "}
            <span className="text-coral-red ">Quality</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-4 lg:max-w-lg info-text ">
            We make sure our products are of the highest quality. We only use
            high quality materials in our products.
          </p>
          <p className="mt-6 lg:max-w-lg font-montserrat text-slate-50 text-lg leading-7 rounded-xl bg-coral-red py-12 px-6 text-center italic capitalize">
            <span className="font-bold">“</span>
            Our dedication to detail and excellence ensures your satisfaction
            <span className="font-bold">”</span>
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="abject-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
