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
	public roads = this.listRoads();

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
			  "branch": "สทช.จังหวัดนนทบุรี"
			},
			{
			  "id": 2,
			  "officeId": 1,
			  "branch": "สทช.จังหวัดสมุทรปราการ"
			},
			{
			  "id": 3,
			  "officeId": 1,
			  "branch": "สทช.จังหวัดปทุมธานี"
			},
			{
			  "id": 4,
			  "officeId": 1,
			  "branch": "สทช.จังหวัดพระนครศรีอยุธยา"
			},
			{
			  "id": 5,
			  "officeId": 1,
			  "branch": "สทช.จังหวัดอ่างทอง"
			},
			{
			  "id": 6,
			  "officeId": 1,
			  "branch": "สทช.จังหวัดบทช.เสนา"
			}
		];
	}

	public listRoads() {
		return [
			{
			  "seq": 1,
			  "code": "นบ.1001",
			  "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 30+800) - แยกนนทกิจ",
			  "amphure": "บางใหญ่",
			  "branch": "นนทบุรี",
			  "lengthInKm": 9.972,
			  "dirtRoad": "-",
			  "pavedRoad": 4.815,
			  "concreteRoad": 5.157,
			  "startN": 13.837,
			  "startE": 100.4132,
			  "endN": 13.8395,
			  "endE": 100.3457,
			  "hasFinished": "true"
			},
			{
			  "seq": 2,
			  "code": "นบ.1002",
			  "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 42+500) - บ้านหนองเพรางาย",
			  "amphure": "บางบัวทอง,ไทรน้อย",
			  "branch": "นนทบุรี",
			  "lengthInKm": 9.275,
			  "dirtRoad": "-",
			  "pavedRoad": 9.275,
			  "concreteRoad": "-",
			  "startN": 13.9063,
			  "startE": 100.4074,
			  "endN": 13.9092,
			  "endE": 100.3235,
			  "hasFinished": "true"
			},
			{
			  "seq": 3,
			  "code": "นบ.3003",
			  "road": "แยกทางหลวงหมายเลข 340 (กม.ที่ 48+390) - บ้านลาดบัวหลวง",
			  "amphure": "ไทรน้อย",
			  "branch": "นนทบุรี",
			  "lengthInKm": 8.835,
			  "dirtRoad": "-",
			  "pavedRoad": 8.835,
			  "concreteRoad": "-",
			  "startN": 14.085,
			  "startE": 100.3115,
			  "endN": 14.1645,
			  "endE": 100.3072,
			  "hasFinished": "true"
			},
			{
			  "seq": 4,
			  "code": "นบ.3004",
			  "road": "แยกทางหลวงหมายเลข 346 (กม.ที่ 36+980) - บ้านเจ้าเฟื่อง",
			  "amphure": "ไทรน้อย",
			  "branch": "นนทบุรี",
			  "lengthInKm": 6.445,
			  "dirtRoad": "-",
			  "pavedRoad": 6.445,
			  "concreteRoad": "-",
			  "startN": 14.0259,
			  "startE": 100.3124,
			  "endN": 14.0849,
			  "endE": 100.3116,
			  "hasFinished": "true"
			},
			{
			  "seq": 5,
			  "code": "นบ.5005",
			  "road": "แยกทางหลวงชนบท นบ.5014 (กม.ที่ 4+350) - วัดหลังบาง",
			  "amphure": "บางใหญ่",
			  "branch": "นนทบุรี",
			  "lengthInKm": 7.297,
			  "dirtRoad": "-",
			  "pavedRoad": 1,
			  "concreteRoad": 6.297,
			  "startN": 13.8406,
			  "startE": 100.3385,
			  "endN": 13.8521,
			  "endE": 100.3999,
			  "hasFinished": "true"
			}
		];
	}

}
