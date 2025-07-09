import React from 'react';

const InputSubmit = (props) => {

    const placeholder = props.placeholder;
    const className = props.className;

    return (
        <div className={"w-full space-x-3 flex " + className}>
                <input type="text" className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm outline-none focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none 0" placeholder={placeholder} />
                <button type="button" className="py-3 px-7   text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none " >
                    button
                </button>
        </div>
    );
};

export default InputSubmit;