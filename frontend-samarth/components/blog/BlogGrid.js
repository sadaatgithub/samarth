import React from 'react'

const BlogGrid = ({children,cols=2}) => {
  return (
<div className={`grid lg:grid-cols-2 grid-cols-1 md:gap-8 md:mt-2 relative  grid-flow-row  w-full`}>
      {/* */}
        {children}
    </div>
  )
}

export default BlogGrid