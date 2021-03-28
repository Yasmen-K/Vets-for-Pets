import {Component} from 'react'
import styles from './HomeContent.module.css'
class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mainContent:[]
         }
    }

    componentDidMount(){
        fetch(`https://vets-for-pets-80140-default-rtdb.firebaseio.com/main.json`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.img)
           this.setState({mainContent:data})
            
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    render() { 
        return ( 
           <div className={styles['main-container']}>

                    
                  {this.state.mainContent.map(x=>
                        <div key={x.id}>
                        <h3>{x.title}</h3>
                    <div  className={styles['flex-wrapper']}>
                        <p>{x.content}</p>
                        <img src={x.img} alt="" className={styles[x.id]}/>
                        </div>

                        </div>
                    )}
                    
                </div>
         );
    }
}
 
export default HomeContent ;


