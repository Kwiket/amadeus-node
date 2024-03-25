/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/upselling` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.upselling;
 * ```
 *
 * @param {Client} client
 */
class Upselling {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.flightOffers.upselling.post(body);
   * ```
   */
  post(params = {}, headers = {}) {
    return this.client.post('/v1/shopping/flight-offers/upselling', params, headers);
  }
}

export default Upselling;
