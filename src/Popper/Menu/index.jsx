import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, datas }) {
    const renderMenuItem = () => {
        return datas.map((data, i) => {
            return <MenuItem key={i} menuItem={data}></MenuItem>;
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
