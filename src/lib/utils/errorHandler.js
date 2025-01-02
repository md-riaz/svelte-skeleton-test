/**
 * @param {any} msg
 * @param {any} toastContext
 */
export function triggerError(msg, toastContext) {
    toastContext.create({ title: 'Error', description: msg, type: 'error' });
}
