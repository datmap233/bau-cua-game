import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, to="/" }) {
    return (
        <Button className={cx('header-element')} to={to}>
            <p>{title}</p>
        </Button>
    );
}

export default Header;
