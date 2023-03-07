import {useState,useEffect} from 'react';
import Image from 'next/image'
import EasterEggCont from "../../eastereggcont/eastereggcont"
import {AppContext} from "../../../context/context"
import { useContext } from "react";

export default function  EasterNeverGonnaGiveYouUp(){

	return (
		<EasterEggCont>
			<div className="w-full h-full flex items-center justify-center">
				<video width="320" height="240" autoPlay loop>
				  <source src="./data/rick-roll.mp4" type="video/mp4" />
				</video>
			</div>
		</EasterEggCont>
	)
}