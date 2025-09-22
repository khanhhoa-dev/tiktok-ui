import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

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
    const [suggested, setSuggested] = useState([]);
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const [resultSuggested, resultFollow] = await Promise.all([
                    Account.AccountSuggested(),
                    Account.AccountFollowing(),
                ]);
                setSuggested(resultSuggested);
                setFollowing(resultFollow);
            } catch (error) {
                console.error('Error in getAccountSuggested:', error);
                throw error;
            }
            setLoading(true);
        };

        fetchApi();
    }, []);
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
            {loading && (
                <>
                    <SuggestedAccounts
                        lable="Suggested Accounts"
                        datas={suggested}
                    />
                    <SuggestedAccounts
                        lable="Following Accounts"
                        datas={following}
                    />
                </>
            )}
            <FooterSideBar />
        </aside>
    );
}

export default SideBar;
