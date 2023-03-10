import { GoogleLogin } from '@react-oauth/google';

import '../../scss/global/signin.scss';

import { useContext } from 'react';
import { UserData } from '../../UserData'

export default function SignInModal(props) {

    const userData = useContext(UserData);

    const googleCallback = async (credentialResponse) => {

        // Add user to database (if not already)
        fetch("/api/auth/login", {
            method: "POST"
        })

        // Save cookie, update context
        userData.setter(credentialResponse.credential)

        // Run callback (if exists)
        props.callback?.()

        // Hide modal, remove callback
        userData.showSignInModal(false)

    }

    return (
        <section className='modal' visible={props.showing.toString()}>
            <section className='signin'>

                    <h1>Please Sign In</h1>
                    <h2>Continue with your perferred SSO service below.  We <span style={{fontWeight: 700, color: "black"}}>will not</span> ask for any more info.</h2>


                    <div className='google'>
                        <GoogleLogin
                            onSuccess={googleCallback}
                            auto_select
                            width="500px"
                        />
                    </div>

                    <button className='gray' onClick={() => userData.showSignInModal(false)}>Cancel</button>

            </section>
        </section>
    )
}