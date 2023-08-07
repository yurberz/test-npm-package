"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenLayout = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ScreenLayout = ({ screenTitle, children, backgroundColor = "tomato", isWithoutScroll, }) => {
    const ContentContainer = isWithoutScroll ? react_native_1.View : react_native_1.ScrollView;
    return (react_1.default.createElement(ContentContainer, { style: [styles.container, { backgroundColor }] },
        screenTitle && react_1.default.createElement(react_native_1.Text, { style: styles.title }, screenTitle),
        children));
};
exports.ScreenLayout = ScreenLayout;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginVertical: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});
