export default function Easter(props){

	return (
		<div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-20 overflow-hidden bg-black/80">
			<div className="w-20 h-20 flex items-center justify-center absolute top-0 right-0">
				<div onClick={()=>props.setOpen(false)} className="w-full h-full text-4xl flex items-center justify-center duration-300 hover:bg-gray-100/30  rounded-full cursor-pointer">
					&#10005;
				</div>
			</div>
			
			{/*Your Easter here*/}
			<div className="h-full flex justify-center items-center text-6xl">
				<span>Demo text</span>
			</div>
		</div>
	)
}