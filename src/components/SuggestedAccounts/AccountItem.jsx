import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=55fb3a0b&x-expires=1758416400&x-signature=%2B7oLPkRzng%2BYQ86SrZig%2FxECCVc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="avatar"
            />
            <div className={cx('information-user')}>
                <h4 className={cx('name')}>
                    Son Tung MTP
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('nickname')}>capyboiii_7</p>
            </div>
        </div>
    );
}

export default AccountItem;
