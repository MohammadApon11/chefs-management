import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PDF from '../../components/PDF/PDF';


const Blog = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <PDFDownloadLink document={<PDF></PDF>} fileName='FORM'>
                    {({ loading }) => loading ? <button className=''>Loading...</button> : <button className='bg-red-500 hover:bg-red-400 px-6 py-2 font-semibold  rounded-lg text-white'>Download PDF</button>}
                </PDFDownloadLink>
            </div>
            <div>
                <div>
                    <div className='lg:px-36 px-6'>
                        <h1 className='text-center mt-10 text-4xl font-bold text-yellow-800'>Questions Sections</h1>
                        <div>
                            <div className='mt-8 border border-red-600 p-5 rounded-xl'>
                                <h1 className='text-3xl font-semibold mb-2'>1. Tell us the differences between uncontrolled and controlled components?</h1>
                                <p className='text-xl '><span className='font-semibold'>Ans.</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                            </div>
                            <div className='mt-8 border border-red-600 p-5 rounded-xl'>
                                <h1 className='text-3xl font-semibold mb-2'>2. How to validate React props using PropTypes?</h1>
                                <p className='text-xl '><span className='font-semibold'>Ans.</span> When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
                            </div>
                            <div className='mt-8 border border-red-600 p-5 rounded-xl'>
                                <h1 className='text-3xl font-semibold mb-2'>3.
                                    Tell us the difference between nodejs and express js?
                                    ?</h1>
                                <p className='text-xl '><span className='font-semibold'>Ans.</span> Js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                            </div>
                            <div className='mt-8 border border-red-600 p-5 rounded-xl'>
                                <h1 className='text-3xl font-semibold mb-2'>4. What is a custom hook, and why will you create a custom hook?</h1>
                                <p className='text-xl '><span className='font-semibold'>Ans.</span> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;