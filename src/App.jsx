
// import './App.css'

// function App() {

// const handleAddUser = event =>{
//   event.preventDefault();
//   const form =event.target;
//   const name = form.name.value; 
//   const email = form.email.value;
//   const password = form.password.value;
//   const user = {name,email,password};
//   console.log(user);



// fetch('https://fixolyserver.vercel.app/users',{
//   method:"POST",
//   headers:{
//     "content-type":"application/json"
//   },
//   body:JSON.stringify(user)
// })
// .then(res=>res.json())
// .then(data=>{
//   console.log(data);
//   if(data.insertedId){
//     alert("users added successfully")
//     form.reset();
//   }
// })





// }
//   return (
//    <div>
// <div className="hero bg-base-200 min-h-screen">

//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//       <form onSubmit={handleAddUser}>
//           <fieldset className="fieldset">
//              <label className="label">Name</label>
//           <input type="text" className="input"name="name" placeholder="Name" />
//           <label className="label">Email</label>
//           <input type="email" className="input"name="email" placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" className="input"name="password" placeholder="Password" />
      
//           <button className="btn btn-neutral mt-4">Add</button>
//         </fieldset>
//       </form>
//       </div>
//     </div>
//   </div>
// </div>
 
//   )
// }

// export default App
