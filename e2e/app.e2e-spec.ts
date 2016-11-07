import { Angular2SeedPage } from './app.po';

describe('angular2-seed App', function() {
  let page: Angular2SeedPage;

  beforeEach(() => {
    page = new Angular2SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
