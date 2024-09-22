'use client'

import { useState } from "react";
import { MdRemove,MdAdd } from "react-icons/md";


export default function QuantitySelector() {
    const [cont,setCont] = useState(1)
    
    const ToogleCont =  (value : number ) =>{
        if (cont + value < 1) return

        if (cont + value > 5) return

        setCont(cont+value)
    }

    return (
        <div className="flex items-center">
            <button onClick={()=> ToogleCont(-1) }>
                <MdRemove size={28} className="duration-300 hover:text-aorus border rounded"/>
            </button>
            <span className="w-20 px-5 mx-3 text-center bg-neutral-800 rounded">{cont}</span>
            <button onClick={()=> ToogleCont(1) }>
                <MdAdd size={28} className="duration-300 hover:text-aorus border rounded"/>
        </button>
    </div>
  )
}
