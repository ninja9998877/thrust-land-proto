/* Thrust Land proto telemetry (Firestore). Public web config only — no SA. */
(function (global) {
  "use strict";

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyApIXNcMiwKA0XvGlUpR5Ktmqcph0evfgw",
    authDomain: "thrust-land-proto.firebaseapp.com",
    projectId: "thrust-land-proto",
    storageBucket: "thrust-land-proto.firebasestorage.app",
    messagingSenderId: "89566823736",
    appId: "1:89566823736:web:73dae458eba940a8952dcd",
  };

  const DEFAULTS = {
    uniqueLanders: 0,
    successCount: 0,
    failCount: 0,
    attempts: 0,
    l1Success: 0,
    l1Fail: 0,
    l2Success: 0,
    l2Fail: 0,
    l3Success: 0,
    l3Fail: 0,
    updatedAt: 0,
  };

  const LS_ID = "thrust_land_anon_v1";
  let db = null;
  let ready = null;

  function anonId() {
    try {
      let id = localStorage.getItem(LS_ID);
      if (!id || id.length < 8) {
        id = "t" + Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem(LS_ID, id);
      }
      return id.slice(0, 64);
    } catch (_) {
      return "t" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
  }

  function init() {
    if (ready) return ready;
    ready = new Promise((resolve) => {
      try {
        if (!global.firebase) {
          console.warn("[telemetry] firebase SDK missing");
          resolve(false);
          return;
        }
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        db = firebase.firestore();
        resolve(true);
      } catch (e) {
        console.warn("[telemetry] init fail", e);
        resolve(false);
      }
    });
    return ready;
  }

  async function bump(delta) {
    const ok = await init();
    if (!ok || !db) return;
    const ref = db.collection("telemetry").doc("thrust_land");
    try {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(ref);
        const cur = snap.exists ? { ...DEFAULTS, ...snap.data() } : { ...DEFAULTS };
        const next = { ...cur };
        for (const [k, v] of Object.entries(delta)) {
          if (k === "updatedAt") continue;
          next[k] = (Number(next[k]) || 0) + (Number(v) || 0);
        }
        next.updatedAt = Date.now();
        // strip unknown keys
        const out = {};
        for (const k of Object.keys(DEFAULTS)) out[k] = Number(next[k]) || 0;
        out.updatedAt = Date.now();
        tx.set(ref, out);
      });
    } catch (e) {
      console.warn("[telemetry] bump fail", e);
    }
  }

  async function trackAttempt() {
    bump({ attempts: 1 });
  }

  async function trackFail(level) {
    const lv = Math.min(3, Math.max(1, level | 0));
    const delta = { failCount: 1 };
    delta["l" + lv + "Fail"] = 1;
    bump(delta);
  }

  async function trackSuccess(level) {
    const lv = Math.min(3, Math.max(1, level | 0));
    const id = anonId();
    let isNew = false;
    const ok = await init();
    if (ok && db) {
      try {
        await db.collection("telemetry_landers").doc(id).set({
          at: Date.now(),
          firstLevel: lv,
        });
        isNew = true;
      } catch (e) {
        // exists or denied update → not unique
        isNew = false;
      }
    }
    const delta = { successCount: 1 };
    delta["l" + lv + "Success"] = 1;
    if (isNew) delta.uniqueLanders = 1;
    await bump(delta);
  }

  function subscribe(cb) {
    init().then((ok) => {
      if (!ok || !db) {
        cb(null, new Error("no db"));
        return;
      }
      return db.collection("telemetry").doc("thrust_land").onSnapshot(
        (snap) => cb(snap.exists ? { ...DEFAULTS, ...snap.data() } : { ...DEFAULTS }, null),
        (err) => cb(null, err)
      );
    });
  }

  global.ThrustTelemetry = {
    init,
    anonId,
    trackAttempt,
    trackFail,
    trackSuccess,
    subscribe,
    FIREBASE_CONFIG,
    DEFAULTS,
  };
})(typeof window !== "undefined" ? window : globalThis);
