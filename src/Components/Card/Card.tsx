import React from 'react';
import Styles from './Card.module.scss';

interface ICardProps {
    hover?: boolean;
    handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
}

const Card = (props: ICardProps) => {
    return (
        <div className={props.hover ? Styles.actionCard : Styles.card} onClick={props.handleClick}>
            {props.children}
        </div>
    )
}

Card.defaultProps = {
    hover: false,
    children: {}
}

export default Card;