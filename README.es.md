[![english](https://img.shields.io/static/v1?label=lang&message=english&color=green)](https://github.com/essequie1/React-e-commerce/blob/master/README.md)

![Logo Sartorial](https://firebasestorage.googleapis.com/v0/b/e-commerce-a78e1.appspot.com/o/loading.gif?alt=media&token=673d3ea1-0a94-475a-9876-f4a7f3787e98)
Sartorial es un proyecto de e-commerce para una tienda online ficticia. Fue creado para el curso de Desarrollo Frontend con React de [CoderHouse](https://www.coderhouse.com/) durante la cursada que fue desde el 7 de Marzo hasta el 27 de Abril del 2023.

Las entregas fueron las siguientes:
  - **16 de Marzo:** Primer pre-entrega (Componentes).
  - **4 de Abril:** Segunda pre-entrega (Rutas).
  - **27 de Abril:** Entrega Final.
  
## 📚 Tabla de Contenidos:

  - [Requisitos Base](#%EF%B8%8F-requisitos-base)
  - [Requisitos Extra](#%EF%B8%8F-requisitos-extra-opcionales)
  - [Propuesta](#%EF%B8%8F-propuesta)
  - [Firebase](#-firebase)
  - [Libraries used](#-librerias)
  - [Considerations](#algunas-consideraciones)

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

  ## Navbar
  > El header de la página contiene el menú de navegación, con el logotipo como enlace a la página de inicio. El usuario puede filtrar los productos por categoría o marca y acceder a su wishlist (si ha iniciado sesión) y a su "bag" (carrito), también hay un botón de inicio de sesión/registro, o puede acceder a su perfil (si ya ha iniciado sesión).

  ## Inicio
  > La página de inicio muestra todos los productos disponibles, con "cards" que muestran una imagen del producto, el título, la marca, la categoría, el precio y las variaciones de color disponibles. Cuando un usuario hace clic en una tarjeta, se le redirige a la página de detalles del producto correspondiente.

  ## Detalle de Articulo
  > Cada producto tiene su propia URL y página de detalles que muestra dos imágenes del producto, la marca, el título, una descripción, el precio y opciones para seleccionar la variación de color, la cantidad y la talla. Los usuarios pueden añadir el producto a su wishlist o a su "bag" utilizando los dos botones de la parte inferior derecha de la página.

  ## Sesión
  > Los usuarios pueden iniciar sesión o registrarse en cualquier momento. La página de registro solicita información básica del usuario y otros datos para los pedidos. Al iniciar sesión, los usuarios pueden acceder a su lista de deseos y al historial de pedidos desde su perfil.

  ## Perfil
  > La página de perfil muestra la información de un usuario y su historial de pedidos, a los que se puede acceder en cualquier momento. Los usuarios también pueden salir de su cuenta desde esta página.

  ## "Bag" (Carrito)
  > Los usuarios pueden hacer clic en el icono de la barra de navegación en cualquier momento para ver su "bag" y el número total de productos añadidos. Cuando se añade al menos un producto, los usuarios pueden ver el importe total del pedido y tienen la opción de pasar por caja o borrar su pedido. Si un usuario no ha iniciado sesión e intenta pasar por caja, recibirá un aviso sugiriéndole que cree una cuenta o inicie sesión; si no desea hacerlo, puede pasar por caja de todas formas.

  ## Checkout
  > Los usuarios pueden ver todos los productos añadidos a su "bag" durante la experiencia de compra y realizar cambios en la talla del producto, la cantidad o eliminar artículos del pedido. El proceso de "pago" depende de la sesión del usuario; si el usuario ha iniciado sesión, puede simplemente hacer clic en el botón "Payment" para crear la orden. Si el usuario no ha iniciado sesión, tendrá que rellenar un formulario con la información que se utilizará para el pedido.

  ## Pedidos
   > Una vez completado el proceso de "pago", los usuarios recibirán una confirmación del pedido con el número de productos adquiridos y un plazo estimado de llegada (7 días). Cada pedido tiene un ID único que puede utilizarse para recuperar su información visitando la URL "/orders/search".

# 🔥 Firebase

  La base de datos tiene 3 colecciones, una para los usuarios, otra para los pedidos y otra para los productos.

  - En lugar de utilizar Firebase Auth para almacenar la información del usuario (y para permanecer en el plan Spark), los datos del usuario se almacenan en una colección separada (excluyendo sus contraseñas), que también se utiliza para guardar la lista de deseos del usuario.

  - Los productos se recuperan de la base de datos y se agregan en un contexto para permitir su uso global dentro de la aplicación. Cada producto tiene un ID único y variaciones de color, pero actualmente no hay opción de stock ya que no está implementado en la aplicación. Todas las imágenes de los productos se almacenan en Firebase Storage.

  - Los pedidos guardan los datos del usuario y los detalles del producto para cada pedido. Se pueden recuperar buscando su ID único en la url "/orders/search" o si el usuario está logueado, consultando su perfil.

# 📖 Librerias

  - [Firebase](https://www.npmjs.com/package/firebase) (Para Firestore, Storage y Auth ) 
  - [react-toastify](https://www.npmjs.com/package/react-toastify) (Para enviar notificaciones al usuario)
  - [sass](https://www.npmjs.com/package/sass) (Pre-procesado de CSS)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom) (Para el enrutado)

# Algunas consideraciones

  - La "bag" (carrito) es persistente usando localStorage, los usuarios pueden acceder a ella en cualquier momento y desde cualquier lugar.
  - La aplicación no ofrece una opción de pago ya que no es necesaria. El botón de pago simplemente genera un pedido y redirige al usuario a los detalles del pedido.
  - La sesión del usuario es persistente, si cierra la pestaña del navegador, seguirá conectado y no tendrá que volver a conectarse cuando vuelva a abrir el sitio web.
  - La función de lista de deseos está integrada con Firebase, de modo que cada vez que un usuario añade o elimina un artículo de su lista de deseos, se envía una solicitud a la base de datos.
