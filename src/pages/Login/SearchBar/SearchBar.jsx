import './SearchBar.scss'

export const SearchBar = ({ openSearch }) => {
    return (
        <div className={openSearch ? "search-bar-show" : "search-bar-hide"}>
            Search
        </div>
    )
}