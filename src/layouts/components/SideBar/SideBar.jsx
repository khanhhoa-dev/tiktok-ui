import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '@/config';
import {
    HomeIcon,
    HomeActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    DiscoverIcon,
    DiscoverActiveIcon,
} from '@/components/icons/Icons';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.router.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.router.following}
                    icon={<FollowingIcon />}
                    iconActive={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Discover"
                    to={config.router.discover}
                    icon={<DiscoverIcon />}
                    iconActive={<DiscoverActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default SideBar;
