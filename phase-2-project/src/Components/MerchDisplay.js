import MerchCard from "./MerchCard";
// import { useState } from "react";


const MerchDisplay = ({displayData, sort, handleCartAdd, handleAddStock, handleDelete}) =>{

   

    let merchItems

    if (sort.length === 0){
        merchItems = displayData.map(item => <MerchCard item={item} key={item.title} handleCartAdd={handleCartAdd} handleAddStock={handleAddStock} handleDelete={handleDelete}/>)
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
        merchItems = sortedItems.map(item => <MerchCard item={item} key={item.title} handleCartAdd={handleCartAdd} handleAddStock={handleAddStock} handleDelete={handleDelete}/>)
    }


    return (
        <div className="merch-display">
            {merchItems}
        </div>
    )
}

export default MerchDisplay;