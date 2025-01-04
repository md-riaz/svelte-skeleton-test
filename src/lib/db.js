// Import Dexie
import Dexie from 'dexie';
import { variables } from './utils/constants';

// Define the database
class ProjectDB extends Dexie {
    constructor() {
        super(variables.APP_NAME.replace(/\s+/g, '_'));
        this.version(1).stores({
            // Define user table with the specified fields as keys
            user: '',
            userpolicies: '' // Add userpolicies table
        });

        this.user = this.table('user'); // Initialize the user table
        this.userpolicies = this.table('userpolicies'); // Initialize the userpolicies table
    }
}

// Initialize the database
export const db = new ProjectDB();

/**
 * Save user data to the user table in Dexie
 * @returns {Promise<void>}
 * @param {{ user: { id: any; name: any; email: any; notification: any; owner_id: any; owner_type: any; phone: any; services: any; settings: any; }; token: any; country_codes: any; policies: any; }} userData
 */

export async function saveUserData(userData) {

    await db.user.put(userData.token, 'auth_token');
    await db.user.put(JSON.stringify(userData.country_codes), 'country_codes');
    await db.user.put(JSON.stringify(userData.user.services), 'services');
    await db.user.put(JSON.stringify(userData.user.settings), 'settings');
    await db.user.put(JSON.stringify({
        name: userData.user.name,
        email: userData.user.email,
        notification: userData.user.notification,
        owner_id: userData.user.owner_id,
        owner_type: userData.user.owner_type,
        phone: userData.user.phone
    }), 'info');

    await db.userpolicies.put(JSON.stringify(userData.policies), 'policies'); // Save policies to userpolicies table
}
