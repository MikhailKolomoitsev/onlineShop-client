import React from 'react';
import cl from './Basket.module.css';

const Basket = ({ listOfDevices, visible, setVisible }) => {

    const rootClasses = [cl.Basket]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible()}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {/* {listOfDevices} */}
                <ul >
                    {listOfDevices.map(i => <li key={i}>{i}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Basket;