import {
  useOptionalUser
} from "/build/_shared/chunk-D5DMHNFZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link
} from "/build/_shared/chunk-HIB6ES5M.js";
import {
  createHotContext
} from "/build/_shared/chunk-WIZE6HAT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1692627902028.3005";
}
var meta = () => [{
  title: "Remix Notes"
}];
function Index() {
  _s();
  const user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-full w-full object-cover", src: "https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg", alt: "Sonic Youth On Stage" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 37,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "Indie Stack" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 41,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl", children: "Check the README.md file for instructions on how to get this project deployed." }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8", children: [
          "View Notes for ",
          user.email
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/join", className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8", children: "Sign up" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 53,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600", children: "Log In" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 56,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://remix.run", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg", alt: "Remix", className: "mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 62,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex flex-wrap justify-center gap-8", children: [{
      src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
      alt: "Fly.io",
      href: "https://fly.io"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
      alt: "SQLite",
      href: "https://sqlite.org"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
      alt: "Prisma",
      href: "https://prisma.io"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
      alt: "Tailwind",
      href: "https://tailwindcss.com"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
      alt: "Cypress",
      href: "https://www.cypress.io"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
      alt: "MSW",
      href: "https://mswjs.io"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
      alt: "Vitest",
      href: "https://vitest.dev"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
      alt: "Testing Library",
      href: "https://testing-library.com"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
      alt: "Prettier",
      href: "https://prettier.io"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
      alt: "ESLint",
      href: "https://eslint.org"
    }, {
      src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
      alt: "TypeScript",
      href: "https://typescriptlang.org"
    }].map((img) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: img.href, className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: img.alt, src: img.src, className: "object-contain" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 115,
      columnNumber: 17
    }, this) }, img.href, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 114,
      columnNumber: 25
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(Index, "gqXoXrwy0rMHgaN7Y1noFHoOsVs=", false, function() {
  return [useOptionalUser];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-NMHUBBP4.js.map
