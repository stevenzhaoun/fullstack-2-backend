import prisma from '../prismaClient'

const createPermissions = async () => {
    await prisma.permission.createMany({
        data: [
            {name: 'users:view'},
            {name: 'users:edit'},
            {name: 'roles:view'},
            {name: 'roles:edit'},
            {name: 'products:view'},
            {name: 'products:edit'},
            {name: 'orders:view'},
            {name: 'orders:edit'},
        ],
        skipDuplicates: true
    })

    console.log('Permissions created')
}
createPermissions()