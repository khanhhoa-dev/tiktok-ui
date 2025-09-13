import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '@/services/searchService';
import { SearchIcon } from '@/components/icons';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '@/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [resultDisplay, setResultDisplay] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(inputValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            try {
                const result = await searchService.search(debounceValue);
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [debounceValue]);

    //Handle
    const handleClearValue = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleFocusInput = () => {
        if (inputValue) {
            setResultDisplay(true);
        }
    };

    return (
        <HeadLessTippy
            interactive
            appendTo={document.body}
            popperOptions={{
                strategy: 'fixed', //giữ vị trí theo viewport thay vì theo body
            }}
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
                        //Chặn thao tác nhấp dấu cách ở input khi bắt đầu nhập
                        setInputValue(e.target.value.trimStart());
                    }}
                    onFocus={handleFocusInput}
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

                <button
                    className={cx('search-btn')}
                    //Ngăn hành vi mặc định
                    onMouseDown={e => e.preventDefault()}
                >
                    <SearchIcon />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
