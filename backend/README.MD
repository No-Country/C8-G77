# User API for BookStore

- Front:
  - Registrar usuarios
  - Login como usuario
  - Acceder al perfil de usuario
  - Modificar perfil de usuario
  - Eliminar cuenta de usuario
  - Agregar productos al carrito de compras
  - Eliminar productos del carrito de compras
  - Guardar el carrito de compras
  - Visualizar las compras realizadas
  - Visualizar los detalles de las compras

- Front Dashboard
  - Obtener todos los usuarios
  - Obtener un usuario especifico
  - Restablecer la cuenta de un usuario
  - Eliminar por completo un usuario

```json
    {
        "data": [
            {
                "id": "0b65215e-436c-41a4-925c-b7ca3acf5261",
                "firstName": "Javier",
                "lastName": "Calva",
                "age": 21,
                "email": "v.pseudo.11@gmail.com",
                "birthday": "2000/11/28",
                "phone": "+593958791418",
                "bookPreference": "science fiction and fantasy",
                "password": "$2b$09$c8JAX/Z9GHw0pBgt396CK.djr3CxVr55Abb3/5ExCgJnr0jMsquKy",
                "role": "normal",
                "country": "Ecuador",
                "status": "active",
                "isVerified": "false",
                "createdAt": "2022-11-22 12:54:11.003 -0500",
                "updatedAt": "2022-11-22 12:54:11.003 -0500",
                "Cart": {
                    "id": "1",
                    "name": "Javascript",
                    "value": "11.5",
                    "amount": "1",
                    "total": "11.5",
                },
                "orders":[
                    {
                        "id": "66653508-61b8-4d08-8d99-d9c80cda6f22",
                        "totalOrder": "11.5",
                        "dateOrder": "2022/11/20",
                        "detailOrder": [
                            {
                                "id": "1",
                                "name": "Javascript",
                                "value": "11.5",
                                "amount": "1",
                                "total": "11.5",
                            }
                        ]
                    },{
                        "id": "9bbe17c5-057b-4dd0-b3ef-0b1810e4298c",
                        "totalOrder": "21.5",
                        "dateOrder": "2022/11/20",
                        "detailOrder": [
                            {
                                "id": "2",
                                "name": "Javascript",
                                "value": "11.5",
                                "amount": "1",
                                "total": "11.5",
                            },
                            {
                                "id": "3",
                                "name": "MongoDB",
                                "value": "10",
                                "amount": "1",
                                "total": "10",
                            }
                        ]
                    }
                ]
            }
        ]
    }
```

- Routes
  - /api/v1/users
    - /me
    - /:id
  - /cart
    - /:id
  - /purchases
    - /details
  - /auth
    - /login
    - /register

- Methods
  - /users
    - GET
    - POST
    - PATCH
    - DELETE
  - /cart
    - GET
    - POST
    - DELETE
  - /purchases
    - GET
    - POST