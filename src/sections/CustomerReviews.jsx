import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="padding bg-pale-blue fade-scroll">
      <div className="max-container">
        <h3 className="font-palanquin capitalize text-center text-4xl font-bold">
          what our <span className="text-coral-red ">customers</span> say?
        </h3>
        <p className="info-text m-auto mt-4 text-center max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
