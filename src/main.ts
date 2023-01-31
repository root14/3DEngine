import { Application } from "./Application.js";
import { Color } from "./Color.js";
import { Scene } from "./Scene.js";
import { Sphere } from "./Sphere.js";
import { Vector3D } from "./Vector3D.js";

const application = new Application(600, 600);
const scene = new Scene();
application.addScene(scene);
scene
  .add(
    new Sphere({
      position: new Vector3D(0, -1, 3),
      radius: 1,
      color: new Color(255, 0, 0),
    })
  )
  .add(
    new Sphere({
      position: new Vector3D(4, 4, 20),
      radius: 2,
      color: new Color(0, 255, 0),
    })
  )
  .add(
    new Sphere({
      position: new Vector3D(-3, -2, 12),
      radius: 2,
      color: new Color(0, 0, 255),
    })
  );
console.log("2s3");
application.render();
