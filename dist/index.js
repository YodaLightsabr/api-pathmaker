var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  Util: () => Util,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_node_fetch = __toESM(require("node-fetch"));
var Util = {
  defaults(defaultObject, newObject) {
    const object = {};
    for (const key in defaultObject) {
      object[key] = defaultObject[key];
    }
    for (const key in newObject) {
      object[key] = newObject[key];
    }
    return object;
  },
  determineValues(object) {
    for (const key in object) {
      if (!key.startsWith("_") && object[key] instanceof Function) {
        object[key] = object[key]();
      }
    }
    return object;
  },
  async resolvePromises(object) {
    for (const key in object) {
      if (key instanceof Promise) {
        object[key] = await object[key];
      }
    }
  },
  async determineAsyncValues(object) {
    return await this.resolvePromises(determineValues(object));
  }
};
var API = class {
  constructor({ headers, baseUrl, outputParser = JSON.parse, inputParser = JSON.stringify, rateLimitHandler }) {
    const get = (url, defaultHeaders, target) => {
      return async (headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "GET",
          headers: Util.defaults(defaultHeaders, headers2)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const head = (url, defaultHeaders) => {
      return async (headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "HEAD",
          headers: Util.defaults(defaultHeaders, headers2)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const post = (url, defaultHeaders) => {
      return async (body, headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "POST",
          headers: Util.defaults(defaultHeaders, headers2),
          body: inputParser(body)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const put = (url, defaultHeaders) => {
      return async (body, headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "PUT",
          headers: Util.defaults(defaultHeaders, headers2),
          body: inputParser(body)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const http_delete = (url, defaultHeaders) => {
      return async (body, headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "DELETE ",
          headers: Util.defaults(defaultHeaders, headers2),
          body: inputParser(body)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const patch = (url, defaultHeaders) => {
      return async (body, headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "PATCH",
          headers: Util.defaults(defaultHeaders, headers2),
          body: inputParser(body)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const options = (url, defaultHeaders) => {
      return async (body, headers2) => {
        if (rateLimitHandler instanceof Function) {
          let output = rateLimitHandler();
          if (output instanceof Promise)
            await output;
        }
        const response = await (0, import_node_fetch.default)(url, {
          method: "OPTIONS",
          headers: Util.defaults(defaultHeaders, headers2),
          body: inputParser(body)
        });
        const text = await response.text();
        const parsed = outputParser(text);
        return parsed;
      };
    };
    const handler = {
      get: function(target, prop, receiver) {
        const output = (() => {
          const path = target.path;
          const url = baseUrl + "/" + path.join("/");
          if (prop == "_url")
            return baseUrl + "/" + target.path.join("/");
          if (prop == "get")
            return get(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "head")
            return head(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "post")
            return post(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "put")
            return put(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "delete")
            return http_delete(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "patch")
            return patch(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "options")
            return options(baseUrl + "/" + target.path.join("/"), Util.determineValues(headers));
          if (prop == "_absolute")
            return (pathName) => {
              path.push(pathName);
              return new Proxy({ path, url }, handler);
            };
          if (prop == "searchParams")
            return (searchParams) => {
              let params = [];
              for (const param in searchParams) {
                params.push(`${param}=${encodeURIComponent(searchParams[param])}`);
              }
              if (params.length)
                path.push("?" + params.join("&"));
              return new Proxy({ path, url }, handler);
            };
          target.path.push(prop);
          return new Proxy({ path, url }, handler);
        })();
        target.path = [];
        this.url = "/";
        return output;
      },
      set: function(target, prop, receiver) {
        return proxy;
      }
    };
    const proxy = new Proxy({ path: [], url: baseUrl }, handler);
    return proxy;
  }
};
var src_default = API;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Util
});
