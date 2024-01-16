import React from 'react'
import Image from 'next/image';

interface Info {
    image: string;
    name: string;
    remove: Function
}

const Chip = ({ image, name, remove }: Info) => {
    return (
        <div className="chips w-max my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] ">
            <img src={image} alt={name} 
            className="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%] bg-slate-400"
             />
            <p className='whitespace-nowrap'>
                {name}
            </p>


            <span
                onClick={() => remove()}
                data-te-chip-close
                className="float-right w-5 cursor-pointer pl-[8px] text-[16px] text-[#4f4f4f] opacity-[1] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#4f4f4f"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#4f4f4f"
                    className="h-4 w-4">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>

        </div>
    )
}

export default Chip