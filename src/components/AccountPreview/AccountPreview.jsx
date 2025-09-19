import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '../Images';
import { Button } from '../Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=55fb3a0b&x-expires=1758416400&x-signature=%2B7oLPkRzng%2BYQ86SrZig%2FxECCVc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt="AvatarAccountPreview"
                />
                <div>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('name-account')}>
                <h4 className={cx('name')}>
                    Son Tung MTP
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('nickname')}>capyboiii_7</p>
            </div>
            <p className={cx('parameter')}>
                <span className={cx('value')}>6.5M</span>
                <span className={cx('lable')}>Followers</span>
                <span className={cx('value')}>68.6M</span>
                <span className={cx('lable')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
