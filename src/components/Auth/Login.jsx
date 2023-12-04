import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
  //////////////////////////////BACKEND ONLY////////////////////////////////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you may want to add more robust validation)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      // Make a request to your backend to authenticate the user
      const response = await fetch('your_backend_login_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle the response from the server
      if (response.ok) {
        // Successful login, you might want to redirect the user or perform other actions
        console.log('Login successful');
      } else {
        // Handle unsuccessful login
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  //////////////////////////////FRONTEND ONLY////////////////////////////////

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-12 lg:px-8 pt-20" style={{ height: "100vh" }}>
      <div className="shadow-md p-6 mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="mx-auto w-full max-w-[375px]">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 mx-auto w-full max-w-md">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="user@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to='/ForgotPassword' className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*********"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-white-500">
            Not a member?{' '}
            <Link to='/Signup' className="font-semibold leading-6 text-indigo-200 hover:text-indigo-500">
              Book Appointment to Signup
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
}

export default Login;
