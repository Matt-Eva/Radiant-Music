import Search from "./Search";
import MerchDisplay from "./MerchDisplay";
import SideBar from "./SideBar";

const DisplayContainer = ({displayData}) =>{
    return (
        <>
            <Search />
            <SideBar />
            <MerchDisplay displayData={displayData}/>
        </>
    )
}

export default DisplayContainer;