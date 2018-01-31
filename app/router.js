import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('rental', {resetNamespace: true, path: '/:rental_id'});
  });

  this.route('demo', function() {
    this.route('highcharts');
    this.route('cssmodules');
    this.route('wormhole');
    this.route('rapidform');
    this.route('chartjs');
  });
});

export default Router;
