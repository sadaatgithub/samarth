import React from 'react'

const BlogGrid = ({children,cols=2}) => {
  return (
<div className={`grid lg:grid-cols-2 grid-cols-1 gap-y-16 md:gap-12 md:mt-2 relative  grid-flow-row  place-items-center xl:place-items-start`}>
        {children}
    </div>
  )
}

export default BlogGrid