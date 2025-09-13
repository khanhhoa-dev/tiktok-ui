import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
    menuItem: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
