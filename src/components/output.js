import React from 'react';
import OutputRow from './outputrow';

const Output = props => {
    return(
        <div>
            <OutputRow value={props.answer} textSize={{fontSize: '20px'}}/>
            <OutputRow value={props.user}/>
        </div>
    )
}

export default Output