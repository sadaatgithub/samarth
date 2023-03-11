


const Container = ({children,bg="bg-white"}) => {
  return (
    <div className={`${bg} lg:px-16 px-4 py-14 md:py-28`}>
        {children}
    </div>
  )
}

export default Container