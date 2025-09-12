import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Upload from '@/pages/Upload';
import Profile from '@/pages/Profile';

//Layout
import { HeaderOnly } from '@/layouts';

//Path
import config from '@/config';

//Public Router
const publicRoutes = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.upload, component: Upload, layout: HeaderOnly },
    { path: config.router.profile, component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
