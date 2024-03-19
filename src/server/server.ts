// @ts-nocheck
import { type SetupWorkerApi } from 'msw';
import { generateKey, storage } from 'msw-rn-wrapper/src/utils/storage';
import { onUnhandledRequest } from 'msw/lib/core/utils/request/onUnhandledRequest';

import { setupServer } from 'msw/native';
import { DevSettings } from 'react-native';

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

export const startServer = async () => {
  await import('../msw.polyfills');
  serverListen();
};

export const stopServer = () => {
  Server.close();
  DevSettings.reload();
  storage.set(generateKey('enabled'), false);
  console.warn('[MSW]: Disabled | No longer intercepting requests');
};
