import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner
        animation="grow"
        style={{
          width: "4rem",
          height: "4rem",
          color: "white",
        }}
      />
    </div>
  );
}

export default LoadingSpinner;
