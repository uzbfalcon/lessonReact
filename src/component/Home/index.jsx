import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Home = () => {

  const [data, setData] = useState([])
  useEffect(() => {


    fetch("https://houzing-app.herokuapp.com/api/v1/houses/list")
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, [])
  console.log(data);

  return (
    <div>
      <h1>Fetch API</h1>
      {
        data.map((value) => {
          return (
            <div key={value.id}>
              <h1>{value.id}- {value.name} --- {value.description}</h1>
            </div>

          )
        })
      }
    </div>
  )
}
