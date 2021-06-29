import { solutions } from "./solutions";
import { Singleton } from "./solutions/di-container";

function runSpec(Container) {
  describe("Container", () => {
    test("resolved instance from instance registration", () => {
      const service = {};
      const container = new Container({});
      container.registerInstance("service", service);
      expect(container.resolve("service")).toBe(service);
    });

    test("resolved instance from factory registration", () => {
      const service = {};
      const container = new Container();
      container.registerFactory("service", () => service);
      expect(container.resolve("service")).toBe(service);
    });

    test("resolved instance from constructor registration", () => {
      const container = new Container();

      function MyService() {
        this.name = "MyService";
      }

      container.registerType("service", MyService);

      expect(container.resolve("service").name).toBe("MyService");
    });

    test("resolved singleton from instance registration", () => {
      const container = new Container();
      const service = {};

      container.registerInstance("service", service);

      const result1 = container.resolve("service");
      const result2 = container.resolve("service");

      expect(result1).toBe(result2);
    });

    test("resolved singleton from factory registration", () => {
      const container = new Container();

      const factory = function () {
        return {};
      };

      container.registerFactory("service", factory, Singleton);

      const result1 = container.resolve("service");
      const result2 = container.resolve("service");

      expect(result1).toBe(result2);
    });

    test("resolved singleton from constructor registration", () => {
      const container = new Container();

      function MyFunction() {
        this.name = "MyFunction";
      }

      container.registerType("service", MyFunction, Singleton);

      const result1 = container.resolve("service");
      const result2 = container.resolve("service");

      expect(result1).toBe(result2);
    });

    test("resolved from parent container", () => {
      const container = new Container();
      const service = {};
      container.registerInstance("service", service);
      const child = container.createChild();
      expect(child.resolve("service")).toBe(service);
    });

    test("throw if no registration", () => {
      const container = new Container();
      expect(function () {
        container.resolve("unknown");
      }).toThrowError('Missing registration for "unknown"');
    });

    test("not resolved from parent registration", () => {
      const container = new Container();
      const service = {};
      const child = container.createChild();
      child.registerInstance("service", service);
      expect(child.resolve("service")).toBe(service);
    });

    test("override parent registration", () => {
      const container = new Container();
      const service1 = {};
      const service2 = {};
      const child = container.createChild();
      container.registerInstance("service", service1);
      child.registerInstance("service", service2);
      expect(container.resolve("service")).toBe(service1);
      expect(child.resolve("service")).toBe(service2);
    });

    test("resolved dependencies recursively", () => {
      const container = new Container();

      function Service1() {
        this.name = "service1";
      }

      function Service2(service3) {
        this.name = "service2";

        expect(service3.name).toBe("service3");
      }

      Service2.$imports = ["service3"];

      function Service3() {
        this.name = "service3";
      }

      function Client(service1, service2) {
        this.name = "client";
        expect(service1.name).toBe("service1");
        expect(service2.name).toBe("service2");
      }

      Client.$imports = ["service1", "service2"];

      container.registerType("service1", Service1, null);
      container.registerType("service2", Service2, null);
      container.registerType("service3", Service3, null);
      container.registerType("client", Client, null);

      expect(container.resolve("client").name).toBe("client");
    });
  });
}

solutions.forEach((Container) => runSpec(Container));
