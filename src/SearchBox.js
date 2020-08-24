import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2  input'>
            <input type='search'
                className='pa3 ba b-green bg-lightest-green '
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;