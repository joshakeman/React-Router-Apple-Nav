import React from 'react'

const SubNav = props => {
    console.log(props.data.subNavs)
    return (
        // <div>
        //     {props.itemData.map(item => 
        //         <p>{item}</p>
        //     )}
        // </div>
        <div>
            {props.data.subNavs.map(item => 
                <p>{item}</p>
            )}
        </div>
    )
}

export default SubNav