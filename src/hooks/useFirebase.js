import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {


const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] =useState({})
    const [error, setError] =useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

 // googleSignIn  googleSignIn
    const googleSignIn = () => {
        setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
   
    }
// googleSignIn googleSignIn 
   const handleName = e => {
       setName(e.target.value)
   }
    const checkRegister =e =>{
        setIsLogin(e.target.checked)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
     const submitHandler = e => {
        e.preventDefault()
        if(password.length < 6){
            setError('Password Must be 6 Character long')
         return;
        
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password must 2 letters in Upper Case')
            return;
        }

        // login check 
        if(isLogin){
            signInUser(email, password)
            
        }
        else{
            
            createUser(email, password)
        }

     }
    //  onAuthStateChanged onAuthStateChanged 
    useEffect(() => {
      const subscribed =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => subscribed;
    }, [])
  //  onAuthStateChanged onAuthStateChanged 

    // sign in user  sign in user  sign in user  sign in user 
      const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
      }

     // sign in user  sign in user  sign in user  sign in user 

    // create a new user create a new user  create a new user 
    const createUser = (email, password) => {
      
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            setNewUser()
        })
        .catch(error => {
            setError(error.message)
        })
       
    }
    // create a new user  create a new user  create a new user  

//    logout  user  logout  user  logout  user  logout  user 
   const logout = () => {
    setIsLoading(true)
    signOut(auth)
    .then(() => {
          setUser()
      })
      .catch((error) => {
       setError(error.message)
      })
      .finally(() => setIsLoading(false));
   }
  //    logout  user  logout  user  logout  user  logout  user 

  const setNewUser = () => {
    updateProfile(auth.currentUser, {
        displayName: name})
        .then(result => {
            console.log(result)
        })
        .catch((error) => {
            setError(error.message)
           });
}

// reset password in email 
   // email verification 
   const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(result => {
        console.log(result)
    })
    .catch((error) => {
        setError("Please fill all information")
       });
}
// reset password in email 
//  return object  return object  return object  return object 
    return {
        name,
        auth,
        user,
        error,
        isLogin,
        isLoading,
        logout,
        setUser,
        setNewUser, 
        setError,
        handleName,
        createUser,
        signInUser,
        setIsLoading,
        handleEmail,
        submitHandler,
        resetPassword,
        checkRegister,
        handlePassword,
        googleSignIn
    }
//  return object  return object  return object  return object 

};

export default useFirebase;