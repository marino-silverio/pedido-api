let orders = [];

exports.createOrder = (req, res) => {

    const order = {
        orderId: req.body.numeroPedido,
        value: req.body.valorTotal,
        creationDate: req.body.dataCriacao,
        items: req.body.items
    };

    orders.push(order);

    res.status(201).json(order);
};

exports.listOrders = (req, res) => {
    res.json(orders);
};

exports.getOrder = (req, res) => {

    const order = orders.find(o => o.orderId === req.params.id);

    if (!order) {
        return res.status(404).json({message:"Pedido não encontrado"});
    }

    res.json(order);
};

exports.deleteOrder = (req, res) => {

    const index = orders.findIndex(o => o.orderId === req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Pedido não encontrado" });
    }

    orders.splice(index, 1);

    res.json({ message: "Pedido deletado com sucesso" });
};