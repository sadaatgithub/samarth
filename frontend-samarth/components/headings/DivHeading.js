import Underline from "./Underline"

const DivHeading = ({title}) => {
  return (
  <div className="flex flex-col gap-4 items-center z-[1]">
  <h2 className="text-3xl md:text-5xl text-slate-600 font-semibold">{title}</h2>
  <div className="w-1/2 h-[4px] bg-teal-400 mt-auto mb-1 rounded-lg"></div>
  {/* <Underline/> */}
   </div>
  )
}

export default DivHeading