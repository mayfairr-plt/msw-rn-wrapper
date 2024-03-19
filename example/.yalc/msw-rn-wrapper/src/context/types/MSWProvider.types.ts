import type { Flow } from '../../flows';

export type MSWContextValues = {
  flow: 'checkout';
  enableMSWInEnv: boolean;
  currentFlow?: Flow;
  active: boolean;
};

export type MSWProviderProps = {
  enableMSWInEnv: boolean;
};
