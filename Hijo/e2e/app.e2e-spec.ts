import { HijoPage } from './app.po';

describe('hijo App', function() {
  let page: HijoPage;

  beforeEach(() => {
    page = new HijoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
