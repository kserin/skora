import { Girl } from "../domain/Girl";
import AppDispatcher from "../stores/AppDispatcher";
import { Action } from "./Action";
import { GirlsPayload, Payload } from "./Payload";

export class GirlsActions {
  public openListPage() {
    const payload: Payload = {
      data: null,
      type: Action.OPEN_GIRLS_LIST_PAGE,
    };
    AppDispatcher.dispatch(payload);
  }

  public loadGirlsList(girls: Girl[], error?: string) {
    const payload: GirlsPayload = {
      data: {
        content: girls,
        error,
      },
      type: Action.LOAD_GIRLS_LIST,
    };
    AppDispatcher.dispatch(payload);
  }
}
