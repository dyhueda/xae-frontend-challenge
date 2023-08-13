'use client'

import { useRouter } from "next/navigation";

export default function NavigationButton(props) {
  const router = useRouter ()

    
  return (
        <button className="" onClick={()=> router.push(props.address)} >{props.title}</button>
  );
}
