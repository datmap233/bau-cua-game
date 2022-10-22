import React from 'react';

import styles from './TimeBet.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TimeBet({ children }) {
    return (
        <>
            <div className={cx('timebet')}>
                <p className={cx('title-time')}>
                    Thời Gian <br /> Cược
                </p>
                <p className={cx('time')}>
                    <span>60</span>s
                </p>
            </div>
        </>
    );
}

export default TimeBet;
