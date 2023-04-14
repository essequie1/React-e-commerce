[![english](https://img.shields.io/static/v1?label=lang&message=english&color=green)](https://github.com/essequie1/React-e-commerce/blob/master/README.md)

# SARTORIAL

Sartorial es un proyecto de e-commerce para una tienda online ficticia. Fue creado para el curso de Desarrollo Frontend con React de [CoderHouse](https://www.coderhouse.com/) durante la cursada que fue desde el 7 de Marzo hasta el 27 de Abril del 2023.


# 🛠️ **¡¡¡PROYECTO EN CONSTRUCCION!!!** 🛠️

Las entregas fueron las siguientes:
  - **16 de Marzo:** Primer pre-entrega (Componentes).
  - **4 de Abril:** Segunda pre-entrega (Rutas).
  - **27 de Abril:** Entrega Final.
  
## 📚 Tabla de Contenidos:

  - [Requisitos Base](#%EF%B8%8F-requisitos-base)
  - [Requisitos Extra](#%EF%B8%8F-requisitos-extra-opcionales)
  - [Propuesta](#%EF%B8%8F-propuesta)

## ⚙️ Requisitos base

  - **Inicio:**
    - La ruta base ("/") muestra los productos que estan disponibles, ademas de un acceso al carrito de compras (ubicado en la ruta "/cart") y tambien acceso a un menú que contendrá las categorias, que al clickear en alguna deberá mostrar los productos de dicha categoria usando la ruta "/categories/:categoryId".
    
  - **Flow:**
    - Al hacer click en un producto, se mostrara los detalles de ese producto (en la ruta "/item/:id"), la id de este producto será generada por la base de datos. Dentro de los detalles habrá que mostrar fotos del producto, una descripción, el precio, un selector de cantidad y la opcion de agregar el producto al carrito. En caso que el usuario intente acceder a una nueva ID modificando la URL, se deberá notificar que dicho producto no existe.
    
  - **Firebase:**
    - Deben existir al menos 2 colecciones: Una que contenga la información de los productos ("products"), y otra que contenga las ordenes generadas por los usuarios ("orders"). De forma opcional se puede crear una coleccion para que las categorias funcionen de forma dinámica y se pueda acceder a productos con la url "/categories/*id_producto*".
    
  - **Cart:**
    - El cart deberá ser accesible durante toda la experiencia y deberá mostrar un indicador de cuantos productos se encuentran en el carrito en cada momento.
    
  - **Checkout:**
    - El checkout deberá mostrar los productos con las cantidades que eligió el usuario, el precio total de la orden, la opcion de agregar la información del usuario (nombre, apellido, telefono y mail con verificacion de este). Una vez realizado el proceso de Checkout, el usuario recibirá una "orderId" con la cual podrá verificar su orden en cualquier momento.
    
## 🕹️ Requisitos extra (opcionales)

  - [X] **Auth/Login:**
    - Implementar un servicio de autenticación proveido por Firebase.
    
  - [X] **Whislist:**
    - Permitir al usuario guardar productos en una lista de deseados y permitir que se acceda a ellos desde el navbar. Esta wishlist deberá permitir agregar los productos al carrito desde esta.
    
  - [X] **Custom Item:**
    - El usuario debeá poder agregar caracteristicas extra al producto (talla, color, etc.). Esta customización no modificará el precio del producto, y deberá ser detallada en el checkout.
    
  - [ ] **Stock Check:**
    - Validar el stock al momento de agregar la intentar generar la orden.
    
  - [ ] **Categorias dinámicas:**
    - Crear una colección para las categorias en firebase e hidratar el menú en base a eso.
    
  - [X] **Cart Persistente:**
    - Hacer que el cart sea persistente utilizando localStorage o sessionStorage.
    
  - [ ] **Mis Ordenes:**
    - Con el orderId que se entrega al final de la compra, el usuario deberá poder ver la orden y los detalles de esta orden sin mostrar datos personales de la compra.
    
## 🛠️ Propuesta

Se creó un proyecto 
