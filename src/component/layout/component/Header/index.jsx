import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faCircleXmark,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadLessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import { Button } from '@/component/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/Popper';
import AccountItem from '@/component/AccountItem';
import Menu from '@/Popper/Menu';
import {
    UploadIcon,
    MessageIcon,
    InboxIcon,
    SearchIcon,
    ProfileIcon,
    CoinIcon,
    SettingsIcon,
    HelpIcon,
    LanguageIcon,
    ShortcutsIcon,
    LogoutIcon,
} from '@/component/icons';
import Image from '@/component/Images';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //Handle
    const handleLangugesMenu = item => {
        console.log(item);
    };

    const MENU_ITEMS = [
        {
            icon: <LanguageIcon />,
            title: 'English',
            children: {
                title: 'Languages',
                data: [
                    {
                        type: 'languages',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'languages',
                        code: 'vi',
                        title: 'Việt Nam',
                    },
                    {
                        type: 'languages',
                        code: 'no',
                        title: 'Norsk',
                    },
                    {
                        type: 'languages',
                        code: 'se',
                        title: 'Svenska',
                    },
                    {
                        type: 'languages',
                        code: 'dk',
                        title: 'Dansk',
                    },
                ],
            },
        },
        {
            icon: <HelpIcon />,
            title: 'Feedback and help ',
            to: '/feedback',
        },
        {
            icon: <ShortcutsIcon />,
            title: 'KeyBoard Shortcuts',
        },
    ];

    const USER_MENU = [
        {
            icon: <ProfileIcon />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coin',
            to: '/coins',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log Out',
            underline: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <HeadLessTippy
                    interactive
                    appendTo={document.body}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search account and videos"
                            className={cx('input')}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx('loading')}
                        />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadLessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content={<span>Upload Video</span>}>
                                <button className={cx('btn-icon')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content={<span>Message</span>}>
                                <button className={cx('btn-icon')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content={<span>Inbox</span>}>
                                <button className={cx('btn-icon')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Up load</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEMS}
                        onClick={handleLangugesMenu}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-img')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/25af0fb59badda405833b44211b692b1~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=96ca26b9&x-expires=1757512800&x-signature=0G6a6pjJDqgVwudMHlINcxjt%2FgQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                                alt="Image-User"
                            />
                        ) : (
                            <button className={cx('icon-dot')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
