import { useAuth0 } from "@auth0/auth0-react";
import { FaArrowDown } from "react-icons/fa";


// Login Components whihc loads when the user didn't authenticate
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <FaArrowDown className="m-auto"/><br />
      <button
        className="btn btn-danger btn-sm"
        onClick={() => loginWithRedirect()}
      >
        Continue
      </button>
    </div>
  );
};

export default LoginButton;
