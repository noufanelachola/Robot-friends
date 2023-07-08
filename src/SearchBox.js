import React from 'react';

const SearchBox = ({searchChange})=> {
    return (
        <div>    
            <input 
                className='pa2 mb3 ba bw1 b--green bg-lightest-blue' 
                type='search'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;