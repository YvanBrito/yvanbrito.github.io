(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [550],
  {
    6595: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/imovel/[id]",
        function () {
          return n(9808);
        },
      ]);
    },
    5681: function (e, s, n) {
      "use strict";
      n.d(s, {
        Z: function () {
          return m;
        },
      });
      var i = n(5893),
        t = n(9008),
        r = n.n(t);
      function a() {
        return (0, i.jsx)("footer", {
          className: "footer",
          children: (0, i.jsx)("p", {
            children: "Corretora\xae Todos os direitos reservados",
          }),
        });
      }
      var c = n(1664),
        o = n.n(c),
        l = n(7294),
        d = n(2591);
      function h() {
        var e = (0, l.useState)(!1),
          s = e[0],
          n = e[1];
        return (0, i.jsxs)("header", {
          className: "header",
          children: [
            (0, i.jsx)(d.Z, {
              openModal: s,
              handleClose: function () {
                return n(!1);
              },
              children: (0, i.jsx)("p", { children: "Login" }),
            }),
            (0, i.jsx)("div", {}),
            (0, i.jsx)("nav", {
              className: "nav-menu",
              children: (0, i.jsxs)("ul", {
                className: "menu-list",
                children: [
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(o(), { href: "/", children: "Home" }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)("a", {
                      onClick: function () {
                        return n(!0);
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
      function m(e) {
        var s = e.children;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(r(), {
              children: [
                (0, i.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, i.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "crossorigin",
                }),
                (0, i.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap",
                  rel: "stylesheet",
                }),
              ],
            }),
            (0, i.jsx)(h, {}),
            s,
            (0, i.jsx)(a, {}),
          ],
        });
      }
    },
    2591: function (e, s, n) {
      "use strict";
      n.d(s, {
        Z: function () {
          return r;
        },
      });
      var i = n(5893),
        t = n(7294);
      function r(e) {
        var s = e.children,
          n = e.openModal,
          r = e.handleClose,
          a = (0, t.useState)(!1),
          c = a[0],
          o = a[1],
          l = function () {
            o(!1), r();
          },
          d = (0, t.useCallback)(function (e) {
            "Escape" === e.key && (e.preventDefault(), l());
          }, []);
        return (
          (0, t.useEffect)(
            function () {
              return (
                o(n),
                document.addEventListener("keydown", d, !1),
                function () {
                  document.removeEventListener("keydown", d, !1);
                }
              );
            },
            [n]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "filter-modal ".concat(
                  c ? "slide-bottom" : "slide-top"
                ),
                children: s,
              }),
              (0, i.jsx)("div", {
                className: "overlay ".concat(c ? "fade-in" : "fade-out"),
                onClick: l,
              }),
            ],
          })
        );
      }
    },
    9808: function (e, s, n) {
      "use strict";
      n.r(s),
        n.d(s, {
          __N_SSG: function () {
            return N;
          },
          default: function () {
            return k;
          },
        });
      var i = n(5893),
        t = n(2814),
        r = n(9398),
        a = n(9008),
        c = n.n(a),
        o = n(5675),
        l = n.n(o),
        d = n(7294);
      function h(e) {
        var s = e.images,
          n = (0, d.useState)(0),
          t = n[0],
          r = n[1];
        return (0, i.jsxs)("div", {
          className: "carousel",
          children: [
            (0, i.jsx)("div", {
              onClick: function (e) {
                e.stopPropagation(),
                  r(function (e) {
                    return e > 0 ? --e : e;
                  });
              },
              className: "side-controllers side-controllers-left",
            }),
            (0, i.jsx)("div", {
              className: "showcase",
              children: (0, i.jsx)("div", {
                style: {
                  transform: "translateX(calc(".concat(-34 * t, "rem))"),
                },
                className: "esteira",
                children: s.map(function (e, s) {
                  return (0,
                  i.jsx)("div", { className: "frame ".concat(t === s && "frame-selected"), children: (0, i.jsx)(l(), { layout: "fill", alt: "image", src: "corretora/assets/imoveis/".concat(e) }) }, s);
                }),
              }),
            }),
            (0, i.jsx)("div", {
              onClick: function (e) {
                e.stopPropagation(),
                  r(function (e) {
                    return e < s.length - 1 ? ++e : e;
                  });
              },
              className: "side-controllers side-controllers-right",
            }),
          ],
        });
      }
      var m = n(5681),
        u = n(2591),
        x = n(9477),
        p = n(4742),
        j = n(6566),
        v = n(9365);
      function f(e, s, n) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = n),
          e
        );
      }
      function g(e) {
        var s = (0, j.w)(),
          n = s.camera,
          t = s.gl,
          r = (0, d.useRef)();
        return (
          (0, j.x)(function () {
            var e;
            return null === (e = r.current) || void 0 === e
              ? void 0
              : e.update();
          }),
          (0, i.jsx)(
            "orbitControls",
            (function (e) {
              for (var s = 1; s < arguments.length; s++) {
                var n = null != arguments[s] ? arguments[s] : {},
                  i = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  i.forEach(function (s) {
                    f(e, s, n[s]);
                  });
              }
              return e;
            })({ ref: r, target: [0, 0, 0] }, e, { args: [n, t.domElement] })
          )
        );
      }
      function b() {
        var e = (0, j.z)(
          x.TextureLoader,
          "../assets/imoveis/immersive/download.jpg"
        );
        return (0, i.jsxs)("mesh", {
          children: [
            (0, i.jsx)("sphereBufferGeometry", {
              attach: "geometry",
              args: [500, 60, 40],
            }),
            (0, i.jsx)("meshBasicMaterial", {
              attach: "material",
              map: e,
              side: x.BackSide,
            }),
          ],
        });
      }
      function w() {
        return (0, i.jsx)("div", {
          className: "immersive",
          children: (0, i.jsxs)(p.Xz, {
            camera: { position: [0, 0, 0.1] },
            children: [
              (0, i.jsx)(g, {
                enableZoom: !1,
                enablePan: !1,
                enableDamping: !0,
                dampingFactor: 0.2,
                rotateSpeed: -0.5,
              }),
              (0, i.jsx)(d.Suspense, {
                fallback: null,
                children: (0, i.jsx)(b, {}),
              }),
            ],
          }),
        });
      }
      (0, j.e)({ OrbitControls: v.z });
      var N = !0;
      function k(e) {
        var s = e.property,
          n = (0, d.useState)(!1),
          a = n[0],
          o = n[1],
          m = (0, d.useState)(!1),
          x = m[0],
          p = m[1],
          j = (0, d.useState)(0),
          v = j[0],
          f = j[1],
          g = (0, d.useState)(""),
          b = g[0],
          N = g[1];
        return (
          (0, d.useEffect)(function () {
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              navigator.userAgent || navigator.vendor
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              (navigator.userAgent || navigator.vendor).substr(0, 4)
            )
              ? N("api")
              : N("web");
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c(), {
                children: (0, i.jsx)("title", {
                  children: "Corretora - Im\xf3vel",
                }),
              }),
              (0, i.jsxs)(u.Z, {
                openModal: x,
                handleClose: function () {
                  return p(!1);
                },
                children: [
                  (0, i.jsx)("button", {
                    className: "close-immersive",
                    onClick: function () {
                      return p(!1);
                    },
                    children: "Fechar",
                  }),
                  (0, i.jsx)(w, {}),
                ],
              }),
              (0, i.jsx)(u.Z, {
                openModal: a,
                handleClose: function () {
                  return o(!1);
                },
                children: (0, i.jsxs)("div", {
                  className: "actionCard",
                  children: [
                    (0, i.jsx)("h3", { children: "Im\xf3vel concorrido" }),
                    (0, i.jsx)("span", {
                      children:
                        "Este im\xf3vel tem altas chances de ser alugado logo",
                    }),
                    (0, i.jsx)("div", { className: "separator" }),
                    (0, i.jsx)("table", {
                      children: (0, i.jsxs)("tbody", {
                        children: [
                          (0, i.jsxs)("tr", {
                            children: [
                              (0, i.jsx)("td", { children: "Aluguel" }),
                              (0, i.jsx)("td", {
                                className: "tdRight",
                                children: s.rentPrice,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("tr", {
                            children: [
                              (0, i.jsx)("td", { children: "Condom\xednio" }),
                              (0, i.jsx)("td", {
                                className: "tdRight",
                                children: s.condominiumPrice,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("tr", {
                            children: [
                              (0, i.jsx)("td", { children: "IPTU" }),
                              (0, i.jsx)("td", {
                                className: "tdRight",
                                children: s.iptu,
                              }),
                            ],
                          }),
                          (0, i.jsxs)("tr", {
                            children: [
                              (0, i.jsx)("td", {
                                children: "Taxa de servi\xe7o",
                              }),
                              (0, i.jsx)("td", {
                                className: "tdRight",
                                children: s.serviceRate,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", { className: "separator" }),
                    (0, i.jsx)("table", {
                      children: (0, i.jsx)("tbody", {
                        children: (0, i.jsxs)("tr", {
                          children: [
                            (0, i.jsx)("td", { children: "Total" }),
                            (0, i.jsx)("td", {
                              className: "tdTotal",
                              children: s.totalPrice,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)("section", {
                className: "imovel-section",
                children: [
                  (0, i.jsx)("div", {
                    className: "top",
                    children: (0, i.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "title",
                          children: [
                            (0, i.jsxs)("span", {
                              className: "main",
                              children: [
                                s.address.streetName,
                                ", ",
                                s.address.number,
                                " ",
                              ],
                            }),
                            (0, i.jsxs)("span", {
                              className: "subtitle",
                              children: [
                                s.address.district,
                                ", ",
                                s.address.city,
                                " -",
                                " ",
                                s.address.stateInitials,
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "priceBtn",
                          onClick: function () {
                            return o(!0);
                          },
                          children: [
                            (0, i.jsx)("span", {
                              className: "price",
                              children: s.totalPrice,
                            }),
                            (0, i.jsx)("div", {
                              className: "triangle",
                              children: (0, i.jsx)(l(), {
                                width: 15,
                                height: 15,
                                alt: "image",
                                src: "/assets/icons/icon-question-64.png",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "preview",
                    children: (function () {
                      switch (v) {
                        case 0:
                          return (0, i.jsx)(h, { images: s.images });
                        case 1:
                          return (0, i.jsx)("div", { children: "Teste" });
                        case 2:
                          return (0, i.jsx)("div", { children: "Mapa" });
                        default:
                          return (0, i.jsx)("div", { children: "Undefined" });
                      }
                    })(),
                  }),
                  (0, i.jsx)("div", {
                    className: "bottom",
                    children: (0, i.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "btn-preview-group",
                          children: [
                            (0, i.jsx)("button", {
                              onClick: function () {
                                return f(0);
                              },
                              children: "Fotos",
                            }),
                            (0, i.jsx)("button", {
                              onClick: function () {
                                return p(!0);
                              },
                              children: "360\xb0",
                            }),
                            (0, i.jsx)("button", {
                              onClick: function () {
                                return f(2);
                              },
                              children: "Mapa",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "top-description",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "details",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "detail",
                                  children: [
                                    (0, i.jsx)(t.G, { width: 20, icon: r.by_ }),
                                    (0, i.jsxs)("span", {
                                      children: [s.bedroomsQty, " quartos"],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "detail",
                                  children: [
                                    (0, i.jsx)(t.G, { width: 18, icon: r.KxN }),
                                    (0, i.jsxs)("span", {
                                      children: [
                                        s.area,
                                        " m",
                                        (0, i.jsx)("sup", { children: "2" }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "detail",
                                  children: [
                                    (0, i.jsx)(t.G, { width: 20, icon: r.ljI }),
                                    (0, i.jsxs)("span", {
                                      children: [
                                        s.bathroomQty,
                                        " ",
                                        s.bathroomQty > 1
                                          ? "banheiros"
                                          : "banheiro",
                                      ],
                                    }),
                                  ],
                                }),
                                s.isPetFriendly &&
                                  (0, i.jsxs)("div", {
                                    className: "detail",
                                    children: [
                                      (0, i.jsx)(t.G, {
                                        width: 20,
                                        icon: r.kQp,
                                      }),
                                      (0, i.jsx)("span", {
                                        children: "Aceita pet",
                                      }),
                                    ],
                                  }),
                                s.furnished &&
                                  (0, i.jsxs)("div", {
                                    className: "detail",
                                    children: [
                                      (0, i.jsx)(t.G, {
                                        width: 20,
                                        icon: r.sA5,
                                      }),
                                      (0, i.jsx)("span", {
                                        children: "Mobiliada",
                                      }),
                                    ],
                                  }),
                                s.carSpot > 0 &&
                                  (0, i.jsxs)("div", {
                                    className: "detail",
                                    children: [
                                      (0, i.jsx)(t.G, {
                                        width: 20,
                                        icon: r.yn$,
                                      }),
                                      (0, i.jsxs)("span", {
                                        children: [
                                          s.carSpot,
                                          " ",
                                          s.carSpot > 1 ? "vagas" : "vaga",
                                        ],
                                      }),
                                    ],
                                  }),
                                s.floor > 0 &&
                                  (0, i.jsxs)("div", {
                                    className: "detail",
                                    children: [
                                      (0, i.jsx)(t.G, {
                                        width: 20,
                                        icon: r.wp6,
                                      }),
                                      (0, i.jsxs)("span", {
                                        children: [
                                          s.floor,
                                          " ",
                                          s.floor > 1 ? "andares" : "andar",
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "call-to-action",
                              children: (0, i.jsxs)("a", {
                                href: "https://"
                                  .concat(b, ".whatsapp.com/send?phone=")
                                  .concat(
                                    s.seller.phone,
                                    "&text=",
                                    "Texto aqui testando"
                                  ),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  (0, i.jsx)("span", {
                                    children: "CONTATAR VENDEDOR",
                                  }),
                                  (0, i.jsx)(l(), {
                                    width: 30,
                                    height: 30,
                                    alt: "whatsapp",
                                    src: "/assets/icons/icon-whatsapp-240.png",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "info",
                          children: [
                            (0, i.jsx)("h1", { children: "Descri\xe7\xe3o" }),
                            (0, i.jsx)("p", { children: s.description }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      k.getLayout = function (e) {
        return (0, i.jsx)(m.Z, { children: e });
      };
    },
  },
  function (e) {
    e.O(0, [737, 523, 996, 946, 774, 888, 179], function () {
      return (s = 6595), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
