'use strict';

describe('Service: MachineService', function () {

  // load the service's module
  beforeEach(module('mesUiApp'));

  // instantiate service
  var MachineService;
  beforeEach(inject(function (_MachineService_) {
    MachineService = _MachineService_;
  }));

  it('should do something', function () {
    expect(!!MachineService).toBe(true);
  });

});
