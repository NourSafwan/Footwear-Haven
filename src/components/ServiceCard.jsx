const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 flex flex-col px-10 py-16 shadow-xl rounded-xl max-md:items-center max-sm:min-w-72 sm:min-w-72 xl:max-w-80">
      <img
        src={imgURL}
        alt={label}
        className="bg-coral-red rounded-full p-1.5"
        width={30}
        height={30}
      />
      <h3 className="mt-4 font-extrabold  font-montserrat">{label}</h3>
      <p className="mt-4 max-w-60">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
