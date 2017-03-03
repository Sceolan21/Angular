import { AngularRESTPage } from './app.po';

describe('angular-rest App', function() {
  let page: AngularRESTPage;

  beforeEach(() => {
    page = new AngularRESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
