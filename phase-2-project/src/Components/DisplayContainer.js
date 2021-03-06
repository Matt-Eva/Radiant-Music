import Search from "./Search";
import MerchDisplay from "./MerchDisplay";
import SideBar from "./SideBar";
import { useState } from "react";

const DisplayContainer = ({displayData, pathName, handleCartAdd, sort, setSelected, handleAddStock, handleDelete}) =>{

    const [search, setSearch] = useState('')
    

    const categories = [...new Set(displayData.map(item => item.category))]
    
    const merch = displayData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    


    return (
        <>
            <Search search={search} handleSearch={handleSearch} pathName={pathName}/>
            <SideBar categories={categories} setSelected={setSelected} pathName={pathName} displayData={displayData}/>
            <MerchDisplay displayData={merch} sort={sort} handleCartAdd={handleCartAdd} handleAddStock={handleAddStock} handleDelete={handleDelete}/>
        </>
    )
}

export default DisplayContainer;