import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '@/components/Button/Button';

const cx = classNames.bind(styles);
function MenuItem({ menuItem, onClick }) {
    const classnames = cx('menu-item', {
        underline: menuItem.underline,
    });
    return (
        <Button
            className={classnames}
            leftIcon={menuItem.icon}
            to={menuItem.to}
            onClick={onClick}
        >
            {menuItem.title}
        </Button>
    );
}

export default MenuItem;
