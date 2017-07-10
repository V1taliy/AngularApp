import { AngularApp38Page } from './app.po';

describe('angular-app38 App', function() {
  let page: AngularApp38Page;

  beforeEach(() => {
    page = new AngularApp38Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
