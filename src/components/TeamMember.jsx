import PropTypes from "prop-types";

function TeamMember({
  image,
  role,
  fullname,
  email,
  linkedin,
  github,
  text,
  imagePosition,
}) {
  return (
    <div
      className={`flex flex-col lg:h-[420px] xl:h-[370px] bg-bg-primary ${
        imagePosition === "RIGHT" ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="lg:flex-1 bg-cover bg-center bg-no-repeat w-full h-[300px] sm:h-[450px] lg:h-auto"
      ></div>
      <div className="flex-1 lg:flex-[2.5] p-[1.7rem] relative">
        <div className="text-primary-600 font-bold leading-[1rem] text-[14px] sm:text-[16px]">
          {role}
        </div>
        <div className="text-[35px] sm:text-[45px] font-bold leading-[2.9rem] lg:leading-[3.7rem]">
          {fullname}
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[url(../assets/img/envelope-solid.svg)] bg-center bg-no-repeat bg-contain w-5 h-5"></div>
          <div className="leading-[0px]">{email}</div>
        </div>
        <p className="mt-[1.5rem]">{text}</p>
        <div className="mt-5 lg:mt-0 lg:absolute lg:top-[1.7rem] lg:right-[1.7rem] flex items-center gap-4">
          <a
            href={linkedin}
            target="_blank"
            className="bg-[url('../assets/img/linkedin.svg')] bg-contain bg-center bg-no-repeat w-[35px] h-[35px]"
          ></a>
          <a
            href={github}
            target="_blank"
            className="bg-[url('../assets/img/github.svg')] bg-contain bg-center bg-no-repeat w-[35px] h-[35px]"
          ></a>
        </div>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imagePosition: PropTypes.string,
};

export default TeamMember;
