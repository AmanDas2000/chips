import React from 'react'

interface List {
    arr: Array<Info>;
    add: Function;
}

interface Info {
    image: string;
    name: string;
}

const List = ({ arr, add }: List) => {
    return (
        <ul className="mt-3 absolute w-[400px] text-sm font-medium text-gray-900 bg-white border border-gray-200">
            {arr.map((item: Info, i) =>
            <div>

                <li
                    key={i}
                    className="py-8 px-5 flex h-[42px] cursor-pointer items-center justify-between dark:border-gray-600 hover:bg-slate-200"
                    onClick={(e) => add(i)}
                    >
                    <img src={item.image + i} alt={item.name}
                        className="my-0 mr-[8px] h-[inherit] w-[inherit] rounded-[100%] bg-slate-400"
                        
                        />

                    <p className='whitespace-nowrap text-gray-500'>
                        {item.name}
                    </p>
                    <p className='whitespace-nowrap text-xs text-gray-400'>
                        {item.name.replace(/ /g, '')}@gamil.com
                    </p>
                </li>
                <hr/>
            </div>
            )}
        </ul>
    )
}

export default List