import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faCircleXmark,
    faMagnifyingGlass,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import { Button } from '@/component/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/Popper';
import AccountItem from '@/component/AccountItem';
import Menu from '@/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const listMenu = [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'English',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help ',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'KeyBoard Shortcuts',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Tippy
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Up load</Button>
                    <Button primary>Log in</Button>
                    <Menu datas={listMenu}>
                        <button className={cx('icon-dot')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
