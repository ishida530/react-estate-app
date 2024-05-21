import { useState } from 'react'
import './searchBar.scss'


const types = ['buy', 'rent']
const SearchBar = () => {
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0,
    })
    const switchType = (type) => {
        setQuery(prev => ({ ...prev, type }))
    }
    return (
        <div className='searchBar'>
            <div className='type'>
                {types.map((type) => (
                    <button
                        className={query.type === type ? 'active' : ''}
                        key={type} onClick={() => switchType(type)}>
                        {type}
                    </button>)
                )}
            </div>
            <form action="">
                <input type="text" name='location' placeholder='City Location' />
                <input type="number" name='minPrice' min={0} max={10000000} placeholder='Min Price' />
                <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
                <button type="submit">
                    <img src="/search.png" alt="search icon" />
                </button>
            </form>


        </div>
    )
}

export default SearchBar