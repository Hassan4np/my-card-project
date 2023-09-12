import { useEffect, useState } from "react"

export default function DataLoder(){
const [data,setdata]= useState([])
        useEffect(()=>{
        const datasload= async()=>{
            const Alldata = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await Alldata.json();
            setdata(data)
        }
        datasload()
        },[])
    return(
        <div>
            <h2>All datas</h2>
            {data.map(item=>
                <div>
                    <h2>Name:{item.name} </h2>
                    <h2>Email:{item.email} </h2>
                </div>)
            }       
            </div>
    )
       
}