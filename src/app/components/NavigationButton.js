'use client'

import { useRouter } from "next/navigation";

export default function NavigationButton(props) {
  const router = useRouter ()

    
  return (
        <button className={`${props.page === props.title ? 'border-b-2 pb-1' : ''  }`} onClick={()=>{props.setPage(props.title); router.push(props.address)}} >{props.title}</button>
  );
}
