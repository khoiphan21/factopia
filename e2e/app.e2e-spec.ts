import { Factopia2Page } from './app.po';

describe('factopia-2 App', function() {
  let page: Factopia2Page;

  beforeEach(() => {
    page = new Factopia2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
