import { useState, useContext } from 'react';
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const [success, setSuccess] = useState('');
  const { createUser } = useContext(AuthContext); 

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // new user
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log("Firebase user created:", createdUser);

    //  local server
        const user = { name, email,password };
        return fetch('https://fixolyserver.vercel.app/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
      })
      .then(res => res.json())
      .then(data => {
        console.log("Server Response:", data);
        if (data.insertedId) {
          setSuccess("User added successfully!");
          form.reset();
        }
      })
      .catch(error => {
        console.error("Error adding user:", error);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img
            src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_items_boosted&w=740"
            alt="Signup illustration"
            className="w-72 mx-auto"
          />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleAddUser}>
              <div className="form-control">
                <label className="label">Name</label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">Email</label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">Password</label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              </div>
              <button type="submit" className="btn btn-neutral mt-4">Add</button>
            </form>

            {success && (
              <p className="text-green-600 mt-3 text-center">{success}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
