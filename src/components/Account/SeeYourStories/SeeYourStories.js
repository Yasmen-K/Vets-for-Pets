
import {db} from '../../../Firebase/auth'

import styles from './SeeYourStories.module.css'

import DeleteStory from './DeleteStoryButton/DeleteStoryButton'
import ChangeStoryButton from './ChangeStoryButton/ChangeStoryButton'
import SideNav from '../SideNav/SideNav'

import {useContext,useEffect,useState} from 'react'
import userContext from '../../../contexts/UserContext'



const SeeYourStories = () => {

    const {user} = useContext(userContext)
    const [stories,setStories] = useState([])

    useEffect(() =>{

        db.collection('user').doc(user).collection('Stories')
        .onSnapshot(res =>{
            let array = [];

            res.forEach(x =>{
                array.push(x.data())
            })
        
            setStories(array)
         
        }) 

    },[user])

    return ( 

        <div>

        <SideNav/>

        <div className={styles['main']}>
             {stories.map(x => 
                <div key={x.id}>
                    <h1>{x.title}</h1>
                    <p>{x.content}</p>
                    <DeleteStory title={x.title}/>
                    <ChangeStoryButton title={x.title}/>
                </div>
                )}  
        </div>
        </div>
     );
}
 
export default SeeYourStories;