import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ friend = false, board = false, message = false, notify = false, gift = false, setting = false }) {
    return (
        <>
            {friend && (
                <div className={cx('thumb-info')}>
                    <div className={cx('avatar')}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend.jpg?alt=media&token=595528a1-da50-4294-a94c-7da03ce21f21"
                            alt=""
                        />
                        <div className={cx('fa-circle')}></div>
                    </div>
                    <div className={cx('name')}>
                        <p>Yukiin</p>
                    </div>
                </div>
            )}
            {message && (
                <div className={cx('thumb-info')}>
                    <div className={cx('avatar')}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend.jpg?alt=media&token=595528a1-da50-4294-a94c-7da03ce21f21"
                            alt=""
                        />
                        <div className={cx('fa-circle')}></div>
                    </div>
                    <div className={cx('name')}>
                        <p>Yukiin</p>
                        <p className={cx("mess")}>Game không bạn ơi</p>
                    </div>
                </div>
            )}
            {board && (
                <div className={cx('thumb-info')}>
                    <div className={cx('avatar')}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend.jpg?alt=media&token=595528a1-da50-4294-a94c-7da03ce21f21"
                            alt=""
                        />
                        <div className={cx('fa-circle')}></div>
                    </div>
                    <div className={cx('name')}>
                        <p>Yukiin</p>
                    </div>
                </div>
            )}
            {notify && (
                <div className={cx('thumb-info')}>
                    <div className={cx('name')}>
                        <p>Bạn đã nhận 100.000đ</p>
                    </div>
                </div>
            )}
            {gift && (
                <div className={cx('thumb-info')}>
                    <div className={cx('name')}>
                        <p>Bạn đã nhận 100.000đ</p>
                    </div>
                </div>
            )}
            {setting && (
                <ul>
                <li><Button to="/">Tài Khoản</Button></li>
                <li><Button to="/">Nạp Tiền</Button></li>
                <li><Button to="/">Tắt Tiếng</Button></li>
                <li><Button to="/">Report</Button></li>
                <li><Button href="/login">Đăng Xuất</Button></li>
            </ul>
            )}
        </>
    );
}

export default MenuItem;
