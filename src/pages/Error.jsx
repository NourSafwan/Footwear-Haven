import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="text-4xl font-montserrat font-semibold text-center pt-20">
        Error 404
      </h1>
      <h1 className="text-2xl font-montserrat font-semibold text-center pt-5">
        Page Not Found
      </h1>
      <div className="flex flex-1 justify-center pt-10">
        <button className="text-2xl font-semibold btn1">
          <Link>Return to Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
