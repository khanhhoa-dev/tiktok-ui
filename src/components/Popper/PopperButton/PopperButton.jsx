import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './PopperButton.module.scss';

const cx = classNames.bind(styles);

function PopperButton({
    lefticon,
    righticon,
    children,
    className,
    to,
    href,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        lefticon,
        righticon,
        children,
        ...passProps,
    };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={cx('wrapper', className)} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('content')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

export default PopperButton;
