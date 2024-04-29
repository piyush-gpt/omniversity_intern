import React, { useState } from 'react'
import "../css/Form.css"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate=useNavigate();
    const onSubmit = data => {
        console.log(data);
        const file = data.file[0];
        const fileName = file ? file.name : '';

        // Store file name along with other data in local storage
        const storedData = {
            name: data.name,
            email: data.email,
            message: data.message,
            fileName // Storing the file name
        };

        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        localStorage.setItem('submissions', JSON.stringify([...submissions, storedData]));

        const formData = new FormData();
        formData.append('file', data.file[0]);

        //mock server
        fetch('https://7fa19036-ad3d-4323-bf50-fe9c0c330222.mock.pstmn.io/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully!');
            reset(); // Reset the form after successful submit
        })
        .catch(error => {
            alert('Error submitting form');
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>Web Dev - Intern Recruitment Task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div>
                <label>Name:</label>
                <input {...register('name', { required: true })} />
                {errors.name && <p>Name is required.</p>}
            </div>
            <div>
                <label>Email:</label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>Email is required and must be a valid email address.</p>}
            </div>
            <div>
                <label>Message:</label>
                <textarea {...register('message', { required: true })}></textarea>
                {errors.message && <p>Message is required.</p>}
            </div>
            <div>
                <label>Upload CV:</label>
                <input type="file" {...register('file', { required: true })} />
                {errors.file && <p>File is required.</p>}
            </div>
            <button type="submit">Submit</button>
        </form>

        <button onClick={()=> navigate("/submissions")} className=' navButton'>View Submissions</button>
        </div>
    );
};


export default Form