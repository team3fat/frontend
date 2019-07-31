import React from 'react';
import {GoogleLogin, GoogleLogout, FontAwesome} from 'react-google-login';

function App(){

    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
            <div>
                <GoogleLogin
                    clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                >
                    <FontAwesome
                    name='google'
                    />
                    <span> Login with Google</span>
                </GoogleLogin>
            </div>
    )
};

export default App