import "./search.css"

function Search(){
    return(
        <div className='search' style={{border:"1px solid black",width:"23.50%"}} >
        <input className="input" type="text" placeholder='Search...'/>
        <button className="btn">Search</button>
        </div>
    );
}

export default Search