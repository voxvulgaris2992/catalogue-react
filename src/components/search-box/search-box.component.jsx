import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search' // since consistent with .search from search-box.styles 
        type='search'
        placeholder={placeholder} // Generalise placeholder since this component may be reused across apps
        onChange={handleChange}
    >
    </input>
)

