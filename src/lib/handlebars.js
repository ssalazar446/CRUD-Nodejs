const {format} = require('timeago.js');

const helpers = {};

helpers.timeago = (savedTimestamp) => {

    return format(savedTimestamp, 'es_ES');
};

module.exports = helpers;