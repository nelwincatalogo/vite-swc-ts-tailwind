import { registerInDevtools, Store } from 'pullstate';

interface iGState {
  isDarkMode: boolean;
}

const initialState: iGState = {
  isDarkMode: true,
};

export const gState = new Store<iGState>(initialState);

registerInDevtools({
  gState,
});
