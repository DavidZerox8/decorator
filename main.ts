import { ArmorDecorator } from "./ArmorDecorator";
import BaseEnemy from "./BaseEnemy";
import BigEnemy from "./BigEnemy";
import { HelmetDecorator } from "./HelmetDecorator";

let enemy = new BaseEnemy();
let Big_Enemy = new BigEnemy();

let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithHelmetAndArmor = new ArmorDecorator(enemyWithHelmet);

let B_enemywithHelmet = new HelmetDecorator(Big_Enemy);
let B_enemywithHelmetAndArmor = new ArmorDecorator(B_enemywithHelmet);


let computedDamage = enemyWithHelmetAndArmor.takeDamage();
let B_computedDamage = B_enemywithHelmetAndArmor.takeDamage();

console.log(computedDamage);
console.log(B_computedDamage);
