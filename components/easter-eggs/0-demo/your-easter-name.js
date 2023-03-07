import { AppContext } from "../../../context/context";
import { useContext,useState, useEffect } from "react";
import Easter from "./easter"

export default function YourEasterName(){

	const {search,setSearch} = useContext(AppContext)
	const [open,setOpen] = useState(false)

	useEffect(()=>{
		if(search.toLowerCase()=="your easter string"){
			setOpen(true)
			setSearch("")
		}
	},[search])
	

	return (
		<div className="cont">
			<span>Demo: this content is indide the box</span>
			
			{
				open && <Easter setOpen={setOpen} />
			}
		</div>
	)
}