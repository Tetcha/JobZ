import { call, put, takeLatest } from 'redux-saga/effects';

import { userApi } from '../../api';
import { User } from '../../models';
import { userActions } from '.';

function* getCurrentUser() {
    try {
        const res: User = yield call(userApi.v1GetMe);
        yield put(userActions.autoLoginSuccess(res));
    } catch (error) {
        yield put(userActions.autoLoginFailed(null));
    }
}

export default function* userSaga() {
    yield takeLatest(userActions.autoLogin.type, getCurrentUser);
}
