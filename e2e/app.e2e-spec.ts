import { BoardedPage } from './app.po';

describe('boarded App', function() {
  let page: BoardedPage;

  beforeEach(() => {
    page = new BoardedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
