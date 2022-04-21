import app from '../../src/app';

describe('\'covid\' service', () => {
  it('registered the service', () => {
    const service = app.service('covid');
    expect(service).toBeTruthy();
  });
});
