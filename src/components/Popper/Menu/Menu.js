import classNames from 'classnames/bind';
import MenuItem from './MenuItem';

import styles from './Menu.module.scss';
import Header from '~/components/Popper/Menu/Header';
import { useRef } from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Menu({
    height,
    title,
    to = '',
    friend = false,
    board = false,
    message = false,
    notify = false,
    gift = false,
    setting = false,
}) {
    const refMessageBox = useRef();
    const refInput = useRef();

    const handleOnClickOpen = () => {
        refMessageBox.current.classList.add(cx('open'));
        refInput.current.focus()
    };
    const handleOnClickClose = () => {
        refMessageBox.current.classList.remove(cx('open'));
    };

    const refScrollToBot = useRef();

    const scrollToBottom = () => {
        refScrollToBot.current.scrollTop = refScrollToBot.current.scrollHeight;
    };

    return (
        <div style={{ position: 'relative' }}>
            <Header title={title} to={to} />
            <div className={cx('list-over')} style={{ height: height }}>
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    setting={setting}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    onClick={handleOnClickOpen}
                />
            </div>
            {message && (
                <div className={cx('message-box')} ref={refMessageBox}>
                    <div className={cx('title')}>
                        <span className={cx('name-chat')}>Yukiin</span>
                        <Button className={cx('close')} onClick={handleOnClickClose}>
                            X
                        </Button>
                    </div>
                    <ul className={cx('chat-list')} ref={refScrollToBot} >
                        <li className={cx('me')}>Ek chơi game không Ek chơi game không</li>
                        <li className={cx('friend')}>Đjt mm zô</li>
                        <li className={cx('me')}>Ek chơi game không</li>
                        <li className={cx('friend')}>Đjt mm zô</li>
                        <li className={cx('me')}>Ek chơi game không</li>
                        <li className={cx('friend')}>Đjt mm zô</li>
                        <li className={cx('me')}>Ek chơi game không</li>
                        <li className={cx('friend')}>Đjt mm zô</li>
                    </ul>
                    <input className={cx('input')} type="text" ref={refInput} onFocus={scrollToBottom}/>
                </div>
            )}
        </div>
    );
}

export default Menu;
