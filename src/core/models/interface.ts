export interface ResponseList<T> {
    data: T[];
    count: number;
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface PagingProps {
    page: number;
    pageSize: number;
    orderBy: string;
    order: SortOrder;
    isShowInactive: boolean;
}

export const defaultPagingProps: PagingProps = {
    page: 0,
    pageSize: 10,
    orderBy: 'createdAt',
    order: SortOrder.DESC,
    isShowInactive: false,
};

export interface IOption {
    label: string;
    value: any;
    origin: any;
}
