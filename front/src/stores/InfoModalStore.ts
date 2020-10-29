import { ReduceStore } from "flux/utils";
import { Action } from "../actions/Action";
import { Payload, StringPayload } from "../actions/Payload";
import AppDispatcher from "./AppDispatcher";

interface InfoModalStoreData {
  opened: boolean;
  text: string;
}

class InfoModalStore extends ReduceStore<InfoModalStoreData, Payload> {

  public getInitialState(): InfoModalStoreData {
    return {
      opened: false,
      text: "",
    };
  }

  public reduce(state: InfoModalStoreData, action: Payload): InfoModalStoreData {
    switch (action.type) {
      case Action.OPEN_INFO_MODAL: {
        const data = (action as StringPayload).data;
        return {
          opened: true,
          text: data,
        };
      }

      case Action.CLOSE_INFO_MODAL: {
        return {
          opened: false,
          text: "",
        };
      }
    }
    return state;
  }
}

export default new InfoModalStore(AppDispatcher);
