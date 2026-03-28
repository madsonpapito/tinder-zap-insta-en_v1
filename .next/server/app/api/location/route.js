/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/location/route";
exports.ids = ["app/api/location/route"];
exports.modules = {

/***/ "(rsc)/./app/api/location/route.ts":
/*!***********************************!*\
  !*** ./app/api/location/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/location/route.ts\n\nconst dynamic = 'force-dynamic';\nasync function GET(request) {\n    // First, try Vercel headers (production)\n    const vercelCity = request.headers.get('x-vercel-ip-city');\n    const vercelCountry = request.headers.get('x-vercel-ip-country');\n    const vercelLat = request.headers.get('x-vercel-ip-latitude');\n    const vercelLon = request.headers.get('x-vercel-ip-longitude');\n    if (vercelCity && vercelCountry && vercelLat && vercelLon) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city: decodeURIComponent(vercelCity),\n            country: vercelCountry,\n            region: request.headers.get('x-vercel-ip-country-region') || '',\n            postalCode: request.headers.get('x-vercel-ip-postal-code') || '',\n            lat: parseFloat(vercelLat),\n            lon: parseFloat(vercelLon)\n        });\n    }\n    // Fallback: fetch real IP geolocation via external API (works in dev too)\n    try {\n        const forwarded = request.headers.get('x-forwarded-for');\n        const ip = forwarded ? forwarded.split(',')[0].trim() : null;\n        // Use ipapi.co — free, no key needed\n        const geoUrl = ip && ip !== '127.0.0.1' && ip !== '::1' ? `https://ipapi.co/${ip}/json/` : `https://ipapi.co/json/`;\n        const geoRes = await fetch(geoUrl, {\n            headers: {\n                'User-Agent': 'Mozilla/5.0'\n            },\n            cache: 'no-store'\n        });\n        if (!geoRes.ok) throw new Error('ipapi.co failed');\n        const geo = await geoRes.json();\n        if (geo.error) throw new Error(geo.reason || 'ipapi error');\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city: geo.city || 'Unknown',\n            country: geo.country_code || '',\n            region: geo.region || '',\n            postalCode: geo.postal || '',\n            lat: geo.latitude,\n            lon: geo.longitude\n        });\n    } catch (error) {\n        console.error(\"Geolocation error:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Could not determine location.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvY2F0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRCQUE0QjtBQUU0QjtBQUVqRCxNQUFNQyxVQUFVLGdCQUFnQjtBQUVoQyxlQUFlQyxJQUFJQyxPQUFvQjtJQUM1Qyx5Q0FBeUM7SUFDekMsTUFBTUMsYUFBYUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDdkMsTUFBTUMsZ0JBQWdCSixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUMxQyxNQUFNRSxZQUFZTCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUN0QyxNQUFNRyxZQUFZTixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUV0QyxJQUFJRixjQUFjRyxpQkFBaUJDLGFBQWFDLFdBQVc7UUFDekQsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkMsUUFBUTtZQUNSQyxNQUFNQyxtQkFBbUJUO1lBQ3pCVSxTQUFTUDtZQUNUUSxRQUFRWixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUM7WUFDN0RVLFlBQVliLFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QjtZQUM5RFcsS0FBS0MsV0FBV1Y7WUFDaEJXLEtBQUtELFdBQVdUO1FBQ2xCO0lBQ0Y7SUFFQSwwRUFBMEU7SUFDMUUsSUFBSTtRQUNGLE1BQU1XLFlBQVlqQixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN0QyxNQUFNZSxLQUFLRCxZQUFZQSxVQUFVRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxLQUFLO1FBRXhELHFDQUFxQztRQUNyQyxNQUFNQyxTQUFTSCxNQUFNQSxPQUFPLGVBQWVBLE9BQU8sUUFDOUMsQ0FBQyxpQkFBaUIsRUFBRUEsR0FBRyxNQUFNLENBQUMsR0FDOUIsQ0FBQyxzQkFBc0IsQ0FBQztRQUU1QixNQUFNSSxTQUFTLE1BQU1DLE1BQU1GLFFBQVE7WUFDakNuQixTQUFTO2dCQUFFLGNBQWM7WUFBYztZQUN2Q3NCLE9BQU87UUFDVDtRQUVBLElBQUksQ0FBQ0YsT0FBT0csRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTtRQUVoQyxNQUFNQyxNQUFNLE1BQU1MLE9BQU9mLElBQUk7UUFFN0IsSUFBSW9CLElBQUlDLEtBQUssRUFBRSxNQUFNLElBQUlGLE1BQU1DLElBQUlFLE1BQU0sSUFBSTtRQUU3QyxPQUFPaEMscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkMsUUFBUTtZQUNSQyxNQUFNa0IsSUFBSWxCLElBQUksSUFBSTtZQUNsQkUsU0FBU2dCLElBQUlHLFlBQVksSUFBSTtZQUM3QmxCLFFBQVFlLElBQUlmLE1BQU0sSUFBSTtZQUN0QkMsWUFBWWMsSUFBSUksTUFBTSxJQUFJO1lBQzFCakIsS0FBS2EsSUFBSUssUUFBUTtZQUNqQmhCLEtBQUtXLElBQUlNLFNBQVM7UUFDcEI7SUFFRixFQUFFLE9BQU9MLE9BQVk7UUFDbkJNLFFBQVFOLEtBQUssQ0FBQyxzQkFBc0JBLE1BQU1PLE9BQU87UUFDakQsT0FBT3RDLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQUVxQixPQUFPO1FBQWdDLEdBQ3pDO1lBQUVwQixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtYWRzb1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxBSU9TXFxzcXVhZHNcXHRpbmRlcmNoZWNrXFx0aW5kZXItemFwLWVuX1YyXFxhcHBcXGFwaVxcbG9jYXRpb25cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvbG9jYXRpb24vcm91dGUudHNcclxuXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIC8vIEZpcnN0LCB0cnkgVmVyY2VsIGhlYWRlcnMgKHByb2R1Y3Rpb24pXHJcbiAgY29uc3QgdmVyY2VsQ2l0eSA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWNpdHknKTtcclxuICBjb25zdCB2ZXJjZWxDb3VudHJ5ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtY291bnRyeScpO1xyXG4gIGNvbnN0IHZlcmNlbExhdCA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWxhdGl0dWRlJyk7XHJcbiAgY29uc3QgdmVyY2VsTG9uID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtbG9uZ2l0dWRlJyk7XHJcblxyXG4gIGlmICh2ZXJjZWxDaXR5ICYmIHZlcmNlbENvdW50cnkgJiYgdmVyY2VsTGF0ICYmIHZlcmNlbExvbikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIGNpdHk6IGRlY29kZVVSSUNvbXBvbmVudCh2ZXJjZWxDaXR5KSxcclxuICAgICAgY291bnRyeTogdmVyY2VsQ291bnRyeSxcclxuICAgICAgcmVnaW9uOiByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1jb3VudHJ5LXJlZ2lvbicpIHx8ICcnLFxyXG4gICAgICBwb3N0YWxDb2RlOiByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1wb3N0YWwtY29kZScpIHx8ICcnLFxyXG4gICAgICBsYXQ6IHBhcnNlRmxvYXQodmVyY2VsTGF0KSxcclxuICAgICAgbG9uOiBwYXJzZUZsb2F0KHZlcmNlbExvbiksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEZhbGxiYWNrOiBmZXRjaCByZWFsIElQIGdlb2xvY2F0aW9uIHZpYSBleHRlcm5hbCBBUEkgKHdvcmtzIGluIGRldiB0b28pXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcndhcmRlZCA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtZm9yd2FyZGVkLWZvcicpO1xyXG4gICAgY29uc3QgaXAgPSBmb3J3YXJkZWQgPyBmb3J3YXJkZWQuc3BsaXQoJywnKVswXS50cmltKCkgOiBudWxsO1xyXG5cclxuICAgIC8vIFVzZSBpcGFwaS5jbyDigJQgZnJlZSwgbm8ga2V5IG5lZWRlZFxyXG4gICAgY29uc3QgZ2VvVXJsID0gaXAgJiYgaXAgIT09ICcxMjcuMC4wLjEnICYmIGlwICE9PSAnOjoxJ1xyXG4gICAgICA/IGBodHRwczovL2lwYXBpLmNvLyR7aXB9L2pzb24vYFxyXG4gICAgICA6IGBodHRwczovL2lwYXBpLmNvL2pzb24vYDtcclxuXHJcbiAgICBjb25zdCBnZW9SZXMgPSBhd2FpdCBmZXRjaChnZW9VcmwsIHtcclxuICAgICAgaGVhZGVyczogeyAnVXNlci1BZ2VudCc6ICdNb3ppbGxhLzUuMCcgfSxcclxuICAgICAgY2FjaGU6ICduby1zdG9yZScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWdlb1Jlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdpcGFwaS5jbyBmYWlsZWQnKTtcclxuXHJcbiAgICBjb25zdCBnZW8gPSBhd2FpdCBnZW9SZXMuanNvbigpO1xyXG5cclxuICAgIGlmIChnZW8uZXJyb3IpIHRocm93IG5ldyBFcnJvcihnZW8ucmVhc29uIHx8ICdpcGFwaSBlcnJvcicpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICBjaXR5OiBnZW8uY2l0eSB8fCAnVW5rbm93bicsXHJcbiAgICAgIGNvdW50cnk6IGdlby5jb3VudHJ5X2NvZGUgfHwgJycsXHJcbiAgICAgIHJlZ2lvbjogZ2VvLnJlZ2lvbiB8fCAnJyxcclxuICAgICAgcG9zdGFsQ29kZTogZ2VvLnBvc3RhbCB8fCAnJyxcclxuICAgICAgbGF0OiBnZW8ubGF0aXR1ZGUsXHJcbiAgICAgIGxvbjogZ2VvLmxvbmdpdHVkZSxcclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiR2VvbG9jYXRpb24gZXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnQ291bGQgbm90IGRldGVybWluZSBsb2NhdGlvbi4nIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImR5bmFtaWMiLCJHRVQiLCJyZXF1ZXN0IiwidmVyY2VsQ2l0eSIsImhlYWRlcnMiLCJnZXQiLCJ2ZXJjZWxDb3VudHJ5IiwidmVyY2VsTGF0IiwidmVyY2VsTG9uIiwianNvbiIsInN0YXR1cyIsImNpdHkiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb3VudHJ5IiwicmVnaW9uIiwicG9zdGFsQ29kZSIsImxhdCIsInBhcnNlRmxvYXQiLCJsb24iLCJmb3J3YXJkZWQiLCJpcCIsInNwbGl0IiwidHJpbSIsImdlb1VybCIsImdlb1JlcyIsImZldGNoIiwiY2FjaGUiLCJvayIsIkVycm9yIiwiZ2VvIiwiZXJyb3IiLCJyZWFzb24iLCJjb3VudHJ5X2NvZGUiLCJwb3N0YWwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/location/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_madso_OneDrive_rea_de_Trabalho_AIOS_squads_tindercheck_tinder_zap_en_V2_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/location/route.ts */ \"(rsc)/./app/api/location/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/location/route\",\n        pathname: \"/api/location\",\n        filename: \"route\",\n        bundlePath: \"app/api/location/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\madso\\\\OneDrive\\\\Área de Trabalho\\\\AIOS\\\\squads\\\\tindercheck\\\\tinder-zap-en_V2\\\\app\\\\api\\\\location\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_madso_OneDrive_rea_de_Trabalho_AIOS_squads_tindercheck_tinder_zap_en_V2_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9jYXRpb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtYWRzbyU1Q09uZURyaXZlJTVDJUMzJTgxcmVhJTIwZGUlMjBUcmFiYWxobyU1Q0FJT1MlNUNzcXVhZHMlNUN0aW5kZXJjaGVjayU1Q3RpbmRlci16YXAtZW5fVjIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21hZHNvJTVDT25lRHJpdmUlNUMlQzMlODFyZWElMjBkZSUyMFRyYWJhbGhvJTVDQUlPUyU1Q3NxdWFkcyU1Q3RpbmRlcmNoZWNrJTVDdGluZGVyLXphcC1lbl9WMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUU7QUFDcEo7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG1hZHNvXFxcXE9uZURyaXZlXFxcXMOBcmVhIGRlIFRyYWJhbGhvXFxcXEFJT1NcXFxcc3F1YWRzXFxcXHRpbmRlcmNoZWNrXFxcXHRpbmRlci16YXAtZW5fVjJcXFxcYXBwXFxcXGFwaVxcXFxsb2NhdGlvblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbG9jYXRpb24vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9sb2NhdGlvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9jYXRpb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtYWRzb1xcXFxPbmVEcml2ZVxcXFzDgXJlYSBkZSBUcmFiYWxob1xcXFxBSU9TXFxcXHNxdWFkc1xcXFx0aW5kZXJjaGVja1xcXFx0aW5kZXItemFwLWVuX1YyXFxcXGFwcFxcXFxhcGlcXFxcbG9jYXRpb25cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5COneDrive%5C%C3%81rea%20de%20Trabalho%5CAIOS%5Csquads%5Ctindercheck%5Ctinder-zap-en_V2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();