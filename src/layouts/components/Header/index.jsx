import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import router from '@/config/router';
import { Button } from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';
import Menu from '@/Popper/Menu';
import {
    UploadIcon,
    MessageIcon,
    InboxIcon,
    ProfileIcon,
    CoinIcon,
    SettingsIcon,
    HelpIcon,
    LanguageIcon,
    ShortcutsIcon,
    LogoutIcon,
} from '@/components/icons';
import Image from '@/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

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
                <Link to={router.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />
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
                                    <span className={cx('badge')}>11</span>
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
