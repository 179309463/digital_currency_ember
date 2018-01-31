import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    genderOptions: A([
        {id: 'M', name: 'Male'},
        {id: 'F', name: 'Female'},
        {id: 'O', name: 'Other'}
    ])
});
