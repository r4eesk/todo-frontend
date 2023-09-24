const ErrorComponent = (props) => {
  return (
    <div className="ErrorComponent" >
      <h1>We are really working hard!!</h1>
      <div>Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ</div>
      <div>{props.error}</div>
    </div>
  );
};

export default ErrorComponent;
