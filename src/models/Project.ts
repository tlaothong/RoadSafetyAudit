export class Project {

	public checkListIT: any;
	public checkListField: any;

	constructor(
		public id: number,
		public name: string,
		public checkListCode: string,
		public startN: number,
		public startE: number,
		public endN: number,
		public endE: number,
	) {
	}

}