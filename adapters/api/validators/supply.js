const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name').notEmpty().withMessage('name is required'),
  check('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('category').notEmpty().withMessage('category is required'),
  check('type').notEmpty().withMessage('type is required'),
  check('price')
    .notEmpty()
    .withMessage('price is required')
    .isDecimal({ min: 0.01 })
    .withMessage('price minimun value is 0.01'),
  check('quantity')
    .notEmpty()
    .withMessage('quantity is required')
    .isDecimal({ min: 0.01 })
    .withMessage('quantity minimun value is 0.01'),
];

exports.updateValidator = () => [
  check('name').notEmpty().withMessage('name is required'),
  check('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('category').notEmpty().withMessage('category is required'),
  check('type').notEmpty().withMessage('type is required'),
  check('price')
    .notEmpty()
    .withMessage('price is required')
    .isDecimal({ min: 0.01 })
    .withMessage('price minimun value is 0.01'),
  check('quantity')
    .notEmpty()
    .withMessage('quantity is required')
    .isDecimal({ min: 0.01 })
    .withMessage('quantity minimun value is 0.01'),
];

exports.patchValidator = () => [
  check('name').optional(),
  check('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('category').optional(),
  check('type').optional(),
  check('price')
    .optional()
    .isDecimal({ min: 0.01 })
    .withMessage('price minimun value is 0.01'),
  check('quantity')
    .optional()
    .isDecimal({ min: 0.01 })
    .withMessage('quantity minimun value is 0.01'),
];
