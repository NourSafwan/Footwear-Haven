const Button = ({ label, iconURL, onClick }) => {
  return (
    <button
      className="btn1"
      onClick={onClick}
    >
      {label}
      { iconURL &&<img
        src={iconURL}
        alt="ArrowRight"
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  );
};

export default Button;
