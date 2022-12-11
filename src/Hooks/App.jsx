import React, {  useState } from "react";
import { list } from "../list";


export const Body = () => {
  const [data, setData] = useState(list)

  const onDelete = (id) => {
    let res = data.filter((vl) => vl.id !== id);
    setData(res)
  }
  return <div  key="{student}">
    <h1 key="{student}" >Student List {data.length} </h1>
    {
      data.map((value) => {
        return <h1>
          Id: {value.id}    --
          Name: {value.name} --
          <button onClick={() => onDelete(value.id)}>Delete</button>
        </h1>
      })
    }


  </div>

}
export default Body