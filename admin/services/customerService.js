/* eslint-disable prefer-template */
const Customers = require('../schemas/customers');

const CustomerService = {
  /**
   * Get all customers
   */
  async getAll() {
    return Customers.find().collation({ locale: 'en' }).sort('name');
  },
  /**
   * Save a new customer
   */
  async saveCustomer(body) {
    const customer = new Customers(body);
    return customer.save();
  },
  /**
   * Update a customer
   */
  async updateCustomer({ _id, name }) {
    const customer = await Customers.findById(_id);

    if (customer) {
      customer.name = name;
      return customer.save();
    }
    return {};
  },
  /**
   * Get a customer by id
   */
  async getById(id) {
    return Customers.findById(id);
  },
  /**
   * Add parking lot to a customer
   * @param {string} customerId
   * @param {string} parkingLotId
   */
  async addParkingLot(customerId, parkingLotId) {
    const customer = await Customers.findById(customerId);
    if (!customer.parkingLots.some((id) => id.toString() === parkingLotId)) {
      customer.parkingLots.push(parkingLotId);
      return customer.save();
    }
    return customer;
  },
  /**
   * Add a user
   */
  async addUser(customer, user) {
    const customerDB = await Customers.findById(customer._id);
    if (!customerDB.users) {
      customerDB.users = [];
    }
    if (!customerDB.users.some((userDB) => userDB.email === user.email)) {
      customerDB.users.push(user);
      return customerDB.save();
    }
    return customerDB;
  },
  /**
   * Delete s user
   */
  async deleteUser(customer, user) {
    const customerDB = await Customers.findById(customer._id);
    if (!customerDB.users) {
      customerDB.users = [];
    }
    customerDB.users = customerDB.users.filter(
      (userDB) => userDB.email !== user.email,
    );
    return customerDB.save();
  },
};

module.exports = CustomerService;
