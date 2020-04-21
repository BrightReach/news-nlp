import { checkUrl } from './../src/client/js/urlRegex';

document.body.innerHTML = '<div id="results"></div>';

describe('Check for URL Match', () => {
  test('Whenever the URL input has passed the regular expression test, it should return the correct URL', () => {
    const input = [
      { id: 1, url: 'gravy' },
      { id: 2, url: 'google.com' },
      { id: 3, url: 'https://github.com/BrightReach/news-nlp' },
    ];
    const output = [{ id: 3, url: 'https://github.com/BrightReach/news-nlp' }];

    expect(checkUrl(input[0].url)).toThrow;
    expect(checkUrl(input[2].url)).toEqual(output[0].url);
  });

  test('Whenever the URL input has failed the regular expression test, it should throw an error to enter the correct URL', () => {
    const input = [
      { id: 1, url: 'gravy' },
      { id: 2, url: 'google.com' },
      { id: 3, url: 'https://github.com/BrightReach/news-nlp' },
    ];

    expect(checkUrl(input[0].url)).toThrow;
  });

  test('Whenever the URL input has is null or undefined, it should throw an error that the user needs to add a URL', () => {
    const input = [
      { id: 1, url: null },
      { id: 2, url: undefined },
    ];
    expect(checkUrl(input[0].url)).toBeNull;
    expect(checkUrl(input[1].url)).toBeUndefined;
  });
});
