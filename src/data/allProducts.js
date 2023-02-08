const allProducts = [
    {
        "id": 1,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I3 10100F + 8GB + GTX 1660 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura",
    },
    {
        "id": 2,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I3 10400F + 8GB + GTX 1660 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 3,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I5 10100F + 8GB + GTX 1660 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 4,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I3 10100F + 8GB + GTX 2660 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 5,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I5 10400F + 16GB + GTX 1660 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 6,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I7 10100F + 8GB + GTX 1660 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 7,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I7 10100F + 8GB + GTX 3600 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 8,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I7 10900F + 16GB + GTX 3070 6Gb",
        "price": "25000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 9,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I9 10100F + 8GB + GTX 3090 6Gb",
        "price": "250000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 10,
        "title": "pc Gamer Armada",
        "categoria": "pc",
        "description": "Intel Core I9 10900F + 32GB + GTX 3090 6Gb",
        "price": "2500000",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/VufovVQG0zBzgX4XprAY/miniatura"
    },
    {
        "id": 11,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 12,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 13,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 14,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 15,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 16,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura" 
    },
    {
        "id": 17,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 18,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    },
    {
        "id": 19,
        "title": "Notebook ASUS",
        "categoria": "note",
        "description": "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-",
        "price": "25",
        "pictureUrl": "https://s3-sa-east-1.amazonaws.com/saasargentina/Hfm8X6R3CvrIrc3OAnhv/miniatura"
    }
]

export default allProducts;