import classNames from 'classnames/bind';

import { useFetchAccount } from '@/hooks';
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
import SuggestedAccounts from '@/components/SuggestedAccounts/SuggestedAccounts';
import FooterSideBar from './FooterSideBar/FooterSideBar';
import * as Account from '@/services/accountService';

const cx = classNames.bind(styles);
function SideBar() {
    const {
        datas: suggested,
        isFull: isFullSuggested,
        loading: loadingSuggested,
        handleToggleParams: handleToggleSuggested,
    } = useFetchAccount(Account.AccountSuggested);

    const {
        datas: following,
        isFull: isFullFollowing,
        loading: loadingFollowing,
        handleToggleParams: handleToggleFollowing,
    } = useFetchAccount(Account.AccountFollowing);
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

            <SuggestedAccounts
                lable="Suggested Accounts"
                datas={suggested}
                isFull={isFullSuggested}
                onToggle={handleToggleSuggested}
                loading={loadingSuggested}
            />
            <SuggestedAccounts
                lable="Following Accounts"
                datas={following}
                isFull={isFullFollowing}
                onToggle={handleToggleFollowing}
                loading={loadingFollowing}
            />
            <FooterSideBar />
        </aside>
    );
}

export default SideBar;
