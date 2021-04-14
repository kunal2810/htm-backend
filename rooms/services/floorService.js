const Floors = require('../schemas/floors');

const FloorService = {
    /**
   * Save a new customer
   */
    async saveFloor(body) {
        const floor = new Floors(body);
        return floor.save();
    },
}

module.exports = FloorService;