/**
 * @typedef {Object} User
 * @property {string|null} auth_token
 * @property {Services} services
 * @property {Settings} settings
 * @property {Policies} policies
 * @property {Info} info
 */

/**
 * @typedef {Object} Services
 * // Add more services as needed
 */

/**
 * @typedef {Object} Settings
 * // Add more settings as needed
 */

/**
 * @typedef {Object} Policies
 * // Add more policies as needed
 */

/**
 * @typedef {Object} Info
 * @property {string} [name]
 * @property {string} [email]
 * // Add more info fields as needed
 */

/** @type {User} */
export const user = $state({
    auth_token: null,
    services: {},
    settings: {},
    policies: {},
    info: {
        name: '',
        email: '',
    },
});
