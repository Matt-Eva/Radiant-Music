import { useState } from "react"

const AddForm = ({instruments, accessories, albums, addMerch}) =>{
    const instOptions = [...new Set(instruments.map(item => item.category))].map(cat => <option key={cat} value={cat}>{titleCase(cat)}</option>)
    const accOptions = [...new Set(accessories.map(item => item.category))].map(cat => <option key={cat} value={cat}>{titleCase(cat)}</option>)
    const albOptions = [...new Set(albums.map(item => item.category))].map(cat => <option key={cat} value={cat}>{titleCase(cat)}</option>)

    // POSSIBLE ALTERNATE OPTION POPULATION FOR LATER
    // const instOptions = <option></option>
    // const accOptions = <option></option>
    // const albOptions = <option></option>

    const [options, setOptions] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        type: "",
        category: "",
        stock: "",
        image: "",
        review: [],
        rating: 0,
    })

    let fill;
    for (const key in formData){
        if (formData[key] === ""){
            fill = false
            break;
        } else {
            fill = true
        }
    }

    function titleCase(cat){
        return cat.charAt(0).toUpperCase() + cat.slice(1)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "price" || name ==="stock"){
            const numValue = parseFloat(value)
            setFormData({
                ...formData,
                [name]: numValue
            })
        } else{
            setFormData({
                ...formData,
                [name]: value,
            })
        }

        if (name === "type"){
            if(value === "instruments"){
                setOptions(instOptions)
            } else if (value === "accessories"){
                setOptions(accOptions)
            } else if(value === "albums"){
                setOptions(albOptions)
            } else{
                setOptions(null)
            }
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormData({
        title: "",
        price: "",
        type: "",
        category: "",
        stock: "",
        image: "",
        review: [],
        rating: 0,
        })
    }

    return (
        <div className="addform">
            <h3>Add Item:</h3>
            <form onChange={handleChange} onSubmit={(e) =>{
                addMerch(formData)
                handleSubmit(e)
            }}>
                <label>Title</label>
                <input type="text" name="title" value={formData.title}/>
                <label>Image</label>
                <input type="text" name="image" value={formData.image}/>
                <label>Price</label>
                <input type="number" step=".01" name="price" value={formData.price}/>
                <label>Stock</label>
                <input type="number" name="stock" value={formData.stock}/>
                <label>Type</label>
                <select type="select" value={formData.type} name="type">
                    <option>Select Type</option>
                    <option value="instruments">Instruments</option>
                    <option value="accessories">Accessories</option>
                    <option value="albums">Albums</option>
                </select>
                    <label>Category</label>
                <select name="category" value={formData.category}>
                    <option>Choose Category</option> 
                    {options}
                </select>
                {fill ? <button type="submit">Submit</button> : <button type="submit" disabled>Submit</button>}
                
            </form>
        </div>
    )
}

export default AddForm;