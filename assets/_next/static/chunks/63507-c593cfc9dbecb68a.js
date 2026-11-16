"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [63507], {
        15104: (e, t, s) => {
            s.d(t, {
                PendingDeletionProvider: () => p,
                Z: () => f
            });
            var n = s(95155),
                r = s(12115),
                o = s(47650),
                l = s(20063),
                a = s(18955),
                i = s(6970),
                c = s(44517),
                d = s(65380),
                u = s(48564),
                m = s(1930);

            function x(e) {
                let {
                    info: t,
                    onClose: s
                } = e, [x, h] = (0, r.useState)(!1), [p, f] = (0, r.useState)(!1), [g, b] = (0, r.useState)(""), v = (0, a.c)("pendingDeletion"), j = (0, i.Ym)(), y = (0, l.useRouter)(), {
                    restoreAccount: k
                } = (0, d.A)();
                if ((0, r.useEffect)(() => h(!0), []), (0, r.useEffect)(() => b(""), [t]), !t || !x) return null;
                let w = e => e ? (0, m.j3)((0, u.Tl)(j), {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }).format(new Date(e)) : "",
                    N = async () => {
                        try {
                            f(!0), b(""), await k(t.token), c.Ay.success(v("restoreSuccess"), {
                                id: "account-restored"
                            }), s(), y.push("/account")
                        } catch (e) {
                            b(e instanceof Error ? e.message : v("restoreError"))
                        } finally {
                            f(!1)
                        }
                    };
                return (0, o.createPortal)((0, n.jsxs)("dialog", {
                    className: "modal modal-open",
                    children: [(0, n.jsxs)("div", {
                        className: "modal-box max-w-md",
                        children: [(0, n.jsxs)("h3", {
                            className: "font-bold text-lg flex items-center gap-2",
                            children: [(0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6 text-warning shrink-0",
                                children: (0, n.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                })
                            }), v("title")]
                        }), (0, n.jsxs)("div", {
                            className: "py-4 space-y-3",
                            children: [(0, n.jsx)("p", {
                                className: "text-sm text-base-content/80",
                                children: v("body", {
                                    deletedAt: w(t.deletedAt),
                                    purgeAt: w(t.purgeAt)
                                })
                            }), g && (0, n.jsx)("div", {
                                role: "alert",
                                className: "alert alert-error py-2 text-sm",
                                children: (0, n.jsx)("span", {
                                    children: g
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "modal-action",
                            children: [(0, n.jsx)("button", {
                                onClick: s,
                                disabled: p,
                                className: "btn btn-sm",
                                children: v("declineButton")
                            }), (0, n.jsx)("button", {
                                onClick: N,
                                disabled: p,
                                className: "btn btn-primary btn-sm",
                                children: p ? v("restoring") : v("restoreButton")
                            })]
                        })]
                    }), (0, n.jsx)("form", {
                        method: "dialog",
                        className: "modal-backdrop",
                        children: (0, n.jsx)("button", {
                            onClick: s,
                            children: "close"
                        })
                    })]
                }), document.body)
            }
            let h = (0, r.createContext)(void 0);

            function p(e) {
                let {
                    children: t
                } = e, [s, o] = (0, r.useState)(null), l = (0, r.useCallback)(e => o(e), []), a = (0, r.useCallback)(() => o(null), []), i = (0, r.useMemo)(() => ({
                    openPendingDeletionModal: l,
                    closePendingDeletionModal: a
                }), [l, a]);
                return (0, n.jsxs)(h.Provider, {
                    value: i,
                    children: [t, (0, n.jsx)(x, {
                        info: s,
                        onClose: a
                    })]
                })
            }

            function f() {
                let e = (0, r.useContext)(h);
                if (!e) throw Error("usePendingDeletion must be used within a PendingDeletionProvider");
                return e
            }
        },
        63507: (e, t, s) => {
            s.d(t, {
                AuthModalProvider: () => E,
                X: () => M
            });
            var n = s(95155),
                r = s(12115),
                o = s(47650),
                l = s(20063),
                a = s(65380),
                i = s(15104);

            function c(e) {
                let {
                    length: t = 6,
                    onComplete: s,
                    error: o,
                    disabled: l = !1
                } = e, [a, i] = (0, r.useState)(Array(t).fill("")), [c, d] = (0, r.useState)(!1), u = (0, r.useRef)([]), m = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    u.current[0] ? .focus()
                }, []), (0, r.useEffect)(() => {
                    o && (m.current = !1, d(!1), i(Array(t).fill("")), setTimeout(() => u.current[0] ? .focus(), 0))
                }, [o, t]);
                let x = (0, r.useCallback)(e => {
                        m.current || l || (m.current = !0, s(e))
                    }, [s, l]),
                    h = e => {
                        d(!0);
                        let s = Array(t).fill("");
                        for (let n = 0; n < Math.min(e.length, t); n++) s[n] = e[n];
                        i(s);
                        let n = s.findIndex(e => "" === e),
                            r = -1 === n ? t - 1 : n;
                        u.current[r] ? .focus(), s.every(e => "" !== e) && x(s.join(""))
                    },
                    p = e => {
                        e.preventDefault();
                        let s = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, t);
                        s && h(s)
                    },
                    f = e => {
                        e.target.select()
                    },
                    g = o && !c;
                return (0, n.jsx)("div", {
                    className: "flex justify-center gap-2",
                    children: Array.from({
                        length: t
                    }).map((e, s) => (0, n.jsx)("input", {
                        ref: e => {
                            u.current[s] = e
                        },
                        type: "text",
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        autoComplete: 0 === s ? "one-time-code" : "off",
                        maxLength: 1,
                        value: a[s],
                        onChange: e => ((e, s) => {
                            let n = s.replace(/\D/g, "");
                            if (n.length > 1) return void h(n);
                            let r = n.slice(-1);
                            if (s && !r) return;
                            d(!0);
                            let o = [...a];
                            o[e] = r, i(o), r && e < t - 1 && u.current[e + 1] ? .focus(), r && o.every(e => "" !== e) && x(o.join(""))
                        })(s, e.target.value),
                        onKeyDown: e => ((e, s) => {
                            if ("Backspace" === s.key) {
                                s.preventDefault(), d(!0);
                                let t = [...a];
                                a[e] ? (t[e] = "", i(t)) : e > 0 && (t[e - 1] = "", i(t), u.current[e - 1] ? .focus())
                            }
                            if ("Delete" === s.key) {
                                d(!0);
                                let t = [...a];
                                t[e] = "", i(t)
                            }
                            "ArrowLeft" === s.key && e > 0 && u.current[e - 1] ? .focus(), "ArrowRight" === s.key && e < t - 1 && u.current[e + 1] ? .focus()
                        })(s, e),
                        onPaste: p,
                        onFocus: f,
                        disabled: l,
                        "aria-label": `Số thứ ${s+1}`,
                        className: `
            input input-bordered w-12 h-14 text-center text-2xl font-bold p-0
            transition-all duration-200
            ${g?"input-error":a[s]?"input-primary":""}
            ${l?"opacity-50 cursor-not-allowed":""}
          `
                    }, s))
                })
            }
            var d = s(15239),
                u = s(47886);
            let m = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "protonmail.com", "ymail.com", "rocketmail.com"],
                x = {
                    "gmail.com": ["gnail.com", "gamil.com", "gmai.com", "gmial.com", "gmaill.com", "gmil.com", "gmal.com", "gmeil.com", "gimail.com"],
                    "yahoo.com": ["yaho.com", "yahooo.com", "yhoo.com", "yajoo.com", "yahho.com", "yaoo.com"],
                    "outlook.com": ["outlok.com", "outloo.com", "outlok.com", "outllook.com", "outlookk.com"],
                    "hotmail.com": ["hotmial.com", "hotmaiil.com", "hotmal.com", "hotmil.com", "hotmaill.com", "hotmaii.com"],
                    "icloud.com": ["iclod.com", "icoud.com", "iclould.com"]
                };
            var h = s(82586),
                p = s(60080),
                f = s(44517),
                g = s(84604);

            function b(e) {
                let {
                    loading: t,
                    label: s,
                    onSuccess: r,
                    onError: o
                } = e, l = (0, g.mg)({
                    onSuccess: e => r(e.access_token),
                    onError: () => o()
                });
                return (0, n.jsxs)("button", {
                    type: "button",
                    onClick: () => l(),
                    disabled: t,
                    className: "w-full h-12 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3",
                    children: [t ? (0, n.jsx)("span", {
                        className: "loading loading-spinner loading-sm"
                    }) : (0, n.jsxs)("svg", {
                        className: "w-5 h-5",
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            fill: "#4285F4",
                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        }), (0, n.jsx)("path", {
                            fill: "#34A853",
                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        }), (0, n.jsx)("path", {
                            fill: "#FBBC05",
                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        }), (0, n.jsx)("path", {
                            fill: "#EA4335",
                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        })]
                    }), s]
                })
            }

            function v(e) {
                let {
                    loading: t,
                    label: s,
                    onSuccess: o,
                    onError: l
                } = e, a = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    if (a.current) return;
                    if (document.getElementById("apple-signin-script")) {
                        a.current = !0;
                        return
                    }
                    let e = document.createElement("script");
                    e.id = "apple-signin-script", e.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", e.async = !0, document.head.appendChild(e), a.current = !0
                }, []);
                let i = async () => {
                    if (!window.AppleID) {
                        console.error("Apple Sign In SDK not loaded"), l();
                        return
                    }
                    try {
                        window.AppleID.auth.init({
                            clientId: "com.chungdoi.web",
                            scope: "name email",
                            redirectURI: `${window.location.origin}/auth/apple/callback`,
                            usePopup: !0
                        });
                        let e = await window.AppleID.auth.signIn(),
                            t = e.authorization.id_token,
                            s = e.user ? {
                                name: [e.user.name ? .firstName, e.user.name ? .lastName].filter(Boolean).join(" ") || void 0,
                                email: e.user.email
                            } : void 0;
                        o(t, s)
                    } catch (e) {
                        e ? .error !== "popup_closed_by_user" && (console.error("Apple Sign In error:", e), l())
                    }
                };
                return (0, n.jsxs)("button", {
                    type: "button",
                    onClick: i,
                    disabled: t,
                    className: "w-full h-12 bg-black text-white border border-gray-300 rounded-xl font-medium hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3",
                    children: [t ? (0, n.jsx)("span", {
                        className: "loading loading-spinner loading-sm"
                    }) : (0, n.jsx)("svg", {
                        className: "w-5 h-5",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: (0, n.jsx)("path", {
                            d: "M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                        })
                    }), s]
                })
            }
            var j = s(18955),
                y = s(53566),
                k = s(46830),
                w = s(36268);
            let N = "authEvents.fired";

            function S(e) {
                let t = `${e.kind}:${e.provider??""}`;
                if (!(e => {
                        try {
                            let t = sessionStorage.getItem(N);
                            if (!t) return !1;
                            return t.split(",").includes(e)
                        } catch {
                            return !1
                        }
                    })(t)) {
                    try {
                        let e = sessionStorage.getItem(N) || "",
                            s = new Set(e ? e.split(",") : []);
                        s.add(t), sessionStorage.setItem(N, Array.from(s).join(","))
                    } catch {}(0, w.v)(`${k.$.apiUrl}/api/auth-events`, JSON.stringify({ ...e,
                        pageUrl: window.location.href
                    }))
                }
            }
            var C = s(90381);

            function L(e) {
                let {
                    isOpen: t,
                    onClose: s,
                    context: g = "default"
                } = e, [k, w] = (0, r.useState)(""), N = "publish" === g, L = "merge" === g, [A, E] = (0, r.useState)(!1), [_, B] = (0, r.useState)(""), [D, I] = (0, r.useState)(!1), [P, z] = (0, r.useState)(""), [W, T] = (0, r.useState)([]), [R, $] = (0, r.useState)(""), [H, U] = (0, r.useState)(!1), [F, O] = (0, r.useState)(!1), [G, V] = (0, r.useState)(0), [K, Y] = (0, r.useState)(!1), [Z, q] = (0, r.useState)(null), [J, X] = (0, r.useState)(!1), [Q, ee] = (0, r.useState)(!1), [et, es] = (0, r.useState)(!1), [en, er] = (0, r.useState)(!1), [eo, el] = (0, r.useState)(!1), [ea, ei] = (0, r.useState)(null), ec = null !== ea, ed = (0, j.c)("auth"), eu = ((0, C.b)(), (0, l.useRouter)()), {
                    requestMagicLink: em,
                    verifyOTPCode: ex,
                    googleAuth: eh,
                    appleAuth: ep,
                    isAuthenticated: ef
                } = (0, a.A)(), {
                    returnUrl: eg
                } = M(), {
                    openPendingDeletionModal: eb
                } = (0, i.Z)();
                (0, r.useEffect)(() => {
                    el(!0), ei((0, y.Ny)())
                }, []), (0, r.useEffect)(() => {
                    t && ea && S({
                        kind: "in_app_browser_blocked",
                        browser: ea
                    })
                }, [t, ea, !0, !0]);
                let ev = (e, t) => {
                    S({
                        kind: "oauth_failed",
                        provider: e,
                        browser: ea ? ? "unknown",
                        errorMessage: t
                    })
                };
                (0, r.useEffect)(() => {
                    ef && t && "merge" !== g && s()
                }, [ef, t, s, g]), (0, r.useEffect)(() => {
                    t || (w(""), I(!1), B(""), z(""), E(!1), O(!1), V(0), Y(!1), q(null), X(!1), ee(!1), es(!1), er(!1))
                }, [t]), (0, r.useEffect)(() => {
                    if (G <= 0) return;
                    let e = setInterval(() => {
                        V(e => e <= 1 ? 0 : e - 1)
                    }, 1e3);
                    return () => clearInterval(e)
                }, [G]), (0, r.useEffect)(() => {}, [!1, t]);
                let ej = async e => {
                        if (e.preventDefault(), k) {
                            B(""), E(!0);
                            try {
                                await em({
                                    email: k,
                                    returnUrl: eg || void 0
                                }), I(!0)
                            } catch (e) {
                                B(e instanceof Error ? (0, u.LS)(e.message, ed) : ed("errorSendEmail"))
                            } finally {
                                E(!1)
                            }
                        }
                    },
                    ey = e => {
                        e.split(/[?#]/)[0] === window.location.pathname ? eu.replace(e) : eu.push(e)
                    },
                    ek = async e => {
                        z(""), E(!0);
                        try {
                            let t = !!(0, h.N8)(),
                                n = await ex({
                                    email: k,
                                    code: e
                                });
                            if (n.accountPendingDeletion) {
                                s(), eb({
                                    token: n.token,
                                    email: k,
                                    deletedAt: n.deletedAt,
                                    purgeAt: n.purgeAt
                                });
                                return
                            }
                            if (f.Ay.success(ed("loginSuccess"), {
                                    id: "login-success",
                                    duration: 500
                                }), t && (0, p.f0)("anonymous_user_converted", {
                                    email: k
                                }), s(), eg) ey(eg);
                            else {
                                let e = u.uR.getUser();
                                e ? .is_reseller ? eu.push("/reseller") : e ? .is_ctv && eu.push("/ctv")
                            }
                        } catch (e) {
                            z(e instanceof Error ? (0, u.LS)(e.message, ed) : ed("errorInvalidCode")), E(!1)
                        }
                    },
                    ew = async () => {
                        if (!(G > 0) && !F) {
                            z(""), B(""), Y(!1), O(!0);
                            try {
                                await em({
                                    email: k,
                                    returnUrl: eg || void 0
                                }), Y(!0), V(60), setTimeout(() => Y(!1), 3e3)
                            } catch (e) {
                                z(e instanceof Error ? (0, u.LS)(e.message, ed) : ed("errorResend"))
                            } finally {
                                O(!1)
                            }
                        }
                    },
                    eN = async e => {
                        es(!0), B("");
                        try {
                            let t = !!(0, h.N8)(),
                                n = await eh(e);
                            if (n.accountPendingDeletion) {
                                s(), eb({
                                    token: n.token,
                                    email: n.email,
                                    deletedAt: n.deletedAt,
                                    purgeAt: n.purgeAt
                                });
                                return
                            }
                            if (f.Ay.success(ed("loginSuccess"), {
                                    id: "login-success",
                                    duration: 1500
                                }), t && (0, p.f0)("anonymous_user_converted", {
                                    method: "google"
                                }), s(), eg) ey(eg);
                            else {
                                let e = u.uR.getUser();
                                e ? .is_ctv && eu.push("/ctv")
                            }
                        } catch (e) {
                            ev("google", e instanceof Error ? e.message : String(e)), B(e instanceof Error ? (0, u.LS)(e.message, ed) : ed("errorGoogle"))
                        } finally {
                            es(!1)
                        }
                    },
                    eS = async (e, t) => {
                        er(!0), B("");
                        try {
                            let n = !!(0, h.N8)(),
                                r = await ep(e, t);
                            if (r.accountPendingDeletion) {
                                s(), eb({
                                    token: r.token,
                                    email: r.email,
                                    deletedAt: r.deletedAt,
                                    purgeAt: r.purgeAt
                                });
                                return
                            }
                            if (f.Ay.success(ed("loginSuccess"), {
                                    id: "login-success",
                                    duration: 1500
                                }), n && (0, p.f0)("anonymous_user_converted", {
                                    method: "apple"
                                }), s(), eg) ey(eg);
                            else {
                                let e = u.uR.getUser();
                                e ? .is_ctv && eu.push("/ctv")
                            }
                        } catch (e) {
                            ev("apple", e instanceof Error ? e.message : String(e)), B(e instanceof Error ? (0, u.LS)(e.message, ed) : ed("errorApple"))
                        } finally {
                            er(!1)
                        }
                    };
                return t && eo ? (0, o.createPortal)((0, n.jsxs)("div", {
                    className: "modal modal-open",
                    children: [(0, n.jsxs)("div", {
                        className: "modal-box max-w-sm w-full p-0 rounded-3xl overflow-y-auto overscroll-contain bg-base-100",
                        children: [K && (0, n.jsx)("div", {
                            className: "absolute top-2 left-1/2 -translate-x-1/2 z-20 animate-fadeIn",
                            children: (0, n.jsxs)("div", {
                                className: "bg-success/10 text-success text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5",
                                children: [(0, n.jsx)("svg", {
                                    className: "w-3.5 h-3.5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2,
                                    children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M5 13l4 4L19 7"
                                    })
                                }), ed("codeSent")]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "relative pt-8 pb-5 px-6 text-center",
                            children: [(0, n.jsx)("button", {
                                onClick: s,
                                className: "absolute right-4 top-4 w-8 h-8 rounded-full bg-base-200/80 flex items-center justify-center hover:bg-base-300 transition-colors",
                                "aria-label": ed("close"),
                                children: (0, n.jsx)("svg", {
                                    className: "w-4 h-4 text-base-content/60",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2.5,
                                    children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "w-14 h-14 mx-auto bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mb-3 shadow-sm",
                                children: D ? (0, n.jsx)("svg", {
                                    className: "w-7 h-7 text-rose-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    })
                                }) : N ? (0, n.jsx)("svg", {
                                    className: "w-7 h-7 text-rose-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    })
                                }) : (0, n.jsx)(d.default, {
                                    src: "/icon.png",
                                    alt: "Chung Đ\xf4i",
                                    width: 32,
                                    height: 32,
                                    className: "object-contain"
                                })
                            }), (0, n.jsx)("h3", {
                                className: "text-lg font-semibold text-base-content",
                                children: D ? ed("checkEmail") : N ? ed("readyToPublish") : L ? ed("addEmail") : ed("welcome")
                            }), (D || N || ec) && (0, n.jsx)("p", {
                                className: "text-sm text-base-content/60 mt-1",
                                children: D ? ed("otpPrompt") : N ? ed("loginToSave") : ed("enterEmail")
                            }), ec && !D && (0, n.jsxs)("p", {
                                className: "text-xs leading-5 text-base-content/60 mt-2",
                                children: [ed("inAppBrowserSignInHint"), " ", (0, n.jsx)("a", {
                                    href: (0, y.FC)(`${window.location.origin}/login`),
                                    className: "font-medium text-primary underline underline-offset-2 hover:text-primary/80 whitespace-nowrap",
                                    children: ed("inAppBrowserOpenInBrowser")
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "px-6 pb-6",
                            children: D ? (0, n.jsxs)("div", {
                                className: "space-y-5",
                                children: [(0, n.jsxs)("div", {
                                    className: "bg-base-200/50 px-4 py-3 rounded-xl text-center",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-xs text-base-content/50 mb-0.5",
                                        children: ed("sentTo")
                                    }), (0, n.jsx)("p", {
                                        className: "text-sm font-medium",
                                        children: k.toLowerCase()
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [P && (0, n.jsxs)("div", {
                                        className: "bg-error/10 text-error text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 mb-4",
                                        children: [(0, n.jsx)("svg", {
                                            className: "w-4 h-4 shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 2,
                                            children: (0, n.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                            })
                                        }), P]
                                    }), (0, n.jsx)(c, {
                                        onComplete: ek,
                                        error: P,
                                        disabled: A
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "space-y-2 pt-2",
                                    children: [(0, n.jsx)("button", {
                                        onClick: ew,
                                        disabled: A || F || G > 0,
                                        className: "w-full py-2.5 text-sm font-medium text-primary hover:text-primary/80 disabled:text-base-content/30 transition-colors",
                                        children: F ? (0, n.jsxs)("span", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [(0, n.jsx)("span", {
                                                className: "loading loading-spinner loading-xs"
                                            }), ed("sending")]
                                        }) : G > 0 ? ed("resendCooldown", {
                                            seconds: G
                                        }) : ed("resend")
                                    }), (0, n.jsx)("button", {
                                        onClick: () => {
                                            I(!1), w(""), B(""), z(""), V(0), Y(!1)
                                        },
                                        className: "w-full py-2.5 text-sm text-base-content/50 hover:text-base-content/70 transition-colors",
                                        children: ed("useOtherEmail")
                                    }), !1]
                                })]
                            }) : (0, n.jsxs)("div", {
                                className: "space-y-4",
                                children: [!ec && (0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    "data-bot-screenshot-id": "auth-social-buttons",
                                    children: [(0, n.jsx)(b, {
                                        loading: et,
                                        label: ed("signInWithGoogle"),
                                        onSuccess: e => eN(e),
                                        onError: () => {
                                            ev("google", "client_sdk_error"), B(ed("errorGoogleRetry"))
                                        }
                                    }), !L && (0, n.jsx)(v, {
                                        loading: en,
                                        label: ed("signInWithApple"),
                                        onSuccess: (e, t) => eS(e, t),
                                        onError: () => {
                                            ev("apple", "client_sdk_error"), B(ed("errorAppleRetry"))
                                        }
                                    })]
                                }), !ec && (0, n.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "flex-1 h-px bg-base-200"
                                    }), (0, n.jsx)("span", {
                                        className: "text-xs text-base-content/40",
                                        children: ed("or")
                                    }), (0, n.jsx)("div", {
                                        className: "flex-1 h-px bg-base-200"
                                    })]
                                }), (0, n.jsxs)("form", {
                                    onSubmit: ej,
                                    className: "space-y-4",
                                    "data-bot-screenshot-id": "auth-email-form",
                                    children: [_ && (0, n.jsxs)("div", {
                                        className: "bg-error/10 text-error text-sm px-4 py-2.5 rounded-xl flex items-center gap-2",
                                        children: [(0, n.jsx)("svg", {
                                            className: "w-4 h-4 shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 2,
                                            children: (0, n.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                            })
                                        }), _]
                                    }), (0, n.jsxs)("div", {
                                        children: [(0, n.jsx)("label", {
                                            className: "text-sm font-medium text-base-content/70 mb-1.5 block",
                                            htmlFor: "email",
                                            children: ed("emailLabel")
                                        }), (0, n.jsx)("input", {
                                            id: "email",
                                            type: "email",
                                            value: k,
                                            onChange: e => (e => {
                                                if (w(e), B(""), e.includes("@")) {
                                                    let t = function(e) {
                                                        let t = e.toLowerCase().trim().split("@");
                                                        if (2 !== t.length) return {
                                                            isTypo: !1
                                                        };
                                                        let s = t[1];
                                                        if (m.includes(s)) return {
                                                            isTypo: !1
                                                        };
                                                        for (let [e, t] of Object.entries(x))
                                                            if (t.includes(s)) return {
                                                                isTypo: !0,
                                                                suggestion: e,
                                                                originalDomain: s
                                                            };
                                                        for (let e of m) {
                                                            let t = function(e, t) {
                                                                    let s = e.length,
                                                                        n = t.length,
                                                                        r = [];
                                                                    for (let e = 0; e <= s; e++) r[e] = [e];
                                                                    for (let e = 0; e <= n; e++) r[0][e] = e;
                                                                    for (let o = 1; o <= s; o++)
                                                                        for (let s = 1; s <= n; s++) {
                                                                            let n = +(e[o - 1] !== t[s - 1]);
                                                                            r[o][s] = Math.min(r[o - 1][s] + 1, r[o][s - 1] + 1, r[o - 1][s - 1] + n)
                                                                        }
                                                                    return r[s][n]
                                                                }(s, e),
                                                                n = Math.abs(s.length - e.length);
                                                            if (t <= 2 && n <= 2) return {
                                                                isTypo: !0,
                                                                suggestion: e,
                                                                originalDomain: s
                                                            }
                                                        }
                                                        return {
                                                            isTypo: !1
                                                        }
                                                    }(e);
                                                    t.isTypo && t.suggestion ? (q(function(e, t) {
                                                        let s = e.toLowerCase().trim().split("@");
                                                        return 2 !== s.length ? e : `${s[0]}@${t}`
                                                    }(e, t.suggestion)), X(!0)) : (q(null), X(!1))
                                                } else q(null), X(!1)
                                            })(e.target.value),
                                            required: !0,
                                            placeholder: "you@example.com",
                                            className: "w-full h-12 px-4 bg-base-200/50 border-0 rounded-xl text-base placeholder:text-base-content/30 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all",
                                            disabled: A
                                        }), J && Z && (0, n.jsx)("div", {
                                            className: "mt-2 bg-warning/10 border border-warning/20 text-sm px-3 py-2.5 rounded-xl",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-start gap-2",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 shrink-0 text-warning mt-0.5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                                    })
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex-1",
                                                    children: [(0, n.jsxs)("p", {
                                                        className: "text-base-content/70 mb-2",
                                                        children: [ed("didYouMean"), " ", (0, n.jsx)("span", {
                                                            className: "font-semibold text-base-content",
                                                            children: Z
                                                        }), "?"]
                                                    }), (0, n.jsxs)("div", {
                                                        className: "flex gap-2",
                                                        children: [(0, n.jsxs)("button", {
                                                            type: "button",
                                                            onClick: () => {
                                                                Z && (w(Z), q(null), X(!1))
                                                            },
                                                            className: "text-xs font-medium px-3 py-1.5 bg-warning/20 hover:bg-warning/30 text-warning-content rounded-lg transition-colors",
                                                            children: [ed("fixTo"), " ", Z.split("@")[1]]
                                                        }), (0, n.jsx)("button", {
                                                            type: "button",
                                                            onClick: () => {
                                                                X(!1)
                                                            },
                                                            className: "text-xs font-medium px-3 py-1.5 hover:bg-base-200 text-base-content/60 rounded-lg transition-colors",
                                                            children: ed("emailCorrect")
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, n.jsx)("button", {
                                        type: "submit",
                                        disabled: A || !k,
                                        className: "w-full h-12 bg-primary text-primary-content font-medium rounded-xl hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2",
                                        children: A ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("span", {
                                                className: "loading loading-spinner loading-sm"
                                            }), ed("sending")]
                                        }) : ed("continue")
                                    }), (0, n.jsx)("p", {
                                        className: "text-xs text-center text-base-content/50 mt-3",
                                        children: ed("otpHint")
                                    }), !1, (0, n.jsx)("div", {
                                        className: "pt-4 space-y-2",
                                        children: N ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-base-content/50",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 text-success",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), ed("benefitSaved")]
                                            }), (0, n.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-base-content/50",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 text-success",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), ed("benefitLink")]
                                            }), (0, n.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-base-content/50",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 text-success",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), ed("benefitTrial")]
                                            })]
                                        }) : (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-base-content/50",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 text-success",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), ed("noPassword")]
                                            }), (0, n.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-base-content/50",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 text-success",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), ed("safeLogin")]
                                            }), (0, n.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-base-content/50",
                                                children: [(0, n.jsx)("svg", {
                                                    className: "w-4 h-4 text-success",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    children: (0, n.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), ed("free")]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        className: "modal-backdrop",
                        onClick: s
                    })]
                }), document.body) : null
            }
            let A = (0, r.createContext)(void 0);

            function E(e) {
                let {
                    children: t
                } = e, [s, o] = (0, r.useState)(!1), [l, a] = (0, r.useState)(null), [i, c] = (0, r.useState)("default"), d = () => {
                    o(!1), a(null), c("default")
                };
                return (0, n.jsxs)(A.Provider, {
                    value: {
                        openAuthModal: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                            e ? a(e) : a(window.location.pathname + window.location.search), c(t), o(!0)
                        },
                        closeAuthModal: d,
                        isAuthModalOpen: s,
                        returnUrl: l,
                        modalContext: i
                    },
                    children: [t, (0, n.jsx)(L, {
                        isOpen: s,
                        onClose: d,
                        context: i
                    })]
                })
            }

            function M() {
                let e = (0, r.useContext)(A);
                if (void 0 === e) throw Error("useAuthModal must be used within an AuthModalProvider");
                return e
            }
        },
        90381: (e, t, s) => {
            s.d(t, {
                b: () => l
            });
            var n = s(12115),
                r = s(18955),
                o = s(47886);

            function l() {
                let e = (0, r.c)("auth");
                return (0, n.useCallback)((t, s) => t instanceof Error && t.message ? (0, o.LS)(t.message, t => e(t)) : s, [e])
            }
        }
    }
]);