// @ts-nocheck
import { type SetupWorkerApi } from 'msw';
import { onUnhandledRequest } from 'msw/lib/core/utils/request/onUnhandledRequest';

import { setupServer } from 'msw/native';
export const Server: SetupWorkerApi = setupServer(...[]);

export const serverListen = () => {
  const server = Server as ReturnType<setupServer>;
  server.listen({
    onUnhandledRequest(request, print): onUnhandledRequest {
      // Do not print warnings on unhandled requests to localhost.
      if (request.url.hostname.includes('localhost')) {
        return;
      }

      // Print the regular MSW unhandled request warning otherwise.
      print.warning();
    },
  });
};
