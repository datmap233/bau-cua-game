import React from 'react';

import styles from './SumBet.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SumBet({ children, value }) {
    return (
        <>
            <div className={cx('sumbet')}>
                <div className="row">
                    <div className=" col-xl-4 col-md-4 col-4 col">
                        <div className={cx('sumbet-items')}>
                            <span>{value[0]}</span>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fnai.png?alt=media&token=d80fcf4a-1033-46dc-bc57-3d8fcd0775df"
                                className={cx('sumbet-img')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" col-xl-4 col-md-4 col-4 col">
                        <div className={cx('sumbet-items')}>
                            <span>{value[1]}</span>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fbau.png?alt=media&token=c57118df-97ee-45bb-bfb9-617e1c7a5f26"
                                className={cx('sumbet-img')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" col-xl-4 col-md-4 col-4 col">
                        <div className={cx('sumbet-items')}>
                            <span>{value[2]}</span>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fga.png?alt=media&token=31e6b3bb-d88e-4802-a395-cede88aa47a6"
                                className={cx('sumbet-img')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" col-xl-4 col-md-4 col-4 col">
                        <div className={cx('sumbet-items')}>
                            <span>{value[3]}</span>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fca.png?alt=media&token=9a02f61e-6685-4709-a99e-624d85b94cf1"
                                className={cx('sumbet-img')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" col-xl-4 col-md-4 col-4 col">
                        <div className={cx('sumbet-items')}>
                            <span>{value[4]}</span>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fcua.png?alt=media&token=733b77be-e0be-46e9-a166-982b9248cda4"
                                className={cx('sumbet-img')}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" col-xl-4 col-md-4 col-4 col">
                        <div className={cx('sumbet-items')}>
                            <span>{value[5]}</span>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ftom.png?alt=media&token=38285cd4-2ce4-4707-bd58-b6f2dfad0201"
                                className={cx('sumbet-img')}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SumBet;
