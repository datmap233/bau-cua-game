import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

function ActionMenu({ onClick, changeIndex }) {
    return (
        <div className={cx('action-menu')}>
            <div className={cx('ranking')}>
                <Button
                    onClick={() => {
                        onClick(0);
                    }}
                >
                    <i className={cx('fa-solid', 'fa-ranking-star')}></i>
                </Button>
            </div>
            <div className={cx('mess')}>
                <Button
                    onClick={() => {
                        onClick(1);
                    }}
                >
                    <i className={cx('fa-solid', 'fa-comment-medical')}></i>
                </Button>
            </div>
            <div className={cx('noti')}>
                <Button
                    onClick={() => {
                        onClick(2);
                    }}
                >
                    <i className={cx('fa-solid', 'fa-bell')}></i>
                </Button>
            </div>
            <div className={cx('event')}>
                <Button
                    onClick={() => {
                        onClick(3);
                    }}
                >
                    <i className={cx('fa-solid', 'fa-gift')}></i>
                </Button>
            </div>
            <div className={cx('setting')}>
                <Button
                    onClick={() => {
                        onClick(4);
                    }}
                >
                    <i className={cx('fas', 'fa-cog')}></i>
                </Button>
            </div>
        </div>
    );
}

export default ActionMenu;
