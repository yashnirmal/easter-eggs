import DrawingBoard from "../drawingboard/drawingboard";
import NeverGonnaGiveYouUp from "../easter-eggs/1-never-gonna-give-you-up/never-gonna-give-you-up"
import LetThereBeLight from "../easter-eggs/2-let-there-be-light/let-there-be-light";
import EasterEggCont from "../eastereggcont/eastereggcont"

export default function MainContainer(){
	return (
		<div className="flex justify-center">
			<div className="w-[90%] grid md:grid-cols-3 sm:grid-cols-2 grid cols-1 row-span-2 gap-6 text-xl">
				<DrawingBoard />
				<NeverGonnaGiveYouUp />
				<LetThereBeLight />
				<div className="cont"></div>
			</div>
		</div>
	)
}