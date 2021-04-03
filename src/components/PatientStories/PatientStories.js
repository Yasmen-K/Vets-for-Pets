import {Component} from 'react'
import styles from './PatientStories.module.css'
import {db} from '../../Firebase/auth'


class PatientStories extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories:[],
            userUid:'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
            
         }
    }

    componentDidMount(){
        db.collection('stories')
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
            <div className={styles['main']}>

                <h1>TAILS FROM THE CLINIC</h1>
                    <div className={styles['data-wrapper']}>

                {this.state.stories.map(x =>
                    <div className={styles['stories-wrapper']}>
                        <h1>{x.title}</h1>
                        <p>{x.content}</p>
                    </div>
                    )}
                    </div>
            </div>
         );
    }
}
 
export default PatientStories;