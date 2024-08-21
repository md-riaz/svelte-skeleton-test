export const ssr = false;
export const csr = true;
export const prerender = false;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export function load() {
    console.log('parent layout load ran');
    
    return { a: 1 };
}