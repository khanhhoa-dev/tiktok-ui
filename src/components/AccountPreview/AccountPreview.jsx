import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './AccountPreview.module.scss';
import Image from '../Images';
import { Button } from '../Button';

const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.url_pic}
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
            <p className={cx('parameter')}>
                <span className={cx('value')}>{data.folow}</span>
                <span className={cx('lable')}>Followers</span>
                <span className={cx('value')}>{data.likes}</span>
                <span className={cx('lable')}>Likes</span>
            </p>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
