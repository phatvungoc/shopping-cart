import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            _id: "1",
            title: "Wacth Product 01",
            images: [
                "https://citizenwatch.vn/wp-content/uploads/2020/10/jr4065-09e_f_shot-400x600.png",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bn2039-59e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bj7111-86l-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/jr4061-18e-400x600.jpg",
            ],
            description:
                "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            content:
                "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            colors: ["red", "black", "teal"],
            sizes: ["XL", "L", "M", "XM", "LX"],
            price: 101,
            count: 1,
        },
        {
            _id: "2",
            title: "Wacth Product 02",
            images: [
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bn2039-59e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2020/10/jr4065-09e_f_shot-400x600.png",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bj7111-86l-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/jr4061-18e-400x600.jpg",
            ],
            description:
                "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            content:
                "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            colors: ["red", "black", "teal"],
            sizes: ["XL", "L", "M", "XM", "LX"],
            price: 102,
            count: 1,
        },
        {
            _id: "3",
            title: "Wacth Product 03",
            images: [
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bj7111-86l-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2020/10/jr4065-09e_f_shot-400x600.png",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bn2039-59e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/jr4061-18e-400x600.jpg",
            ],
            description:
                "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            content:
                "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            colors: ["red", "black", "teal"],
            sizes: ["XL", "L", "M", "XM", "LX"],
            price: 103,
            count: 1,
        },
        {
            _id: "4",
            title: "Wacth Product 04",
            images: [
                "https://citizenwatch.vn/wp-content/uploads/2019/08/jr4061-18e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2020/10/jr4065-09e_f_shot-400x600.png",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bn2039-59e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bj7111-86l-400x600.jpg",
            ],
            description:
                "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            content:
                "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            colors: ["red", "black", "teal"],
            sizes: ["XL", "L", "M", "XM", "LX"],
            price: 104,
            count: 1,
        },
        {
            _id: "5",
            title: "Wacth Product 05",
            images: [
                "https://citizenwatch.vn/wp-content/uploads/2020/10/jr4065-09e_f_shot-400x600.png",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bn2039-59e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bj7111-86l-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/jr4061-18e-400x600.jpg",
            ],
            description:
                "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            content:
                "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            colors: ["red", "black", "teal"],
            sizes: ["XL", "L", "M", "XM", "LX"],
            price: 105,
            count: 1,
        },
        {
            _id: "6",
            title: "Wacth Product 06",
            images: [
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bn2039-59e-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/bj7111-86l-400x600.jpg",
                "https://citizenwatch.vn/wp-content/uploads/2020/10/jr4065-09e_f_shot-400x600.png",
                "https://citizenwatch.vn/wp-content/uploads/2019/08/jr4061-18e-400x600.jpg",
            ],
            description:
                "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            content:
                "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            colors: ["red", "black", "teal"],
            sizes: ["XL", "L", "M", "XM", "LX"],
            price: 106,
            count: 1,
        },
    ]);

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every((item) => {
            return item._id !== id;
        });
        if (check) {
            const data = products.filter((product) => {
                return product._id === id;
            });
            setCart([...cart, ...data]);
        } else {
            alert("The product has been added to cart !");
        }
    };

    useEffect(() => {
        const datacart = JSON.parse(localStorage.getItem("dataCart"));
        if (datacart) setCart(datacart);
    }, []);

    useEffect(() => {
        localStorage.setItem("dataCart", JSON.stringify(cart));
    }, [cart]);

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
