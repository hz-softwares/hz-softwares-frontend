import { RouteDefinition } from '@solidjs/router';
import { homeRoutes } from '~/features/home/routes';
import { miniQueueRoutes } from '~/features/mini-queue/routes';

export const routes: RouteDefinition[] = [
  ...homeRoutes,
  ...miniQueueRoutes
  // other feature routes here
];

