import { AppContext } from "../../../context/context";
import { useContext,useState, useEffect } from "react";
import Easter from "./easter"

export default function WillSmithSlap(){

	const {search,setSearch} = useContext(AppContext)
	const [open,setOpen] = useState(false)

	useEffect(()=>{
		if(search.toLowerCase()=="will smith slaps"){
			setOpen(true)
			setSearch("")
		}
	},[search])
	

	return (
		<div className="cont">
			The 94th Academy Awards
		{
			open && <Easter setOpen={setOpen} />
		}
		</div>
	)
}