import { user } from '$lib/store/user.svelte';
import { variables } from './constants';

/**
 * @param {{ email: string; password: string; }} formData
 */
/**
 * Signs in a user with the provided email and password.
 *
 * @param {{ email: string; password: string; }} formData - The user's email and password.
 * @returns {Promise<{ error: number; msg: string; data: any; token: string; }>} - A promise that resolves to the JSON response from the API, including the auth_token.
 */
export async function signIn(formData) {
    return request('/user/login', 'POST', formData);
}

/**
 * Fetches the user's policies from the API.
 *
 * @returns {Promise<{ error: number; msg: string; data: Object; }>} - A promise that resolves to the JSON response from the API,
 * containing the user's policies.
 */
export async function fetchUserPolicies() {

    return request('/user/policies', 'GET');
}

/**
 * Fetches the dashboard data from the API.
 *
 * @returns {Promise<{ error: number; msg: string; data: Object; }>} - A promise that resolves to the JSON response from the API,
 * containing the dashboard data.
 *
 * @throws {Error} - Throws an error if the response is not ok.
 */
export async function fetchDashboardData() {
    return request('/dashboard', 'GET');
}



/**
 * Makes an HTTP request to the specified endpoint with the given options and optional authentication token.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {string} method - The HTTP method to use for the request (GET, POST, etc.).
 * @param {Object} [data={}] - The data to send with the request.
 * @param {Object.<string, string>} [headers={}] - The headers to send with the request.
 * @throws {Error} - Throws an error if the response is not ok.
 */
async function request(endpoint, method = 'GET', data = {}, headers = {}) {
    const url = new URL(`${variables.BASE_API_URI}${endpoint}`);
    url.searchParams.append('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);

    /** @type {Object.<string, string>} */
    const defaultHeaders = { 'Content-Type': 'application/json' };

    if (user.auth_token) {
        headers['Authorization'] = `Bearer ${user.auth_token}`;
    }

    headers = { ...defaultHeaders, ...headers };

    /** @type {{ method: string; headers: { [x: string]: string }; body?: string }} */
    const options = {
        method,
        headers,
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url.toString(), options);

    if (!response.ok) {
        const { msg } = await response.json();
        throw new Error(msg || 'Request failed');
    }

    const jsonResponse = await response.json();

    console.log(
        `API request to ${url.toString()} with method ${method} returned:`,
        jsonResponse
    );
    

    if (jsonResponse.error == 0) {
        return jsonResponse;
    } else if (jsonResponse.error == 405) {
        // Unauthorized
        // user.setAuthToken(null);
        // goto('/auth/login');
    } else {
        throw new Error(jsonResponse.msg);
    }

    return {};
}

