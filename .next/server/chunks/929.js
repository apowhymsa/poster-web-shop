exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 28757:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 65883:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34751));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58279));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23492));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50572));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87272));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4012));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92793));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94050))

/***/ }),

/***/ 70135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline_esm_MinusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13524);
/* harmony import */ var _heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40990);
/* harmony import */ var _heroicons_react_24_outline_esm_TrashIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34635);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6750);
/* harmony import */ var _utils_store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72285);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15750);









const CartItem = ({ quantityItem, cartItem, inCheckout = false })=>{
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(quantityItem);
    const debouncedQuantity = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(quantity, 500);
    const dispatch = (0,_utils_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setQuantity(quantityItem);
    }, [
        quantityItem
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log("debounce update");
        dispatch((0,_utils_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* .updateQuantity */ .$R)({
            product: cartItem.product,
            quantity: quantity
        }));
    }, [
        debouncedQuantity
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative cart-item flex gap-x-2 after:absolute after:-bottom-[10px] after:w-full after:h-[0.5px] after:bg-[#e5e7eb]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute top-0 right-0 w-5 h-5 cursor-pointer",
                title: "Удалить товар",
                onClick: ()=>{
                    dispatch((0,_utils_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* .deleteItem */ .wz)(cartItem));
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_TrashIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "h-5 w-5 text-black transition-colors hover:text-rose-400 "
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: cartItem.product.photo ? `https://poster-shop.joinposter.com${cartItem.product.photo}` : "/flower_image.jpg",
                alt: "Product Image",
                width: 0,
                height: 0,
                sizes: "100vw",
                style: {
                    width: "100px",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    objectPosition: "center center",
                    aspectRatio: "1 / 1"
                },
                priority: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-1 justify-between py-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "item-description flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[15px] overflow-ellipsis max-w-[175px] overflow-hidden whitespace-nowrap",
                                title: cartItem.product.product_name,
                                children: cartItem.product.product_name
                            }),
                            !inCheckout && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-[15px] font-medium",
                                children: [
                                    "₴ ",
                                    cartItem.product.price["1"].slice(0, -2)
                                ]
                            })
                        ]
                    }),
                    inCheckout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                "Цена: ",
                                `${cartItem.quantity} ед. x ${cartItem.product.price["1"].slice(0, -2)} грн = ${cartItem.quantity * Number(cartItem.product.price["1"].slice(0, -2))}`,
                                " грн"
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "item-quantity-edit flex gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "flex items-center justify-center bg-rose-400 transition-colors hover:bg-rose-500 w-7 h-7 rounded",
                                onClick: ()=>{
                                    quantity > 1 && setQuantity((prev)=>prev - 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_MinusIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    className: "h-6 w-6 text-white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: quantity,
                                onChange: (event)=>setQuantity(Number(event.target.value)),
                                min: 1,
                                max: 100,
                                type: "number",
                                className: "block flex-1 rounded-md border-gray-300 shadow-sm focus:border-rose-400 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 h-7 text-sm"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "flex items-center justify-center bg-rose-400 transition-colors hover:bg-rose-500 w-7 h-7 rounded",
                                onClick: ()=>{
                                    quantity < 100 && setQuantity((prev)=>prev + 1);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    className: "h-6 w-6 text-white"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }, cartItem.product.product_id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);


/***/ }),

/***/ 23492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_HeaderMain_HeaderMain)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Header/HeaderMain/HeaderMain.scss
var HeaderMain = __webpack_require__(94638);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(46140);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(96198);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js
var ShoppingCartIcon = __webpack_require__(9329);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserIcon.js
var UserIcon = __webpack_require__(78750);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/contexts/NavigationContext/NavigationContext.ts
var NavigationContext = __webpack_require__(85666);
// EXTERNAL MODULE: ./src/components/Header/HeaderMain/HeaderNav/HeaderNav.scss
var HeaderNav = __webpack_require__(3218);
;// CONCATENATED MODULE: ./src/components/Header/HeaderMain/HeaderNav/HeaderNav.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const HeaderNav_HeaderNav = ()=>{
    const context = (0,react_.useContext)(NavigationContext/* NavigationContext */.k);
    const navClasses = (0,react_.useMemo)(()=>[
            `${context[0] ? "link-active" : null}`,
            `${context[1] ? "link-active" : null}`,
            `${context[2] ? "link-active" : null}`
        ], [
        context
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "header-nav",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: navClasses[0],
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Главная"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: navClasses[1],
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/products?sort=1",
                        children: "Каталог товаров"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: navClasses[2],
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about-us",
                        children: "О нас"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const HeaderMain_HeaderNav_HeaderNav = (HeaderNav_HeaderNav);

// EXTERNAL MODULE: ./src/components/Header/HeaderBurgerContent/HeaderBurgerContent.scss
var HeaderBurgerContent = __webpack_require__(103);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(57048);
;// CONCATENATED MODULE: ./src/components/Header/HeaderBurgerContent/HeaderBurgerContent.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





// eslint-disable-next-line react/display-name
const HeaderBurgerContent_HeaderBurgerContent = /*#__PURE__*/ (0,react_.forwardRef)((props, ref)=>{
    const { setVisible, isVisible } = props;
    const context = (0,react_.useContext)(NavigationContext/* NavigationContext */.k);
    const navClasses = (0,react_.useMemo)(()=>[
            `${context[0] ? "link-active" : null}`,
            `${context[1] ? "link-active" : null}`,
            `${context[2] ? "link-active" : null}`
        ], [
        context
    ]);
    const handleVisible = ()=>{
        setVisible(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        className: "burger-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "burger-content-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: navClasses[0],
                            onClick: handleVisible,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Главная"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: navClasses[1],
                            onClick: handleVisible,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/products",
                                children: "Каталог товаров"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: navClasses[2],
                            onClick: handleVisible,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about-us",
                                children: "О нас"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "burger-content-close",
                onClick: ()=>setVisible(false),
                children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                    className: "h-6 w-6 text-gray-400"
                })
            })
        ]
    });
});
/* harmony default export */ const Header_HeaderBurgerContent_HeaderBurgerContent = (HeaderBurgerContent_HeaderBurgerContent);

// EXTERNAL MODULE: ./src/components/Cart/Cart.scss
var Cart = __webpack_require__(14940);
// EXTERNAL MODULE: ./src/utils/store/hooks.ts
var hooks = __webpack_require__(72285);
// EXTERNAL MODULE: ./src/components/Cart/CartItem/CartItem.tsx
var CartItem = __webpack_require__(70135);
// EXTERNAL MODULE: ./src/utils/store/cartSlice.ts
var cartSlice = __webpack_require__(6750);
// EXTERNAL MODULE: ./node_modules/@firebase/firestore/dist/index.node.mjs + 1 modules
var index_node = __webpack_require__(34759);
// EXTERNAL MODULE: ./src/utils/firebase/firebase.ts
var firebase = __webpack_require__(87464);
// EXTERNAL MODULE: ./node_modules/@firebase/auth/dist/node-esm/index.js + 2 modules
var node_esm = __webpack_require__(16054);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/components/Cart/Cart.tsx











const Cart_Cart = (props)=>{
    const { setOpen, isOpen } = props;
    const cart = (0,hooks/* useAppSelector */.C)((state)=>state.cartReducer).cart;
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        const userAuthId = localStorage.getItem("authUserId");
        (0,node_esm/* onAuthStateChanged */.Aj)(firebase/* auth */.I, async (user)=>{
            if (user) {
                if (userAuthId) {
                    console.log("auth", userAuthId);
                    getCart(userAuthId);
                }
            } else {
                dispatch((0,cartSlice/* setCart */.RV)([]));
            }
        });
    }, []);
    const getCart = async (userAuthId)=>{
        const userRef = (0,index_node/* doc */.JU)(firebase.db, "users", userAuthId.toString());
        const userSnapshot = await (0,index_node/* getDoc */.QT)(userRef);
        dispatch((0,cartSlice/* setCart */.RV)(userSnapshot.data()?.cart || []));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: isOpen ? "product-cart cart_active drop-shadow-2xl" : "product-cart",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-medium text-[16px] text-center",
                children: "Корзина"
            }),
            cart.length <= 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-between gap-y-10 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        // src="/flower.svg"
                        src: "/cart_icon.svg",
                        alt: "Product Image",
                        width: 0,
                        height: 0,
                        sizes: "20vw",
                        style: {
                            width: "40%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "8px",
                            objectPosition: "center center",
                            aspectRatio: "1 / 1"
                        },
                        placeholder: "blur",
                        blurDataURL: "/cart_icon.svg",
                        priority: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "font-bold",
                        children: "Товаров нет"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-neutral-400 text-center",
                        children: [
                            " ",
                            "Для оформления заказа добавьте товар в корзину"
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "cart-container flex flex-col gap-y-5 flex-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-[15px] text-right mt-5 transition-colors hover:text-rose-400 cursor-pointer",
                        onClick: ()=>dispatch((0,cartSlice/* clearCart */.LL)()),
                        children: "Очистить корзину"
                    }),
                    cart.map((cartItem)=>/*#__PURE__*/ jsx_runtime_.jsx(CartItem/* default */.Z, {
                            cartItem: cartItem,
                            quantityItem: cartItem.quantity
                        }, cartItem.product.product_id))
                ]
            }),
            cart.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 flex flex-col gap-y-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-[15px]",
                                children: "Полная цена"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-[15px] font-medium",
                                children: [
                                    "₴",
                                    " ",
                                    cart.reduce((acc, cartItem)=>acc + Number(cartItem.product.price["1"].slice(0, -2)) * cartItem.quantity, 0)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: " w-full h-10 transition-colors bg-rose-400 hover:bg-rose-500 rounded text-white",
                        onClick: ()=>router.push("/checkout"),
                        children: "Продолжить"
                    })
                ]
            }) : null
        ]
    });
};
/* harmony default export */ const components_Cart_Cart = (Cart_Cart);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs
var dist = __webpack_require__(948);
// EXTERNAL MODULE: ./src/hooks/useDebounce.ts
var useDebounce = __webpack_require__(15750);
;// CONCATENATED MODULE: ./src/components/SearchModal/FindProductItem.tsx



const FindProductItem = (props)=>{
    const { product } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: "flex gap-x-4 h-auto w-full py-4 border-b items-center active:bg-gray-200 transition-colors hover:bg-gray-100",
        href: `/products/${product.product_id}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-20 w-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: product.photo_origin ? `https://poster-shop.joinposter.com${product.photo}` : "/flower_image.jpg",
                    // src="/flower_image.jpg"
                    alt: "Product Image",
                    width: 0,
                    height: 0,
                    sizes: "100vw",
                    style: {
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        objectPosition: "center center",
                        aspectRatio: "1 / 1"
                    },
                    placeholder: "blur",
                    blurDataURL: "/flower_image.jpg",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-medium text-lg",
                        children: product.product_name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "font-semibold text-[16px]",
                        children: [
                            "₴ ",
                            product.price["1"].slice(0, -2)
                        ]
                    })
                ]
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/SearchModal/SearchModal.tsx






const SearchModal = (props)=>{
    const { onClose, isOpen } = props;
    const [searchValue, setSearchValue] = (0,react_.useState)("");
    const debouncedSearchValue = (0,useDebounce/* default */.Z)(searchValue, 300);
    const products = (0,hooks/* useAppSelector */.C)((state)=>state.productsReducer.products);
    const [filteredProducts, setFilteredProducts] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    }, [
        isOpen
    ]);
    (0,react_.useEffect)(()=>{
        if (debouncedSearchValue.trim().length <= 0) {
            setFilteredProducts([]);
            console.log("here");
        } else {
            const filtered = products.filter((product)=>product.product_name.toLowerCase().trim().includes(debouncedSearchValue.toLowerCase().trim()));
            setFilteredProducts(filtered);
        }
    }, [
        debouncedSearchValue
    ]);
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 z-50 backdrop-blur-sm",
        onClick: ()=>{
            setSearchValue("");
            onClose();
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: (e)=>e.stopPropagation(),
            className: "bg-white py-6 px-20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex items-center gap-x-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MagnifyingGlassIcon/* default */.Z, {
                                className: "h-5 w-5 text-gray-500"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "search",
                            className: "block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
                            placeholder: "Поиск товара...",
                            value: searchValue,
                            onChange: (event)=>setSearchValue(event.target.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: ()=>{
                                setSearchValue("");
                                onClose();
                            },
                            className: "transition-colors hover:text-rose-400 cursor-pointer",
                            children: "Отмена"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "text-lg font-medium leading-10",
                            children: [
                                "Результаты поиска ",
                                filteredProducts.length > 0 && `(${filteredProducts.length})`
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col max-h-[300px] overflow-y-auto",
                            children: filteredProducts.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Товаров не найдено"
                            }) : filteredProducts.map((findProduct)=>/*#__PURE__*/ jsx_runtime_.jsx(FindProductItem, {
                                    product: findProduct
                                }, findProduct.product_id))
                        })
                    ]
                })
            ]
        })
    });
};


;// CONCATENATED MODULE: ./src/components/Header/HeaderMain/HeaderMain.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 















const HeaderMain_HeaderMain = ()=>{
    const [isOpenSearchModal, setOpenSearchModal] = (0,react_.useState)(false);
    const [isVisible, setVisible] = (0,react_.useState)(false);
    const burgerContentRef = (0,react_.useRef)(null);
    const [isOpenCart, setOpenCart] = (0,react_.useState)(false);
    const cart = (0,hooks/* useAppSelector */.C)((state)=>state.cartReducer).cart;
    const handlerBurgerVisible = ()=>{
        setVisible((prev)=>!prev);
    };
    (0,react_.useEffect)(()=>{
        if (!isVisible) {
            document.body.style.overflow = "visible";
            burgerContentRef.current?.classList.remove("burger-content-visible");
        } else {
            document.body.style.overflow = "hidden";
            burgerContentRef.current?.classList.add("burger-content-visible");
        }
    }, [
        isVisible
    ]);
    (0,react_.useEffect)(()=>{
        if (isOpenSearchModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [
        isOpenSearchModal
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header-main",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-main-mobile-left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                        className: "h-6 w-6 text-gray-400",
                        onClick: handlerBurgerVisible
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_HeaderBurgerContent_HeaderBurgerContent, {
                        ref: burgerContentRef,
                        setVisible: setVisible,
                        isVisible: isVisible
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MagnifyingGlassIcon/* default */.Z, {
                        className: "h-6 w-6 text-gray-400",
                        onClick: ()=>setOpenSearchModal(true)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchModal, {
                        onClose: ()=>setOpenSearchModal(false),
                        isOpen: isOpenSearchModal
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                role: "link",
                className: "header-main-logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/clumba-logo.svg",
                    alt: "Logo",
                    width: 90,
                    height: 40,
                    priority: true,
                    placeholder: "blur",
                    blurDataURL: "/clumba-logo.svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderMain_HeaderNav_HeaderNav, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-buttons",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MagnifyingGlassIcon/* default */.Z, {
                        className: "h-6 w-6 text-gray-400",
                        onClick: ()=>setOpenSearchModal(true)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchModal, {
                        onClose: ()=>setOpenSearchModal(false),
                        isOpen: isOpenSearchModal
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(UserIcon/* default */.Z, {
                        className: "h-6 w-6 text-gray-400",
                        onClick: async ()=>{
                            await (0,dist/* fetchSignInMethodsForEmail */.Nr)((0,node_esm/* getAuth */.v0)(), "apowhymsa@gmail.com").then((methods)=>{
                                console.log(methods);
                            });
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "header-main-divider"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ShoppingCartIcon/* default */.Z, {
                                className: [
                                    "transition-colors cart-icon h-6 w-6 text-gray-400",
                                    isOpenCart && "text-rose-400"
                                ].join(" "),
                                onClick: ()=>setOpenCart((prev)=>!prev)
                            }),
                            cart.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "pointer-events-none absolute flex items-center justify-center text-xs -top-2 -right-2 w-5 h-5 bg-rose-400 text-white rounded-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "h-[13px]",
                                    children: cart.length
                                })
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Cart_Cart, {
                        isOpen: isOpenCart,
                        setOpen: setOpenCart
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_HeaderMain_HeaderMain = (HeaderMain_HeaderMain);


/***/ }),

/***/ 58279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderTop_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34071);
/* harmony import */ var _HeaderTop_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeaderTop_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(948);
/* harmony import */ var _utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87464);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50426);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43285);
/* harmony import */ var _contexts_ModalContext_ModalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37034);
/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1160);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const HeaderTop = ()=>{
    const { info } = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { isLoading, isLogged } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
    const { isOpen, setOpen } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_ModalContext_ModalContext__WEBPACK_IMPORTED_MODULE_6__/* .ModalContext */ .t);
    console.log(isLoading);
    function getCookie(name) {
        var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return v ? v[2] : null;
    }
    const signOutHandler = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signOut */ .w7)(_utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I).then(()=>localStorage.removeItem("authUserId"));
        info("Успешный выход с аккаунта");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "header-top",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "header-top-lang text flex-1",
                children: "UA"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text flex-none",
                children: 'Цветочный магазин "Clumba"'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header-top-buttons flex flex-1 justify-end gap-x-3 items-center",
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    inline: true,
                    className: "w-12"
                }) : isLogged ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text",
                    role: "button",
                    onClick: signOutHandler,
                    children: "Выйти"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text",
                            role: "button",
                            onClick: ()=>setOpen(true),
                            children: "Создать аккаунт"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "header-top-divider"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text",
                            role: "button",
                            onClick: ()=>setOpen(true),
                            children: "Войти"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTop);


/***/ }),

/***/ 50572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ModalSignUp_ModalAuth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/contexts/ModalContext/ModalContext.ts
var ModalContext = __webpack_require__(37034);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(91867);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/KeyIcon.js
var KeyIcon = __webpack_require__(37300);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(57048);
;// CONCATENATED MODULE: ./src/components/UI/InputField/InputField.tsx


const InputField = (props)=>{
    const { labelText, leftIcon, register, options, error, ...inputProps } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: inputProps.id,
                className: `mb-1 block text-sm font-bold text-gray-700 ${error ? 'after:ml-0.5 after:text-red-500 after:content-["*"]' : null}`,
                children: labelText
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    leftIcon ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5",
                        children: leftIcon
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: `block w-full rounded-md shadow-sm ${leftIcon ? "pl-10" : "pl-4"} ${error ? "border-red-300 focus:border-red-300 focus:ring focus:ring-red-200" : "border-gray-300 focus:border-primary-400 focus:ring focus:ring-primary-200"}  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500`,
                        ...inputProps,
                        ...register(inputProps.name, options)
                    })
                ]
            }),
            error ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-1 text-sm text-red-500",
                children: error.message
            }) : null
        ]
    });
};
/* harmony default export */ const InputField_InputField = (InputField);

// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./src/utils/firebase/firebase.ts
var firebase = __webpack_require__(87464);
// EXTERNAL MODULE: ./src/hooks/useToast.ts
var useToast = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/@firebase/firestore/dist/index.node.mjs + 1 modules
var index_node = __webpack_require__(34759);
;// CONCATENATED MODULE: ./src/components/ModalSignUp/ModalSignUpStep1.tsx










const ModalSignUpStep1 = (props)=>{
    const [isLoading, setLoading] = (0,react_.useState)(false);
    const { info, error } = (0,useToast/* default */.Z)();
    const { onClose, setStep, setUserFields, userFields } = props;
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const onClickRegisterContinueHandler = async (data, event)=>{
        event?.preventDefault();
        setLoading(true);
        const querySearchUserByEmail = (0,index_node/* query */.IO)((0,index_node/* collection */.hJ)(firebase.db, "users"), (0,index_node/* where */.ar)("email", "==", userFields?.email));
        const querySnapshot = await (0,index_node/* getDocs */.PL)(querySearchUserByEmail);
        if (querySnapshot.empty) {
            setStep(2);
        } else {
            error("Учётная запись с указаным электронным адресом существует!");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute top-1/2 left-1/2 bg-white h-fit w-[500px] -translate-x-1/2 -translate-y-1/2 px-9 py-9 rounded",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "btn-close-modal flex absolute right-5 top-5 cursor-pointer transition-transform hover:rotate-180 items-center justify-center",
                onClick: onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                    className: "h-6 w-6 text-black"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-center font-semibold text-xl",
                children: "Создание аккаунта - Шаг 1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-container flex flex-col gap-y-5 my-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "default-section flex flex-col gap-y-5 my-3",
                    onSubmit: handleSubmit(onClickRegisterContinueHandler),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                            labelText: "Электронная почта",
                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(EnvelopeIcon/* default */.Z, {
                                className: "h-5 w-5 text-gray-500"
                            }),
                            placeholder: "Пример: your@email.com",
                            id: "email",
                            name: "email",
                            type: "email",
                            defaultValue: userFields?.email || "",
                            onChangeCapture: (e)=>{
                                setUserFields({
                                    ...userFields,
                                    email: e.target.value
                                });
                            },
                            register: register,
                            options: {
                                required: {
                                    value: true,
                                    message: "Поле обязательное для заполнения"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Пароль должен иметь больше чем 5 символов"
                                }
                            },
                            error: errors.email
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                            labelText: "Пароль",
                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(KeyIcon/* default */.Z, {
                                className: "h-5 w-5 text-gray-500"
                            }),
                            placeholder: "Пароль",
                            id: "password",
                            name: "password",
                            type: "password",
                            defaultValue: userFields?.password || "",
                            onChangeCapture: (e)=>{
                                setUserFields({
                                    ...userFields,
                                    password: e.target.value
                                });
                            },
                            register: register,
                            options: {
                                required: {
                                    value: true,
                                    message: "Поле обязательное для заполнения"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Пароль должен иметь больше чем 5 символов"
                                }
                            },
                            error: errors.password
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "w-full h-10 px-4 transition-colors text-white bg-rose-400 hover:bg-rose-500 disabled:cursor-not-allowed disabled:border-rose-400 disabled:bg-primary-400",
                            children: isLoading ? "Загрузка..." : "Продолжить"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex justify-end items-center gap-x-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Есть аккаунт?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "underline text-blue-400 cursor-pointer",
                        onClick: ()=>setStep(3),
                        children: "Войти"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ModalSignUp_ModalSignUpStep1 = (ModalSignUpStep1);

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(90880);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserIcon.js
var UserIcon = __webpack_require__(78750);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs
var dist = __webpack_require__(948);
;// CONCATENATED MODULE: ./src/components/ModalSignUp/ModalSignUpStep2.tsx












const ModalSignUpStep2 = (props)=>{
    const { info, error } = (0,useToast/* default */.Z)();
    const [isLoading, setLoading] = (0,react_.useState)(false);
    const { onClose, setStep, userFields, setUserFields } = props;
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const onClickRegisterFinishHandler = async (data, event)=>{
        setLoading(true);
        const querySearchUserByPhone = (0,index_node/* query */.IO)((0,index_node/* collection */.hJ)(firebase.db, "users"), (0,index_node/* where */.ar)("phone", "==", userFields?.phone));
        const querySnapshot = await (0,index_node/* getDocs */.PL)(querySearchUserByPhone);
        if (querySnapshot.empty) {
            const requestBody = {
                client_name: userFields?.name,
                client_groups_id_client: 1,
                phone: userFields?.phone
            };
            (0,dist/* createUserWithEmailAndPassword */.Xb)(firebase/* auth */.I, userFields?.email, userFields?.password).then(()=>{
                fetch("/api/user", {
                    method: "POST",
                    body: JSON.stringify(requestBody)
                }).then(async ()=>{
                    await (0,index_node/* addDoc */.ET)((0,index_node/* collection */.hJ)(firebase.db, "users"), {
                        ...userFields
                    }).then((value)=>{
                        localStorage.setItem("authUserId", value.id);
                    });
                    info("Учётная запись успешно создана, вход выполнен автоматически!");
                }).catch((err)=>{
                    const currentUser = firebase/* auth */.I.currentUser;
                    currentUser?.delete();
                    error(`Ошибка записи в POSTER. ErrorMessage: ${err.message}. ErrorCode: ${err.code}`);
                }).finally(()=>{
                    onClose();
                    setLoading(false);
                });
            });
        } else {
            //TODO setError
            error("Учётная запись с указаным номером телефона существует!");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute top-1/2 left-1/2 bg-white h-fit w-[500px] -translate-x-1/2 -translate-y-1/2 px-9 py-9 rounded",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "btn-close-modal flex absolute right-5 top-5 cursor-pointer transition-transform hover:rotate-180 items-center justify-center",
                onClick: onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                    className: "h-6 w-6 text-black"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-center font-semibold text-xl",
                children: "Создание аккаунта - Шаг 2"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "modal-container flex flex-col gap-y-5 my-4",
                onSubmit: handleSubmit(onClickRegisterFinishHandler),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                        labelText: "Имя и фамилия",
                        leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(UserIcon/* default */.Z, {
                            className: "h-5 w-5 text-gray-500"
                        }),
                        placeholder: "Пример: Влад Попов",
                        id: "name",
                        name: "name",
                        type: "text",
                        defaultValue: userFields?.name || "",
                        onChangeCapture: (e)=>{
                            setUserFields({
                                ...userFields,
                                name: e.target.value
                            });
                        },
                        register: register,
                        options: {
                            required: {
                                value: true,
                                message: "Поле обязательное для заполнения"
                            },
                            minLength: {
                                value: 6,
                                message: "Поле должно содержать не менее 6-ти символов"
                            }
                        },
                        error: errors.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                        labelText: "Номер телефона",
                        leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(PhoneIcon/* default */.Z, {
                            className: "h-5 w-5 text-gray-500"
                        }),
                        placeholder: "Пример: +380...",
                        id: "phone",
                        name: "phone",
                        type: "tel",
                        defaultValue: userFields?.phone || "",
                        onChangeCapture: (e)=>{
                            setUserFields({
                                ...userFields,
                                phone: e.target.value
                            });
                        },
                        register: register,
                        options: {
                            required: {
                                value: true,
                                message: "Поле обязательное для заполнения"
                            }
                        },
                        error: errors.phone
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                        labelText: "Пароль",
                        leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(KeyIcon/* default */.Z, {
                            className: "h-5 w-5 text-gray-500"
                        }),
                        placeholder: "Пароль",
                        id: "password",
                        name: "password",
                        type: "password",
                        defaultValue: userFields?.password || "",
                        onChangeCapture: (e)=>{
                            setUserFields({
                                ...userFields,
                                password: e.target.value
                            });
                        },
                        register: register,
                        options: {
                            required: {
                                value: true,
                                message: "Поле обязательное для заполнения"
                            },
                            minLength: {
                                value: 6,
                                message: "Пароль должен иметь больше чем 5 символов"
                            }
                        },
                        error: errors.password
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        disabled: isLoading,
                        className: "w-full h-10 px-4 transition-colors text-white bg-rose-400 hover:bg-rose-500 disabled:cursor-not-allowed disabled:border-rose-400 disabled:bg-primary-400",
                        children: isLoading ? "Загрузка..." : "Завершить регистрацию"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ModalSignUp_ModalSignUpStep2 = (ModalSignUpStep2);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(45996);
;// CONCATENATED MODULE: ./src/components/ModalSignUp/ModalSignIn.tsx











const ModalSignIn = (props)=>{
    const { error, info } = (0,useToast/* default */.Z)();
    const [isLoading, setLoading] = (0,react_.useState)(false);
    const { onClose, onClick, userFields, setStep, setUserFields } = props;
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const onClickLoginHandler = async ()=>{
        console.log(userFields);
        setLoading(true);
        const querySearchUserByEmail = (0,index_node/* query */.IO)((0,index_node/* collection */.hJ)(firebase.db, "users"), (0,index_node/* where */.ar)("email", "==", userFields?.email), (0,index_node/* where */.ar)("password", "==", userFields?.password));
        const querySnapshot = await (0,index_node/* getDocs */.PL)(querySearchUserByEmail);
        localStorage.setItem("authUserId", querySnapshot.docs[0].id);
        if (!querySnapshot.empty) {
            (0,dist/* signInWithEmailAndPassword */.e5)(firebase/* auth */.I, userFields?.email, userFields?.password).then((userCred)=>{
                console.log(userCred.user.providerData);
                onClose();
                info("Успешный вход в аккаунт!");
            }).catch(()=>error("Ошибка при входе в аккаунт"));
        } else {
            error("Учётной записи с указаными данными не существует!");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute top-1/2 left-1/2 bg-white h-fit w-[500px] -translate-x-1/2 -translate-y-1/2 px-9 py-9 rounded",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "btn-close-modal flex absolute right-5 top-5 cursor-pointer transition-transform hover:rotate-180 items-center justify-center",
                onClick: onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                    className: "h-6 w-6 text-black"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-center font-semibold text-xl",
                children: "Вход в аккаунт"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-container flex flex-col gap-y-5 my-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "default-section flex flex-col gap-y-5 my-3",
                    onSubmit: handleSubmit(onClickLoginHandler),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                            labelText: "Электронная почта",
                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(EnvelopeIcon/* default */.Z, {
                                className: "h-5 w-5 text-gray-500"
                            }),
                            placeholder: "Пример: your@email.com",
                            id: "email",
                            name: "email",
                            type: "email",
                            defaultValue: userFields?.email || "",
                            onChangeCapture: (e)=>{
                                setUserFields({
                                    ...userFields,
                                    email: e.target.value
                                });
                            },
                            register: register,
                            options: {
                                required: {
                                    value: true,
                                    message: "Поле обязательное для заполнения"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Пароль должен иметь больше чем 5 символов"
                                }
                            },
                            error: errors.email
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InputField_InputField, {
                            labelText: "Пароль",
                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(KeyIcon/* default */.Z, {
                                className: "h-5 w-5 text-gray-500"
                            }),
                            placeholder: "Пароль",
                            id: "password",
                            name: "password",
                            type: "password",
                            defaultValue: userFields?.password || "",
                            onChangeCapture: (e)=>{
                                setUserFields({
                                    ...userFields,
                                    password: e.target.value
                                });
                            },
                            register: register,
                            options: {
                                required: {
                                    value: true,
                                    message: "Поле обязательное для заполнения"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Пароль должен иметь больше чем 5 символов"
                                }
                            },
                            error: errors.password
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "w-full h-10 px-4 transition-colors text-white bg-rose-400 hover:bg-rose-500 disabled:cursor-not-allowed disabled:border-rose-400 disabled:bg-primary-400",
                            children: isLoading ? "Загрузка..." : "Войти"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex justify-end items-center gap-x-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Нет аккаунта?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "underline text-blue-400 cursor-pointer",
                        onClick: ()=>setStep(1),
                        children: "Регистрация"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ModalSignUp_ModalSignIn = (ModalSignIn);

;// CONCATENATED MODULE: ./src/components/ModalSignUp/ModalAuth.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const ModalAuth = ()=>{
    const { setOpen, isOpen } = (0,react_.useContext)(ModalContext/* ModalContext */.t);
    const [step, setStep] = (0,react_.useState)(1);
    const [userFields, setUserFields] = (0,react_.useState)({
        name: "",
        phone: "",
        password: "",
        email: "",
        profilePhoto: ""
    });
    (0,react_.useEffect)(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [
        isOpen
    ]);
    const onCloseModalHandler = ()=>{
        setOpen(false);
        setStep(1);
        setUserFields({
            name: "",
            password: "",
            email: "",
            phone: "",
            profilePhoto: ""
        });
    };
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 z-50 backdrop-blur-sm",
        onClick: onCloseModalHandler,
        children: [
            step === 1 && /*#__PURE__*/ jsx_runtime_.jsx(ModalSignUp_ModalSignUpStep1, {
                userFields: userFields,
                setUserFields: setUserFields,
                setStep: setStep,
                onClose: onCloseModalHandler
            }),
            step === 2 && /*#__PURE__*/ jsx_runtime_.jsx(ModalSignUp_ModalSignUpStep2, {
                setStep: setStep,
                onClose: onCloseModalHandler,
                userFields: userFields,
                setUserFields: setUserFields,
                setOpen: setOpen
            }),
            step === 3 && /*#__PURE__*/ jsx_runtime_.jsx(ModalSignUp_ModalSignIn, {
                setStep: setStep,
                onClose: onCloseModalHandler,
                userFields: userFields,
                setUserFields: setUserFields
            })
        ]
    });
};
/* harmony default export */ const ModalSignUp_ModalAuth = (ModalAuth);


/***/ }),

/***/ 50426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isLogged: false,
    isLoading: false
});


/***/ }),

/***/ 4012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50426);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16054);
/* harmony import */ var _utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87464);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const AuthContextProvider = ({ children })=>{
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [isLogged, setLogged] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .onAuthStateChanged */ .Aj)(_utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, async (user)=>{
            if (user) {
                setLogged(true);
            } else {
                setLogged(false);
            }
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V.Provider, {
        value: {
            isLogged,
            isLoading
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContextProvider);


/***/ }),

/***/ 37034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ModalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isOpen: false,
    setOpen: ()=>{}
});


/***/ }),

/***/ 92793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ModalContext_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37034);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ModalContextProvider = ({ children })=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ModalContext_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .ModalContext */ .t.Provider, {
        value: {
            isOpen: isOpen,
            setOpen: setOpen
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContextProvider);


/***/ }),

/***/ 85666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ NavigationContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavigationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([
    false,
    false,
    false
]);


/***/ }),

/***/ 87272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_NavigationContext_NavigationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85666);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const NavigationContextProvider = ({ children })=>{
    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        false,
        false,
        false
    ]);
    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.querySelector(".product-cart")?.classList.remove("cart_active");
        switch(route){
            case "/":
                {
                    setNavigation([
                        true,
                        false,
                        false
                    ]);
                    break;
                }
            case "/products":
                {
                    setNavigation([
                        false,
                        true,
                        false
                    ]);
                    break;
                }
            case "/about-us":
                {
                    setNavigation([
                        false,
                        false,
                        true
                    ]);
                    break;
                }
            default:
                {
                    setNavigation([
                        false,
                        false,
                        false
                    ]);
                    break;
                }
        }
    }, [
        route
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_NavigationContext_NavigationContext__WEBPACK_IMPORTED_MODULE_2__/* .NavigationContext */ .k.Provider, {
        value: navigation,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationContextProvider);


/***/ }),

/***/ 15750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDebounce = (value, delay)=>{
    const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timer = setTimeout(()=>setDebouncedValue(value), delay);
        return ()=>clearTimeout(timer);
    }, [
        value,
        delay
    ]);
    return debouncedValue;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);


/***/ }),

/***/ 1160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34751);

const useToast = ()=>{
    return {
        error: (content, options)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(content, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                ...options
            });
        },
        info: (content, options)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info(content, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                ...options
            });
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToast);


/***/ }),

/***/ 87464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72856);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16054);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34759);



const firebaseConfig = {
    apiKey: "AIzaSyByk7n5JzbWrLCffBJXGiXWnc8MZbe0JqU",
    authDomain: "poster-ecommerce-shop.firebaseapp.com",
    projectId: "poster-ecommerce-shop",
    storageBucket: "poster-ecommerce-shop.appspot.com",
    messagingSenderId: "14361184003",
    appId: "1:14361184003:web:d17bfd870e4195075bcb36",
    measurementId: "G-N1HBV39R4Y"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .getAuth */ .v0)(app);
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .getFirestore */ .ad)(app);


/***/ }),

/***/ 6750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $R: () => (/* binding */ updateQuantity),
/* harmony export */   LL: () => (/* binding */ clearCart),
/* harmony export */   RV: () => (/* binding */ setCart),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ZW: () => (/* binding */ setCartItem),
/* harmony export */   wz: () => (/* binding */ deleteItem)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34759);
/* harmony import */ var _utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87464);



const initialState = {
    cart: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action)=>{
            state.cart = action.payload;
            console.log("payload", action.payload);
        },
        setCartItem: (state, action)=>{
            const userId = localStorage.getItem("authUserId");
            const productIndex = state.cart.findIndex((cartItem)=>cartItem.product.product_id === action.payload.product.product_id);
            if (productIndex !== -1) {
                state.cart[productIndex].quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
            const setDocPromise = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .setDoc */ .pl)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "users", userId.toString()), {
                cart: [
                    ...state.cart
                ]
            }, {
                merge: true
            });
        },
        updateQuantity: (state, action)=>{
            const userId = localStorage.getItem("authUserId");
            const productIndex = state.cart.findIndex((cartItem)=>cartItem.product.product_id === action.payload.product.product_id);
            state.cart[productIndex].quantity = action.payload.quantity;
            const setDocPromise = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .setDoc */ .pl)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "users", userId.toString()), {
                cart: [
                    ...state.cart
                ]
            }, {
                merge: true
            });
        },
        deleteItem: (state, action)=>{
            const userId = localStorage.getItem("authUserId");
            state.cart = state.cart.filter((cartItem)=>cartItem.product.product_id !== action.payload.product.product_id);
            const setDocPromise = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .setDoc */ .pl)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "users", userId.toString()), {
                cart: [
                    ...state.cart
                ]
            }, {
                merge: true
            });
        },
        clearCart: (state)=>{
            const userId = localStorage.getItem("authUserId");
            state.cart = [];
            const setDocPromise = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .setDoc */ .pl)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_utils_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "users", userId.toString()), {
                cart: []
            }, {
                merge: true
            });
        }
    }
});
const { setCartItem, updateQuantity, deleteItem, clearCart, setCart } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 98953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DG: () => (/* binding */ setCategories),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export categoriesSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    categories: []
};
const categoriesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action)=>{
            state.categories = action.payload;
        }
    }
});
const { setCategories } = categoriesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoriesSlice.reducer);


/***/ }),

/***/ 8756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L$: () => (/* binding */ setComments),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports commentsSlice, addComment */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    comments: []
};
const commentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action)=>{
            state.comments = action.payload;
        },
        addComment: (state, action)=>{
            state.comments.push(action.payload);
        }
    }
});
const { setComments, addComment } = commentsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsSlice.reducer);


/***/ }),

/***/ 72285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 1923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RU: () => (/* binding */ setProducts),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ft: () => (/* binding */ filterProducts)
/* harmony export */ });
/* unused harmony export productsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    products: [],
    filteredProducts: []
};
const productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action)=>{
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        filterProducts: (state, action)=>{
            state.filteredProducts = [
                ...state.products
            ];
            // SORT
            switch(action.payload.sortFilter){
                case "1":
                    {
                        state.filteredProducts = [
                            ...state.products
                        ];
                        break;
                    }
                case "2":
                    {
                        state.filteredProducts = state.filteredProducts.reverse();
                        break;
                    }
                case "3":
                    {
                        state.filteredProducts = state.filteredProducts.sort((a, b)=>{
                            if (Number(a.price["1"].slice(0, -2)) < Number(b.price["1"].slice(0, -2))) {
                                return -1;
                            }
                            if (Number(a.price["1"].slice(0, -2)) > Number(b.price["1"].slice(0, -2))) {
                                return 1;
                            }
                            return 0;
                        });
                        break;
                    }
                case "4":
                    {
                        state.filteredProducts = state.filteredProducts.sort((a, b)=>{
                            if (Number(a.price["1"].slice(0, -2)) > Number(b.price["1"].slice(0, -2))) {
                                return -1;
                            }
                            if (Number(a.price["1"].slice(0, -2)) < Number(b.price["1"].slice(0, -2))) {
                                return 1;
                            }
                            return 0;
                        });
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            // PRICE
            state.filteredProducts = state.filteredProducts.filter((product)=>{
                const price = Number(product.price["1"].slice(0, -2));
                return price >= action.payload.priceFilter[0] && price <= action.payload.priceFilter[1];
            });
            // CATEGORIES
            if (action.payload.categoriesFilter[0] === "") {
                if (action.payload.categoriesFilter.slice(1).length > 0) {
                    state.filteredProducts = state.filteredProducts.filter((product)=>{
                        return action.payload.categoriesFilter.includes(product.menu_category_id);
                    });
                }
            } else {
                if (action.payload.categoriesFilter.length > 0) {
                    state.filteredProducts = state.filteredProducts.filter((product)=>{
                        return action.payload.categoriesFilter.includes(product.menu_category_id);
                    });
                }
            }
        }
    }
});
const { setProducts, filterProducts } = productsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsSlice.reducer);


/***/ }),

/***/ 94050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./src/utils/store/productSlice.ts
var productSlice = __webpack_require__(1923);
// EXTERNAL MODULE: ./src/utils/store/categoriesSlice.ts
var categoriesSlice = __webpack_require__(98953);
// EXTERNAL MODULE: ./src/utils/store/cartSlice.ts
var cartSlice = __webpack_require__(6750);
// EXTERNAL MODULE: ./src/utils/store/commentsSlice.ts
var commentsSlice = __webpack_require__(8756);
;// CONCATENATED MODULE: ./src/utils/store/store.ts





const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        productsReducer: productSlice/* default */.ZP,
        categoriesReducer: categoriesSlice/* default */.ZP,
        cartReducer: cartSlice/* default */.ZP,
        commentsReducer: commentsSlice/* default */.ZP
    },
    devTools: "production" !== "production"
});

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/utils/store/provider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Providers({ children }) {
    (0,react_.useEffect)(()=>{}, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}


/***/ }),

/***/ 34124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Comfortaa","arguments":[{"subsets":["cyrillic"]}],"variableName":"comfarta"}
var target_path_src_app_layout_tsx_import_Comfortaa_arguments_subsets_cyrillic_variableName_comfarta_ = __webpack_require__(40898);
var target_path_src_app_layout_tsx_import_Comfortaa_arguments_subsets_cyrillic_variableName_comfarta_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Comfortaa_arguments_subsets_cyrillic_variableName_comfarta_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./src/components/Header/Header.scss
var Header = __webpack_require__(36013);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/Header/HeaderTop/HeaderTop.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\components\Header\HeaderTop\HeaderTop.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const HeaderTop = (__default__);
;// CONCATENATED MODULE: ./src/components/Header/HeaderMain/HeaderMain.tsx

const HeaderMain_proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\components\Header\HeaderMain\HeaderMain.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: HeaderMain_esModule, $$typeof: HeaderMain_$$typeof } = HeaderMain_proxy;
const HeaderMain_default_ = HeaderMain_proxy.default;


/* harmony default export */ const HeaderMain = (HeaderMain_default_);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx




const Header_Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        id: "header",
        className: "h-fit",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderMain, {})
        ]
    });
};
/* harmony default export */ const components_Header_Header = (Header_Header);

;// CONCATENATED MODULE: ./src/contexts/NavigationContext/NavigationContextProvider.tsx

const NavigationContextProvider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\contexts\NavigationContext\NavigationContextProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: NavigationContextProvider_esModule, $$typeof: NavigationContextProvider_$$typeof } = NavigationContextProvider_proxy;
const NavigationContextProvider_default_ = NavigationContextProvider_proxy.default;


/* harmony default export */ const NavigationContextProvider = (NavigationContextProvider_default_);
;// CONCATENATED MODULE: ./src/utils/store/provider.tsx

const provider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\utils\store\provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: provider_esModule, $$typeof: provider_$$typeof } = provider_proxy;
const provider_default_ = provider_proxy.default;


/* harmony default export */ const provider = (provider_default_);
// EXTERNAL MODULE: ./src/components/Footer/Footer.scss
var Footer = __webpack_require__(6252);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx




const Footer_Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        id: "footer",
        className: "flex justify-around h-fit gap-x-3 bg-gray-900 text-white px-10 py-10 flex-wrap",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-col justify-around h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "font-semibold text-[#fb7185]",
                            children: "Карта сайта"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Главная"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/products?sort=1",
                                children: "Товары"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about-us",
                                children: "О нас"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-around h-[110px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-semibold text-[#fb7185]",
                        children: "Контактная информация"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "tel:+380680000000",
                        children: "+380680000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "г. Кривой Рог, Улица 1А."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-semibold text-[#fb7185]",
                        children: "Мы в социальных сетях"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://www.instagram.com/clumba.krrog/",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/icons8-instagram.svg",
                            alt: "Instagram Logo",
                            width: 48,
                            height: 48
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                width: "600",
                className: "rounded-md",
                height: "150",
                style: {
                    border: 0
                },
                loading: "lazy",
                allowFullScreen: true,
                referrerPolicy: "no-referrer-when-downgrade",
                src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1889.9682173759988!2d33.42501668635718!3d47.939890837740315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db21dd49d3a0b7%3A0xe546264d67239d4d!2z0JzQsNCz0LDQt9C40L0gItCa0LvRg9C80LHQsCI!5e0!3m2!1sru!2sua!4v1696154248083!5m2!1sru!2sua"
            })
        ]
    });
};
/* harmony default export */ const components_Footer_Footer = (Footer_Footer);

;// CONCATENATED MODULE: ./src/contexts/AuthContext/AuthContextProvider.tsx

const AuthContextProvider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\contexts\AuthContext\AuthContextProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthContextProvider_esModule, $$typeof: AuthContextProvider_$$typeof } = AuthContextProvider_proxy;
const AuthContextProvider_default_ = AuthContextProvider_proxy.default;


/* harmony default export */ const AuthContextProvider = (AuthContextProvider_default_);
;// CONCATENATED MODULE: ./src/components/ModalSignUp/ModalAuth.tsx

const ModalAuth_proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\components\ModalSignUp\ModalAuth.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ModalAuth_esModule, $$typeof: ModalAuth_$$typeof } = ModalAuth_proxy;
const ModalAuth_default_ = ModalAuth_proxy.default;


/* harmony default export */ const ModalAuth = (ModalAuth_default_);
;// CONCATENATED MODULE: ./src/contexts/ModalContext/ModalContextProvider.tsx

const ModalContextProvider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Projects\poster-web-shop\src\contexts\ModalContext\ModalContextProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ModalContextProvider_esModule, $$typeof: ModalContextProvider_$$typeof } = ModalContextProvider_proxy;
const ModalContextProvider_default_ = ModalContextProvider_proxy.default;


/* harmony default export */ const ModalContextProvider = (ModalContextProvider_default_);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(91569);
;// CONCATENATED MODULE: ./src/app/layout.tsx













function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: [
                (target_path_src_app_layout_tsx_import_Comfortaa_arguments_subsets_cyrillic_variableName_comfarta_default()).className
            ].join(" "),
            children: /*#__PURE__*/ jsx_runtime_.jsx(provider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationContextProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AuthContextProvider, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalContextProvider, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Header_Header, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                    id: "main",
                                    className: "flex-1",
                                    children: children
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer_Footer, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(ModalAuth, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_toastify_esm/* ToastContainer */.Ix, {})
                            ]
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ }),

/***/ 14940:
/***/ (() => {



/***/ }),

/***/ 6252:
/***/ (() => {



/***/ }),

/***/ 36013:
/***/ (() => {



/***/ }),

/***/ 103:
/***/ (() => {



/***/ }),

/***/ 94638:
/***/ (() => {



/***/ }),

/***/ 3218:
/***/ (() => {



/***/ }),

/***/ 34071:
/***/ (() => {



/***/ })

};
;