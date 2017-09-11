import { FcmappPage } from './app.po';

describe('fcmapp App', () => {
  let page: FcmappPage;

  beforeEach(() => {
    page = new FcmappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
