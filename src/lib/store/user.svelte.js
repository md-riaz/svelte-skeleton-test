import { db } from "$lib/db";

class User {
    /** @type {string|null} */
    auth_token = $state((null));
    services = $state({});
    settings = $state({});
    policies = $state({});
    info = $state({
        name: '',
        email: '',
    });

    constructor() {
        
    }
    
    async init() { 
        // get data from db
        this.auth_token = await db.user.get('auth_token');
        this.services = JSON.parse(await db.user.get('services') || '{}');
        this.settings = JSON.parse(await db.user.get('settings') || '{}');
        this.policies = JSON.parse(await db.userpolicies.get('policies') || '{}');
        this.info = JSON.parse(await db.user.get('info') || '{}');
    }

    /**
     * @param {string|null} token
     */
    async setAuthToken(token) {
        this.auth_token = token;

        await db.user.put(token, 'auth_token');
    }

    /**
     * @param {{}} services
     */
    async setServices(services) {
        this.services = services;

        await db.user.put(JSON.stringify(services), 'services');
    }

    /**
     * @param {{}} settings
     */
    async setSettings(settings) {
        this.settings = settings;

        await db.user.put(JSON.stringify(settings), 'settings');
    }

    /**
     * @param {{}} policies
     */
    async setPolicies(policies) {
        this.policies = policies;

        await db.userpolicies.put(JSON.stringify(policies), 'policies');
    }

    
    /**
     * @param {{ name: string; email: string; notification?: any; owner_id?: number; owner_type?: string; phone?: string; }} info
     */
    async setInfo(info) {
        this.info = info;

        await db.user.put(JSON.stringify(info), 'info');
    }
}

export const user = new User();