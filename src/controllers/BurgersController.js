import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.destroyBurger)
    }

    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()

            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerById(request, response, next) {
        try {
            const burgerId = request.params.burgerId

            const burger = await burgersService.getBurgerById(burgerId)
            return response.send(burger)

        } catch (error) {
            next(error)
        }
    }


    async createBurger(request, response, next) {
        try {
            const burgerData = request.body

            const burger = await burgersService.createBurger(burgerData)

            response.send(burger)

        } catch (error) {
            next(error)
        }
    }

    async destroyBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            await burgersService.destroyBurger(burgerId)

            response.send('dang, you destroyed that nice lil burg there.')

        } catch (error) {
            next(error)
        }
    }

}