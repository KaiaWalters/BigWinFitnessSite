import React, { useState } from "react";

const Fields = [
  {
    id: "firstName", 
    type: "text", 
    htmlFor: "First name",
    label: "First name", 
    placeholder: "Enter your fist name"
  },
  {
    id: "lastName", 
    type: "text", 
    htmlFor: "Last name",
    label: "Last name", 
    placeholder: "Enter your last name"
  },
  {
    id: "email", 
    type: "email", 
    htmlFor: "email",
    label: "Email", 
    placeholder: "Enter your email"
  },
  {
    id: "userWhy", 
    type: "textarea", 
    htmlFor: "why",
    label: "Your why", 
    placeholder: "Why do you want to join Big Win Fitness?"
  }
];

const LoginForm = () => {

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    userWhy: '',
  }

  const [formData, setFormData] = useState(initialFormData)
  

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      
    } catch (error) {
        console.error('Network error:', error)
        alert('Network error', error)
    }
}

  // useEffect(() => {
  //     console.log(formData)
  // }, [formData])

  return (
    <div className="relative w-full flex items-center justify-center text-black px-6">
      <form className="w-full max-w-sm p-8 rounded-lg shadow-lg border border-yellow-500">
        <div className="text-center font-bold mb-6 text-yellow-400">
          <h2 className="text-2xl">Register</h2>
          <p>Help us learn more about you</p>
        </div>
        {
          Fields.map((field) => (
            <InputField key={field.id} field={field} handleChange={handleChange}/>
          ))
        }
        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={(e) => handleSubmit(e)}className="w-1/2 ml-2 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({field, handleChange}) => {
  return <>
    <div className="mb-4">
        <label htmlFor={field.id} className="block text-sm font-semibold text-yellow-400">
          {field.label}
        </label>
        <input
          type={field.type} 
          id={field.id} 
          className="w-full mt-1 p-3 bg-white-700 text-black border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder={field.placeholder}
          onChange={(e) => {handleChange(e)}}
          required
        />
    </div>             
  </> 
}

export default LoginForm; 
