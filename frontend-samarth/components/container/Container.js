


const Container = ({children,bg}) => {
  return (
    <div className={`${bg} lg:px-16 px-6 py-28`}>
        {children}
    </div>
  )
}

export default Container