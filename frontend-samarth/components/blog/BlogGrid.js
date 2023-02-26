import React from 'react'

const BlogGrid = ({children,cols=2}) => {
  return (
<div className={`grid lg:grid-cols-2 grid-cols-1 gap-y-10 md:gap-6 md:mt-2 relative  grid-flow-row  w-full place-items-center xl:place-items-start`}>
      {/* */}
        {children}
    </div>
  )
}

export default BlogGrid