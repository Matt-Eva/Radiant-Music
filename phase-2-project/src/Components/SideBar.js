import ListItem from "./ListItem"


const SideBar = ({ categories, setSelected, pathName }) =>{

    // if (pathName === "all merch"){

    // } else {
        
    // }

    const displayCategories = categories.map(cat => <ListItem key={cat} category={cat} setSelected={setSelected}/>)

    return (
        <div className="sidebar">
            <h3>Sort By:</h3>
            <ul className="category-list">
                {displayCategories}
            </ul>
        </div>
    )
}

export default SideBar;