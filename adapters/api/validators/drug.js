const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('description')
    .notEmpty()
    .isLength({ max: 100 })
    .withMessage('description must have less then 100 characters'),
  check('quantity')
    .notEmpty()
    .withMessage('quantity is required and pass only numbers'),
  check('category')
    .notEmpty()
    .withMessage('Pass drug category'),
];

exports.updateValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('description')
    .notEmpty()
    .isLength({ max: 100 })
    .withMessage('description must have less then 100 characters'),
  check('quantity')
    .notEmpty()
    .withMessage('quantity is required and pass only numbers'),
  check('category')
    .notEmpty()
    .withMessage('Pass drug category'),
];

exports.patchValidator = () => [
  check('name')
    .optional(),
  check('description')
    .optional()
    .isLength({ max: 100 }),
  check('quantity')
    .optional(),
  check('category')
    .optional(),
];
