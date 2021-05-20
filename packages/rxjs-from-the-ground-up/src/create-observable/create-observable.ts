import { Subscriber } from "../types/subscriber";
import { TeardownLogic } from "../types/teardown-logic";
import { Observable } from "../types/observable";

export function createObservable(
  onSubscribe: (subscriber: Subscriber) => TeardownLogic
): Observable {
  const observable = {
    subscribe: (subscriberP: Partial<Subscriber>) => {
      const subscriber = {
        ...subscriberP,
        closed: false,
      };

      const cleanupFn = onSubscribe(subscriber) || (() => {});

      return {
        unsubscribe: () => {
          subscriber.closed = true;
          cleanupFn();
        },
      };
    },
  };

  return observable;
}
