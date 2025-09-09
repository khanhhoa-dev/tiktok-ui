import { forwardRef, useState } from 'react';
import imgError from '@/assets/images';

function Image({ alt, src, className, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleErrorImg = () => {
        return setFallBack(imgError.imgError);
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

export default forwardRef(Image);
