import React, {useState,useEffect} from 'react';
import Table from '../../ListView';

const Menu1 = () => {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then(res => setData(res) )
        .catch(()=> {setData(data)});
    })
return (
    <Table  data={data}/>
)
}

export default Menu1;