/* */ 
;modjewel.define("weinre/target/WiCSSImpl", function(require, exports, module) { // Generated by CoffeeScript 1.8.0
var Weinre, WiCSSImpl;

Weinre = require('../common/Weinre');

module.exports = WiCSSImpl = (function() {
  function WiCSSImpl() {
    this.dummyComputedStyle = false;
  }

  WiCSSImpl.prototype.getStylesForNode = function(nodeId, callback) {
    var computedStyle, node, parentNode, parentStyle, result;
    result = {};
    node = Weinre.nodeStore.getNode(nodeId);
    if (!node) {
      Weinre.logWarning(arguments.callee.signature + " passed an invalid nodeId: " + nodeId);
      return;
    }
    if (this.dummyComputedStyle) {
      computedStyle = {
        styleId: null,
        properties: [],
        shorthandValues: [],
        cssProperties: []
      };
    } else {
      computedStyle = Weinre.cssStore.getComputedStyle(node);
    }
    result = {
      inlineStyle: Weinre.cssStore.getInlineStyle(node),
      computedStyle: computedStyle,
      matchedCSSRules: Weinre.cssStore.getMatchedCSSRules(node),
      styleAttributes: Weinre.cssStore.getStyleAttributes(node),
      pseudoElements: Weinre.cssStore.getPseudoElements(node),
      inherited: []
    };
    parentNode = node.parentNode;
    while (parentNode) {
      parentStyle = {
        inlineStyle: Weinre.cssStore.getInlineStyle(parentNode),
        matchedCSSRules: Weinre.cssStore.getMatchedCSSRules(parentNode)
      };
      result.inherited.push(parentStyle);
      parentNode = parentNode.parentNode;
    }
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, [result]);
    }
  };

  WiCSSImpl.prototype.getComputedStyleForNode = function(nodeId, callback) {
    var node, result;
    node = Weinre.nodeStore.getNode(nodeId);
    if (!node) {
      Weinre.logWarning(arguments.callee.signature + " passed an invalid nodeId: " + nodeId);
      return;
    }
    result = Weinre.cssStore.getComputedStyle(node);
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, [result]);
    }
  };

  WiCSSImpl.prototype.getInlineStyleForNode = function(nodeId, callback) {
    var node, result;
    node = Weinre.nodeStore.getNode(nodeId);
    if (!node) {
      Weinre.logWarning(arguments.callee.signature + " passed an invalid nodeId: " + nodeId);
      return;
    }
    result = Weinre.cssStore.getInlineStyle(node);
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, [result]);
    }
  };

  WiCSSImpl.prototype.getAllStyles = function(callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  WiCSSImpl.prototype.getStyleSheet = function(styleSheetId, callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  WiCSSImpl.prototype.getStyleSheetText = function(styleSheetId, callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  WiCSSImpl.prototype.setStyleSheetText = function(styleSheetId, text, callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  WiCSSImpl.prototype.setPropertyText = function(styleId, propertyIndex, text, overwrite, callback) {
    var result;
    result = Weinre.cssStore.setPropertyText(styleId, propertyIndex, text, overwrite);
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, [result]);
    }
  };

  WiCSSImpl.prototype.toggleProperty = function(styleId, propertyIndex, disable, callback) {
    var result;
    result = Weinre.cssStore.toggleProperty(styleId, propertyIndex, disable);
    if (callback) {
      return Weinre.WeinreTargetCommands.sendClientCallback(callback, [result]);
    }
  };

  WiCSSImpl.prototype.setRuleSelector = function(ruleId, selector, callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  WiCSSImpl.prototype.addRule = function(contextNodeId, selector, callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  WiCSSImpl.prototype.querySelectorAll = function(documentId, selector, callback) {
    return Weinre.notImplemented(arguments.callee.signature);
  };

  return WiCSSImpl;

})();

require("../common/MethodNamer").setNamesForClass(module.exports);

});
