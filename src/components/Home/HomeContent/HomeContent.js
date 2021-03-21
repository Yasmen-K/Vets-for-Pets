import {useEffect,useState} from 'react'


const HomeContent = () => {

    const [titles,setTitles] = useState('')
    const [content,setContent] = useState('')

    useEffect(() =>{
        fetch(`https://vets-for-pets-80140-default-rtdb.firebaseio.com/-MWGAtWwRT5U_DIFEz59.json`)
        .then(res => res.json())
        .then(data =>{
            let titles = data['Titles']
            console.log(data)
            setTitles(titles)
            
            let content = data['Content']
            setContent(content)
            
        })
        .catch(err =>{
            console.log(err.message)
        })
    },[])
    return ( 
                <div>

                    <h1>Home Content</h1>
                    {titles && <h1>{titles}</h1>}
                    {content && <p>{content}</p>}
                </div>


     );
}
 
export default HomeContent;