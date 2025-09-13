import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '@/assets/images';

function Image({ alt, src, className, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleErrorImg = () => {
        return setFallBack(images.avt);
    };
    return (
        <img
            className={className}
            ref={ref}
            alt={alt}
            src={fallBack || src}
            {...props}
            onError={handleErrorImg}
        />
    );
}

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
};

export default forwardRef(Image);
