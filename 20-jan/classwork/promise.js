const users = [
    { id: 1, name: "ALi" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Sana" },
];

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = [
                { orderId: 101, product: "Laptop", userId: 1 },
                { orderId: 102, product: "Phone", userId: 3 },
                { orderId: 103, product: "Tablet", userId: 2 },
            ];

            // Filter orders by userId
            const userOrders = orders.filter((order) => order.userId === userId);
            resolve(userOrders); // Resolve the filtered orders
        }, 1000); // Simulate delay
    });
}

function fetchAllOrders(users) {
    // Map each user to a promise that fetches their orders
    const orderPromises = users.map((user) => {
        return getOrders(user.id).then((orders) => {
            return { user, orders }; // Combine user and their orders
        });
    });

    // Wait for all order promises to resolve
    Promise.all(orderPromises)
        .then((results) => {
            results.forEach((result) => {
                console.log(`User: ${result.user.name}`);
                console.log("Orders:", result.orders);
                console.log("-----------");
            });
        })
        .catch((error) => {
            console.error("Error fetching orders:", error);
        });
}

// Call the function with the users array
fetchAllOrders(users);
