export async function cryptoSalt(length) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// example: cryptoSalt(16) -> "a602a1912763961228792f10cdfa6444"