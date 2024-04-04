import React from "react";

type InputProps = React.ComponentProps<'input'> & {
    label: string;
    error?: string;
}

export default function Input({ label, error, ...props}: InputProps) {
    return (
        <div className="mb-4">
            <label htmlFor={props.name} className="block text-base pb-2">{label}</label>
            <input type="text" id={props.name} {...props} className="bg-gray-200 focus:border-yellow-500 focus:shadow-outline p-[0.8rem] hover:bg-white text-base w-full block border transition duration-200 px-3 py-2 ease-in-out rounded-md border-gray-300 focus:outline-none hover:border-yellow-500" />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}