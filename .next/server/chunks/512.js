exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 58512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62945);
/* harmony import */ var _SwiperProduct_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57237);
/* harmony import */ var _SwiperProduct_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SwiperProduct_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63754);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19098);
/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Products_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85713);
/* harmony import */ var _heroicons_react_24_outline_esm_ArrowSmallLeftIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8016);
/* harmony import */ var _heroicons_react_24_outline_esm_ArrowSmallRightIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75683);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Products_ProductItem_ProductItemSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89025);
// Import Swiper React components



// Import Swiper styles







const SwiperProducts = (props)=>{
    const { products, breakpoints, isLoading } = props;
    const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__/* .Swiper */ .tq, {
        style: {
            position: "relative"
        },
        spaceBetween: 25,
        slidesPerView: 4,
        resistanceRatio: 0,
        onSlideChange: ()=>console.log("slide change"),
        onSwiper: (swiper)=>setSwiper(swiper),
        breakpoints: breakpoints,
        children: [
            !isLoading && (products.length > 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                onClick: ()=>swiper?.slidePrev(),
                className: "cursor-pointer left-0 swiper-button-next flex justify-center items-center rounded absolute w-12 h-12 bg-rose-400 transition-colors hover:bg-rose-500 top-2/4 z-20 -translate-y-2/4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ArrowSmallLeftIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    className: "h-6 w-6 text-white"
                })
            }) : null),
            isLoading ? [
                1,
                2,
                3,
                4,
                5,
                6
            ].map((value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
                    style: {
                        height: "auto"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products_ProductItem_ProductItemSkeleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                }, value)) : products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
                    style: {
                        height: "auto"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        product: product,
                        isButtonVisible: false
                    }, product.product_id)
                }, product.product_id)),
            !isLoading && (products.length > 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                onClick: ()=>swiper?.slideNext(),
                className: "cursor-pointer swiper-button-prev flex justify-center items-center rounded absolute w-12 h-12 bg-rose-400 transition-colors hover:bg-rose-500 right-0 top-2/4 z-20 -translate-y-2/4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ArrowSmallRightIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    className: "h-6 w-6 text-white"
                })
            }) : null)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwiperProducts);


/***/ }),

/***/ 57237:
/***/ (() => {



/***/ })

};
;