import './title.css'
import React, { useState } from 'react'; 

export default function Title () {
    const [isGoingOut, setisGoingOut] = React.useState(true)
 
     function Switch() {
         setisGoingOut(prevState => !prevState)
     }

    return (
        <div className="state">
            <div className="state__value" onClick={Switch}>
                <h1> {isGoingOut ? "VERY" : "F%$#ING"} COOL website!</h1>
            </div>
        </div>
    )
}
