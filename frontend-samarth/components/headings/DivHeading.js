
const DivHeading = ({title}) => {
  return (
  <div className="mt-20  md:self-start flex gap-3">
  <h2 className="text-2xl md:text-4xl text-slate-600 font-bold ">{title}</h2>
  <div className="w-12 h-[3px] bg-rose-500 mt-auto mb-1 rounded-lg hidden md:block"></div>
   </div>
  )
}

export default DivHeading