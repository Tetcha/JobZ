import _get from 'lodash.get';

import { ServerFile } from '../models';
import { http } from './http';

export interface IV1FileCreate extends Pick<ServerFile, 'url' | 'ownerType' | 'ownerId'> {}

export interface IV1ReplaceFile {
    currentUrl: string;
    newUrl: string;
}

export const fileApi = {
    v1PostUpload: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await http.post(`/file/upload`, formData);
        return _get(res, 'data');
    },
    v1Post: async (data: IV1FileCreate) => {
        const res = await http.post(`/file`, data);
        return _get(res, 'data');
    },
    v1Put: async (data: IV1ReplaceFile) => {
        const res = await http.put(`/file/replace`, data);
        return _get(res, 'data');
    },
};
