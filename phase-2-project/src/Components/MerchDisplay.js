import MerchCard from "./MerchCard";


const MerchDisplay = ({displayData}) =>{
    const merchItems = displayData.map(item => <MerchCard item={item} key={item.title}/>)

    return (
        <div className="merch-display">
            {merchItems}
        </div>
    )
}

export default MerchDisplay;