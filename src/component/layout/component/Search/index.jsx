import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '@/apiServices/searchServices';
import { SearchIcon } from '@/component/icons';
import { Wrapper as PopperWrapper } from '@/Popper';
import AccountItem from '@/component/AccountItem';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import { useDebounce } from '@/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [resultDisplay, setResultDisplay] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(inputValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            try {
                const result = await searchServices.search(debounce);
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [debounce]);

    //Handle
    const handleClearValue = () => {
        setInputValue('');
        setResultDisplay(false);
        inputRef.current.focus();
    };

    const handleForcusInput = () => {
        if (inputValue) {
            setResultDisplay(true);
        }
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
                        {searchResult.map(result => {
                            return (
                                <AccountItem key={result.id} data={result} />
                            );
                        })}
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
                        e.target.value = e.target.value.trimStart(); //Chặn thao tác nhấp dấu cách ở input khi bắt đầu nhập
                        setInputValue(e.target.value);
                        // setResultDisplay(true);
                    }}
                    onFocus={handleForcusInput}
                />
                {inputValue && loading ? (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                ) : (
                    <button className={cx('clear')} onClick={handleClearValue}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
