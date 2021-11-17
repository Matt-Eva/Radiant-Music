

const Search = ({search, handleSearch, pathName}) =>{

    return (
        <div>
            <input className="searchbar" type="text" placeholder={`Search ${pathName}...`} value={search} onChange={handleSearch}/>
        </div>
            
    )
}

export default Search;