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

