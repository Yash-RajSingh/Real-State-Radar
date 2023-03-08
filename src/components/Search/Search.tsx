import './SearchStyles.css'
const Search = () => {
  return ( 
    <>
    <div className="search-container">
      <div className="search-wrapper">
        <p className="search-heading">Search the price you're looking for...</p>
        <div className="search-subwrapper">
          <input type="text" placeholder='Location'/>
          <input type="text" placeholder='Type'/>
          <input type="text" placeholder='Budget'/>
          <button className="btn">Search Now</button>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Search;