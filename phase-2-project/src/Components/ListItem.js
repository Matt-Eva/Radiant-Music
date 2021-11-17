import { useState } from "react"

function ListItem({category, setSelected}){
    
    const [checked, setChecked] = useState(false)


    function titleCase(cat){
        return cat.charAt(0).toUpperCase() + cat.slice(1)
    }

    function handleCheck(){
        setChecked(!checked)
    }


    return(
        <li>
            {titleCase(category)}
            <input type='checkbox' checked={checked} onChange={() => {handleCheck(); setSelected(category, !checked)}}></input>
        </li>
    )
}

export default ListItem