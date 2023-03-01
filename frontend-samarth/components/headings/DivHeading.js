import Underline from "./Underline"

const DivHeading = ({title}) => {
  return (
  <div className="flex flex-col gap-3 items-center">
  <h2 className="text-2xl md:text-4xl text-slate-600 font-bold ">{title}</h2>
  <div className="w-1/2 h-[4px] bg-teal-400 mt-auto mb-1 rounded-lg"></div>
  {/* <Underline/> */}
   </div>
  )
}

export default DivHeading