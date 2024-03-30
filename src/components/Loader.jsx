import FadeLoader from "react-spinners/FadeLoader";

function Loader() {
  return (
    <>
      <div className="flex justify-center items-center">
        <FadeLoader color="#36d7b7" />
      </div>
    </>
  );
}

export default Loader;
