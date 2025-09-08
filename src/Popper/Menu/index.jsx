import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onClick = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const handleBack = () => {
        return setHistory(prev => {
            return prev.slice(0, prev.length - 1);
        });
    };

    const renderMenuItem = () => {
        return current.data.map((item, i) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={i}
                    menuItem={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children]);
                        } else {
                            onClick(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <Tippy
            interactive
            placement="top-start"
            delay={[0, 700]}
            // visible
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header title="Languages" onBack={handleBack} />
                        )}
                        {renderMenuItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
