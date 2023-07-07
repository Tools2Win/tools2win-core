export const apiConfigs = {
    inviteCode: {
        use: {
            objectType: 'invitecode',
        }
    },
    itemStock: {
        get: {
            objectType: 'itemstock'
        }
    },
    salesman: {
        get: {
            objectType: 'salesman'
        }
    },
    userSalesman: {
        merge: {
            objectType: 'usersalesman'
        }
    },
    scanSessions: {
        get: {
            objectType: 'scansessions'
        },
        merge: {
            objectType: 'scansession'
        }
    },
    scanSessionScans: {
        get: {
            objectType: 'scansessionscans'
        },
        create: {
            objectType: 'scansessionscan'
        },
        delete: {
            objectType: 'scansessionscan'
        }
    },
    scanSessionTicket: {
        create: {
            objectType: 'scansessionticket'
        }
    },
    displayName: {
        put: {
            objectType: 'displayname'
        }
    }
};