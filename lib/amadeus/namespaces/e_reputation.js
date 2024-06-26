"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _hotel_sentiments = _interopRequireDefault(require("./e_reputation/hotel_sentiments"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v2/e-reputation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.eReputation;
 * ```
 *
 * @param {Client} client
 * @property {hotelSentiments} hotel_sentiments
 */
var EReputation = /*#__PURE__*/_createClass(function EReputation(client) {
  _classCallCheck(this, EReputation);
  this.client = client;
  this.hotelSentiments = new _hotel_sentiments["default"](client);
});
var _default = exports["default"] = EReputation;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG90ZWxfc2VudGltZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsInQiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiciIsImUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkVSZXB1dGF0aW9uIiwiY2xpZW50IiwiaG90ZWxTZW50aW1lbnRzIiwiSG90ZWxTZW50aW1lbnRzIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvZV9yZXB1dGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb3RlbFNlbnRpbWVudHMgICAgZnJvbSAnLi9lX3JlcHV0YXRpb24vaG90ZWxfc2VudGltZW50cyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL2UtcmVwdXRhdGlvbmAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmVSZXB1dGF0aW9uO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtob3RlbFNlbnRpbWVudHN9IGhvdGVsX3NlbnRpbWVudHNcbiAqL1xuY2xhc3MgRVJlcHV0YXRpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICAgICAgICAgICA9IGNsaWVudDtcbiAgICB0aGlzLmhvdGVsU2VudGltZW50cyA9IG5ldyBIb3RlbFNlbnRpbWVudHMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFUmVwdXRhdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLGlCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBaUUsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZixpQkFBQSxDQUFBYyxXQUFBLENBQUFHLFNBQUEsRUFBQUYsVUFBQSxPQUFBQyxXQUFBLEVBQUFoQixpQkFBQSxDQUFBYyxXQUFBLEVBQUFFLFdBQUEsR0FBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFJLFdBQUEsaUJBQUFOLFFBQUEsbUJBQUFNLFdBQUE7QUFBQSxTQUFBSCxlQUFBTyxDQUFBLFFBQUFmLENBQUEsR0FBQWdCLFlBQUEsQ0FBQUQsQ0FBQSxnQ0FBQUUsT0FBQSxDQUFBakIsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBZ0IsYUFBQUQsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBRCxPQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFJLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxNQUFBLENBQUFDLFdBQUEsa0JBQUFGLENBQUEsUUFBQW5CLENBQUEsR0FBQW1CLENBQUEsQ0FBQUcsSUFBQSxDQUFBUCxDQUFBLEVBQUFHLENBQUEsZ0NBQUFELE9BQUEsQ0FBQWpCLENBQUEsVUFBQUEsQ0FBQSxZQUFBdUIsU0FBQSx5RUFBQUwsQ0FBQSxHQUFBTSxNQUFBLEdBQUFDLE1BQUEsRUFBQVYsQ0FBQTtBQUFBLFNBQUFXLGdCQUFBQyxRQUFBLEVBQUFoQixXQUFBLFVBQUFnQixRQUFBLFlBQUFoQixXQUFBLGVBQUFZLFNBQUE7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLElBY01LLFdBQVcsZ0JBQUFsQixZQUFBLENBQ2YsU0FBQWtCLFlBQVlDLE1BQU0sRUFBRTtFQUFBSCxlQUFBLE9BQUFFLFdBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSUMsNEJBQWUsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3BELENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsV0FBVztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119