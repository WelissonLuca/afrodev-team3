const { check, validationResult } = require('express-validator');
const { isCPF } = require('brazilian-values');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name').notEmpty().withMessage('name is required'),
  check('birth_date').notEmpty().withMessage('birth date is required'),
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email'),
  check('phone')
    .optional()
    .custom((val) => /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val))
    .withMessage('invalid phone format'),
  check('cpf')
    .notEmpty()
    .withMessage('cpf is required')
    .custom((cpf) => isCPF(cpf))
    .withMessage('cpf is not valid'),
  check('address')
    .notEmpty()
    .withMessage('address is required'),
  check('civil_status')
    .notEmpty()
    .withMessage('civil_status is required'),
  check('per_capita_income')
    .notEmpty()
    .withMessage('per capita income is required'),
];

exports.updateValidator = () => [
  check('email')
    .optional()
    .isEmail()
    .withMessage('invalid email'),
  check('phone')
    .optional()
    .custom((val) => /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val))
    .withMessage('invalid phone format'),
];

exports.patchValidator = () => [
  check('email')
    .optional()
    .isEmail()
    .withMessage('invalid email'),
  check('phone')
    .custom((val) => {
      if (val) {
        return /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val);
      }
      return true;
    })
    .withMessage('invalid phone format'),
];
