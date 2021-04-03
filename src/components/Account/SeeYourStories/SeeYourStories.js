
import {db} from '../../../Firebase/auth'

import styles from './SeeYourStories.module.css'

import DeleteStory from './DeleteStoryButton/DeleteStoryButton'
import ChangeStoryButton from './ChangeStoryButton/ChangeStoryButton'

import {Component} from 'react'

import SideNav from '../SideNav/SideNav'


class SeeYourStories extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories:[],
            userUid:'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
         }
    }

    componentDidMount(){
        db.collection('user').doc(this.state.userUid).collection('Stories')
        .onSnapshot(res =>{
            let array = [];

            res.forEach(x =>{
                array.push(x.data())
            })
            this.setState({stories:array})

            console.log(this.state.stories)
         
        }) 
    }
    render() { 
        return ( 
            <div>

            <SideNav/>

            <div className={styles['main']}>
                 {this.state.stories.map(x => 
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
}
 
export default SeeYourStories;