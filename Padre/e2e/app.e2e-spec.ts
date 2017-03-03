import { PadrePage } from './app.po';

describe('padre App', function() {
  let page: PadrePage;

  beforeEach(() => {
    page = new PadrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
