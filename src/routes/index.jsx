import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Upload from '@/pages/Upload';
import Profile from '@/pages/Profile';

//Layout
import { HeaderOnly } from '../component/layout';

//Path
import router from '@/config/router';

//Public Router
const publicRoutes = [
    { path: router.home, component: Home },
    { path: router.following, component: Following },
    { path: router.upload, component: Upload, layout: HeaderOnly },
    { path: router.profile, component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
