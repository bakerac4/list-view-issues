import hbs from '@glimmer/inline-precompile';
import { render, setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: ListViewIssues', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ListViewIssues />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
