/* @jsx h */
import { h, Component, State, Host, Prop } from "@stencil/core";

function LogIt(target: Object, propertyKey: string) {
  let value: any;
  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newvalue: any) {
      console.log(`VALUE CHANGE: ${propertyKey} ${value} => ${newvalue}`);
      value = newvalue;
    },
    configurable: true,
  });
}

@Component({
  tag: "name-display-two",
  styleUrl: "index.css",
  shadow: true,
})
export class NameDisplay {
  @Prop()
  @LogIt
  name: string;

  render() {
    return <Host>Name: {this.name || "not specified"}</Host>;
  }
}
