"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99762], {
        24314: (e, t, r) => {
            r.d(t, {
                Bv: () => a,
                Pu: () => o
            });
            class a extends Error {
                constructor(e) {
                    super(e), this.name = "UnreadableSourceError"
                }
            }
            async function i(e) {
                try {
                    return await e.arrayBuffer()
                } catch {
                    return await new Response(e).arrayBuffer()
                }
            }
            async function o(e) {
                let t;
                if (e.size > 0x4000000) return e;
                try {
                    t = await i(e)
                } catch (t) {
                    throw new a(`Could not read ${e.name||"the selected file"}: ${t instanceof Error?t.message:String(t)}`)
                }
                if (e.size > 0 && t.byteLength < e.size) throw new a(`Short read on ${e.name||"the selected file"}: got ${t.byteLength} of ${e.size} bytes`);
                return new File([t], e.name, {
                    type: e.type,
                    lastModified: e.lastModified
                })
            }
        },
        99762: (e, t, r) => {
            r.d(t, {
                AP: () => g,
                E5: () => h,
                a5: () => m,
                q2: () => d
            });
            var a = r(47886),
                i = r(46830),
                o = r(66429),
                s = r(24314),
                n = r(76877),
                l = r(36100),
                c = r(91137),
                u = r(88462),
                p = r(38412);
            let h = e => {
                    let t = e.type.toLowerCase(),
                        r = e.name.toLowerCase();
                    return t.includes("heic") || t.includes("heif") || r.endsWith(".heic") || r.endsWith(".heif")
                },
                d = async e => {
                    let t, a = (await r.e(2e3).then(r.t.bind(r, 2402, 23))).default;
                    try {
                        t = await a({
                            blob: e,
                            toType: "image/jpeg",
                            quality: .9
                        })
                    } catch (t) {
                        try {
                            return await (0, n.x)(e)
                        } catch {}
                        throw (0, c.m)("HeicConversionError", `HEIC conversion failed: ${(0,o.U)(t)}`)
                    }
                    return new File([Array.isArray(t) ? t[0] : t], e.name.replace(/\.heic$/i, ".jpg").replace(/\.heif$/i, ".jpg"), {
                        type: "image/jpeg"
                    })
                };

            function g(e) {
                let t = e ? .status,
                    r = e instanceof Error ? e.message : "",
                    a = e instanceof Error ? e.name : "";
                return "CompressionFailedError" === a ? "uploadTooLarge" : "DegenerateImageError" === a || "HeicConversionError" === a || "CropSourceDecodeError" === a ? "uploadCannotProcess" : "UnreadableSourceError" === a ? "uploadCannotRead" : "CanvasEncodeError" === a ? "uploadDeviceOutOfMemory" : 413 === t || /File too large|LIMIT_FILE_SIZE/i.test(r) ? "uploadTooLarge" : 499 === t || 503 === t || /timeout|disconnect|network|fetch/i.test(r) ? "uploadTimeout" : /Invalid file type|Only image files/i.test(r) ? "uploadInvalidType" : "uploadFailed"
            }
            class m {
                static get API_URL() {
                    return i.$.apiUrl
                }
                static# e = this.ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/heic", "image/heif"];
                static# t = this.ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic", ".heif"];
                static# r = this.MSG_UPLOADING = "Đang tải l\xean...";
                static# a = this.MSG_DONE = "Ho\xe0n th\xe0nh!";
                static# i = this.MAX_RETRIES = 3;
                static# o = this.UPLOAD_TIMEOUT_MS = 12e4;
                static# s = this.RETRY_DELAYS = [1e3, 2e3, 4e3];
                static uploadingMessage(e, t) {
                    return e && t ? `Đang tải l\xean ${e}/${t}...` : this.MSG_UPLOADING
                }
                static# n = this.HARD_LIMIT_BYTES = 0xa00000;
                static async compressForUpload(e, t, r) {
                    let {
                        file: a,
                        dims: i,
                        rerouted: o,
                        libraryError: s
                    } = await (0, n.wU)(e, t), u = a, h = i, d = "compressed";
                    if (u.size >= e.size && (d = "canvas-after-noop", u = await (0, n.x)(e), h = await (0, p.xb)(u)), r ? .log("compressed", {
                            path: d,
                            inputBytes: e.size,
                            outputBytes: u.size,
                            outputMime: u.type,
                            libraryError: s
                        }), u.size > this.HARD_LIMIT_BYTES) {
                        let t = (0, c.m)("CompressionFailedError", `Ảnh qu\xe1 lớn (${(0,n.v7)(u.size)}). Vui l\xf2ng chọn ảnh c\xf3 độ ph\xe2n giải thấp hơn.`);
                        throw (0, l.N7)(t, {
                            component: "ImageUploadService",
                            action: "compressForUpload",
                            originalSize: (0, n.v7)(e.size),
                            finalSize: (0, n.v7)(u.size),
                            fileName: e.name,
                            fileType: e.type
                        }), t
                    }
                    if (r ? .log("compress_done", {
                            outputBytes: u.size,
                            outputW: h ? .width,
                            outputH: h ? .height,
                            outputMime: u.type,
                            rerouted: o
                        }), (0, n.KH)(h)) {
                        let t = (0, c.m)("DegenerateImageError", "Image could not be processed on this device. Please try again or choose another photo.");
                        throw (0, l.N7)(t, {
                            component: "ImageUploadService",
                            action: "compressForUpload",
                            fileName: e.name,
                            fileType: e.type,
                            outputW: h ? .width,
                            outputH: h ? .height
                        }), t
                    }
                    return u
                }
                static isRetryableError(e) {
                    if ("boolean" == typeof e.retryable) return e.retryable;
                    if ("number" == typeof e.status) {
                        if (408 === e.status || 425 === e.status || 429 === e.status || e.status >= 500) return !0;
                        if (e.status >= 400) return !1
                    }
                    let t = e.message.toLowerCase();
                    return t.includes("network") || t.includes("timeout") || t.includes("connection") || t.includes("socket hang up") || t.includes("econnreset") || t.includes("fetch failed") || t.includes("aborted"), !0
                }
                static async uploadFileWithTimeout(e, t, r) {
                    let i = new FormData;
                    i.append("image", e);
                    let o = new AbortController,
                        s = setTimeout(() => o.abort(), t),
                        n = r ? this.combineAbortSignals([o.signal, r]) : o.signal;
                    try {
                        let e = await a.uR.authenticatedOrAnonymousFetch(`${this.API_URL}/api/upload/image`, {
                            method: "POST",
                            body: i,
                            signal: n
                        });
                        if (clearTimeout(s), !e.ok) {
                            let t = await e.json().catch(() => ({})),
                                r = (0, u.n)(Error(t.error || "Failed to upload image"), e.status);
                            throw "boolean" == typeof t.retryable && (r.retryable = t.retryable), r
                        }
                        return e.json()
                    } catch (e) {
                        if (clearTimeout(s), e instanceof Error && "AbortError" === e.name) throw Error("Upload timeout - connection too slow");
                        throw e
                    }
                }
                static combineAbortSignals(e) {
                    let t = new AbortController;
                    for (let r of e) {
                        if (r.aborted) {
                            t.abort();
                            break
                        }
                        r.addEventListener("abort", () => t.abort(), {
                            once: !0
                        })
                    }
                    return t.signal
                }
                static async uploadFile(e) {
                    let t = null;
                    for (let r = 0; r < this.MAX_RETRIES; r++) try {
                        return await this.uploadFileWithTimeout(e, this.UPLOAD_TIMEOUT_MS)
                    } catch (s) {
                        console.error(`❌ Upload attempt ${r+1} failed:`, (t = s instanceof Error ? s : Error((0, o.U)(s))).message);
                        let e = this.isRetryableError(t);
                        if (!e || r === this.MAX_RETRIES - 1) throw console.error(`🚫 Not retrying (retryable: ${e}, attempt: ${r+1}/${this.MAX_RETRIES})`), t;
                        let a = this.RETRY_DELAYS[r],
                            i = Math.round(.5 * a + Math.random() * a * .5);
                        await new Promise(e => setTimeout(e, i))
                    }
                    throw t || Error("Upload failed after all retries")
                }
                static async captureDebugSource(e) {
                    try {
                        let t = new FormData;
                        t.append("source", e, e.name || "source");
                        let r = await a.uR.authenticatedOrAnonymousFetch(`${this.API_URL}/api/upload/debug-source`, {
                            method: "POST",
                            body: t
                        });
                        if (!r.ok) return;
                        let i = await r.json();
                        return "string" == typeof i ? .key ? i.key : void 0
                    } catch {
                        return
                    }
                }
                static validateFiles(e) {
                    let t = [],
                        r = [];
                    return e.forEach(e => {
                        let a = this.ALLOWED_TYPES.includes(e.type.toLowerCase()),
                            i = e.name.toLowerCase(),
                            o = this.ALLOWED_EXTENSIONS.some(e => i.endsWith(e));
                        a || o ? 0 === e.size ? r.push({
                            file: e,
                            reasonKey: "emptyFile"
                        }) : e.size > 0xc800000 ? r.push({
                            file: e,
                            reasonKey: "tooLarge"
                        }) : t.push(e) : r.push({
                            file: e,
                            reasonKey: "invalidFormat"
                        })
                    }), {
                        valid: t,
                        invalid: r
                    }
                }
                static async uploadSingleImage(e, t) {
                    let r, a, i = new p.iJ;
                    try {
                        r = await (0, s.Pu)(e)
                    } catch (r) {
                        i.log("source", {
                            fileName: e.name,
                            sourceBytes: e.size,
                            sourceMime: e.type,
                            isHeic: h(e)
                        });
                        let t = r instanceof s.Bv;
                        throw i.log("failed", {
                            error: (0, o.U)(r),
                            stage_detail: "snapshot"
                        }), i.report({
                            phase: "failed",
                            succeeded: !1,
                            unreadableSource: t
                        }), r
                    }
                    let n = await (0, p.xb)(r);
                    i.log("source", {
                        fileName: r.name,
                        sourceBytes: r.size,
                        sourceMime: r.type,
                        sourceW: n ? .width,
                        sourceH: n ? .height,
                        isHeic: h(r),
                        sourceHash: await (0, p.fg)(r),
                        exifOrientation: await (0, p.Jb)(r)
                    });
                    let l = r;
                    if (h(r)) {
                        t ? .({
                            stage: "compressing",
                            progress: 0,
                            message: "Đang chuyển đổi HEIC..."
                        }), l = await d(r);
                        let e = await (0, p.xb)(l);
                        i.log("heic_converted", {
                            outputBytes: l.size,
                            outputMime: l.type,
                            outputW: e ? .width,
                            outputH: e ? .height
                        })
                    }
                    let c = this.MSG_UPLOADING;
                    t ? .({
                        stage: "compressing",
                        progress: 0,
                        message: c
                    });
                    try {
                        a = await this.compressForUpload(l, e => {
                            t ? .({
                                stage: "compressing",
                                progress: e,
                                message: c
                            })
                        }, i)
                    } catch (t) {
                        let e = await this.captureDebugSource(l);
                        throw i.log("compress_failed", {
                            error: (0, o.U)(t),
                            debugSourceKey: e
                        }), i.report({
                            phase: "compress",
                            succeeded: !1,
                            debugSourceKey: e
                        }), t
                    }
                    t ? .({
                        stage: "uploading",
                        progress: 0,
                        message: c
                    });
                    try {
                        let e = await this.uploadFile(a);
                        return i.log("uploaded", {
                            finalBytes: a.size,
                            finalMime: a.type
                        }), i.report({
                            phase: "upload",
                            succeeded: !0,
                            finalBytes: a.size,
                            finalMime: a.type
                        }), t ? .({
                            stage: "done",
                            progress: 100,
                            message: this.MSG_DONE
                        }), e
                    } catch (e) {
                        throw i.log("upload_failed", {
                            error: (0, o.U)(e)
                        }), i.report({
                            phase: "upload",
                            succeeded: !1,
                            finalBytes: a.size,
                            finalMime: a.type
                        }), e
                    }
                }
                static async snapshotBatch(e, t) {
                    let r = [];
                    t ? .({
                        stage: "compressing",
                        progress: 0,
                        totalFiles: e.length,
                        message: this.MSG_UPLOADING
                    });
                    for (let t = 0; t < e.length; t++) try {
                        r.push({
                            ok: !0,
                            file: await (0, s.Pu)(e[t])
                        })
                    } catch (a) {
                        console.error(`❌ Could not read ${e[t].name}:`, a), r.push({
                            ok: !1,
                            error: a
                        })
                    }
                    return r
                }
                static async uploadMultipleImages(e, t) {
                    let r = [],
                        a = [],
                        i = e.length,
                        s = await this.snapshotBatch(e, t);
                    for (let n = 0; n < i; n++) {
                        let l = e[n],
                            c = s[n],
                            u = n + 1,
                            m = this.uploadingMessage(u, i),
                            f = new p.iJ;
                        if (!c.ok) {
                            f.log("source", {
                                fileName: l.name,
                                index: n,
                                total: i,
                                sourceBytes: l.size,
                                sourceMime: l.type,
                                isHeic: h(l)
                            }), f.log("failed", {
                                error: (0, o.U)(c.error),
                                stage_detail: "snapshot"
                            }), f.report({
                                phase: "failed",
                                succeeded: !1,
                                unreadableSource: !0
                            }), a.push({
                                filename: l.name,
                                reasonKey: g(c.error)
                            });
                            continue
                        }
                        let y = c.file,
                            w = await (0, p.xb)(y);
                        f.log("source", {
                            fileName: y.name,
                            index: n,
                            total: i,
                            sourceBytes: y.size,
                            sourceMime: y.type,
                            sourceW: w ? .width,
                            sourceH: w ? .height,
                            isHeic: h(y),
                            sourceHash: await (0, p.fg)(y),
                            exifOrientation: await (0, p.Jb)(y)
                        });
                        try {
                            let e = y;
                            if (h(y)) {
                                t ? .({
                                    stage: "compressing",
                                    progress: Math.round(n / i * 100),
                                    currentFile: u,
                                    totalFiles: i,
                                    message: `Đang chuyển đổi HEIC ${u}/${i}...`
                                }), e = await d(y);
                                let r = await (0, p.xb)(e);
                                f.log("heic_converted", {
                                    outputBytes: e.size,
                                    outputMime: e.type,
                                    outputW: r ? .width,
                                    outputH: r ? .height
                                })
                            }
                            t ? .({
                                stage: "compressing",
                                progress: Math.round(n / i * 100),
                                currentFile: u,
                                totalFiles: i,
                                message: m
                            });
                            let a = await this.compressForUpload(e, e => {
                                t ? .({
                                    stage: "compressing",
                                    progress: Math.round(n / i * 100 + e / i),
                                    currentFile: u,
                                    totalFiles: i,
                                    message: m
                                })
                            }, f);
                            t ? .({
                                stage: "uploading",
                                progress: Math.round((n + .5) / i * 100),
                                currentFile: u,
                                totalFiles: i,
                                message: m
                            });
                            let o = await this.uploadFile(a);
                            r.push({
                                url: o.imageUrl,
                                filename: y.name
                            }), f.log("uploaded", {
                                finalBytes: a.size,
                                finalMime: a.type
                            }), f.report({
                                phase: "upload",
                                succeeded: !0,
                                finalBytes: a.size,
                                finalMime: a.type
                            })
                        } catch (t) {
                            console.error(`❌ Failed to upload ${y.name}:`, t), a.push({
                                filename: l.name,
                                reasonKey: g(t)
                            });
                            let e = t instanceof Error && "DegenerateImageError" === t.name ? await this.captureDebugSource(y) : void 0;
                            f.log("failed", {
                                error: (0, o.U)(t),
                                debugSourceKey: e
                            }), f.report({
                                phase: "failed",
                                succeeded: !1,
                                debugSourceKey: e
                            })
                        } finally {
                            s[n] = {
                                ok: !1,
                                error: Error("snapshot released after upload")
                            }
                        }
                    }
                    return t ? .({
                        stage: "done",
                        progress: 100,
                        message: this.MSG_DONE
                    }), {
                        successful: r,
                        failed: a
                    }
                }
                static createImageFileInput() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "image/*",
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Promise(r => {
                        let a = document.createElement("input");
                        a.type = "file", a.accept = e, a.multiple = t;
                        let i = () => {
                                setTimeout(() => {
                                    a.files && a.files.length > 0 ? r(a.files) : r(null), s()
                                }, 100)
                            },
                            o = () => {
                                r(null), s()
                            },
                            s = () => {
                                a.removeEventListener("change", i), a.removeEventListener("cancel", o)
                            };
                        a.addEventListener("change", i), a.addEventListener("cancel", o), a.click()
                    })
                }
                static async blobUrlToFile(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image.jpg",
                        r = await fetch(e),
                        a = await r.blob();
                    return new File([a], t, {
                        type: a.type || "image/jpeg"
                    })
                }
            }
        }
    }
]);