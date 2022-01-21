import React, { useEffect, useState } from 'react';
import { fetchData } from './common/hooks/example';
export default function Child({name, age}){

    const [stateData,setStateData] = useState(null)

    const dataFunction = (data) => {
        setStateData(data);
    }

    useEffect(()=>{
        fetchData('https://jsonplaceholder.typicode.com/posts/1', dataFunction)
    })

    return (
        <>
            <div>{stateData}</div>
        </>
    )
} 