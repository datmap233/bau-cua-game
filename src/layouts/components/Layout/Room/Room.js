import React, { useState } from 'react';

import styles from './Room.module.scss';

import classNames from 'classnames/bind';
import InfoPlayer from '~/layouts/components/InfoPlayer';
import Button from '~/components/Button';
import BetBlock from '../../BetBlock';
import DetailsRoom from '../../DetailsRoom';
import TimeBet from '../../TimeBet';
import SumBet from '../../SumBet';

const cx = classNames.bind(styles);

function Room({ children }) {
    const [indexBlock, setIndexBlock] = useState([0, 0, 0, 0, 0,0]);

    const handleOnClick = (index) => {
        setIndexBlock((state) => {
            const newState = state.map((value, indexId) => {
                if (indexId === index) value += 500;
                return value;
            });
            return newState;
        });
        return index;
    };

    return (
        <>
            <InfoPlayer />
            <div className={cx('exit-btn')}>
                <Button btn>
                    <Button to="/">
                        <i className={cx('fa-solid', 'fa-right-from-bracket')}></i> Exit
                    </Button>
                </Button>
            </div>
            <BetBlock onClick={handleOnClick} />
            <DetailsRoom />
            <div className={cx('result-main')}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fxocdia.png?alt=media&token=dbd03e76-ae87-480c-96e4-7fb8187ba0da"
                    alt=""
                    className={cx('result-img')}
                />
            </div>
            <SumBet value={indexBlock}/>
            <TimeBet />
        </>
    );
}

export default Room;
