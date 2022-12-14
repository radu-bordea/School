import { useAuth0 } from "@auth0/auth0-react";

// Logout component which shows a Logout button in the Navbar
const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className="btn btn-danger btn-sm mt-1" onClick={() => logout({ returnTo: window.location.origin})}>Logout</button>;
}

export default LogoutButton;
