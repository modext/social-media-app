import {auth, provider} from "../firebase"

export  const signInWithGoogle = async () => {
    let user;
    await auth
    .signInWithPopup(provider)
    .then((res) => {
        console.log(res.user);
        user = res.user;

    })
    .catch((error) => {
        console.log(error.message)
    })

    return user;
}

export const logout = async () => {
    let logout_sucess;
    await auth.signOut()
    .then(() => {
        logout_sucess = true;
    }).catch((error) => {
        console.log(error.message);
    })
}

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const result = await signInWithPopup(auth, provider);

// The signed-in user info.
const user = result.user;
// This gives you a Google Access Token.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;