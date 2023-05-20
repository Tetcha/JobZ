export enum ImageOwnerTypeEnum {
    VEHICLE_IMAGES = 'VEHICLE_IMAGES',
    DRIVER_LICENSE_IMAGE = 'DRIVER_LICENSE_IMAGE',
    PLAN_IMAGES = 'PLAN_IMAGES',
}

export interface ServerFile {
    id: string;
    url: string;
    ownerType: ImageOwnerTypeEnum;
    ownerId: string;
    createdAt: number;
    updatedAt: number;
}
