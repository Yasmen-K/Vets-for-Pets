



const AccountInfo = ({user}) => {
    
    
  
        
    //  useEffect(() =>{
    //      db.collection('user').doc(user).get()
    //      .then(res =>{
    //          console.log(res.data())
    //          setUserData(res.data)
    //      })
    //  })
    
    console.log(user)


    
    
    return ( 

        <div>
            {!user ? (
                
               <h1>Waiting</h1>
                    ):(

                     <h1>Hello {user}</h1>


                    )


                    }
        </div>
     );
}
 
export default AccountInfo;