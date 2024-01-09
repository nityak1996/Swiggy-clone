import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
      <h1>oops!!!!</h1>
      <br/>
      <h2>something went wrong</h2>
      <br/>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default Error;
