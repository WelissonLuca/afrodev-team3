const drugService = require('../../application/services/drug');

exports.post = async (request) => {
    const result = await drugService.register(request.body);
    return result;
  };
  
  exports.get = async (request) => {
    const result = await drugService.findAll(request.body);
    return result;
  };
  
  exports.getById = async (id) => {
    const result = await drugService.findById(id);
    return result;
  };
  
  exports.put = async (id, request) => {
    const result = await drugService.update(id, request.body);
    return result;
  };
  
  exports.patch = async (id, request) => {
    const result = await drugService.patch(id, request.body);
    return result;
  };
  
  exports.delete = async (id) => {
    const result = await drugService.delete(id);
    return result;
  };