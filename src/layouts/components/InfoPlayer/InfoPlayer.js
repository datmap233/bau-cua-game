import classNames from 'classnames/bind';
import styles from './InfoPlayer.module.scss';

const cx = classNames.bind(styles);

function InfoPlayer() {
    return (
        <div className={cx('info-player')}>
            <div className={cx('avatar-player')}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend.jpg?alt=media&token=595528a1-da50-4294-a94c-7da03ce21f21"
                    alt=""
                />
            </div>
            <div className={cx('name-player')}>
                <p>Yukiin</p>
                <span>
                    <i className={cx('fas', 'fa-crown')} style={{ color: 'yellow' }}></i> VIP 5
                </span>
                <div className={cx('ex')}></div>
            </div>
            <div className={cx('money-player')}>
                <p>
                    <i className="fas fa-sack-dollar"></i> 1.000.000VND <i className={cx('fas', 'fa-plus')}></i>
                </p>
            </div>
        </div>
    );
}

export default InfoPlayer;
