// Initializes the `covid` service on path `/covid`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Covid } from './covid.class';
import createModel from '../../models/covid.model';
import hooks from './covid.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'covid': Covid & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/covid', new Covid(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('covid');

  service.hooks(hooks);
}
