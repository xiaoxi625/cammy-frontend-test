import { sendEmail, storeMessage  } from '../api';
import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    PERSIST_MESSAGE,
    PERSIST_MESSAGE_SUCCESS,
    PERSIST_MESSAGE_FAILED
} from '../actions/constant';

const steroptype = {
    status: '',
    err: '',
    data: null,
}
const apiMiddleware = store => next => action => {
    switch (action.type) {
        case PERSIST_MESSAGE:
        storeMessage(action.payload).then((res) => {
            store.dispatch({type: PERSIST_MESSAGE_SUCCESS, payload: { ...steroptype, data: res.data.data, status: 'success'} });
        })
            break;
        case SEND_MESSAGE:
        sendEmail(action.payload).then((res) => {
            if(res.data){
                store.dispatch({type: SEND_MESSAGE_SUCCESS, payload: { ...steroptype, data: res.data.data, status: 'success'} });
            }else{
                store.dispatch({type: SEND_MESSAGE_FAILED, payload: { ...steroptype, data: null, status: 'failed'} });
            }
        })
            break;
    }
    next(action);
}

export default apiMiddleware;