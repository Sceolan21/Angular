import { GoogleBooksPage } from './app.po';

describe('google-books App', function() {
  let page: GoogleBooksPage;

  beforeEach(() => {
    page = new GoogleBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
