import React, { useRef } from 'react';
import Menu from '~/components/Popper/Menu';

import styles from './Home.module.scss';

import classNames from 'classnames/bind';
import InfoPlayer from '~/layouts/components/InfoPlayer';
import ActionMenu from '~/layouts/components/ActionMenu';
import PlayGlobal from '~/layouts/components/PlayGlobal';
import PlayCustom from '~/layouts/components/PlayCustom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home({ children }) {

    const refActionMenu = useRef([]);

    const handleOnClickActionMenu = (index) => {
        // eslint-disable-next-line array-callback-return
        refActionMenu.current.map((value, indexSub) => {
            if (indexSub === index) refActionMenu.current[indexSub].classList.add(cx('move'));
            else refActionMenu.current[indexSub].classList.remove(cx('move'));
        });
    };
    // eslint-disable-next-line no-const-assign
    refActionMenu.current = [];
    const pushRefActionMenu = (el) => {
        if (el && !refActionMenu.current.includes(el)) {
            refActionMenu.current.push(el);
        }
    };

    const refCreateRoom = useRef([]);
    // eslint-disable-next-line no-const-assign
    refCreateRoom.current = [];
    const pushRefCreateRoom = (el) => {
        if (el && !refCreateRoom.current.includes(el)) {
            refCreateRoom.current.push(el);
        }
    };

    return (
        <>
            <div className={cx('list-friend')}>
                <Menu height="350px" title="Friends" friend />
            </div>
            <div className={cx('play')}>
                <Button
                    btn
                    custom
                    onClick={() => {
                        if (refCreateRoom.current[0].className === cx('play-custom'))
                            refCreateRoom.current[0].classList.add(cx('tgplay'));
                        else {
                            refCreateRoom.current[0].classList.remove(cx('tgplay'));
                            refCreateRoom.current[1].classList.add(cx('tgplay'));
                        }
                    }}
                >
                    Play Custom
                </Button>
                <br />
                <Button
                    btn
                    global
                    onClick={() => {
                        if (refCreateRoom.current[1].className === cx('play-custom')) {
                            refCreateRoom.current[1].classList.add(cx('tgplay'));
                        } else {
                            refCreateRoom.current[1].classList.remove(cx('tgplay'));
                            refCreateRoom.current[0].classList.add(cx('tgplay'));
                        }
                    }}
                >
                    Play Global
                </Button>
            </div>
            <InfoPlayer />
            <ActionMenu onClick={handleOnClickActionMenu} />
            <PlayGlobal />
            <div key={1} className={cx('ranking-sever', 'move')} ref={pushRefActionMenu}>
                <Menu height="250px" title="Leader Board" board to="/board"/>
            </div>
            <div key={2} className={cx('ranking-sever')} ref={pushRefActionMenu}>
                <Menu height="250px" title="Tin nhắn" message to="/message"/>
            </div>
            <div key={3} className={cx('ranking-sever')} ref={pushRefActionMenu}>
                <Menu height="250px" title="Thông báo" notify to="/notify"/>
            </div>
            <div key={4} className={cx('ranking-sever')} ref={pushRefActionMenu}>
                <Menu height="250px" title="Quà tặng" gift to="/gift"/>
            </div>
            <div key={5} className={cx('ranking-sever')} ref={pushRefActionMenu}>
                <Menu height="250px" title="Cài đặt" setting to="/setting"/>
            </div>
            <div className={cx('play-custom', 'tgplay')} ref={pushRefCreateRoom}>
                <PlayCustom title="Tìm Phòng" titleSubmit="Tìm Phòng" />
            </div>
            <div className={cx('play-custom', 'tgplay')} ref={pushRefCreateRoom}>
                <PlayCustom create />
            </div>
        </>
    );
}

export default Home;
