import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/Button';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ lable, datas, onToggle, isFull, loading }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('suggest-title')}>{lable}</p>
            {datas.map(data => {
                return <AccountItem key={data.id} data={data} lable={lable} />;
            })}
            <Button
                leftIcon={
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={isFull && !loading ? faAngleUp : faAngleDown}
                    />
                }
                className={cx('more')}
                onClick={onToggle}
            >
                <span className={cx('more-btn')}>
                    {loading ? 'Loading...' : isFull ? 'Collapse' : 'See All'}
                </span>
            </Button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    datas: PropTypes.array.isRequired,
    onToggle: PropTypes.func,
    isFull: PropTypes.bool,
    loading: PropTypes.bool,
};
export default SuggestedAccounts;
