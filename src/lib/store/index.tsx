import { extend, hookstate, useHookstate } from '@hookstate/core';
import { devtools } from '@hookstate/devtools';
import { subscribable } from '@hookstate/subscribable';

interface GlobalStateType {
  counter: number;
}

export const globalState = hookstate(
  {
    counter: 0,
  } as GlobalStateType,
  extend(devtools({ key: 'gState' }), subscribable()),
);

export const useGlobalState = () => useHookstate(globalState);
