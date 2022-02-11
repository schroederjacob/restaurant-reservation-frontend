import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";

const CustomerButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Customer</button>;
};
// customers can click the customer button which will then take them to the enter zip code screen.
// I don't think we would need user auth here because we are not tracking user data. This button just takes them to another screen

export default LoginButton;