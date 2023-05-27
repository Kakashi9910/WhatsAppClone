import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";

const clientId='1086599294496-sa4805j3tttkjdlnt7tauipqftf4h1al.apps.googleusercontent.com'


function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <AccountProvider>
         <Messenger/>
      </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
