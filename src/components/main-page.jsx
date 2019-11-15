import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MainPage = () => {
    const [authors, setAuthors] = useState([]) 
    useEffect(() => {
            axios.get('https://crsullivan-quotes.herokuapp.com/quotes')
            .then(res => {
                console.log(res)
                setAuthors(res.data);
            })
            .catch(error => {
                console.error('server error', error);
            });
    },[])
    return (
        <div>
            {authors.map(q => {
                return(
                    <div key={q.id}>
                        <h2>{q.author}</h2>
                        <h3>{q.quote}</h3>
                        <h4>{q.year}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default MainPage;