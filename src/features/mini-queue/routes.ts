import { lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

const List = lazy(() => import('./components/list/List'));

export const miniQueueRoutes: RouteDefinition[] = [
  {
    path: '/mini-queue',
    component: List,
  },
];
