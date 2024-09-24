"use client"
import { useState,ChangeEvent } from "react";
import { IoAdd } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui";

export default function ProductEspecificationsInput() {
    const [specifications, setSpecifications] = useState<string[]>([])
    const [input, setInput] = useState<string>("")
    
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleAdd =() =>{
        if (input.trim() !== "") {
            setSpecifications([...specifications,input.trim()]) 
            setInput("")   
        }
    }

    const handleRemove = (index: number): void => {
        setSpecifications(specifications.filter((_, i) => i !== index));
      };

    return (
    <div className="h-auto flex flex-col w-full gap-2">   
        <label className="w-full flex gap-2">
            <Input 
            type="text" 
            value={input}
            onChange={handleInputChange}
            />
            <Button onClick={(e) => { e.preventDefault(); handleAdd(); }} size={"icon"} className="h-12 w-12" variant={"outline"}>
                <IoAdd size={22}/>
            </Button>

        </label>
        <ul className="space-y-2">
            {specifications.map((spec,index)=>(
                <li key={index} className="flex gap-2 hover:bg-muted/50 p-2 rounded">
                    <p>
                        {spec}
                    </p>
                    <span onClick={()=>handleRemove(index)} className="text-red-600  cursor-pointer flex-center hover:scale-125 hover:rotate-90 duration-200 group">
                        <IoCloseOutline size={22}/>
                    </span>
                </li>
            ))}
        </ul>
    </div>
    );
}