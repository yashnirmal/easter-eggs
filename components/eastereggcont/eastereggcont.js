import {AppContext} from '../../context/context'
import { useContext } from "react";

export default function EasterEggCont(props){

	const {setEasterOpen} = useContext(AppContext)

	return (
		<div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-20 overflow-hidden bg-black/80">
			<div className="w-20 h-20 flex items-center justify-center absolute top-0 right-0">
				<div onClick={()=>setEasterOpen(false)} className="w-full h-full text-4xl flex items-center justify-center duration-300 hover:bg-gray-100/30  rounded-full cursor-pointer">
					&#10005;
				</div>
			</div>
			{props.children}
		</div>
	)
}