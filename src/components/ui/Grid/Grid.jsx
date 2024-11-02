import React from 'react'

function Grid({children}) {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {children}
        </div>
   
    )
}

export default Grid
