// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { useHistory, Link } from "react-router-dom";
// import axios from "axios";

  
//   const ListaMaterias = () => {
//     const [materia, setMateria] = useState("");
//     const [nota, setNota] = useState("");
//     const [dia, setDia] = useState("");
//     const [error, setError] = useState("");

//     const [post, setPost] = React.useState(null);
    
//     React.useEffect(() => {
//         axios
//             .get("http://localhost:5000/api/auth/materias")
//             .then((response) => {
//                 console.log("response", response.data.materias);
//                 setPost(response.data.materias);
//             })
//             .catch((error) => setError(error.response.data.message));
//     }, []);

//     if (!post) return null;

//     return (
//       <div style={{ marginTop: "100px" }}>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         <h2>Register Page</h2>

//         {/* {post.map((post) => (
//             <div>
//                 <p>{post.materia}</p>
//                 <p>{post.nota}</p>
//                 <p>{post.dia}</p>
//             </div>

//         ))} */}

        
//       </div>
//     );
//   };

// export default ListaMaterias;
