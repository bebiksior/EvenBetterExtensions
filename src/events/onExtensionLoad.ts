import { Event } from "@evenbetter/evenbetter-api/src/events/EventManager";

export class OnExtensionLoad implements Event<Element> {
  private handlers: ((element: Element) => void)[] = [];

  addHandler(handler: (element: Element) => void): void {
    this.handlers.push(handler);
  }

  init() {}

  trigger(element: Element): void {
    this.handlers.forEach((handler) => handler(element));
  }
}