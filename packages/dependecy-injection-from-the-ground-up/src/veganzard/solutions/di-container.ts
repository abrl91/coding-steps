export class Container {
  registrations: Record<string, { resolve: () => any }>;

  constructor() {
    this.registrations = {};
  }

  registerInstance(name: string, instance: object) {
    this.registrations[name] = new Default(() => instance);
  }

  registerFactory(name: string, factory: Function, strategy) {
    strategy = strategy || Default;
    this.registrations[name] = new strategy(factory);
  }

  registerType(name: string, ctor: any) {
    this.registrations[name] = new Default(() => new ctor());
  }

  resolve(name: string) {
    return this.registrations[name].resolve();
  }
}

export class Singleton {
  instance: any;

  constructor(readonly registration) {}

  resolve() {
    if (this.instance) return this.instance;
    this.instance = this.registration();
    return this.instance;
  }
}

class Default {
  constructor(readonly registration) {}

  resolve() {
    return this.registration();
  }
}
