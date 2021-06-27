export class Container {
  registrations: Record<string, { resolve: () => any }>;

  constructor(readonly parentContainer) {
    this.registrations = {};
  }

  registerInstance(name: string, instance: object) {
    this.registrations[name] = new Default(() => instance);
  }

  registerFactory(name: string, factory: Function, strategy) {
    strategy = strategy || Default;
    this.registrations[name] = new strategy(factory);
  }

  registerType(name: string, Ctor: any, strategy) {
    strategy = strategy || Default;
    Ctor = this.satisfyImports(Ctor);
    this.registrations[name] = new strategy(() => new Ctor());
  }

  satisfyImports(Ctor: any) {
    if (!Ctor.$imports) return Ctor;

    const ctorArgs = Ctor.$imports.map(this.resolve);
    return Ctor.bind(Ctor, ...ctorArgs);
  }

  createChild() {
    return new Container(this);
  }

  resolve(name: string) {
    console.log("***registrations", this.registrations);
    if (this.registrations.hasOwnProperty(name)) {
      return this.registrations[name].resolve();
    }

    if (this.parentContainer) return this.parentContainer.resolve(name);

    throw new Error(`Missing registration for "${name}"`);
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

export class Default {
  constructor(readonly registrations) {}

  resolve() {
    return this.registrations();
  }
}
