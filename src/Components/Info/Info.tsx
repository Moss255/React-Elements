import React from 'react';

interface IInfoProps {
    tooltipText: string;
}

const Info = (props: IInfoProps) => {
    return (
        <div>
            <span className='material-icons icon'>info_outlined</span>
            <span>{props.tooltipText}</span>
        </div>
    )
}

export default Info