export abstract class RestApi {

  protected async httpGet(url: string) {
    const headers = new Headers({
      Accept: "application/json",
    });

    return fetch(url, {
      headers,
      method: "GET",
    });
  }
}
