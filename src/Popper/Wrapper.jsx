import classNames from 'classnames/bind';
import styles from './Wapper.module.scss';

const cx = classNames.bind(styles);
function wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default wrapper;
