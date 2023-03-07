import {useEffect} from 'react'

export default function DrawingBoard(){

	let isDrawing = false;
	let color = "black"
	let board,boardParent,ctx;
	function initializeBoard(){
		board = document.querySelector('#board')
		boardParent = document.querySelector('#board').parentNode
		ctx = board.getContext('2d')
		board.width=boardParent.clientWidth
		board.height=boardParent.clientHeight

		ctx = board.getContext('2d');
	}


	function draw(e){
		if(!isDrawing) return;

		ctx.lineWidth = 10
		ctx.lineCap="round"
		ctx.strokeStyle = color;

		let parentCoordinates = boardParent.getBoundingClientRect()

		ctx.lineTo(e.clientX-parentCoordinates.x,e.clientY-parentCoordinates.y)
		ctx.stroke()
		ctx.moveTo(e.clientX-parentCoordinates.x,e.clientY-parentCoordinates.y)
	}

	function colorChange(e){
		document.querySelector("[data-selected='true']").dataset.selected = "false"
		e.target.dataset.selected="true"
		color=e.target.dataset.color
	}

	function clearBoard(){
		console.log(0,0,window.innerWidth,window.innerHeight)
		ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
	}


	useEffect(()=>{
		initializeBoard()
	},[])

	return (
		<div className="sm:col-span-2 col-span-1 flex flex-col row-span-2 cont">
			{/*Drawing board controls*/}
			<div className="flex justify-between py-2 sm:px-4 px-2 justify-center items-center">
				<span>Drawing Board</span>

				<div className="flex h-full gap-2">
					<span onClick={colorChange} data-color="#000" className="h-full aspect-square rounded-full border-2 border-transparent data-[selected=true]:border-gray-200 bg-black" data-selected="true"></span>
					<span onClick={colorChange} data-color="#ef4444" className="h-full aspect-square rounded-full border-2 border-transparent data-[selected=true]:border-gray-200 bg-red-500"></span>
					<span onClick={colorChange} data-color="#fbbf24" className="h-full aspect-square rounded-full border-2 border-transparent data-[selected=true]:border-gray-200 bg-yellow-400"></span>
					<span onClick={colorChange} data-color="#4ade80" className="h-full aspect-square rounded-full border-2 border-transparent data-[selected=true]:border-gray-200 bg-green-400"></span>
					<span onClick={colorChange} data-color="#3b82f6" className="h-full aspect-square rounded-full border-2 border-transparent data-[selected=true]:border-gray-200 bg-blue-500"></span>
				</div>	

				<button onClick={clearBoard}>Clear</button>
			</div>

			{/*Drawing board*/}
			<div className="flex-grow relative">
				<canvas id="board" onMouseDown={()=>{isDrawing=true}} onMouseUp={()=>{isDrawing=false; ctx.beginPath()}}
				 onMouseMove={draw}
				 className="w-full h-full bg-white"></canvas>
			</div>
		</div>
	)
}