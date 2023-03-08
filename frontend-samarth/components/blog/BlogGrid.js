
const BlogGrid = ({children,cols="grid-cols-2"}) => {
  return (
<div className={`grid md:grid-cols-2 lg:${cols} grid-cols-1 gap-y-16 md:gap-12  relative  place-items-center md:place-items-stretch`}>
        {children}
    </div>
  )
}

export default BlogGrid