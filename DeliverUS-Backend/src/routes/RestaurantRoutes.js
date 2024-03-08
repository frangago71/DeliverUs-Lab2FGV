import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants') // the endpoint path
    .get( // the http verb that we want to be available at the previous path
      RestaurantController.index) // the function that will attend requests for that http verb and that path
  app.route('/restaurants/:id').get(RestaurantController.show)
  // app.route('/restaurants/:id').get(RestaurantController.create).get(RestaurantController.show)
  // .get(RestaurantController.update).get(RestaurantController.destroy)
}
export default loadFileRoutes
