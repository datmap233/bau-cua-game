import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './PlayGlobal.module.scss';

const cx = classNames.bind(styles);

function Item() {
    return (
        <div className="col-xl-4 col-md-4 col-4 col">
            <Button to="/room">
                <div className={cx('room-online')}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Froom.jpeg?alt=media&token=c1c6045c-135a-455c-b5c6-670aff209fcb"
                        alt=""
                    />
                    <div className={cx('detail-room')}>
                        <div className={cx('info-room')}>
                            <p>Room Vip 1</p>
                            <p>Số lượng: 5/10</p>
                        </div>
                        <div>
                            <i className={cx('fa-sharp', 'fa-solid', 'fa-arrow-right')}></i>
                        </div>
                    </div>
                </div>
            </Button>
        </div>
    );
}

export default Item;
