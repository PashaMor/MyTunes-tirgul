import { MyTunesTirgulPage } from './app.po';

describe('my-tunes-tirgul App', function() {
  let page: MyTunesTirgulPage;

  beforeEach(() => {
    page = new MyTunesTirgulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
