/**
 * v1
 *
 * @url https://github.com/mrdernst/homebridge-philipsair-platform
 * @author mrdernst <dominik@de-applications.de>
 *
 **/

module.exports = (homebridge) => {
  const PhilipsAirPlatform = require('./src/platform')(homebridge);
  homebridge.registerPlatform('homebridge-philipsair-platform', 'PhilipsAirPlatform', PhilipsAirPlatform, true);
};
