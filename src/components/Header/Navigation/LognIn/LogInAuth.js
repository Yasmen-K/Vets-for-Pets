import {auth, db } from '../../../../Firebase/auth'

function handleSubmit(e,email,password,setLogged){
    e.preventDefault()
    
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setLogged(true)
        
        // ...
        
        
        
        db.collection('user').doc(user.uid).get()
        .then(doc =>{
            console.log(doc.data())
        })
        .catch(err =>{
            console.log(err.message)
        })
    
        
    })
    .catch((error) => {
        //var errorCode = error.code;
        
        var errorMessage = error.message;
        console.log(errorMessage)
        
    });

}

export default handleSubmit