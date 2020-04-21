import { submitLink } from './../src/client/js/newsEvaluate';

let btn = document.createElement('button');
let results = document.createElement('div');
results.setAttribute('id', 'results');
document.body.appendChild(btn);
document.body.appendChild(results);

/*document.body.innerHTML = `<button id="btn">Click</button>
<div id="results"></div>`;*/

describe('Check for fetch requests', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls google and returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    //assert on the response
    btn.addEventListener('submit', submitLink).then((res) => {
      expect(res.message).toBeDefined;
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
