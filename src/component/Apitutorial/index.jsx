import React, { useEffect, useState } from "react";

export const API = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                console.log(res );
            });
    }, []);
    
    return (
        <div>
           <div>
            {data.map((d) => (
                <div key={d.id}>
                    <span style={{color: 'red', backgroundColor:'orange', letterSpacing: '1px', fontStyle: 'italic'}}>{d.id}  {d.title}</span>
                </div>
            ))}
        </div>
        </div>
    )
}
export default API

// import React, { useEffect, useState } from "react";

// export const API = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch("https://reqres.in/api/users");
//       const data = await response.json();
//       setUsers(data.data);
//       console.log(data);
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <p>{user.first_name} {user.last_name}</p>
//             <p>Email: {user.email}</p>
//             <img src={user.avatar} alt={user.first_name} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default API;
