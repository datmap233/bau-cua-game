import classNames from 'classnames/bind';
import styles from './PlayCustom.module.scss';

const cx = classNames.bind(styles);

function PlayCustom({ create = false, title="Tạo Room Mới", titleSubmit="Create Room" }) {
    return (
        <>
            <h1>{title}</h1>
            <form>
                <div className={cx('row')}>
                    <label className={cx('title-label')}>Tên Phòng</label>
                    <input type="text" name="nameroom" />
                </div>
                {create && (
                    <>
                        <div className={cx('row')}>
                            <label className={cx('title-label')}>Số lượng</label>
                            <input type="text" name="soluong" />
                        </div>
                        <div className={cx('row')}>
                            <label className={cx('title-label')}>Room</label>
                            <input
                                type="radio"
                                id="public"
                                name="public"
                                value="public"
                                style={{ marginRight: '4px' }}
                            />
                            <label for="public" style={{ marginRight: '16px' }}>
                                Public
                            </label>
                            <input
                                type="radio"
                                id="private"
                                name="private"
                                value="private"
                                style={{ marginRight: '4px' }}
                            />
                            <label for="private">Private</label>
                        </div>
                    </>
                )}

                <input type="submit" name="create" value={titleSubmit} className={cx('submit-btn', 'btn')} />
            </form>
        </>
    );
}

export default PlayCustom;
