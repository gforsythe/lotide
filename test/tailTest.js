const assert = require('chai').assert;
const tail = require("../tail");



describe("#tail", () =>  {

  it("should return ['Lighthouse','Labs'] for ['Yo YO', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo YO', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);

  });

});


