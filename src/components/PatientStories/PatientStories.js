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
        db.collection('stories').doc(this.state.userUid).collection('Pets')
        .onSnapshot(res =>{
            let array = [];

            res.forEach(x =>{
                array.push(x.data())
            })
            //setData(array)
        }) 
    }

    render() { 
        return ( 
            <div className={styles['main']}>

                <h1>TAILS FROM THE CLINIC</h1>
            </div>
         );
    }
}
 
export default PatientStories;