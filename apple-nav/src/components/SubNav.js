import React from 'react'

const SubNav = props => {
    const category = props.match.params.category
    const thisCategory = props.data.find(item => item.navTitle === category)
    console.log(category)

    return (
        <div className="sub-nav">
            {thisCategory.subNavs.map(item => 
                <p>{item}</p>
            
            )}
                
        </div>
    )
}

export default SubNav