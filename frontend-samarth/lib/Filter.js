"use client"

const Filter = ({categories,setCategory,activeCategory}) => {
    const category = [...new Set(categories.flat().filter(category => category != null))]

  return (
    <div className="flex md:gap-2">
        <button onClick={()=> setCategory("All")} className={`${activeCategory == "All"? "active":"" } px-4 py-2`}>View All</button>
    {category.map((category) => (<button onClick={()=> setCategory(category)} className={`${activeCategory===category? "active":""} px-4 py-2`}>{category}</button>))}
            </div>
  )
}

export default Filter