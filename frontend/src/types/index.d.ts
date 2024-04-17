import { YMap } from '@yandex/ymaps3-types';

declare global {
  interface ElementCreationOptions {
    styles?: CSSStyleDeclaration
    classList?: string[]
    childs?: HTMLElement[] | Text[]
    dataset?: { [key: string]: any }
    [key: string]: any
  }

  interface Selection {
    extentNode: HTMLElement
  }

  interface Document {
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
  }
}

declare let map: YMap;

export {}