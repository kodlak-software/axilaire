import React from 'react';

const Button = (props) => {


    const text= props.text;
    const className = props.calssName;

    return (

        <div className={className}>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 " >
                {text}
            </button>
        </div>
    );
};

export default Button;