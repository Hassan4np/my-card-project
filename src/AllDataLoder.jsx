import { useState } from "react";
export default  function AllDataLoder(){
    var people = [
        { name: "John Doe", address: "123 Main St",id:1},
        { name: "Jane Smith", address: "456 Elm St",id:2 },
        { name: "Bob Johnson", address: "789 Oak St" ,id:3},
        { name: "Alice Brown", address: "101 Maple St" ,id:4},
        { name: "Charlie Davis", address: "222 Pine St" ,id:5},
        { name: "Eve Wilson", address: "333 Cedar St" ,id:6},
        { name: "Frank White", address: "444 Birch St" ,id:7},
        { name: "Grace Taylor", address: "555 Redwood St" ,id:8},
        { name: "Henry Harris", address: "666 Sequoia St" ,id:9},
        { name: "Ivy Clark", address: "777 Willow St",id:10 }
      ];

      const [data,setdata]=useState(people)
      const hendleRemovedAllItem=()=>{
        setdata([])
      }
      const hendelRemooveSingleItem = (id)=>{
        const items = data.filter(item=>item.id!==id)
        setdata(items)
        }
    
    return(
        <div>
            <h3>All data</h3>
            {
                data.map((product)=> <div className="text-xl bordered border-2" key={product.name}>
                <h3>name: {product.name}</h3>
                <h3>Address {[product.address]}:</h3>
                <button className="btn btn-success" onClick={()=>hendelRemooveSingleItem(product.id)}>Removed item</button>
           </div>)
            }
            <button className="btn btn-primary" onClick={hendleRemovedAllItem}>Remoed all</button>
        </div>
    )
}