import classNames from 'classnames/bind';
import Item from './Item';
import styles from './PlayGlobal.module.scss';

const cx = classNames.bind(styles);

function PlayGlobal() {
    return (
        <div className={cx('play-global')}>
            <div className={cx('row')}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default PlayGlobal;
