import {useState} from 'react'

import styles from './ShareYourStory.module.css'

import {db} from '../../../Firebase/auth'

const ShareYourStory = () => {

    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const handleSubmit = ((e) =>{
        e.preventDefault()
        console.log("submit")

        db.collection('user').doc(userUid).collection('Stories').doc(title).set({
           title:title,
           content:content
        })
        .then(res =>{
            console.log(res)
        })
    })
    
    return ( 
        <div className={styles['main']}>
            <h1>Add Story</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Story Title:</label>
                <input type="text" name="heading" onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="story-content">Story Content:</label>
                <textarea onChange={(e) => setContent(e.target.value)}></textarea>
            <div className={styles['preview-story']}>
                <h2>Preview Before You Share</h2>
                <h1>You will see the title here: {title}</h1>
                <p>You will see the content here: {content}</p>
            </div>
                <button>Share Story</button>
            </form>

        </div>
     );
}
 
export default ShareYourStory;