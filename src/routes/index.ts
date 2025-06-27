import { RouteDefinition } from '@solidjs/router';
import { homeRoutes } from '~/features/home/routes';

export const routes: RouteDefinition[] = [
  ...homeRoutes,
  // other feature routes here
];

