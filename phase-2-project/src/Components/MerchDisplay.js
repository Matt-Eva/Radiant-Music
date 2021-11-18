import MerchCard from "./MerchCard";
import styled from "styled-components"


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
        <DisplayDiv>
            {merchItems}
        </DisplayDiv>
    )
}

export default MerchDisplay;

const DisplayDiv = styled.div `

  margin: 0px 10px 10px 230px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  /* width: 800px; */
  background-color: hsl(0, 0%, 95%);
  border-radius: 5px;   
  border: double;
  border-width: 4px;

  div:hover {
    background-color: hsl(210, 50%, 95%);
  border-color: hsl(180, 50%, 20%);
  }

`