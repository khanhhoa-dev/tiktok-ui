import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    text = false,
    leftIcon = false,
    rightIcon = false,
    rounded = false,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    let classNames = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        disabled,
        rounded,
        text,
        [className]: className,
    });
    return (
        <Comp className={classNames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
