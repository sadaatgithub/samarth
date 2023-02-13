import React from 'react'

const BlogGrid = ({children}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8 md:mt-12 relative place-items-center">
        {children}
    </div>
  )
}

export default BlogGrid