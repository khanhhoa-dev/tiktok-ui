import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import { HeaderOnly } from '../component/layout';

//Public Router
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
