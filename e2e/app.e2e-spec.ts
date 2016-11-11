import { Ng2ModulesPage } from './app.po';

describe('ng2-modules App', function() {
  let page: Ng2ModulesPage;

  beforeEach(() => {
    page = new Ng2ModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
