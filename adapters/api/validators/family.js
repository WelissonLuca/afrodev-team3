const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name').notEmpty().withMessage('name is required'),
  check('age').notEmpty().withMessage('age is required'),
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
    .custom((val) => /^\d{3}.\d{3}.\d{3}-\d{2}$/g.test(val)),
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
