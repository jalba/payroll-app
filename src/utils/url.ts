import { matchPath } from "react-router-dom";

import { Routes } from "routes";

export const matchToRoute = (path: string) => {
  for (const route of Object.values(Routes)) {
    const match = matchPath(route, path);
    if (match) {
      return route as Routes;
    }
  }
  return Routes.NotFound;
};
