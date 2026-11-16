"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60193], {
        3041: (e, t, i) => {
            i.d(t, {
                HR: () => l,
                Mm: () => d,
                rm: () => c
            });
            var n = i(46830),
                r = i(47886),
                s = i(67407),
                a = i(23112),
                o = i(72461);
            let u = "chungdoi_session_id";

            function c() {
                try {
                    let e = sessionStorage.getItem(u);
                    if (e) return e;
                    let t = "undefined" != typeof crypto && crypto.randomUUID ? crypto.randomUUID() : `s_${Date.now()}_${Math.random().toString(36).slice(2)}`;
                    return sessionStorage.setItem(u, t), t
                } catch {
                    return `s_${Date.now()}_${Math.random().toString(36).slice(2)}`
                }
            }

            function d(e) {
                let t = `${n.$.apiUrl}/api/internal/activity-log`,
                    i = JSON.stringify(e),
                    s = r.uR.getToken ? .();
                if (s) try {
                    fetch(t, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${s}`
                        },
                        body: i,
                        keepalive: !0,
                        credentials: "omit"
                    }).catch(() => {});
                    return
                } catch {}
                try {
                    if ("undefined" != typeof navigator && "function" == typeof navigator.sendBeacon) {
                        let e = new Blob([i], {
                            type: "text/plain"
                        });
                        navigator.sendBeacon(t, e);
                        return
                    }
                } catch {}
                try {
                    fetch(t, {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: i,
                        keepalive: !0,
                        credentials: "omit"
                    }).catch(() => {})
                } catch {}
            }

            function l(e, t) {
                try {
                    let i = window.location.pathname,
                        n = (0, a.jg)(i),
                        r = (0, o.Uy)();
                    d({
                        eventType: e,
                        visitorId: (0, s.YA)(),
                        sessionId: c(),
                        path: i,
                        referrer: document.referrer || "",
                        resolvedMarket: n ? n.code : (0, a.$)(r).code,
                        resolvedLocale: document.documentElement.lang || "",
                        metadata: t
                    })
                } catch {}
            }
        },
        17099: (e, t, i) => {
            i.d(t, {
                i: () => n
            });
            let n = 1e4
        },
        36268: (e, t, i) => {
            i.d(t, {
                v: () => n
            });

            function n(e, t) {
                try {
                    if ("undefined" != typeof navigator && navigator.sendBeacon) {
                        let i = new Blob([t], {
                            type: "application/json"
                        });
                        if (navigator.sendBeacon(e, i)) return
                    }
                } catch {}
                try {
                    fetch(e, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: t,
                        keepalive: !0
                    }).catch(() => {})
                } catch {}
            }
        },
        38559: (e, t, i) => {
            i.d(t, {
                $: () => o,
                s: () => a
            });
            var n = i(74268),
                r = i(69781),
                s = i(93049),
                a = class extends r.k {#
                    e;#
                    t;#
                    i;#
                    n;
                    constructor(e) {
                        super(), this.#e = e.client, this.mutationId = e.mutationId, this.#i = e.mutationCache, this.#t = [], this.state = e.state || o(), this.setOptions(e.options), this.scheduleGc()
                    }
                    setOptions(e) {
                        this.options = e, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(e) {
                        this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#i.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.#t = this.#t.filter(t => t !== e), this.scheduleGc(), this.#i.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: e
                        })
                    }
                    optionalRemove() {
                        this.#t.length || ("pending" === this.state.status ? this.scheduleGc() : this.#i.remove(this))
                    }
                    continue () {
                        return this.#n ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(e) {
                        let t = () => {
                                this.#r({
                                    type: "continue"
                                })
                            },
                            i = {
                                client: this.#e,
                                meta: this.options.meta,
                                mutationKey: this.options.mutationKey
                            };
                        this.#n = (0, s.II)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(Error("No mutationFn found")),
                            onFail: (e, t) => {
                                this.#r({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#r({
                                    type: "pause"
                                })
                            },
                            onContinue: t,
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#i.canRun(this)
                        });
                        let n = "pending" === this.state.status,
                            r = !this.#n.canStart();
                        try {
                            if (n) t();
                            else {
                                this.#r({
                                    type: "pending",
                                    variables: e,
                                    isPaused: r
                                }), await this.#i.config.onMutate ? .(e, this, i);
                                let t = await this.options.onMutate ? .(e, i);
                                t !== this.state.context && this.#r({
                                    type: "pending",
                                    context: t,
                                    variables: e,
                                    isPaused: r
                                })
                            }
                            let s = await this.#n.start();
                            return await this.#i.config.onSuccess ? .(s, e, this.state.context, this, i), await this.options.onSuccess ? .(s, e, this.state.context, i), await this.#i.config.onSettled ? .(s, null, this.state.variables, this.state.context, this, i), await this.options.onSettled ? .(s, null, e, this.state.context, i), this.#r({
                                type: "success",
                                data: s
                            }), s
                        } catch (t) {
                            try {
                                throw await this.#i.config.onError ? .(t, e, this.state.context, this, i), await this.options.onError ? .(t, e, this.state.context, i), await this.#i.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this, i), await this.options.onSettled ? .(void 0, t, e, this.state.context, i), t
                            } finally {
                                this.#r({
                                    type: "error",
                                    error: t
                                })
                            }
                        } finally {
                            this.#i.runNext(this)
                        }
                    }#
                    r(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        failureCount: e.failureCount,
                                        failureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...t,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...t,
                                        context: e.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: e.isPaused,
                                        status: "pending",
                                        variables: e.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...t,
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        failureReason: e.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), n.jG.batch(() => {
                            this.#t.forEach(t => {
                                t.onMutationUpdate(e)
                            }), this.#i.notify({
                                mutation: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                };

            function o() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        60080: (e, t, i) => {
            i.d(t, {
                EU: () => y,
                Fi: () => v,
                M9: () => b,
                MO: () => S,
                XB: () => w,
                ZH: () => _,
                c5: () => u,
                do: () => f,
                f0: () => p,
                mY: () => g,
                u4: () => h,
                uN: () => x
            });
            var n = i(36268),
                r = i(23112),
                s = i(67407),
                a = i(3041);
            let o = {};

            function u(e) {
                o = { ...o,
                    ...e
                }
            }
            let c = ["salary_", "wish_", "message_", "speech_", "guest_", "seating_", "music_", "add_music_", "img_", "vid_", "bg_", "resize_", "idphoto_", "std_", "stdphoto_", "lunar_", "budget_", "compress_tool_", "planner_", "qr_", "landing_"],
                d = new Set(["guests_bulk_edited", "guests_bulk_deleted", "bulk_add_modal_opened", "bulk_guest_template_downloaded", "bulk_guests_created", "export_google_sheets", "personalized_link_shared", "generic_link_shared", "generic_qr_opened", "cohost_modal_opened", "cohost_link_shared", "cohost_link_regenerated", "cohost_page_opened", "cohost_guest_added", "cohost_guest_updated", "cohost_guest_deleted", "cohost_guest_link_shared"]),
                l = new Set(["payment_modal_opened", "payment_initiated", "payment_completed", "share_payment_clicked", "share_activate_clicked", "credit_redeemed", "invitation_created", "invitation_published", "invitation_downloaded", "template_selected", "template_changed", "guest_added", "invite_guests_cta_clicked", "trial_expired", "share_modal_shown", "share_link_shared", "anonymous_user_converted"]);

            function h(e, t) {
                let i = { ...o,
                    ...t
                };
                window.gtag && m && window.gtag("event", e, i), (d.has(e) || c.some(t => e.startsWith(t))) && function(e, t) {
                    let i;
                    try {
                        i = (0, r.jg)(window.location.pathname) ? .code ? ? "vn"
                    } catch {}
                    let a = i && void 0 === t.market ? { ...t,
                        market: i
                    } : t;
                    (0, n.v)("https://api.chungdoi.com/api/track/event", JSON.stringify({
                        event: e,
                        properties: a,
                        visitorId: (0, s.YA)()
                    }))
                }(e, i), l.has(e) && (0, a.HR)(e, t)
            }
            let m = "G-BQD5YB7KSP",
                p = (e, t) => {
                    h(e, t)
                },
                v = e => {
                    m && window.gtag && window.gtag ? .("set", "user_properties", e)
                },
                f = e => {
                    m && window.gtag && window.gtag ? .("config", m, {
                        user_id: e ? ? void 0,
                        send_page_view: !1
                    })
                },
                g = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "magic_link";
                    h("signup", {
                        method: e
                    })
                },
                w = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "magic_link";
                    h("login", {
                        method: e
                    })
                },
                y = () => {
                    h("template_viewed")
                },
                _ = e => {
                    h("invitation_published", {
                        invitation_id: e
                    })
                },
                b = e => {
                    h("invitation_deleted", {
                        was_published: e
                    })
                },
                x = e => {
                    let t = "string" == typeof e ? new Date(e) : e;
                    return Math.ceil(Math.abs(new Date().getTime() - t.getTime()) / 864e5)
                },
                S = e => "happy" === e.toLowerCase() ? 99 : 199
        },
        62695: (e, t, i) => {
            i.d(t, {
                y: () => r
            });
            let n = /^\/mau-thiep\/[^/]+\/demo/;

            function r(e) {
                return n.test(e ? ? "")
            }
        },
        67407: (e, t, i) => {
            i.d(t, {
                FQ: () => o,
                R9: () => a,
                Ri: () => c,
                YA: () => u,
                aB: () => d
            });
            var n = i(47886);
            let r = "chungdoi_visitor_id",
                s = "nocount";

            function a(e) {
                return `/i/${e}?${s}=1`
            }

            function o() {
                let e = new URLSearchParams(window.location.search).get(s);
                return "1" === e || "true" === e
            }

            function u() {
                let e = null;
                try {
                    e = localStorage.getItem(r)
                } catch {}
                e || (e = c(r)), e || (e = crypto.randomUUID ? .() ? ? `${Math.random().toString(36).slice(2,10)}-${Math.random().toString(36).slice(2,6)}-${Math.random().toString(36).slice(2,6)}-${Math.random().toString(36).slice(2,6)}-${Math.random().toString(36).slice(2,14)}`);
                try {
                    localStorage.setItem(r, e)
                } catch {}
                return function(e, t, i) {
                    if ("undefined" == typeof document) return;
                    let n = "undefined" != typeof location ? location.hostname : "",
                        r = "chungdoi.com" === n || n.endsWith(".chungdoi.com");
                    document.cookie = `${e}=${encodeURIComponent(t)}; max-age=${31536e3}; path=/; SameSite=Lax${r?"; domain=.chungdoi.com":""}`
                }(r, e, 31536e3), e
            }

            function c(e) {
                if ("undefined" == typeof document) return null;
                for (let t of document.cookie.split(";")) {
                    let [i, n] = t.trim().split("=");
                    if (i === e) return decodeURIComponent(n)
                }
                return null
            }

            function d(e, t, i) {
                if (o()) return;
                let r = u(),
                    s = i ? `${e}/api/invite/${t}/${i}/view` : `${e}/api/invite/${t}/view`,
                    a = {
                        "Content-Type": "application/json"
                    },
                    c = n.uR.getToken();
                c && (a.Authorization = `Bearer ${c}`), fetch(s, {
                    method: "POST",
                    headers: a,
                    body: JSON.stringify({
                        visitorId: r
                    })
                }).catch(() => {})
            }
        },
        80549: (e, t, i) => {
            i.d(t, {
                n: () => d
            });
            var n = i(12115),
                r = i(38559),
                s = i(74268),
                a = i(38445),
                o = i(34049),
                u = class extends a.Q {#
                    e;#
                    s = void 0;#
                    a;#
                    o;
                    constructor(e, t) {
                        super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#u()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(e) {
                        let t = this.options;
                        this.options = this.#e.defaultMutationOptions(e), (0, o.f8)(this.options, t) || this.#e.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#a,
                            observer: this
                        }), t ? .mutationKey && this.options.mutationKey && (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey) ? this.reset() : this.#a ? .state.status === "pending" && this.#a.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#a ? .removeObserver(this)
                    }
                    onMutationUpdate(e) {
                        this.#u(), this.#c(e)
                    }
                    getCurrentResult() {
                        return this.#s
                    }
                    reset() {
                        this.#a ? .removeObserver(this), this.#a = void 0, this.#u(), this.#c()
                    }
                    mutate(e, t) {
                        return this.#o = t, this.#a ? .removeObserver(this), this.#a = this.#e.getMutationCache().build(this.#e, this.options), this.#a.addObserver(this), this.#a.execute(e)
                    }#
                    u() {
                        let e = this.#a ? .state ? ? (0, r.$)();
                        this.#s = { ...e,
                            isPending: "pending" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    c(e) {
                        s.jG.batch(() => {
                            if (this.#o && this.hasListeners()) {
                                let t = this.#s.variables,
                                    i = this.#s.context,
                                    n = {
                                        client: this.#e,
                                        meta: this.options.meta,
                                        mutationKey: this.options.mutationKey
                                    };
                                e ? .type === "success" ? (this.#o.onSuccess ? .(e.data, t, i, n), this.#o.onSettled ? .(e.data, null, t, i, n)) : e ? .type === "error" && (this.#o.onError ? .(e.error, t, i, n), this.#o.onSettled ? .(void 0, e.error, t, i, n))
                            }
                            this.listeners.forEach(e => {
                                e(this.#s)
                            })
                        })
                    }
                },
                c = i(99776);

            function d(e, t) {
                let i = (0, c.jE)(t),
                    [r] = n.useState(() => new u(i, e));
                n.useEffect(() => {
                    r.setOptions(e)
                }, [r, e]);
                let a = n.useSyncExternalStore(n.useCallback(e => r.subscribe(s.jG.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
                    d = n.useCallback((e, t) => {
                        r.mutate(e, t).catch(o.lQ)
                    }, [r]);
                if (a.error && (0, o.GU)(r.options.throwOnError, [a.error])) throw a.error;
                return { ...a,
                    mutate: d,
                    mutateAsync: a.mutate
                }
            }
        },
        82730: (e, t, i) => {
            i.d(t, {
                n: () => R
            });
            var n = i(95155),
                r = i(12115),
                s = i(99776),
                a = i(22454),
                o = i(80549),
                u = i(20063),
                c = i(62695),
                d = i(33513),
                l = i(89777);

            function h(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    className: "min-h-screen w-full bg-white",
                    children: (0, n.jsx)("main", {
                        className: "min-h-screen w-full",
                        children: t
                    })
                })
            }
            var m = i(43637),
                p = i(97558),
                v = i(46830),
                f = i(67407),
                g = i(47554);
            let w = e => `chungdoi:demo-wishes:${e}`;

            function y(e) {
                try {
                    let t = window.localStorage.getItem(w(e));
                    if (!t) return [];
                    let i = JSON.parse(t);
                    if (!Array.isArray(i)) return [];
                    return i.filter(e => !!e && "object" == typeof e && "string" == typeof e.name && "string" == typeof e.message).slice(-20).map(e => ({
                        id: "string" == typeof e.id ? e.id : `local-${Date.now()}`,
                        name: e.name.slice(0, g.ew),
                        message: e.message.slice(0, g.Ci),
                        timestamp: "string" == typeof e.timestamp ? e.timestamp : new Date().toISOString()
                    }))
                } catch {
                    return []
                }
            }
            var _ = i(36100),
                b = i(83955),
                x = i(76262),
                S = i(71675),
                k = i(48564),
                C = i(90135),
                E = i(18955);

            function R(e) {
                let {
                    templateData: t,
                    slug: i,
                    isScreenshot: g,
                    invitationId: R,
                    guestName: T,
                    guestCode: M,
                    customGreeting: I,
                    customInviteMessage: j,
                    viewLimitExceeded: O,
                    trialExpired: $,
                    isDemo: N,
                    isDemoInvitation: L,
                    staticComments: P,
                    initialEnvelopeOpen: D = !1,
                    onEnvelopeOpen: F
                } = e, U = (0, s.jE)(), A = (0, u.usePathname)(), B = (0, u.useSearchParams)(), G = (0, E.c)("invitationRenderer"), [K, Y] = (0, r.useState)(!1), q = (0, r.useRef)(null), H = (0, c.y)(A), J = N || H || !!L, Q = "1" === B.get("landingCapture"), z = "1" === B.get("videoCapture"), W = t.templateId || "double_dragon_red", X = (0, x.Ww)(W), Z = (0, x.aQ)(W), V = (0, x.B4)(W) ? .musicPlayerColor || "#CD5C5C", {
                    envelopeOpened: ee,
                    handleEnvelopeOpen: et,
                    handleInvitationClick: ei
                } = function(e) {
                    let {
                        enabled: t,
                        initialOpened: i = !1
                    } = e, [n, s] = (0, r.useState)(i), [a, o] = (0, r.useState)(!1), [u, c] = (0, r.useState)(!1), d = (0, r.useRef)(0), [l] = (0, r.useState)(() => "true" === new URLSearchParams(window.location.search).get("screenshot")), [h] = (0, r.useState)(() => "1" === new URLSearchParams(window.location.search).get("videoCapture")), [m] = (0, r.useState)(() => {
                        let e = new URLSearchParams(window.location.search).get("scroll");
                        if (!e) return 50;
                        let t = parseInt(e, 10);
                        return isNaN(t) || t <= 0 ? 50 : t
                    });
                    (0, r.useLayoutEffect)(() => {
                        "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), document.documentElement.scrollTop = 0, document.body.scrollTop = 0
                    }, []);
                    let p = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            {
                                scrollSpeed: t = 20,
                                startDelay: i = 2e3,
                                enabled: n = !0,
                                stopOnUserInteraction: s = !0
                            } = e,
                            a = (0, r.useRef)(void 0),
                            o = (0, r.useRef)(void 0),
                            u = (0, r.useRef)(0),
                            c = (0, r.useRef)(0),
                            d = (0, r.useRef)(0),
                            l = (0, r.useRef)(0),
                            h = (0, r.useRef)(!1),
                            m = (0, r.useRef)(!1),
                            p = (0, r.useRef)(void 0),
                            v = (0, r.useRef)(void 0);
                        return (0, r.useEffect)(() => {
                            if (!n || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                            h.current = !1;
                            let e = new AbortController,
                                {
                                    signal: r
                                } = e,
                                f = () => {
                                    h.current || (h.current = !0, void 0 !== a.current && (cancelAnimationFrame(a.current), a.current = void 0), e.abort())
                                },
                                g = e => {
                                    if (h.current) return;
                                    if (m.current) {
                                        o.current = void 0, a.current = requestAnimationFrame(g);
                                        return
                                    }
                                    void 0 === o.current && (o.current = e, u.current = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0);
                                    let i = Math.min(e - o.current, 100);
                                    o.current = e;
                                    let n = window.innerHeight,
                                        r = document.documentElement.scrollHeight,
                                        s = Math.max(0, r - n);
                                    if (Math.abs(r - c.current) > 1 && (c.current = r, d.current = e), s <= 10) return e - l.current > 3e4 ? void f() : void(a.current = requestAnimationFrame(g));
                                    u.current = Math.min(u.current + i / 1e3 * t, s);
                                    let p = u.current;
                                    if (window.scrollTo(0, p), Math.abs(window.scrollY - p) > 2 && (document.documentElement.scrollTop = p, document.body.scrollTop = p), p >= s - .5 && e - d.current > 1200) return void f();
                                    a.current = requestAnimationFrame(g)
                                };
                            return v.current = g, p.current = setTimeout(() => {
                                if (!h.current) {
                                    if (o.current = void 0, c.current = 0, d.current = performance.now(), l.current = performance.now(), s) {
                                        let e = {
                                            passive: !0,
                                            signal: r
                                        };
                                        window.addEventListener("wheel", f, e), window.addEventListener("touchstart", f, e), window.addEventListener("mousedown", f, {
                                            signal: r
                                        }), window.addEventListener("keydown", f, {
                                            signal: r
                                        })
                                    }
                                    a.current = requestAnimationFrame(g)
                                }
                            }, i), () => {
                                void 0 !== p.current && (clearTimeout(p.current), p.current = void 0), f()
                            }
                        }, [t, i, n, s]), {
                            pause: (0, r.useCallback)(() => {
                                m.current || h.current || (m.current = !0)
                            }, []),
                            resume: (0, r.useCallback)(() => {
                                m.current && !h.current && (u.current = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0, o.current = void 0, m.current = !1)
                            }, []),
                            isPaused: m.current
                        }
                    }({
                        enabled: t && n && !l && !h,
                        scrollSpeed: m,
                        startDelay: 2e3,
                        stopOnUserInteraction: !1
                    });
                    return (0, r.useEffect)(() => {
                        if (!t || !n || u) return;
                        let e = 0,
                            i = t => {
                                a || u || (e += Math.abs(t.deltaY)) >= 50 && (p.pause(), o(!0))
                            },
                            r = () => {
                                a || u || (p.pause(), o(!0))
                            },
                            s = e => {
                                e.target.matches('input, textarea, select, [contenteditable="true"]') && (p.pause(), c(!0), o(!0))
                            };
                        return window.addEventListener("wheel", i, {
                            passive: !0
                        }), window.addEventListener("touchstart", r, {
                            passive: !0
                        }), window.addEventListener("focusin", s, {
                            passive: !0
                        }), window.addEventListener("mousedown", s, {
                            passive: !0
                        }), () => {
                            window.removeEventListener("wheel", i), window.removeEventListener("touchstart", r), window.removeEventListener("focusin", s), window.removeEventListener("mousedown", s)
                        }
                    }, [t, n, a, u, p]), (0, r.useEffect)(() => {
                        if (!u) return;
                        let e = () => {
                            setTimeout(() => {
                                let e = document.activeElement;
                                e ? .matches('input, textarea, select, [contenteditable="true"]') || (d.current = Date.now(), c(!1))
                            }, 0)
                        };
                        return window.addEventListener("focusout", e, {
                            passive: !0
                        }), () => window.removeEventListener("focusout", e)
                    }, [u]), {
                        envelopeOpened: n,
                        isPaused: a,
                        isEditing: u,
                        scrollSpeed: m,
                        handleEnvelopeOpen: () => {
                            s(!0)
                        },
                        handleInvitationClick: e => {
                            let t = e.target,
                                i = t.closest('img, button, a, input, textarea, select, video, audio, dialog, [role="menu"], [role="menuitem"], [role="listbox"], [role="option"], [role="dialog"], [role="alertdialog"], .modal, .dropdown-menu, [data-dropdown], [data-modal]');
                            if (t.closest('input, textarea, select, [contenteditable="true"]')) {
                                u || (p.pause(), c(!0), o(!0));
                                return
                            }
                            if (i) {
                                a || u || (p.pause(), o(!0));
                                return
                            }!u && (Date.now() - d.current < 400 || (a ? (p.resume(), o(!1)) : (p.pause(), o(!0))))
                        },
                        autoScrollControls: p
                    }
                }({
                    enabled: !0,
                    initialOpened: g || D
                }), en = (0, r.useMemo)(() => (0, b._L)(B ? .toString() ? ? ""), [B]), [er, es] = (0, r.useMemo)(() => (0, S.GH)(t), [t]), ea = (0, k.u0)(t.activeLocales), eo = (0, k.y3)(ea[0]), eu = (0, k.L6)(ea), ec = (0, k.J$)(C.cI.groomLabel, ea), ed = (0, k.J$)(C.cI.brideLabel, ea), el = er.name || "", eh = es.name || "", em = !(0, S.rP)(el) && !(0, S.rP)(eh), ep = em ? t.brideFirst ? ed : ec : el, ev = em ? t.brideFirst ? ec : ed : eh, {
                    data: ef
                } = (0, a.I)({
                    queryKey: ["comments", i],
                    queryFn: async () => {
                        let e = await fetch(`${v.$.apiUrl}/api/invite/${i}/comments`);
                        return e.ok ? e.json() : {
                            comments: []
                        }
                    },
                    initialData: P ? {
                        comments: P
                    } : void 0,
                    enabled: !P && (!g || H || Q)
                }), [eg, ew] = (0, r.useState)([]);
                (0, r.useEffect)(() => {
                    L && ew(y(i))
                }, [L, i]);
                let ey = (0, r.useMemo)(() => {
                        let e = (ef ? .comments || []).map(e => ({
                            id: e.id,
                            name: e.name,
                            message: e.message,
                            timestamp: e.timestamp
                        }));
                        return L ? [...[...eg].reverse(), ...e] : e
                    }, [ef, L, eg]),
                    e_ = (0, o.n)({
                        mutationFn: async e => {
                            if (L) {
                                let t = { ...e,
                                    id: e.id || `local-${Date.now()}`,
                                    timestamp: e.timestamp || new Date().toISOString()
                                };
                                return ew(function(e, t) {
                                    let i = [...y(e), t].slice(-20);
                                    try {
                                        window.localStorage.setItem(w(e), JSON.stringify(i))
                                    } catch {}
                                    return i
                                }(i, t)), {
                                    comment: t,
                                    stored: !1
                                }
                            }
                            let t = await fetch(`${v.$.apiUrl}/api/invite/${i}/comments`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    name: e.name,
                                    message: e.message,
                                    visitor_id: (0, f.YA)(),
                                    guest_code: M
                                })
                            });
                            if (!t.ok) throw Error("Failed to save comment");
                            return t.json()
                        },
                        onSuccess: () => {
                            L || U.invalidateQueries({
                                queryKey: ["comments", i]
                            })
                        },
                        onError: e => {
                            (0, _.N7)(e instanceof Error ? e : Error(String(e)), {
                                component: "InvitationRenderer",
                                action: "submitGuestbookComment",
                                slug: i
                            })
                        }
                    }),
                    eb = async (e, t) => {
                        t && await e_.mutateAsync(t)
                    },
                    ex = t.musicStartTime,
                    eS = t.musicEndTime,
                    ek = t.musicTrackId || "",
                    eC = ex && ex > 0 || eS && eS > 0,
                    eE = (0, p.n)(t.musicTrackId, !g),
                    eR = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    if (!t.musicTrackId || !q.current || !eE) return;
                    let e = q.current;
                    if (e.volume = .5, e.loop = !eC, e.preload = "auto", !eE.url || eR.current === eE.url) return;
                    eR.current = eE.url, e.src = eE.url;
                    let i = ex && ex > 0 ? () => {
                        e.currentTime = ex
                    } : null;
                    return i && e.addEventListener("loadedmetadata", i, {
                        once: !0
                    }), e.load(), () => {
                        i && e.removeEventListener("loadedmetadata", i)
                    }
                }, [t.musicTrackId, eE, eC, ex]), (0, r.useEffect)(() => {
                    if (ee) return;
                    let e = setTimeout(() => Y(!0), 500);
                    return () => clearTimeout(e)
                }, [ee]);
                let eT = (0, r.useRef)(!1);
                (0, r.useEffect)(() => {
                    !D || g || eT.current || (eT.current = !0, F ? .())
                }, [D, g]);
                let eM = t ? .activeLocales ? .[0] ? ? "vi",
                    eI = { ...(0, S.TH)((0, S.$G)(W, eM), t),
                        comments: ey,
                        musicTrackId: void 0,
                        invitationId: R,
                        invitationSlug: i,
                        ...M ? {
                            guestCode: M
                        } : {},
                        ...T ? {
                            guestName: T
                        } : {}
                    },
                    ej = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return (0, n.jsx)(S.lk, {
                            value: {
                                isPending: e_.isPending,
                                isError: e_.isError,
                                isSuccess: e_.isSuccess
                            },
                            children: (0, n.jsxs)(S.IA, {
                                value: J ? null : {
                                    invitationSlug: i
                                },
                                children: [(0, n.jsx)(h, {
                                    children: (0, n.jsx)(X, {
                                        data: eI,
                                        themeId: Z,
                                        onDataChange: eb,
                                        isPreview: H
                                    })
                                }), !e && !g && !z && t.musicTrackId && (0, n.jsx)(m.T, {
                                    trackId: t.musicTrackId,
                                    startTime: ex,
                                    endTime: eS,
                                    audioRef: q,
                                    autoPlay: !0,
                                    volume: .5,
                                    themeColor: V
                                })]
                            })
                        })
                    };
                return ee ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("audio", {
                        ref: q,
                        style: {
                            display: "none"
                        },
                        "data-video-audio": !0,
                        "data-music-track-id": ek,
                        "data-music-start": ex || 0,
                        "data-music-end": eS || 0
                    }), (0, n.jsx)("div", {
                        onClick: ei,
                        className: "cursor-pointer",
                        "data-landing-screenshot-id": "invite-renderer",
                        "data-video-invitation": !0,
                        dir: eo,
                        lang: eu,
                        children: ej()
                    }), (O || $) && (() => {
                        let e = (0, k.u0)(t.activeLocales)[0],
                            i = (0, k.bT)(t.groomFullName, e) || (0, k.bT)(t.groomShortName, e),
                            r = (0, k.bT)(t.brideFullName, e) || (0, k.bT)(t.brideShortName, e);
                        return (0, n.jsxs)("div", {
                            className: "fixed inset-0 z-50 flex items-center justify-center",
                            dir: eo,
                            lang: eu,
                            children: [(0, n.jsx)("div", {
                                className: "absolute inset-0 backdrop-blur-md bg-white/30"
                            }), (0, n.jsxs)("div", {
                                className: "relative bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-4 text-center",
                                children: [(0, n.jsx)("div", {
                                    className: "text-4xl mb-4",
                                    children: i ? "❤️" : "✉️"
                                }), (0, n.jsx)("h3", {
                                    className: "text-lg font-medium text-gray-800 mb-2",
                                    children: i ? G("invitationOf", {
                                        groomName: i,
                                        brideName: r || G("brideFallback")
                                    }) : G("defaultTitle")
                                }), (0, n.jsx)("p", {
                                    className: "text-gray-500 text-sm",
                                    children: G("notReady")
                                }), (0, n.jsx)("div", {
                                    className: "mt-6 pt-4 border-t border-gray-100",
                                    children: (0, n.jsxs)("p", {
                                        className: "text-sm text-gray-500",
                                        children: [G("wantToCreate"), " ", (0, n.jsx)(d.default, {
                                            href: `${(0,k.Gc)(e)||"/"}?utm_source=view_limit&utm_medium=referral&utm_campaign=guest_conversion`,
                                            className: "text-rose-400 hover:text-rose-500 hover:underline",
                                            children: G("startNow")
                                        })]
                                    })
                                })]
                            })]
                        })
                    })()]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("audio", {
                        ref: q,
                        style: {
                            display: "none"
                        },
                        "data-video-audio": !0,
                        "data-music-track-id": ek,
                        "data-music-start": ex || 0,
                        "data-music-end": eS || 0
                    }), K && (0, n.jsx)("div", {
                        style: {
                            display: "none"
                        },
                        "aria-hidden": "true",
                        dir: eo,
                        lang: eu,
                        "data-video-preload": !0,
                        children: ej(!0)
                    }), (0, n.jsx)("div", {
                        dir: eo,
                        lang: eu,
                        style: {
                            display: "contents"
                        },
                        children: (0, n.jsx)(l.m, {
                            guestName: T,
                            groomName: ep,
                            brideName: ev,
                            weddingDate: (0, S.hb)(t).date,
                            templateId: W,
                            particleSeed: i,
                            onOpen: () => {
                                et(), F ? .()
                            },
                            openFallbackHref: en,
                            audioRef: t.musicTrackId ? q : void 0,
                            envelopeTheme: (0, x.B4)(W) ? .theme,
                            envelopeDecorations: (0, x.B4)(W) ? .decorations,
                            envelopeFonts: (0, x.B4)(W) ? .fonts,
                            data: eI,
                            customGreeting: I,
                            customInviteMessage: j
                        })
                    })]
                })
            }
        }
    }
]);