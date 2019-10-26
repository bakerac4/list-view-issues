export default function and(params) {
    for (let i = 0, len = params.length; i < len; i++) {
        if (truthConvert(params[i]) === false) {
            return params[i];
        }
    }
    return params[params.length - 1];
}

export function truthConvert(result) {
    const truthy = result && result.isTruthy;
    if (typeof truthy === 'boolean') {
        return truthy;
    }

    if (Array.isArray(result)) {
        return result.length !== 0;
    } else {
        return !!result;
    }
}
