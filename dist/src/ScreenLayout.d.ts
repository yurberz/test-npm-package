import React from "react";
interface ScreenLayoutProps {
    screenTitle?: string;
    children: React.ReactNode;
    backgroundColor?: string;
    isWithoutScroll?: boolean;
}
export declare const ScreenLayout: React.FC<ScreenLayoutProps>;
export {};
