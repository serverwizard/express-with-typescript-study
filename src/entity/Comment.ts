import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'comment'})
export class Comment extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	contents: string;

	constructor(contents: string) {
		super();
		this.contents = contents;
	}

	public toString(): string {
		return `${this.contents}`;
	}
}
