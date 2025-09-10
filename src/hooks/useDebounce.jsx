import { useState, useEffect } from 'react';

function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const clearTimout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(clearTimout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default Debounce;
