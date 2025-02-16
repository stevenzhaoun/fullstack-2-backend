import { faker } from "@faker-js/faker"
import { Product } from "@prisma/client"
import prisma from "../prismaClient"


const populateOrders = async () => {
    const products = await prisma.product.findMany()

    const orders = new Array(30).fill(null).map(() => {

        const orderProducts: Product[] = faker.helpers.arrayElements(products, { min: 1, max: 5 })

        const total = orderProducts.reduce((acc, product) => acc + product.price, 0) // sum of products price

        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            total: total,
            createdAt: faker.date.recent({days: 7}),
            products: orderProducts,
        }
    })

    await Promise.all(orders.map(async (order) => {
        await prisma.order.create({
            data: {
                name: order.name,
                email: order.email,
                total: order.total,
                createdAt: order.createdAt,
                products: {
                    connect: order.products.map((product) => ({ id: product.id }))
                }
            }
        })
    }))
    console.log('Orders created')
    return 
}

populateOrders()

