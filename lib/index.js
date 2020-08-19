/**
  * @module APIMATICCalculatorLib
  *
  * Simple calculator API hosted on APIMATIC
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const SimpleCalculatorController = require('./Controllers/SimpleCalculatorController');
const OperationTypeEnum = require('./Models/OperationTypeEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of APIMATICCalculatorLib
    Configuration,
    Environments,
    // controllers of APIMATICCalculatorLib
    SimpleCalculatorController,
    // models of APIMATICCalculatorLib
    OperationTypeEnum,
    // exceptions of APIMATICCalculatorLib
    APIException,
};

module.exports = initializer;
