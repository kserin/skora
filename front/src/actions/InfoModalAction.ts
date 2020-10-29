import AppDispatcher from "../stores/AppDispatcher";
import { Action } from "./Action";
import { Payload, StringPayload } from "./Payload";

export class InfoModalAction {
  public open(text: string) {
    const payload: StringPayload = {
      data: text,
      type: Action.OPEN_INFO_MODAL,
    };

    AppDispatcher.dispatch(payload);
  }

  public close() {
    const payload: Payload = {
      data: undefined,
      type: Action.CLOSE_INFO_MODAL,
    };

    AppDispatcher.dispatch(payload);
  }
}
