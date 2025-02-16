import { faker } from '@faker-js/faker'
import prisma from '../prismaClient'

const populateProducts = async () => {
    const products = new Array(30).fill(null).map(() => {
        return {
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price()),
        }
    })
    console.log(products)

    await prisma.product.createMany({
        data: products,
        skipDuplicates: true
    })
    console.log('Products created')
}

populateProducts()

