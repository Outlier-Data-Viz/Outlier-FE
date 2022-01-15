import { useGoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";


//process not defined
// const secret = process.env.REACT_APP_CLIENT_ID
// const clientId = `${secret}.apps.googleusercontent.com`;
const clientId = `445544407756-bc40shinkl4jnfgpkrei8d059vuig95m.apps.googleusercontent.com`;

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    alert('success!');
  };

  const onFailure = () => {
    console.log('Failed to logout');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut}>Log Out</button>
  );
}

export default LogoutHooks;
