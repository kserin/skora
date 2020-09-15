import { ReduceStore } from "flux/utils";
import { Action } from "../actions/Action";
import { GirlsPayload, Payload } from "../actions/Payload";
import { Girl } from "../domain/Girl";
import { copy } from "../utils/ObjectUtils";
import AppDispatcher from "./AppDispatcher";

interface GirlsListStoreData {
  girls: Girl[];
  loading: boolean;
  error?: string;
}

class GirlsListStore extends ReduceStore<GirlsListStoreData, Payload> {

  public getInitialState(): GirlsListStoreData {
    return {
      girls: [],
      loading: false,
    };
  }

  public reduce(state: GirlsListStoreData, action: Payload): GirlsListStoreData {
    switch (action.type) {
      case Action.OPEN_GIRLS_LIST_PAGE: {
        return {
          girls: [],
          loading: true,
        };
      }
      case Action.LOAD_GIRLS_LIST: {
        const data = (action as GirlsPayload).data;
        return {
          error: data.error,
          girls: copy(data.content),
          loading: false,
        };
      }
    }

    return state;
  }
}

export default new GirlsListStore(AppDispatcher);
