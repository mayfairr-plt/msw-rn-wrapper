import type { Flow } from '../../flows';

export type MSWContextValues = {
  enableMSWInEnv: boolean;
  active: boolean;
  flows: Array<Flow>;
};

export type MSWProviderProps = {
  enableMSWInEnv: boolean;
  flows: Array<Flow>;
};
