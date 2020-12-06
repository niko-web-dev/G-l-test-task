import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const AUTH_USER = "AUTH_USER";

const AuthStore = new Store("users", {

  options: {
    shouldInitFromState: true,
    stateKey: "users",
  },
  
  reducers: [
    {
      type: AUTH_USER,
      action(state, payload) {

        const isAuth = {...state, ...payload};
        return {
          ...state,
          ...isAuth
        }
      }
    },
  ],
});

Registry.addStore(AuthStore);

export { AuthStore };
