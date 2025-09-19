import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountPreview from '@/components/AccountPreview';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ lable }) {
    const isSuggested = lable === 'Suggested Accounts';

    const renderPreview = props => {
        return (
            <div {...props} tabIndex="-1" className={cx('preview')}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    const content = (
        <div className={cx('account-item')}>
            <Image
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

    return isSuggested ? (
        <Tippy
            // visible
            interactive
            offset={[-8, 0]}
            delay={[800, 0]}
            placement="bottom-start"
            render={renderPreview}
            appendTo={document.body}
        >
            {content}
        </Tippy>
    ) : (
        content
    );
}

AccountItem.propsTypes = {
    lable: PropTypes.string.isRequired,
};

export default AccountItem;
