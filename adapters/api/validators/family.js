const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('age')
    .notEmpty()
    .withMessage('age is required'),
    // .isLength({ max: 200 })
    // .withMessage('description must have less then 200 characters'),
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email'),
  check('phone')
    .optional()
    .custom((val) => /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val))
    .withMessage('invalid phone format'),

];

exports.updateValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('description')
    .notEmpty()
    .withMessage('description is required')
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email'),
  check('phone')
    .optional()
    .custom((val) => /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val))
    .withMessage('invalid phone format'),

];

exports.patchValidator = () => [
  check('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('description must have less then 200 characters'),
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
