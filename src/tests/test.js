import { isEmpty, isEmail } from './../containers/validation';
import actions from './../actions';
const assert = require('assert');


//unit test
describe('isValidEmail', function() {
    it('should return true when place xxx@xxx.com', function() {
        const email = 'xxx@xxx.com';
        assert.strictEqual(isEmail(email),true);
    })
    it('should return false when place xxx@xxx', function() {
        const email = 'xxx@xxx';
        assert.strictEqual(isEmail(email),false);
    })
});

describe('isEmpty', function() {
    it('should return true when place any string', function() {
        const str = '';
        assert.strictEqual(isEmpty(str),true);
    })
    it('should return false when place empty string', function() {
        const email = 'testing';
        assert.strictEqual(isEmpty(email),false);
    })
});
//test action
describe('test action', function() {
    it('should return payload', function() {
        const data = 'test data';
        const expect = {
            type: 'SEND_MESSAGE',
            payload: 'test data'
        }
        assert.deepEqual(actions.sendMessage(data),expect);
    })
});
