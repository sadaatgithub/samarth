"use client"

const Filter = ({categories,setCategory,activeCategory}) => {
    const category = [...new Set(categories.flat().filter(category => category != null))]

  return (
    <div className="flex">
        <button onClick={()=> setCategory("All")} className={`${activeCategory == "All"? "active":"border-transparent" } px-2 py-2  `}>View All</button>
    {category.map((category) => (<button key={category} onClick={()=> setCategory(category)} className={`${activeCategory===category? "active":"border-transparent"} px-4 py-2 `}>{category}</button>))}
            </div>
  )
}

export default Filter