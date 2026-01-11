import React from 'react';

function Button({  h="h-auto", w = "w-auto" ,type="button" , bgColor = "bg-[rgb(var(--color-primary))]", text , ...props  }) {
  return (
    <button type={`${type}`}
      className={`
        ${bgColor}
        text-[rgb(var(--color-text))]
        hover:drop-shadow-lg
        cursor-pointer
        hover:scale-105
        active:scale-95
        active:brightness-90
        active:shadow-inner
        ring-1 ring-[rgb(var(--color-primary))]
        transition-all duration-150
        shadow-xl
        p-2 m-1 rounded-md
        ${w}
        ${h}
        
      `}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
