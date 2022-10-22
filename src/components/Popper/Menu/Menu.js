import classNames from 'classnames/bind';
import MenuItem from './MenuItem';

import styles from './Menu.module.scss';
import Header from '~/components/Popper/Menu/Header';

const cx = classNames.bind(styles);

function Menu({
    height,
    title,
    to="",
    friend = false,
    board = false,
    message = false,
    notify = false,
    gift = false,
    setting = false,
}) {
    return (
        <>
            <Header title={title} to={to}/>
            <div className={cx('list-over')} style={{ height: height }}>
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                    setting={setting}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
                <MenuItem
                    friend={friend}
                    board={board}
                    message={message}
                    notify={notify}
                    gift={gift}
                />
            </div>
        </>
    );
}

export default Menu;
