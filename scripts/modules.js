const WA_MODULES = {
    PROCESS_EDIT_MESSAGE: 189865,
    PROCESS_RENDERABLE_MESSAGES: 992321,
    MESSAGES_RENDERER: 809958,
};

const NEW_WA_MODULES = {
    PROCESS_EDIT_MESSAGE: 'WAWebDBProcessEditProtocolMsgs',
    PROCESS_RENDERABLE_MESSAGES: 'WAWebMessageProcessRenderable',
    MESSAGES_RENDERER: 'WAWebMessageMeta.react',
    PROTOBUF_HOOK: 'WAWebVerifyProtobufMsgObjectKeys',
};

window.MODULES = {
    PROCESS_EDIT_MESSAGE: undefined,
    PROCESS_RENDERABLE_MESSAGES: undefined,
    MESSAGES_RENDERER: undefined,
    PROTOBUF_HOOK: undefined,
};
