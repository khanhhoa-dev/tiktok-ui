import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/Button';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('suggest-title')}>{lable}</p>
            <AccountItem lable={lable} />
            <AccountItem lable={lable} />
            <AccountItem lable={lable} />
            <Button
                leftIcon={
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faAngleDown}
                    />
                }
                className={cx('more')}
            >
                <span className={cx('more-btn')}>See All</span>
            </Button>
        </div>
    );
}

SuggestedAccounts.propsTypes = {
    lable: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
