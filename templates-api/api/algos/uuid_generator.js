const {
    v4: uuidv4
} = require('uuid');

const generate_uuid = () => {
    return uuidv4();
}

module.exports = {
    generate_uuid
};