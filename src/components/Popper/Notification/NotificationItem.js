import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function NotifyItem() {
    return (
        <>
            <div className={cx('item')}>
                <span>Bạn đã nhận được 100.000đ</span>
                <span className={cx('date')}>20/10/2022</span>
            </div>
        </>
    );
}

export default NotifyItem;
