import './search-box.css';

export function SearchBox({ onChange, placeholder, className }) {
    return (
        <input
            type='search'
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}
