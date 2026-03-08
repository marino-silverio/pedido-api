const Order = require("../models/Order");

// Criar pedido
exports.createOrder = async (req, res) => {
  try {
    const { orderId, value, creationDate } = req.body;

    const order = new Order({
      orderId,
      value,
      creationDate
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pedido", error: error.message });
  }
};

// Buscar pedido por ID
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pedido", error });
  }
};

// Listar todos os pedidos
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar pedidos", error });
  }
};

// Deletar pedido
exports.deleteOrder = async (req, res) => {
  try {
    const result = await Order.deleteOne({ orderId: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json({ message: "Pedido deletado com sucesso" });

  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar pedido", error: error.message });
  }
};