import EnemyDecorator from "./EnemyDecorator";

export class ArmorDecorator extends EnemyDecorator{
    takeDamage(): number {
        return this.enemy.takeDamage()/1.5;
    }
}