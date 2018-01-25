import Controller from '@ember/controller';
import defaultTheme from '../../themes/default-theme';

import {randomNumber, randomDate} from '../../../utils/random';

export default Controller.extend({
  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    }
  },

  chartData: [{
    name: 'Jane',
    data: [randomNumber(10), randomNumber(10), randomNumber(10)]
  }, {
    name: 'John',
    data: [randomNumber(10), randomNumber(10), randomNumber(10)]
  }],

  theme: defaultTheme
});
