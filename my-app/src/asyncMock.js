const products = [
    {
        id: "1",
        name: "Honkai Impact 3rd Auriculares",
        price: 5000,
        category: "Auriculares",
        img: "https://ae01.alicdn.com/kf/S74c4bc36e06a4b37a0713bf82d30ee405.jpg_640x640Q90.jpg_.webp",
        stock: 15,
        description: "Descripcion de Aurigulares HI3rd",
    },
    {
        id: "2",
        name: "Chaqueta Kiana Honkai Impact",
        price: 3000,
        category: "Ropa",
        img: "https://down-mx.img.susercontent.com/file/34fd4763728e589955ec9bf2f2a56721",
        stock: 25,
        description: "Descripcion de la Chaqueta kiana HI",
    },
    {
        id: "3",
        name: "Figura Herta Honkai Star Rail",
        price: 3000,
        category: "Figura",
        img: "https://images.squarespace-cdn.com/content/v1/62f1fe2ea8990e69272321f1/1689177833862-O3U7L2CN6DJN5Z5A7OR7/dc1e39de-0d8b-4e25-b070-1fe33f5de039.jpg?format=1000w",
        stock: 10,
        description: "Descripcion de la Figura Herta HSR",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}