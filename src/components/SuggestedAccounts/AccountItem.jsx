import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountPreview from '@/components/AccountPreview';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ lable, data }) {
    const isSuggested = lable === 'Suggested Accounts';

    const renderPreview = props => {
        return (
            <div {...props} tabIndex="-1" className={cx('preview')}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    const content = (
        <Link to={`/profile/${data.nickname}`} className={cx('account-item')}>
            <Image className={cx('avatar')} src={data.url_pic} alt="avatar" />
            <div className={cx('information-user')}>
                <h4 className={cx('name')}>
                    {data.name}
                    {data.check && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <p className={cx('nickname')}>{data.nickname}</p>
            </div>
        </Link>
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

AccountItem.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};

export default AccountItem;
