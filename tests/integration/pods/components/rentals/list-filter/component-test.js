import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rentals/list-filter', 'Integration | Component | rentals/list filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rentals/list-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rentals/list-filter}}
      template block text
    {{/rentals/list-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
