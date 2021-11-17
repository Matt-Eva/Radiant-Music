import MerchCard from "./MerchCard";
// import { useState } from "react";


const MerchDisplay = ({displayData, sort, handleCartAdd}) =>{

   

    let merchItems

    if (sort.length === 0){
        merchItems = displayData.map(item => <MerchCard item={item} key={item.title} handleCartAdd={handleCartAdd}/>)
    } else {
        const sortedItems = displayData.filter(item => {
            let whatever = false
            for(const element of sort){
                if(item.category === element){
                    whatever = true
                }
            }
            return whatever
        })
        merchItems = sortedItems.map(item => <MerchCard item={item} key={item.title} handleCartAdd={handleCartAdd}/>)
    }


    return (
        <div className="merch-display">
            {merchItems}
        </div>
    )
}

export default MerchDisplay;