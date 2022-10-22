import React from 'react';

import styles from './DetailsRoom.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DetailsRoom({ children }) {
    return (
        <>
            <div className={cx('details-room')}>
                <div className={cx('infos-room')}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend.jpg?alt=media&token=595528a1-da50-4294-a94c-7da03ce21f21"
                        className={cx('boss-img')}
                        alt=""
                    />
                    <div className={cx('boss')}>
                        <p>Phòng của Justin</p>
                        <span>
                            <i className={cx('fas', 'fa-crown')} style={{ color: 'yellow' }}></i> VIP 5
                        </span>
                    </div>
                </div>
                <div className={cx('member-room')}>
                    <div className="row">
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ffriend4.jpeg?alt=media&token=8f631e68-8025-4a74-b1d3-5214feaa5feb"
                                className={cx('avatar-member')}
                                alt=""
                            />
                        </div>
                        <div className="col-xl-3 col-md-3 col-3 col">
                            <button className={cx('add-member')}>
                                <i className={cx('fa-solid', 'fa-plus')}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsRoom;
