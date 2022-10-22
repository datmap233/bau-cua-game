import config from '~/config/';

//Layout

import Home from '~/pages/Home';
import Room from '~/layouts/components/Layout/Room';
import Notify from '~/layouts/components/Layout/Notify';
import Gift from '~/layouts/components/Layout/Gift';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.room, components: Room },
    { path: config.routes.notify, components: Notify },
    { path: config.routes.gift, components: Gift },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
