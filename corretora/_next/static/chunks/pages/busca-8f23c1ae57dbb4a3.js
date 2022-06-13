(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [209],
  {
    547: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/busca",
        function () {
          return r(5564);
        },
      ]);
    },
    5681: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = r(5893),
        s = r(9008),
        i = r.n(s);
      function a() {
        return (0, t.jsx)("footer", {
          className: "footer",
          children: (0, t.jsx)("p", {
            children: "Corretora\xae Todos os direitos reservados",
          }),
        });
      }
      var c = r(1664),
        o = r.n(c),
        l = r(7294),
        u = r(2591);
      function d() {
        var e = (0, l.useState)(!1),
          n = e[0],
          r = e[1];
        return (0, t.jsxs)("header", {
          className: "header",
          children: [
            (0, t.jsx)(u.Z, {
              openModal: n,
              handleClose: function () {
                return r(!1);
              },
              children: (0, t.jsx)("p", { children: "Login" }),
            }),
            (0, t.jsx)("div", {}),
            (0, t.jsx)("nav", {
              className: "nav-menu",
              children: (0, t.jsxs)("ul", {
                className: "menu-list",
                children: [
                  (0, t.jsx)("li", {
                    children: (0, t.jsx)(o(), { href: "/", children: "Home" }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsx)("a", {
                      onClick: function () {
                        return r(!0);
                      },
                      href: "#",
                      children: "Login",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function p(e) {
        var n = e.children;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(i(), {
              children: [
                (0, t.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, t.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "crossorigin",
                }),
                (0, t.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap",
                  rel: "stylesheet",
                }),
              ],
            }),
            (0, t.jsx)(d, {}),
            n,
            (0, t.jsx)(a, {}),
          ],
        });
      }
    },
    2591: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = r(5893),
        s = r(7294);
      function i(e) {
        var n = e.children,
          r = e.openModal,
          i = e.handleClose,
          a = (0, s.useState)(!1),
          c = a[0],
          o = a[1],
          l = function () {
            o(!1), i();
          },
          u = (0, s.useCallback)(function (e) {
            "Escape" === e.key && (e.preventDefault(), l());
          }, []);
        return (
          (0, s.useEffect)(
            function () {
              return (
                o(r),
                document.addEventListener("keydown", u, !1),
                function () {
                  document.removeEventListener("keydown", u, !1);
                }
              );
            },
            [r]
          ),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: "filter-modal ".concat(
                  c ? "slide-bottom" : "slide-top"
                ),
                children: n,
              }),
              (0, t.jsx)("div", {
                className: "overlay ".concat(c ? "fade-in" : "fade-out"),
                onClick: l,
              }),
            ],
          })
        );
      }
    },
    5564: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return b;
          },
          default: function () {
            return N;
          },
        });
      var t = r(5893),
        s = r(7294),
        i = r(1664),
        a = r.n(i),
        c = r(9008),
        o = r.n(c),
        l = r(5681),
        u = r(1163),
        d = r.n(u);
      function p(e) {
        var n = e.property,
          r = (0, s.useState)(0),
          i = r[0],
          a = r[1];
        return (0, t.jsx)(
          "div",
          {
            onClick: function () {
              d().push("/imovel/".concat(n.id));
            },
            className: "card",
            children: (0, t.jsxs)("div", {
              className: "card-details",
              children: [
                (0, t.jsx)("div", {
                  style: {
                    backgroundImage: 'url("./assets/imoveis/'.concat(
                      n.images[i],
                      '")'
                    ),
                  },
                  className: "card-details-top",
                  children: (0, t.jsxs)("div", {
                    className: "interactables",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "side",
                        children: [
                          (0, t.jsx)("div", {
                            onClick: function (e) {
                              e.stopPropagation(),
                                a(function (e) {
                                  return e > 0 ? --e : e;
                                });
                            },
                            className: "side-controllers side-controllers-left",
                          }),
                          (0, t.jsx)("div", {
                            onClick: function (e) {
                              e.stopPropagation(),
                                a(function (e) {
                                  return e < 4 && e < n.images.length - 1
                                    ? ++e
                                    : e;
                                });
                            },
                            className:
                              "side-controllers side-controllers-right",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        children: n.images.map(function (e, n) {
                          return (
                            n < 5 &&
                            (0, t.jsx)(
                              "span",
                              {
                                onClick: function (e) {
                                  e.stopPropagation(), a(n);
                                },
                                className:
                                  n === i ? "circle-selected" : "circle",
                              },
                              n
                            )
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "card-details-bottom",
                  children: [
                    (0, t.jsx)("span", {
                      className: "property-type",
                      children: n.type,
                    }),
                    (0, t.jsx)("h3", { children: n.address.streetName }),
                    (0, t.jsxs)("span", {
                      className: "district",
                      children: [n.address.district, ", ", n.address.city],
                    }),
                    (0, t.jsxs)("div", {
                      className: "card-details-basic-info",
                      children: [
                        (0, t.jsxs)("span", {
                          children: [
                            (0, t.jsx)("i", {
                              className: "fa fa-arrows-h",
                              "aria-hidden": "true",
                            }),
                            n.area,
                            " m",
                            (0, t.jsx)("sup", { children: "2" }),
                          ],
                        }),
                        (0, t.jsxs)("span", {
                          children: [
                            (0, t.jsx)("i", {
                              className: "fa fa-bed",
                              "aria-hidden": "true",
                            }),
                            n.bedroomsQty,
                            " quartos",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "card-details-price",
                      children: [
                        (0, t.jsx)("span", { children: "Aluguel" }),
                        (0, t.jsx)("span", { children: n.rentPrice }),
                        (0, t.jsxs)("div", {
                          className: "card-details-price-total",
                          children: ["Total ", n.totalPrice],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          n.address.streetName
        );
      }
      var f = r(2591);
      function h() {
        return (0, t.jsx)("div", { className: "card card-loading" });
      }
      var m = new Map([
        ["apartment", "Apartamento"],
        ["house", "Casa"],
        ["condominium", "Casa de Condom\xednio"],
        ["kitnet", "Kitnet"],
      ]);
      function j(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
        return t;
      }
      function x(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      function y(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            t.forEach(function (n) {
              x(e, n, r[n]);
            });
        }
        return e;
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return j(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return j(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return j(e, n);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var g = { acquisitionType: "rent", propertyType: [] },
        b = !0;
      function N(e) {
        var n = e.propertiesMapped,
          r = (0, s.useState)(!1),
          i = r[0],
          c = r[1],
          l = (0, s.useState)([]),
          u = l[0],
          d = l[1],
          j = (0, s.useState)(!1),
          x = j[0],
          b = j[1],
          N = (0, s.useState)(g),
          k = N[0],
          C = N[1],
          T = function (e) {
            var n = [];
            C(function (r) {
              return (
                (n = r.propertyType.includes(e.target.value)
                  ? r.propertyType.filter(function (n) {
                      return n !== e.target.value;
                    })
                  : v(r.propertyType).concat([e.target.value])),
                y({}, r, { propertyType: n })
              );
            });
          };
        return (
          (0, s.useEffect)(function () {
            c(!0),
              setTimeout(function () {
                d(n), c(!1);
              }, 2e3);
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o(), {
                children: (0, t.jsx)("title", {
                  children: "Corretora - Busca",
                }),
              }),
              (0, t.jsxs)("div", {
                className: "main-search-content-size",
                children: [
                  (0, t.jsx)(f.Z, {
                    openModal: x,
                    handleClose: function () {
                      return b(!1);
                    },
                    children: (0, t.jsxs)("div", {
                      className: "modal-wrapper",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "modal-tabs",
                          children: [
                            (0, t.jsx)("input", {
                              type: "radio",
                              checked: "rent" === k.acquisitionType,
                              id: "rent",
                              name: "acquisitionType",
                              value: "rent",
                              onChange: function () {
                                return C(function (e) {
                                  return y({}, e, { acquisitionType: "rent" });
                                });
                              },
                            }),
                            (0, t.jsx)("label", {
                              htmlFor: "rent",
                              children: "Alugar",
                            }),
                            (0, t.jsx)("input", {
                              type: "radio",
                              checked: "buy" === k.acquisitionType,
                              id: "buy",
                              name: "acquisitionType",
                              value: "buy",
                              onChange: function () {
                                return C(function (e) {
                                  return y({}, e, { acquisitionType: "buy" });
                                });
                              },
                            }),
                            (0, t.jsx)("label", {
                              htmlFor: "buy",
                              children: "Comprar",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "filter-wrapper",
                          children:
                            (k.acquisitionType,
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("h3", {
                                  children: "Tipo de im\xf3vel",
                                }),
                                (0, t.jsx)("div", {
                                  className: "property-type-inputs",
                                  children: Array.from(m.keys()).map(function (
                                    e
                                  ) {
                                    return (0, t.jsxs)(
                                      "div",
                                      {
                                        className: "input-radio",
                                        children: [
                                          (0, t.jsx)("input", {
                                            type: "radio",
                                            checked: k.propertyType.includes(e),
                                            id: e,
                                            value: e,
                                            onChange: function () {
                                              return {};
                                            },
                                            onClick: T,
                                          }),
                                          (0, t.jsx)("label", {
                                            htmlFor: e,
                                            children: m.get(e),
                                          }),
                                        ],
                                      },
                                      e
                                    );
                                  }),
                                }),
                              ],
                            })),
                        }),
                        (0, t.jsxs)("div", {
                          className: "modal-footer",
                          children: [
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: function () {
                                return C(g);
                              },
                              className: "btn-secondary",
                              children: "Limpar filtros",
                            }),
                            (0, t.jsx)("button", {
                              onClick: function () {
                                b(!1),
                                  c(!0),
                                  setTimeout(function () {
                                    var e = n.filter(function (e) {
                                      return k.propertyType.length > 0
                                        ? k.propertyType.filter(function (n) {
                                            return e.type === m.get(n);
                                          }).length > 0
                                        : e;
                                    });
                                    d(e), c(!1);
                                  }, 2e3);
                              },
                              className: "btn-primary",
                              children: "Filtrar",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("section", {
                    className: "shelf-search",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "header-shelf-search",
                        children: [
                          (0, t.jsx)("nav", {
                            children: (0, t.jsxs)("ul", {
                              children: [
                                (0, t.jsx)("li", {
                                  children: (0, t.jsx)(a(), {
                                    href: "/",
                                    children: "In\xedcio",
                                  }),
                                }),
                                (0, t.jsx)("li", { children: ">" }),
                                (0, t.jsx)("li", { children: "Bel\xe9m, PA" }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("button", {
                            onClick: function () {
                              return b(!0);
                            },
                            className: "btn-filter",
                            children: "Filtrar",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "shelf",
                        children: i
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(h, {}),
                                (0, t.jsx)(h, {}),
                                (0, t.jsx)(h, {}),
                                (0, t.jsx)(h, {}),
                                (0, t.jsx)(h, {}),
                                (0, t.jsx)(h, {}),
                              ],
                            })
                          : (0, t.jsx)(t.Fragment, {
                              children:
                                null === u || void 0 === u
                                  ? void 0
                                  : u.map(function (e, n) {
                                      return (0, t.jsx)(p, { property: e }, n);
                                    }),
                            }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("section", { className: "map-side" }),
                ],
              }),
            ],
          })
        );
      }
      N.getLayout = function (e) {
        return (0, t.jsx)(l.Z, { children: e });
      };
    },
    1163: function (e, n, r) {
      e.exports = r(880);
    },
  },
  function (e) {
    e.O(0, [996, 774, 888, 179], function () {
      return (n = 547), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
