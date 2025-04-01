
import React from "react";

const LoginForm = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white text-black text-center px-6">
        <form action="">
            <label for="name">name</label>
            <input type="text" />
            <label for="name">email</label>
            <input type="text" />
            <button>Login in</button>
            <button>Sign up</button>
        </form>
    </div>
  );
};

export default LoginForm;