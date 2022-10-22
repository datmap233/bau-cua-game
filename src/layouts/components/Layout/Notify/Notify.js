import React from 'react';

import styles from './Notify.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';

import Notification from '~/components/Popper/Notification';

const cx = classNames.bind(styles);

function Notify({ children }) {
    return (
        <>
            <div className={cx('exit-btn')}>
                <Button btn>
                    <Button to="/">
                        <i className={cx('fa-solid', 'fa-right-from-bracket')}></i> <span>Exit</span>
                    </Button>
                </Button>
            </div>
            <h1 className={cx('title')}>Notify</h1>
            <Notification />
        </>
    );
}

export default Notify;
