import PullPersistor from 'pull-persist';
import { registerInDevtools, Store } from 'pullstate';

interface iGState {
  isDarkMode: boolean;
  counter: number;
}

const intialState: iGState = {
  isDarkMode: true,
  counter: 0,
};

export const gStatePersist = new Store<iGState>(intialState);

// Initialize PullPersistor with the store, a key, and storage type
const persistor = new PullPersistor<iGState>(gStatePersist, 'gStatePersist', 'LOCAL'); // LOCAL | SESSION

// Initialize the persistor to load state from storage and synchronize changes
persistor.initialize((restoredState) => {
  if (restoredState) {
    console.log('State restored:', restoredState);
    gStatePersist.update(() => ({
      ...intialState,
      ...restoredState,
    }));
  } else {
    console.log('No state found in storage');
  }
});

registerInDevtools({
  gStatePersist,
});
