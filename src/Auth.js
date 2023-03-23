import { useContext } from "react";
import authContext from "./context/auth-context";

function Auth() {
    const { status, login } = useContext(authContext);
    // const auth = useContext(authContext);
    // console.log(auth.status);
    return (<div>
        <h1> giriş yaptın mı </h1>
        {status ? <p>Ohoooo çoktan</p> : <p>Hayır</p>}
        <button onClick={login}>Giriş yap</button>
    </div>);
}

export default Auth;