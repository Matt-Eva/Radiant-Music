import ListItem from "./ListItem"


const SideBar = ({ categories, setSelected, pathName, displayData }) =>{


        if (pathName === "all merch"){

        const instruments = displayData.filter(item => item.type === "instruments")
        const accessories = displayData.filter(item => item.type === "accessories")
        const albums =  displayData.filter(item => item.type === "albums")
        
        const instrumentCategories = [...new Set(instruments.map(item => item.category))]
        const accessoryCategories = [...new Set(accessories.map(item => item.category))]
        const albumCategories = [...new Set(albums.map(item => item.category))]

        const instrumentList = instrumentCategories.map(cat => <ListItem key={cat} category={cat} setSelected={setSelected}/>)
        const accessoryList = accessoryCategories.map(cat => <ListItem key={cat} category={cat} setSelected={setSelected}/>)
        const albumList = albumCategories.map(cat => <ListItem key={cat} category={cat} setSelected={setSelected}/>)
      

        return(
        <div className="sidebar">
            <h3>Sort By:</h3>
            <h4>Instruments:</h4>
                <ul className="category-list">
                    {instrumentList}
                </ul>
            <h4>Accessories:</h4>
                <ul className="category-list">
                    {accessoryList}
                </ul>
            <h4>Albums:</h4>
                <ul className="category-list">
                    {albumList}
            </ul>
        </div>
        )

    } else {

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
}

export default SideBar;