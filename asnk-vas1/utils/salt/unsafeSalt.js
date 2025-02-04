async function unsafeSalt() {
    return Math.random().toString().slice(2);
}

export default unsafeSalt;