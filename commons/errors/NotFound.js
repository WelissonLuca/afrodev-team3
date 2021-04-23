class NotFound extends Error {
  constructor(classType) {
    const message = `${classType} not found!`;
    super(message);
    this.name = 'NotFound';
    this.idError = 3;
  }
}

module.exports = NotFound;
