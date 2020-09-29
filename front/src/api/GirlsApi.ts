import { GirlsActions } from "../actions/GirlsActions";
import { Error } from "../domain/Error";
import { RestApi } from "./RestApi";

class GirlsApi extends RestApi {
  public async list() {
    const result = await this.httpGet("/api/girls");
    const body = await result.json();

    if (result.ok) {
      new GirlsActions().loadGirlsList(body);
    } else {
      new GirlsActions().loadGirlsList([], (body as Error).errorMessage);
    }
  }
}
export default new GirlsApi();
