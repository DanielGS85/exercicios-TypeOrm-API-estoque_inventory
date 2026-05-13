
// facilidade na criacao inicial , import
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// facilidade em saber o que fazer mas dificuldade de saber como fazer
@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    name!: string;

    @Column("int")
    quantity!: number;

    @Column("decimal")
    price!: number;


    
}