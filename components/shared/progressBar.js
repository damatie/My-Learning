export default function ProgressBar(props){
  const { range,bgColor} = props
  return(
    <div className="flex">
      <div>
        <span className="px-2 text-sm font-medium">{range}%</span>
      </div>
      <div className=" w-full h-4 pt-2">
        <div className="bg-white h-2 rounded-lg">
          <div className=" rounded-lg h-2 " style= {{width: range+'%',background:bgColor}}> </div>
        </div>
      </div>        
    </div>
  )
}
