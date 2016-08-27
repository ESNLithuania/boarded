import { BoardedV2Page } from './app.po';

describe('boarded-v2 App', function() {
  let page: BoardedV2Page;

  beforeEach(() => {
    page = new BoardedV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
