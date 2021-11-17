import Search from "./Search";
import MerchDisplay from "./MerchDisplay";
import SideBar from "./SideBar";
import { useState } from "react";

const DisplayContainer = ({displayData, pathName, handleCartAdd}) =>{

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState([])

    const categories = [...new Set(displayData.map(item => item.category))]

    const merch = displayData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const setSelected = (cat, bool) => {
        if(bool){
            setSort([...sort, cat])
        } else {
            const oneLess = sort.filter(element => element !== cat)
            setSort(oneLess)
        }
    }


    return (
        <>
            <Search search={search} handleSearch={handleSearch} pathName={pathName}/>
            <SideBar categories={categories} setSelected={setSelected} pathName={pathName} displayData={displayData}/>
            <MerchDisplay displayData={merch} sort={sort} handleCartAdd={handleCartAdd}/>
        </>
    )
}

export default DisplayContainer;