import prisma from '../prismaClient'

const createAdminRole = async () => { // JS Promise & async await & Event Loop(Important) non-blocking
  await prisma.role.create({
    data: {
        name: 'admin',
        permissions: {
            connect: [
                {name: 'users:view'},
                {name: 'users:edit'},
                {name: 'roles:view'},
                {name: 'roles:edit'},
                {name: 'products:view'},
                {name: 'products:edit'},
                {name: 'orders:view'},
                {name: 'orders:edit'},
            ]
        }
    }
  })

  console.log('Admin role created')
}

createAdminRole()