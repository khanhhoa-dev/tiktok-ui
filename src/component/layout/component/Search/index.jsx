import { useEffect, useState, useRef } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SearchIcon } from '@/component/icons';
import { Wrapper as PopperWrapper } from '@/Popper';
import AccountItem from '@/component/AccountItem';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [resultDisplay, setResultDisplay] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    //Handle
    const handleClearValue = () => {
        setInputValue('');
        setResultDisplay(false);
        inputRef.current.focus();
    };

    const handleForcusInput = () => {
        setResultDisplay(true);
    };

    return (
        <HeadLessTippy
            interactive
            appendTo={document.body}
            visible={resultDisplay && searchResult.length > 0}
            onClickOutside={() => setResultDisplay(false)}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
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
                    ref={inputRef}
                    value={inputValue}
                    placeholder="Search account and videos"
                    className={cx('input')}
                    onChange={e => {
                        setInputValue(e.target.value);
                        setResultDisplay(true);
                    }}
                    onFocus={handleForcusInput}
                />
                {inputValue && (
                    <button className={cx('clear')} onClick={handleClearValue}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
