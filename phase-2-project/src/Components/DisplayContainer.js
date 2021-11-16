import Search from "./Search";
import MerchDisplay from "./MerchDisplay";
import SideBar from "./SideBar";
import { useState } from "react";

const DisplayContainer = ({displayData, pathName}) =>{

    const [search, setSearch] = useState('')

    const merch = displayData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <Search search={search} handleSearch={handleSearch} pathName={pathName}/>
            <SideBar />
            <MerchDisplay displayData={merch}/>
        </>
    )
}

export default DisplayContainer;