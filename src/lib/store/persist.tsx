import { extend, hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';
import { localstored } from '@hookstate/localstored';
import { subscribable } from '@hookstate/subscribable';

interface GlobalStateType {
  test: string;
}

export const globalState = hookstate(
  {
    test: '',
  } as GlobalStateType,
  extend(devtools({ key: 'gStatePersist' }), subscribable(), localstored({ key: 'gStatePersist' })),
);

export const useGlobalState = () => useHookstate(globalState);
