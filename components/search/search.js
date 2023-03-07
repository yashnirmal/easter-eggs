import {useState} from 'react'
import {AppContext} from "../../context/context"
import { useContext } from "react";


export default function Search(){

	const {search, setSearch} = useContext(AppContext)

	function searchBtnClicked(){
		setSearch(document.querySelector('#main_search').value)
	}

	return(
		<div className="md:text-xl sm:text-lg text-md flex justify-center mb-10">
			<div className="flex justify-between w-[90%] border-2 rounded-2xl p-2 bg-white/5">
				<input className="w-full outline-none bg-transparent" 
				 id="main_search" type="text" placeholder="Search for easter eggs here..."
				  />

				<div onClick={searchBtnClicked} className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-white/20 duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
					<span>
						Search
					</span>
				</div>
			</div>			

		</div>
	)
}