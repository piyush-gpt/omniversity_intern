import React, { useState } from 'react'
import "../css/Form.css"
import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        localStorage.setItem('submissions', JSON.stringify([...submissions, data]));

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);
        formData.append('file', data.file[0]);

        fetch('http://localhost:4000/api/upload', {
            method: 'POST',
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
        </div>
    );
};


export default Form