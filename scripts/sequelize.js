const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs')
const sequelize = new Sequelize('supermercadoelectron', 'root', 'tiger', {
    host: 'localhost',
    dialect: 'mysql'
  });


// Definición del modelo Productos
const Productos = sequelize.define('productos', {
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  existencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    timestamps: false
  });

// Definición del modelo Pedidos
const Pedidos = sequelize.define('pedidos', {
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  proveedor: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    timestamps: false
  });

// Definición del modelo Usuarios
const Usuarios = sequelize.define('usuarios', {
  id_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
    timestamps: false
  });


  async function loginFunction(id_empleado, contrasena) {
    try {
      const usuario = await Usuarios.findOne({
        where: {
          id_empleado
        }
      });
  
      if (!usuario) {
        return null;
      }
  
      const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
      if (!contrasenaValida) {
        return null;
      }
  
      return usuario;
  
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  

  const getProducts = async() => await Productos.findAll();

module.exports = {
  Productos,
  Pedidos,
  Usuarios,
  loginFunction, 
  getProducts,
};