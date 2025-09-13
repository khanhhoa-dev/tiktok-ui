import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '@/assets/images';

const Image = forwardRef((props, ref) => {
    const { alt, src, className, ...rest } = props;
    const [fallBack, setFallBack] = useState('');

    const handleErrorImg = () => {
        setFallBack(images.avt);
    };

    return (
        <img
            className={className}
            ref={ref}
            alt={alt}
            src={fallBack || src}
            {...rest}
            onError={handleErrorImg}
        />
    );
});

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
