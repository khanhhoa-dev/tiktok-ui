import classNames from 'classnames/bind';
import styles from './FooterSideBar.module.scss';

const cx = classNames.bind(styles);
function FooterSideBar() {
    return (
        <div className={cx('footer')}>
            <h4 className={cx('title')}>Công ty</h4>
            <h4 className={cx('title')}>Chương trình</h4>
            <h4 className={cx('title')}>Điều khoản và chính sách</h4>
            <span className={cx('copyright')}>© 2025 TikTok</span>
        </div>
    );
}

export default FooterSideBar;
