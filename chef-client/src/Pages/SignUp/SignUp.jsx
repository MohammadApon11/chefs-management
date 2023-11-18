import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const { signUp, changeProfile } = useContext(UserContext)
    const handleSignUp = event => {
        event.preventDefault()
        setError("")
        setSuccess("")
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            setError("Please Provide a valid email")
            return;
        }

        if (password.length < 6) {
            setError("Password Must 6 Character longer")
            return;
        }

        signUp(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess("Account Successfully Created")
                changeProfile(result.user, name, photo)
                form.reset()
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })


    }

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please create account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSignUp} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text" autoComplete="name" required className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo URL</label>
                            <div className="mt-2">
                                <input id="photo" name="photo" type="text" autoComplete="photo" required className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <p className='text-center text-green-600'>{success}</p>
                            <p><small className='text-center text-red-600'>{error}</small></p>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800">Sign up</button>
                        </div>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already Have an account?
                            <Link to='/login' className="font-semibold leading-6 text-yellow-800 hover:text-yellow-700 underline"> Please login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;