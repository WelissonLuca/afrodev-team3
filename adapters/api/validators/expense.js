const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('description')
    .notEmpty()
    .withMessage('description is required')
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('value')
    .notEmpty()
    .withMessage('price is required')
    .isDecimal({ min: 0.01 })
    .withMessage('price minimun value is 0.01'),
  check('category')
    .notEmpty()
    .withMessage('category is required')
    .isLength({ max: 100 })
    .withMessage('description must have less then 100 characters'),
  check('type')
    .notEmpty()
    .withMessage('type is required')
    .isIn(['purchase', 'bill', 'salary', 'transport', 'maintenance'])
    .withMessage(
      "status only accepts 'bill', 'salary', 'transport', 'maintenance'",
    ),
  check('status')
    .notEmpty()
    .withMessage('status is required')
    .isIn(['released', 'approved', 'rejected'])
    .withMessage("status only accepts 'released', 'approved', 'rejected'"),
  check('date')
    .notEmpty()
    .withMessage('date is required')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('date require a valid value like YYYY-MM-DD'),
];

exports.updateValidator = () => [
  check('description')
    .notEmpty()
    .withMessage('description is required')
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('value')
    .notEmpty()
    .withMessage('price is required')
    .isDecimal({ min: 0.01 })
    .withMessage('price minimun value is 0.01'),
  check('category')
    .notEmpty()
    .withMessage('category is required')
    .isLength({ max: 100 })
    .withMessage('description must have less then 100 characters'),
  check('type')
    .notEmpty()
    .withMessage('type is required')
    .isIn(['purchase', 'bill', 'salary', 'transport', 'maintenance'])
    .withMessage(
      "status only accepts 'bill', 'salary', 'transport', 'maintenance'",
    ),
  check('status')
    .notEmpty()
    .withMessage('status is required')
    .isIn(['released', 'approved', 'rejected'])
    .withMessage("status only accepts 'released', 'approved', 'rejected'"),
  check('date')
    .notEmpty()
    .withMessage('date is required')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('date require a valid value like YYYY-MM-DD'),
];

exports.patchValidator = () => [
  check('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('value')
    .optional()
    .isDecimal({ min: 0.01 })
    .withMessage('price minimun value is 0.01'),
  check('category')
    .optional()
    .isLength({ max: 100 })
    .withMessage('description must have less then 100 characters'),
  check('type')
    .optional()
    .isIn(['purchase', 'bill', 'salary', 'transport', 'maintenance'])
    .withMessage(
      "status only accepts 'bill', 'salary', 'transport', 'maintenance'",
    ),
  check('status')
    .optional()
    .isIn(['released', 'approved', 'rejected'])
    .withMessage("status only accepts 'released', 'approved', 'rejected'"),
  check('date')
    .optional()
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('date require a valid value like YYYY-MM-DD'),
];
