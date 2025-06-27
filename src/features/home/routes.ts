import { lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

const Home = lazy(() => import('./components/Home'));

export const homeRoutes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
];
