exports.id = 165;
exports.ids = [165];
exports.modules = {

/***/ 85713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Products_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66134);
/* harmony import */ var _Products_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Products_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72285);
/* harmony import */ var _utils_store_cartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50426);
/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1160);









const ProductItem = ({ product, isButtonVisible = true })=>{
    const { info, error } = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { isLoading, isLogged } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_contexts_AuthContext_AuthContext__WEBPACK_IMPORTED_MODULE_7__/* .AuthContext */ .V);
    const dispatch = (0,_utils_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const cart = (0,_utils_store_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.cartReducer).cart;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product-item",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "product-image",
                href: `/products/${product.product_id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: product.photo_origin ? `https://poster-shop.joinposter.com${product.photo_origin}` : "/flower_image.jpg",
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/products/${product.product_id}`,
                        className: "product-name",
                        title: product.product_name,
                        children: product.product_name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "product-price",
                        children: [
                            "₴ ",
                            product.price["1"].slice(0, -2)
                        ]
                    })
                ]
            }),
            isButtonVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: async ()=>{
                    if (!isLogged) {
                        error("Чтобы добавить товар в корзину, войдите в учётную запись!");
                    } else {
                        dispatch((0,_utils_store_cartSlice__WEBPACK_IMPORTED_MODULE_5__/* .setCartItem */ .ZW)({
                            product: product,
                            quantity: 1
                        }));
                        info("Товар успешно добавлен в корзину");
                    }
                },
                className: "border border-rose-400 text-rose-400 px-4 py-2 rounded transition-colors hover:bg-rose-400 hover:text-white",
                children: "Добавить в корзину"
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);


/***/ }),

/***/ 89025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43285);


const ProductItemSkeleton = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product-item",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-image",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    style: {
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px",
                        objectPosition: "center center",
                        aspectRatio: "1 / 1"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItemSkeleton);


/***/ }),

/***/ 63081:
/***/ (() => {



/***/ }),

/***/ 66134:
/***/ (() => {



/***/ })

};
;