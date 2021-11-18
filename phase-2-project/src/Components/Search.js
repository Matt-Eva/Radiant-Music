import styled from "styled-components";

const Search = ({search, handleSearch, pathName}) =>{

    return (
        <div>
            <SearchBar type="text" placeholder={`Search ${pathName}...`} value={search} onChange={handleSearch}/>
        </div>
            
    )
}

export default Search;

const SearchBar = styled.input`

margin: 10px 0px 10px 0px;
width: 500px;

`