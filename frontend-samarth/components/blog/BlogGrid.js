
const BlogGrid = ({children,cols}) => {
  return (
<div className={`grid grid-cols-1  ${cols}  gap-y-16 md:gap-12  relative  place-items-center md:place-items-stretch`}>
        {children}
    </div>
  )
}

export default BlogGrid