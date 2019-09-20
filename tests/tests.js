import {Selector} from 'testcafe';

fixture `Fixture`
  .page `https://taupan.github.io/testcafe-4297/`;

test ('Has the correct title link', async t => {
  await t
    .expect(Selector('h1 a').getAttribute('href'))
    .eql('https://taupan.github.io/testcafe-4297/');
});
