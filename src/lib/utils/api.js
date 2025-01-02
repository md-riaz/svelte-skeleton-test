import { variables } from './constants';

/**
 * @param {{ email: string; password: string; }} formData
 */
export async function signIn(formData) {
    const response = await fetch(`${variables.BASE_API_URI}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const { msg } = await response.json();
        throw new Error(msg || 'Sign-in failed');
    }

    return response.json();
}
