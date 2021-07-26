import React from 'react';
import Card from '../Card/Card';
import Styles from './Recents.module.scss';

interface IRecentsProps {

}

const Recents = () => {

    const [data, setData] = React.useState([
        { item: 'Form 1', url: 'form1' },
        { item: 'Form 2', url: 'form2' },
        { item: 'Form 3', url: 'form3' },
    ] as any);

    return (
        <Card>
            <div className={Styles.selection}>
            {data.map((data: any) => {
                return (
                    <div key={data.item} className={Styles.item} onClick={() => console.log(data.url)}>
                        <span className={Styles.text}>{data.item}</span>
                        <span className={`${Styles.action} material-icons`}>chevron_right</span>
                    </div>  
                )
            })}
            </div>
        </Card>
        
    )
}

export default Recents