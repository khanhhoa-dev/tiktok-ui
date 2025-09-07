import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '@/component/Button/Button';

const cx = classNames.bind(styles);
function MenuItem({ menuItem }) {
    return (
        <Button
            leftIcon={menuItem.icon}
            className={cx('menu-item')}
            to={menuItem.to}
        >
            {menuItem.title}
        </Button>
    );
}

export default MenuItem;
