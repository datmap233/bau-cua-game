import classNames from 'classnames/bind';
import NotificationItem from './NotificationItem';

import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <>
            <div className={cx('list-over')}>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </div>
        </>
    );
}

export default Notification;
