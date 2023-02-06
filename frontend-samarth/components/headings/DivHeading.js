
const DivHeading = ({title}) => {
  return (
  <div className="mt-20  self-start flex gap-3">
  <h2 className="text-2xl lg:text-4xl text-slate-700 font-semibold">{title}</h2>
  <div className="w-12 h-[3px] bg-rose-500 mt-auto mb-1 rounded-lg"></div>
   </div>
  )
}

export default DivHeading