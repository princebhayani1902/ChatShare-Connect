const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-w-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    <span className='text-blue-500'> ShareChat Connect</span>
                </h1>
                <h1 className='text-3xl font-semibold text-center text-gray-300 pt-2'>
                    Sign Up 
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Email</span>
                        </label>
                        <input type='email' placeholder='example@email.com' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <button className='btn btn-sm mt-3 border border-slate-700 h-10 w-full'>Sign Up</button>
                    </div>
                    <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                        Already have an account?
                    </a>
                </form>
            </div>
        </div>
    );
};
export default SignUp;