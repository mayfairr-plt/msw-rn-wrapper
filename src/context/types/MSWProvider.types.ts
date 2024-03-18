import type { Flow } from '../../flows';

export type MSWContextValues = {
  flow: 'checkout';
  enabled: boolean;
  currentFlow?: Flow;
};

export type MSWProviderProps = {
  enabled: boolean;
};
