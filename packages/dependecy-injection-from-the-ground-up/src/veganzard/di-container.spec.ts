import { solutions } from "./solutions";
import { Singleton } from "./solutions/di-container";

function runSpec(Container) {
  describe.only("Container", () => {
    test("resolved instance from instance registration", () => {
      const service = {};
      const container = new Container({});
      container.registerInstance("service", service);
      expect(container.resolve("service")).toBe(service);
    });

    test("resolved instance from factory registration", () => {
      const service = {};
      const container = new Container({});
      container.registerFactory("service", () => service);
      expect(container.resolve("service")).toBe(service);
    });

    test("resolved instance from constructor registration", () => {
      const container = new Container({});

      function MyService() {
        this.name = "MyService";
      }

      container.registerType("service", MyService);

      expect(container.resolve("service").name).toBe("MyService");
    });

    test("resolved singleton from instance registration", () => {
      const container = new Container({});
      const service = {};

      container.registerInstance("service", service);

      const result1 = container.resolve("service");
      const result2 = container.resolve("service");

      expect(result1).toBe(result2);
    });

    test("resolved singleton from instance registration", () => {
      const container = new Container({});

      const factory = function () {
        return {};
      };

      container.registerFactory("service", factory, Singleton);

      const result1 = container.resolve("service");
      const result2 = container.resolve("service");

      expect(result1).toBe(result2);
    });

    test("resolved singleton from instance registration", () => {
      const container = new Container({});

      function MyFunction() {
        this.name = "MyFunction";
      }

      container.registerType("service", MyFunction, Singleton);

      const result1 = container.resolve("service");
      const result2 = container.resolve("service");

      expect(result1).toBe(result2);
    });

    /*test('resolved from parent container', () => {
      const container = new Container({});
      const service = {};
      container.registerInstance('service', service);
      const child = container.createChild();
      expect(child.resolve('service')).toBe(service);
    });*/

    /*test('throw if registration', () => {

        });*/

    /*test('not resolved from parent registration', () => {

        });*/

    /*test('override parent registration', () => {

        });*/

    /*test('resolved dependencies recursively', () => {

        });*/
  });
}

solutions.forEach((Container) => runSpec(Container));
