import React, { useState } from 'react';

const Request = () => {
    const initialFormData = {
        contactName: '',
        department: '',
        projectType: '',
        completeData: '',
        notes: '',
    };

    const [formData, setFormData ] = useState(initialFormData);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitFormHandler = async (event) => {
        event.preventDefault();

        console.log(formData);

        setFormData(initialFormData);
    };

    return(
        <section class='request'>
            <div>
                <h2>Submit a Project Request</h2>
                <p>Complete the form below to submit a potential project</p>
            </div>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label>What is your name:</label>
                    <input
                        type='text'
                        name='contactName'
                        placeholder='type name here'
                        value= {formData.contactName}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <div>
                        <label>
                            <input
                                type='radio'
                                name='department'
                                value='department ONE'
                                checked={formData.department === "department ONE"}
                                onChange={handleOnChange}
                            />
                        Deparmtnet One
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type='radio'
                                name='department'
                                value='department TWO'
                                checked={formData.department === "department TWO"}
                                onChange={handleOnChange}
                            />
                            Department Two
                        </label>
                    </div>
                </div>
                <div>
                    <label>Project Type:</label>
                    <input
                        type='text'
                        name='projectType'
                        placeholder='Enter what type of project this will be'
                        value={formData.projectType}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit Request" />
                </div>
            </form>
        </section>
    )
};

export default Request;