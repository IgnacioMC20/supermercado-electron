const loadProducts = async () => {
    try {
        const products = await window.comunicacion.loadProducts();
        // Obtiene los productos utilizando la función loadProducts expuesta por el contextBridge
        console.log(products);

        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';

        products.forEach((product) => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${product.codigo}</td>
          <td>${product.nombre}</td>
          <td>${product.descripcion}</td>
          <td>${product.categoria}</td>
          <td>${product.existencia}</td>
          <td>
            <button>Editar</button>
            <button>Solicitar pedido</button>
          </td>
        `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
};

loadProducts();