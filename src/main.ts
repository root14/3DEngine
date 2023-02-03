import { AmbiantLight, DirectionalLight, PointLight } from "./light/index.js";
import { Application } from "./Application.js";
import { Color } from "./Color.js";
import { Scene } from "./Scene.js";
import { Sphere } from "./Sphere.js";
import { Vector3D } from "./Vector3D.js";
import { Point3D } from "./Point.js";

const application = new Application(600, 600);
const scene = new Scene();
application.addScene(scene);
scene
  .addLight(
    new PointLight({
      intensity: 0.6,
      position: new Point3D(2, 1, 0),
    })
  )
  .addLight(
    new DirectionalLight({
      intensity: 0.2,
      direction: new Vector3D(1, 4, 4),
    })
  )
  .addLight(
    new AmbiantLight({
      intensity: 0.2,
    })
  )
  .add(
    new Sphere({
      position: new Point3D(0, -1, 3), // TODO: sphere position is point not vector
      radius: 1,
      color: new Color(255, 0, 0),
    })
  )
  .add(
    new Sphere({
      position: new Point3D(4, 4, 20),
      radius: 2,
      color: new Color(0, 255, 0),
    })
  )
  .add(
    new Sphere({
      position: new Point3D(-3, -2, 12),
      radius: 2,
      color: new Color(0, 0, 255),
    })
  )
  .add(
    new Sphere({
      position: new Point3D(0, 0, 20),
      radius: 3,
      color: new Color(0, 255, 255),
    })
  );
application.render();
window["application"] = application;
