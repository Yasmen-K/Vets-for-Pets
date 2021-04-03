
import {db} from '../../../../Firebase/auth'

const DeleteStory = ({title}) => {
    
    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
    
    const deleteStoryHandler = () =>{
        db.collection('user').doc(userUid).collection('Stories').doc(title).delete()
        console.log('Delete')
    }
    
    
    return ( 

        <div>
            <button onClick={deleteStoryHandler}>Delete Story</button>
        </div>
     );
}
 
export default DeleteStory;