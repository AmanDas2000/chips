"use client"
import Image from 'next/image'
import { useState,useRef,useEffect, ChangeEvent } from 'react'
import Chip from '../components/Chip';
import List from '@/components/List';



interface Info {
  image: string;
  name: string;
}

export default function Home() {

  const initList = [
    { image: 'https://robohash.org/', name: 'Aman Das' },
    { image: 'https://robohash.org/', name: 'Arman Das' },
    { image: 'https://robohash.org/', name: 'Shiba Kumar Das' },
    { image: 'https://robohash.org/', name: 'Ram kumar Sharma' },
    { image: 'https://robohash.org/', name: 'Deepika Padukone' },
    { image: 'https://robohash.org/', name: 'Shah Rukh Khan' },
    { image: 'https://robohash.org/', name: 'Narendra Modi' },
    { image: 'https://robohash.org/', name: 'Virat Kohli' },
    { image: 'https://robohash.org/', name: 'MS Dhoni' }
  ];
  const [chipList, setChipList] = useState<Info[]>([])
  const [list, setList] = useState<Info[]>(initList);
  const [search, setSearch] = useState('');
  const [showList, setShowList] = useState(false);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [downKey, setDownKey] = useState(0);
  

  const addToChipList = (i: number) => {
    setSearch('');
    setChipList([...chipList, list[i]]);
    setList(prev => prev.filter((e, index) => i != index))
    setShowList(true);
  }

  const removeToChipList = (name: string) => {
    let reqd:Info = {name:'',image:''};
    initList.forEach(e => {
      if (e.name == name) reqd = e;
    })
    setList(prev=>[...prev, reqd]);
    setChipList(prev => prev.filter((e: Info) => e.name != name));
    setShowList(true);
  }

  useEffect(() => {
    function handler(event:any) {
        if(!inputEl.current?.contains(event.target)) {
            setShowList(false)
        }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
}, [])


const handleInput=(e:any)=>{
  if(e.target.value==='' && (e.keyCode==8||e.keyCode==46) && downKey===1){
    let name=chipList[chipList.length-1].name;
    removeToChipList(name);
    setDownKey(0);
  }
  else if(e.target.value==='' && (e.keyCode==8||e.keyCode==46) && downKey===0){
    let name=chipList[chipList.length-1].name;
    let reqdDiv:any=document.getElementsByClassName('chips');
    for (let item of reqdDiv) {
      if(item.innerText===name)item.className=item.className+' border-2 border-blue-500'
    }
    setDownKey(1);
  }
}

  return (
    <main className="flex min-h-screen justify-between p-24">
      
      <div className='mx-auto w-[700px]'>
        
        <div className='flex flex-wrap ' onClick={()=>{setShowList(true);inputEl.current?.focus()}} ref={inputEl}>
          {chipList.map((item: Info, i) => <Chip key={i} image={`${item.image}${i}`} name={item.name} remove={() => removeToChipList(item.name)} />)}
          <div className='w-min'>

          <input 
            className='w-max h-[32px] font-normal normal-case text-[#4f4f4f]' 
            placeholder='Add new user' 
            value={search} 
            type='text' 
            onChange={e => {setSearch(e.target.value)}} 
            onKeyDown={e=>handleInput(e)} >
          </input>
          {showList?<List arr={list.filter((item) => {
            return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search)
          })} add={addToChipList} />:null}
          </div>
        </div>
          <div className='border-[1px] border-blue-400 w-[700px] absolute'></div>

      </div>
    </main>
  )
}
