
import React from "react";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonType) => {
    return (
        <button {...props} className="text-base font-[var(--type-first)] cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] min-w-[8rem] py-[0.8rem] px-[1.2rem] box-border transition-all duration-100 focus:outline-none focus:ring-[3px] focus:ring-[#fea] focus:ring-offset-[4px] focus:ring-offset-[#fb1] hover:outline-none hover:ring-[3px] hover:ring-[#fea] hover:ring-offset-[4px] hover:ring-offset-[#fb1] .button:disabled {
            opacity: 0.5;
            cursor: wait;
          }">
            {children}
        </button>
    )
}

export default Button;