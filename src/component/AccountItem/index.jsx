import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e01c1015b4e3f97cf6a6c1af4b493d8c~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=104ad0d3&x-expires=1757293200&x-signature=WJVejz11wzSu%2FYY7pFNvnO69LFA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
                alt="Jack"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>iamjack1997</span>
                    <FontAwesomeIcon
                        className={cx('iconcheck')}
                        icon={faCircleCheck}
                    />
                </p>
                <span className={cx('username')}>Jack - J97</span>
            </div>
        </div>
    );
}

export default AccountItem;
