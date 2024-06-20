import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: React.ReactNode;
  variant: string;
  full?: boolean;
  href?: string;
};

const Button = ({ type, title, icon, variant, full, href }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 border border-[#d8b476] ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {href ? (
        <Link href={href} className="flexCenter gap-3 w-full">
            <label className="uppercase bold-16 whitespace-nowrap cursor-pointer">
              {title}
            </label>
            {icon && <div className="w-6 h-6">{icon}</div>}
        </Link>
      ) : (
        <>
          <label className="uppercase bold-16 whitespace-nowrap cursor-pointer">
            {title}
          </label>
          {icon && <div className="w-6 h-6">{icon}</div>}
        </>
      )}
    </button>
  );
};

export default Button;