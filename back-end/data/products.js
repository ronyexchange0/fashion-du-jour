const products = [
    {
        name: "jacket bla bla ",
        price: 100,
        discount: 0,
        rating: 0,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 0,
        countInStock: 5,
        colors: ["blue", "red"],
        sizes: ["small", "x large"],
        images: [
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg",
            "https://cdn.morato.filoblu.com/media/catalog/product/cache/image/378x542/beff4985b56e3afdbeabfc89641a4582/a/b/abitoslimfitbonniequadristretch_abiti_antonymorato_mmjs00001-fa650202-9004_01.jpg"
        ]
    },
    {
        name: "shoes bla bla ",
        price: 50,
        discount: 25,
        rating: 0,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 300,
        countInStock: 5,
        colors: ["black"],
        sizes: ["small", "medium"],
        images: [
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg"
        ]
    },
    {
        name: "jeans bla bla ",
        price: 20,
        discount: 10,
        rating: 5,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 300,
        countInStock: 5,
        colors: ["black", "red"],
        sizes: ["small", "large"],
        images: [
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg"
        ]
    },
    {
        name: "shoes bla bla ",
        price: 560,
        discount: 252,
        rating: 4.5,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 300,
        countInStock: 5,
        colors: ["black"],
        sizes: ["small", "medium"],
        images: [
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg"
        ]
    },
    {
        name: "mask bla bla ",
        price: 50,
        discount: 25,
        rating: 4,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 300,
        countInStock: 5,
        colors: ["black"],
        sizes: ["small", "medium"],
        images: [
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg"
        ]
    },
    {
        name: "suit bla bla ",
        price: 50,
        discount: 0,
        rating: 0,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 300,
        countInStock: 5,
        colors: ["black"],
        sizes: ["small", "medium"],
        images: [
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg"
        ]
    },
    {
        name: "shirt bla bla ",
        price: 500,
        discount: 60,
        rating: 3.5,
        thumb: "https://cdn.shopify.com/s/files/1/0279/8013/6586/products/product-image-918122481.jpg",
        description: "test test",
        numReviews: 300,
        countInStock: 5,
        colors: ["black", "gray"],
        sizes: ["small"],
        images: [
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg",
            "https://www.opposuits.com/media/catalog/product/cache/c508bae3211370e95632f5bf272bc1b4/s/s/ss_mr-pink-lifestyle-v2-01_mnstzpyvkguqwony.jpg"
        ]
    }
]

export default products