import { Enemy } from "./Enemy";

export default class BigEnemy implements Enemy {
    takeDamage(): number {
        return 2;
    }
}