import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    PERSIST_MESSAGE,
    PERSIST_MESSAGE_SUCCESS,
    PERSIST_MESSAGE_FAILED
} from './constant';

function sendMessage(data) {
    return {
        type: SEND_MESSAGE,
        payload: data
    };
}

function sendMessageSuccess(data) {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: data
    };
}

function sendMessageFailed(data) {
    return {
        type: SEND_MESSAGE_FAILED,
        payload: data
    };
}

function persistMessage(message) {
    return {
        type: PERSIST_MESSAGE,
        payload: message
    };
}

function persistMessageSuccess(data) {
    return {
        type: PERSIST_MESSAGE_SUCCESS,
        payload: data
    };
}

function persistMessageFailed(data) {
    return {
        type: PERSIST_MESSAGE_FAILED,
        payload: data
    };
}

export default {
    sendMessage,
    sendMessageSuccess,
    sendMessageFailed,
    persistMessage,
    persistMessageSuccess,
    persistMessageFailed
}