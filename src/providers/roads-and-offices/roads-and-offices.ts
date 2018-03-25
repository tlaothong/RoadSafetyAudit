import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
	Generated class for the RoadsAndOfficesProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class RoadsAndOfficesProvider {

	public offices = this.listOffices();
	public branches = this.listBranches();

	constructor(public http: HttpClient) {
		console.log('Hello RoadsAndOfficesProvider Provider');
	}

	private listOffices() {
		return [
			{
				"id": 1,
				"regionId": 1,
				"office": "สำนักงานทางหลวงชนบทที่ 1 (ปทุมธานี)"
			},
			{
				"id": 2,
				"regionId": 1,
				"office": "สำนักงานทางหลวงชนบทที่ 2 (สระบุรี)"
			},
			{
				"id": 3,
				"regionId": 1,
				"office": "สำนักงานทางหลวงชนบทที่ 4 (เพชรบุรี)"
			},
			{
				"id": 4,
				"regionId": 1,
				"office": "สำนักงานทางหลวงชนบทที่ 8 (นครสวรรค์)"
			},
			{
				"id": 5,
				"regionId": 1,
				"office": "สำนักงานทางหลวงชนบทที่ 18 (สุพรรณบุรี)"
			},
			{
				"id": 6,
				"regionId": 1,
				"office": "สำนักบำรุงทาง"
			},
			{
				"id": 7,
				"regionId": 2,
				"office": "สำนักงานทางหลวงชนบทที่ 3 (ชลบุรี)"
			},
			{
				"id": 8,
				"regionId": 2,
				"office": "สำนักงานทางหลวงชนบทที่ 17 (ฉะเชิงเทรา)"
			}
		];
	}

	private listBranches() {
		return [
			{
			  "id": 1,
			  "officeId": 1,
			  "branch": "สำนักงานทางหลวงชนบทสำนักงานทางหลวงชนบทจังหวัดนนทบุรี"
			},
			{
			  "id": 2,
			  "officeId": 1,
			  "branch": "สำนักงานทางหลวงชนบทสำนักงานทางหลวงชนบทจังหวัดสมุทรปราการ"
			},
			{
			  "id": 3,
			  "officeId": 1,
			  "branch": "สำนักงานทางหลวงชนบทสำนักงานทางหลวงชนบทจังหวัดปทุมธานี"
			},
			{
			  "id": 4,
			  "officeId": 1,
			  "branch": "สำนักงานทางหลวงชนบทสำนักงานทางหลวงชนบทจังหวัดพระนครศรีอยุธยา"
			},
			{
			  "id": 5,
			  "officeId": 1,
			  "branch": "สำนักงานทางหลวงชนบทสำนักงานทางหลวงชนบทจังหวัดอ่างทอง"
			},
			{
			  "id": 6,
			  "officeId": 1,
			  "branch": "สำนักงานทางหลวงชนบทสำนักงานทางหลวงชนบทจังหวัดบทช.เสนา"
			}
		];
	}

}
