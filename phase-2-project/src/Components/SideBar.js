import ListItem from "./ListItem"
import styled from "styled-components";


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
        <SideDiv>
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
        </SideDiv>
        )

    } else {

        const displayCategories = categories.map(cat => <ListItem key={cat} category={cat} setSelected={setSelected}/>)

    return (
        <SideDiv>
            <h3>Sort By:</h3>
            <ul className="category-list">
                {displayCategories}
            </ul>
        </SideDiv>
    )
    }
}

export default SideBar;

const SideDiv = styled.div`

  position: sticky;
  top: 5px;
  margin: 0px 20px 0px 10px;
  float: left;
  width: 200px;
  background: hsl(0, 0%, 90%);
  border: solid;
  border-width: 1px;
  border-radius: 5px; 
  height: 800px;  

  h4{
    text-align: left;
    margin: 10px 0px 5px 20px;
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
    text-align: left;
    margin: 0px;
    padding-left: 25px;
  }

`