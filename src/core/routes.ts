import { stringify } from 'query-string';

export const routes = {
    auth: {
        login: () => '/auth/login',
        register: () => '/auth/register',
        verify: () => '/auth/verify',
    },
    dashboard: {
        chart: {
            home: () => '/dashboard/chart',
            map: () => '/dashboard/chart/map',
        },
        users: {
            list: () => '/dashboard/user',
            detail: (id: string) => `/dashboard/user/${id}`,
        },

        configuration: {
            plan: {
                list: () => '/dashboard/configuration/plan',
                detail: (id: string) => `/dashboard/configuration/plan/${id}`,
                create: () => '/dashboard/configuration/plan/create',
                update: (id: string) => `/dashboard/configuration/plan/${id}/update`,
            },
        },

        driver: {
            list: () => '/dashboard/driver',
            detail: (id: string) => `/dashboard/driver/${id}`,
        },
        trip: {
            list: () => '/dashboard/trip',
            detail: (id: string) => `/dashboard/trip/${id}`,
        },
        group: {
            list: () => '/dashboard/group',
            detail: (id: string) => `/dashboard/group/${id}`,
        },
        account: {
            profile: () => '/dashboard/account',
        },
        wallet: {
            detail: (id: string) => `/dashboard/wallet/${id}`,
        },
        vehicle: {
            list: () => '/dashboard/vehicle',
            detail: (id: string) => `/dashboard/vehicle/${id}`,
        },
        booking: {
            create: () => '/dashboard/booking',
        },
    },
    manager: {
        chart: {
            home: () => '/manager/chart',
            map: () => '/manager/chart/map',
        },
        users: {
            list: () => '/manager/user',
            detail: (id: string) => `/manager/user/${id}`,
        },

        group: {
            list: () => '/manager/group',

            detail: {
                update: (id: string) => `/manager/group/${id}/update`,
                chart: {
                    home: (groupId: string) => `/manager/group/${groupId}/chart`,
                    map: (groupId: string) => `/manager/group/${groupId}/chart/map`,
                },
                channel: {
                    list: (groupId: string) => `/manager/group/${groupId}/channel`,
                    detail: (groupId: string, id: string) => `/manager/group/${groupId}/channel/${id}`,
                    create: (groupId: string) => `/manager/group/${groupId}/channel/create`,
                    update: (groupId: string, id: string) => `/manager/group/${groupId}/channel/${id}/update`,
                },

                detail: (id: string) => `/manager/group/${id}`,
                configuration: {
                    intergateApi: (groupId: string) => `/manager/group/${groupId}/configuration/integrate-api`,
                    common: (groupId: string) => `/manager/group/${groupId}/configuration/common`,
                    plan: (groupId: string) => `/manager/group/${groupId}/configuration/plan`,
                },
                vehicle: {
                    list: (groupId: string) => `/manager/group/${groupId}/vehicle`,
                    detail: (groupId: string, driverId: string, vehicleId: string) =>
                        `/manager/group/${groupId}/driver/${driverId}/vehicle/${vehicleId}`,
                    create: (groupId: string, driverId: string) => `/manager/group/${groupId}/driver/${driverId}/vehicle/create`,
                    update: (groupId: string, driverId: string, vehicleId: string) =>
                        `/manager/group/${groupId}/driver/${driverId}/vehicle/${vehicleId}/update`,
                },
                vehicleType: {
                    list: (groupId: string) => `/manager/group/${groupId}/vehicle-type`,
                    detail: (groupId: string, id: string) => `/manager/group/${groupId}/vehicle-type/${id}`,
                    create: (groupId: string) => `/manager/group/${groupId}/vehicle-type/create`,
                    update: (groupId: string, id: string) => `/manager/group/${groupId}/vehicle-type/${id}/update`,
                },
                booking: {
                    create: (groupId: string) => `/manager/group/${groupId}/booking`,
                },
                trip: {
                    list: (groupId: string) => `/manager/group/${groupId}/trip`,
                    detail: (groupId: string, id: string) => `/manager/group/${groupId}/trip/${id}`,
                },
                driver: {
                    list: (groupId: string) => `/manager/group/${groupId}/driver`,
                    detail: (groupId: string, driverId: string) => `/manager/group/${groupId}/driver/${driverId}`,
                    create: (groupId: string) => `/manager/group/${groupId}/driver/create`,
                    update: (groupId: string, driverId: string) => `/manager/group/${groupId}/driver/${driverId}/update`,
                },
            },

            create: () => '/manager/group/create',
        },
        account: {
            profile: () => '/manager/account',
        },
        booking: {
            create: () => `/manager//booking`,
        },
        wallet: {
            detail: () => `/manager/wallet`,
        },
    },
    booking: {
        create: () => '/booking',
        thankYou: () => '/booking/thank-you',
    },

    home: () => '/',
};
