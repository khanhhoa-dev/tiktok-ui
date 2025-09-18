import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, iconActive }) {
    return (
        <NavLink
            className={nav =>
                cx('wrapper', {
                    active: nav.isActive,
                })
            }
            to={to}
        >
            {({ isActive }) => (
                <>
                    {isActive ? iconActive : icon}
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propsTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
};

export default MenuItem;
