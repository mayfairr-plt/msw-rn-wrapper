import type { Flow } from '../../flows';
import type { FactoryAPI, ModelDictionary } from '@mswjs/data/lib/glossary';

export type MSWContextValues = {
  enableMSWInEnv: boolean;
  active: boolean;
  flows: Array<Flow>;
  database?: FactoryAPI<ModelDictionary>;
};

export type MSWProviderProps = {
  enableMSWInEnv: boolean;
  flows: Array<Flow>;
  database?: FactoryAPI<ModelDictionary>;
};
