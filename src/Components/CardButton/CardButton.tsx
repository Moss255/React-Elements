import React from 'react';
import Card from '../Card/Card';
import Styles from './CardButton.module.scss';

interface ICardButtonProps {
    icon: string;
    title: string;
    url: string;
}

const CardButton = (props: ICardButtonProps) => {
    return (
        <Card hover={true} handleClick={() => console.log(props.url)}>
            <div className={Styles.contents}>
                <span className={`${Styles.icon} material-icons`}>{props.icon}</span>
                <span> {props.title} </span>
            </div>
        </Card>
    )

}

export default CardButton