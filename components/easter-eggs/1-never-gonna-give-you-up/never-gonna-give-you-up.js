import { AppContext } from "../../../context/context";
import { useContext, useState, useEffect} from "react";
import Easter from "./easter"

export default function NeverGonnaGiveYouUp(){

	const {search,setSearch} = useContext(AppContext)
	const [open,setOpen] = useState(false)

	useEffect(()=>{
		if(search.toLowerCase()=="never gonna give you up"){
			// setEasterOpen(true)
			console.log("here",open);
			setOpen(true)
			setSearch("")
		}
	},[search])

	
	

	return (
		<div className="cont flex flex-col gap-2 p-4">
			<span>What's the opposite of</span>
			<span>1) Always</span> 
			<span>2) Coming</span> 
			<span>3) Take</span> 
			<span>4) Me</span> 
			<span>5) Down</span>

			{
				open && <Easter setOpen={setOpen} />
			}
		</div>
	)
}