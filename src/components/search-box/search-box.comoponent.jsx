
import './search-box.styles.css'
const SearchBox = ({ onChangeHandler, placeholder, className }) => {
 
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type="search"
      onChange={onChangeHandler}
    />
  );
};
export default SearchBox;