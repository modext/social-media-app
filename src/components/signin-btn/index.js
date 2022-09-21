import React, {useContext} from 'react';
import { signInWithGoogle } from '../../services/auth';
import "./style.css"

export default function SignInBtn(){
    const [user, setUser] = useContext();

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if (userBySignIn) setUser(userBySignIn)
    }

    return ( 
            <div className="signInBtn">
                <p> Sign In with Google</p>
            </div>
        )
}
