import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Video.module.scss';
import { VolumeIconOn, VolumeIconOff, MusicIcon } from '@/components/Icons';
import PopperVideo from './PopperVideo/PopperVideo';

const cx = classNames.bind(styles);
function Video() {
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    const handleToggleVolume = () => {
        setIsMuted(!isMuted);
    };
    const handleChange = e => {
        setProgress(e.target.value);
    };

    const progressColor = `linear-gradient(to right, rgb(239, 31, 80) ${progress}%, rgba(255,255,255,0.3) ${progress}%)`;
    return (
        <div className={cx('wrapper')}>
            <video
                src="public/videos/video2.mp4"
                className={cx('video')}
            ></video>
            <div className={cx('card-header')}>
                <button className={cx('icon')} onClick={handleToggleVolume}>
                    {isMuted ? <VolumeIconOff /> : <VolumeIconOn />}
                </button>
                <PopperVideo />
            </div>
            <div className={cx('card-bottom')}>
                <Link to="/profile/:nickname" className={cx('author')}>
                    capyboiii_7
                </Link>
                <div className={cx('description')}>
                    <span className={cx('title')}>
                        Flop quá thì ghi tên anh vào
                    </span>
                </div>
                <div className={cx('music')}>
                    <Link to="/music" className={cx('music-link')}>
                        <span className={cx('music-icon')}>
                            <MusicIcon />
                        </span>
                        <span className={cx('music-title')}>
                            Nhạc nền - capyboiii_7
                        </span>
                    </Link>
                </div>
            </div>
            <div className={cx('input')}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleChange}
                    className={cx('input-range')}
                    style={{ background: progressColor }}
                />
            </div>
        </div>
    );
}

export default Video;
