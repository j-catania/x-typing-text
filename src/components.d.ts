/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XTypingText {
        "delay": number;
        "text": string;
        "waitingTime": number;
    }
}
declare global {
    interface HTMLXTypingTextElement extends Components.XTypingText, HTMLStencilElement {
    }
    var HTMLXTypingTextElement: {
        prototype: HTMLXTypingTextElement;
        new (): HTMLXTypingTextElement;
    };
    interface HTMLElementTagNameMap {
        "x-typing-text": HTMLXTypingTextElement;
    }
}
declare namespace LocalJSX {
    interface XTypingText {
        "delay"?: number;
        "text"?: string;
        "waitingTime"?: number;
    }
    interface IntrinsicElements {
        "x-typing-text": XTypingText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "x-typing-text": LocalJSX.XTypingText & JSXBase.HTMLAttributes<HTMLXTypingTextElement>;
        }
    }
}