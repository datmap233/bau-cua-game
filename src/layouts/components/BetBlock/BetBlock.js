import React, { useRef } from 'react';

import styles from './BetBlock.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function BetBlock({ children, onClick }) {
    return (
        <>
            <div className={cx('bet-block')}>
                <div className={cx('row')}>
                    <div className="col-xl-4 col-md-4 col-4 col">
                        <Button onClick={() => onClick(0)}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fnai.png?alt=media&token=d80fcf4a-1033-46dc-bc57-3d8fcd0775df"
                                alt=""
                            />
                        </Button>
                    </div>
                    <div className="col-xl-4 col-md-4 col-4 col">
                        <Button onClick={() => onClick(1)}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fbau.png?alt=media&token=c57118df-97ee-45bb-bfb9-617e1c7a5f26"
                                alt=""
                            />
                        </Button>
                    </div>
                    <div className="col-xl-4 col-md-4 col-4 col">
                        <Button onClick={() => onClick(2)}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fga.png?alt=media&token=31e6b3bb-d88e-4802-a395-cede88aa47a6"
                                alt=""
                            />
                        </Button>
                    </div>
                    <div className="col-xl-4 col-md-4 col-4 col">
                        <Button onClick={() => onClick(3)}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fca.png?alt=media&token=9a02f61e-6685-4709-a99e-624d85b94cf1"
                                alt=""
                            />
                        </Button>
                    </div>
                    <div className="col-xl-4 col-md-4 col-4 col">
                        <Button onClick={() => onClick(4)}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Fcua.png?alt=media&token=733b77be-e0be-46e9-a166-982b9248cda4"
                                alt=""
                            />
                        </Button>
                    </div>
                    <div className="col-xl-4 col-md-4 col-4 col">
                        <Button onClick={() => onClick(5)}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/bau-cua-game.appspot.com/o/img%2Ftom.png?alt=media&token=38285cd4-2ce4-4707-bd58-b6f2dfad0201"
                                alt=""
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BetBlock;
