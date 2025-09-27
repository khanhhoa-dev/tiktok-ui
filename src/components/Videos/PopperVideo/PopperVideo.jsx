import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './PopperVideo.module.scss';
import {
    DotsIcon,
    CapTionIcon,
    ReportIcon,
    PlayerIcon,
    NotInterestedIcon,
    RollIcon,
} from '@/components/Icons';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import PopperButton from '@/components/Popper/PopperButton/PopperButton';

const cx = classNames.bind(styles);
function PopperVideo() {
    const MENU_ITEMS = [
        {
            icon: <CapTionIcon />,
            title: 'Phụ đề',
        },
        {
            icon: <RollIcon />,
            title: 'Cuộn tự động',
        },
        {
            icon: <NotInterestedIcon />,
            title: 'Không quan tâm',
        },
        {
            icon: <PlayerIcon />,
            title: 'Trình phát nổi',
        },
        {
            icon: <ReportIcon />,
            title: 'Báo cáo',
        },
    ];
    const renderItems = attrs => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {MENU_ITEMS.map((item, index) => (
                    <PopperButton key={index} lefticon={item.icon}>
                        {item.title}
                    </PopperButton>
                ))}
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            // visible
            trigger="click"
            interactive
            placement="bottom"
            offset={[12, -4]}
            render={renderItems}
        >
            <button className={cx('icon')}>
                <DotsIcon />
            </button>
        </Tippy>
    );
}

export default PopperVideo;
