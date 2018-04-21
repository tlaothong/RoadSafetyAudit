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
        "regionId": 2,
        "office": "สำนักงานทางหลวงชนบทที่ 3 (ชลบุรี)"
      },
      {
        "id": 4,
        "regionId": 1,
        "office": "สำนักงานทางหลวงชนบทที่ 4 (เพชรบุรี)"
      },
      {
        "id": 5,
        "regionId": 3,
        "office": "สำนักงานทางหลวงชนบทที่ 5 (นครราชสีมา)"
      },
      {
        "id": 6,
        "regionId": 3,
        "office": "สำนักงานทางหลวงชนบทที่ 6 (ขอนแก่น)"
      },
      {
        "id": 7,
        "regionId": 3,
        "office": "สำนักงานทางหลวงชนบทที่ 7 (อุบลราชธานี)"
      },
      {
        "id": 8,
        "regionId": 1,
        "office": "สำนักงานทางหลวงชนบทที่ 8 (นครสวรรค์)"
      },
      {
        "id": 9,
        "regionId": 4,
        "office": "สำนักงานทางหลวงชนบทที่ 9 (อุตรดิตถ์)"
      },
      {
        "id": 10,
        "regionId": 4,
        "office": "สำนักงานทางหลวงชนบทที่ 10 (เชียงใหม่)"
      },
      {
        "id": 11,
        "regionId": 5,
        "office": "สำนักงานทางหลวงชนบทที่ 11 (สุราษฏร์ธานี)"
      },
      {
        "id": 12,
        "regionId": 5,
        "office": "สำนักงานทางหลวงชนบทที่ 12 (สงขลา)"
      },
      {
        "id": 14,
        "regionId": 5,
        "office": "สำนักงานทางหลวงชนบทที่ 14 (กระบี่)"
      },
      {
        "id": 13,
        "regionId": 2,
        "office": "สำนักงานทางหลวงชนบทที่ 13 (ฉะเชิงเทรา)"
      },
      {
        "id": 15,
        "regionId": 3,
        "office": "สำนักงานทางหลวงชนบทที่ 15 (อุดรธานี)"
      },
      {
        "id": 16,
        "regionId": 3,
        "office": "สำนักงานทางหลวงชนบทที่ 16 (กาฬสินธุ์)"
      },
      {
        "id": 17,
        "regionId": 4,
        "office": "สำนักงานทางหลวงชนบทที่ 17 (เชียงราย)"
      },
      {
        "id": 18,
        "regionId": 1,
        "office": "สำนักงานทางหลวงชนบทที่ 18 (สุพรรณบุรี)"
      },
      {
        "id": 19,
        "regionId": 1,
        "office": "สำนักบำรุงทาง"
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
      },
      {
        "id": 7,
        "officeId": 2,
        "branch": "สทช.จังหวัดสระบุรี"
      },
      {
        "id": 8,
        "officeId": 2,
        "branch": "สทช.จังหวัดลพบุรี"
      },
      {
        "id": 9,
        "officeId": 2,
        "branch": "สทช.จังหวัดสิงห์บุรี"
      },
      {
        "id": 10,
        "officeId": 2,
        "branch": "สทช.จังหวัดชัยนาท"
      },
      {
        "id": 11,
        "officeId": 2,
        "branch": "สทช.จังหวัดบทช.หันคา"
      },
      {
        "id": 12,
        "officeId": 2,
        "branch": "สทช.จังหวัดบทช.ป่าสักชลสิทธิ์"
      },
      {
        "id": 13,
        "officeId": 2,
        "branch": "สทช.จังหวัดบทช.หนองม่วง"
      },
      {
        "id": 14,
        "officeId": 2,
        "branch": "สทช.จังหวัดบทช.ชัยบาดาล"
      },
      {
        "id": 15,
        "officeId": 2,
        "branch": "สทช.จังหวัดบทช.พัฒนานิคม"
      },
      {
        "id": 16,
        "officeId": 3,
        "branch": "สทช.จังหวัดชลบุรี"
      },
      {
        "id": 17,
        "officeId": 3,
        "branch": "สทช.จังหวัดจันทบุรี"
      },
      {
        "id": 18,
        "officeId": 3,
        "branch": "สทช.จังหวัดระยอง"
      },
      {
        "id": 19,
        "officeId": 3,
        "branch": "สทช.จังหวัดตราด"
      },
      {
        "id": 20,
        "officeId": 3,
        "branch": "สทช.จังหวัดบทช.บ่อทอง"
      },
      {
        "id": 21,
        "officeId": 3,
        "branch": "สทช.จังหวัดบทช.บางละมุง"
      },
      {
        "id": 22,
        "officeId": 3,
        "branch": "สทช.จังหวัดบทช.เขาคิชฌกูฎ"
      },
      {
        "id": 23,
        "officeId": 3,
        "branch": "สทช.จังหวัดบทช.เฉลิมบูรพาชลทิต"
      },
      {
        "id": 24,
        "officeId": 3,
        "branch": "สทช.จังหวัดบทช.แกลง"
      },
      {
        "id": 25,
        "officeId": 4,
        "branch": "จังหวัดสมุทรสงคราม"
      },
      {
        "id": 26,
        "officeId": 4,
        "branch": "จังหวัดประจวบคีรีขันธ์"
      },
      {
        "id": 27,
        "officeId": 4,
        "branch": "จังหวัดสมุทรสาคร"
      },
      {
        "id": 28,
        "officeId": 4,
        "branch": "จังหวัดเพชรบุรี"
      },
      {
        "id": 29,
        "officeId": 4,
        "branch": "จังหวัดราชบุรี"
      },
      {
        "id": 30,
        "officeId": 4,
        "branch": "จังหวัดบทช.ทับสะแก"
      },
      {
        "id": 31,
        "officeId": 4,
        "branch": "จังหวัดบทช.จอมบึง"
      },
      {
        "id": 32,
        "officeId": 5,
        "branch": "จังหวัดชัยภูมิ"
      },
      {
        "id": 33,
        "officeId": 5,
        "branch": "จังหวัดบทช.ซับใหญ่"
      },
      {
        "id": 34,
        "officeId": 5,
        "branch": "จังหวัดบทช.ภูเขียว"
      },
      {
        "id": 35,
        "officeId": 5,
        "branch": "จังหวัดบทช.นครราชสีมา"
      },
      {
        "id": 36,
        "officeId": 5,
        "branch": "จังหวัดบทช.วังน้ำเขียว"
      },
      {
        "id": 37,
        "officeId": 5,
        "branch": "จังหวัดบทช.คง"
      },
      {
        "id": 38,
        "officeId": 5,
        "branch": "จังหวัดบทช.ประทาย"
      },
      {
        "id": 39,
        "officeId": 5,
        "branch": "จังหวัดบทช.สีคิ้ว"
      },
      {
        "id": 40,
        "officeId": 5,
        "branch": "จังหวัดบทช.จักราช"
      },
      {
        "id": 41,
        "officeId": 5,
        "branch": "จังหวัดบุรีรัมย์"
      },
      {
        "id": 42,
        "officeId": 5,
        "branch": "จังหวัดบทช.พุทไธสง"
      },
      {
        "id": 43,
        "officeId": 5,
        "branch": "จังหวัดบทช.ประโคนชัย"
      },
      {
        "id": 44,
        "officeId": 5,
        "branch": "จังหวัดบทช.หนองกี่"
      },
      {
        "id": 45,
        "officeId": 5,
        "branch": "จังหวัดสุรินทร์"
      },
      {
        "id": 46,
        "officeId": 5,
        "branch": "จังหวัดบทช.สนม"
      },
      {
        "id": 47,
        "officeId": 5,
        "branch": "จังหวัดบทช.สังขะ"
      },
      {
        "id": 48,
        "officeId": 6,
        "branch": "จังหวัดขอนแก่น"
      },
      {
        "id": 49,
        "officeId": 6,
        "branch": "จังหวัดบทช.พล"
      },
      {
        "id": 50,
        "officeId": 6,
        "branch": "จังหวัดมหาสารคาม"
      },
      {
        "id": 51,
        "officeId": 6,
        "branch": "จังหวัดร้อยเอ็ด"
      },
      {
        "id": 52,
        "officeId": 6,
        "branch": "จังหวัดบทช.สุวรรณภูมิ"
      },
      {
        "id": 53,
        "officeId": 6,
        "branch": "จังหวัดเลย"
      },
      {
        "id": 54,
        "officeId": 6,
        "branch": "จังหวัดบทช.อาจสามารถ"
      },
      {
        "id": 55,
        "officeId": 6,
        "branch": "จังหวัดบทช.หนองเรือ"
      },
      {
        "id": 56,
        "officeId": 6,
        "branch": "จังหวัดบทช.โพนทอง"
      },
      {
        "id": 57,
        "officeId": 6,
        "branch": "จังหวัดบทช.นาดูน"
      },
      {
        "id": 58,
        "officeId": 6,
        "branch": "จังหวัดบทช.น้ำพอง"
      },
      {
        "id": 59,
        "officeId": 6,
        "branch": "จังหวัดบทช.หนองหิน"
      },
      {
        "id": 60,
        "officeId": 6,
        "branch": "จังหวัดบทช.เกษตรวิสัย"
      },
      {
        "id": 61,
        "officeId": 7,
        "branch": "จังหวัดอำนาจเจริญ"
      },
      {
        "id": 62,
        "officeId": 7,
        "branch": "จังหวัดยโสธร"
      },
      {
        "id": 63,
        "officeId": 7,
        "branch": "จังหวัดบทช.เดชอุดม"
      },
      {
        "id": 64,
        "officeId": 7,
        "branch": "จังหวัดบทช.กันทรลักษ์"
      },
      {
        "id": 65,
        "officeId": 7,
        "branch": "จังหวัดบทช.ม่วงสามสิบ"
      },
      {
        "id": 66,
        "officeId": 7,
        "branch": "จังหวัดบทช.ตระการพืชผล"
      },
      {
        "id": 67,
        "officeId": 7,
        "branch": "จังหวัดศรีสะเกษ"
      },
      {
        "id": 68,
        "officeId": 7,
        "branch": "จังหวัดบทช.อุบลราชธานี"
      },
      {
        "id": 69,
        "officeId": 7,
        "branch": "จังหวัดบทช.พิบูลมังสาหาร"
      },
      {
        "id": 70,
        "officeId": 7,
        "branch": "จังหวัดบทช.เลิงนกทา"
      },
      {
        "id": 71,
        "officeId": 7,
        "branch": "จังหวัดบทช.เขมราฐ"
      },
      {
        "id": 72,
        "officeId": 7,
        "branch": "จังหวัดบทช.ขุขันธ์"
      },
      {
        "id": 73,
        "officeId": 7,
        "branch": "จังหวัดบทช.อุทุมพรพิสัย"
      },
      {
        "id": 74,
        "officeId": 7,
        "branch": "จังหวัดบทช.กันทรารมย์"
      },
      {
        "id": 75,
        "officeId": 8,
        "branch": "จังหวัดพิจิตร"
      },
      {
        "id": 76,
        "officeId": 8,
        "branch": "จังหวัดกำแพงเพชร"
      },
      {
        "id": 77,
        "officeId": 8,
        "branch": "จังหวัดตาก"
      },
      {
        "id": 78,
        "officeId": 8,
        "branch": "จังหวัดบทช.นครสวรรค์"
      },
      {
        "id": 79,
        "officeId": 8,
        "branch": "จังหวัดบทช.บรรพตพิสัย"
      },
      {
        "id": 80,
        "officeId": 8,
        "branch": "จังหวัดบทช.บ้านไร่"
      },
      {
        "id": 81,
        "officeId": 8,
        "branch": "จังหวัดบทช.แม่สอด"
      },
      {
        "id": 82,
        "officeId": 8,
        "branch": "จังหวัดบทช.ทรายทองวัฒนา"
      },
      {
        "id": 83,
        "officeId": 8,
        "branch": "จังหวัดบทช.คลองขลุง"
      },
      {
        "id": 84,
        "officeId": 8,
        "branch": "จังหวัดบทช.บางมูลนาก"
      },
      {
        "id": 85,
        "officeId": 8,
        "branch": "จังหวัดบทช.ท่าตะโก"
      },
      {
        "id": 86,
        "officeId": 8,
        "branch": "จังหวัดบทช.อุทัยธานี"
      },
      {
        "id": 87,
        "officeId": 8,
        "branch": "จังหวัดบทช.บึงนาราง"
      },
      {
        "id": 88,
        "officeId": 9,
        "branch": "จังหวัดพิษณุโลก"
      },
      {
        "id": 89,
        "officeId": 9,
        "branch": "จังหวัดสุโขทัย"
      },
      {
        "id": 90,
        "officeId": 9,
        "branch": "จังหวัดเพชรบูรณ์"
      },
      {
        "id": 91,
        "officeId": 9,
        "branch": "จังหวัดอุตรดิตถ์"
      },
      {
        "id": 92,
        "officeId": 9,
        "branch": "จังหวัดบทช.วิเชียรบุรี"
      },
      {
        "id": 93,
        "officeId": 9,
        "branch": "จังหวัดบทช.หล่มสัก"
      },
      {
        "id": 94,
        "officeId": 10,
        "branch": "จังหวัดลำปาง"
      },
      {
        "id": 95,
        "officeId": 10,
        "branch": "จังหวัดลำพูน"
      },
      {
        "id": 96,
        "officeId": 10,
        "branch": "จังหวัดเชียงใหม่"
      },
      {
        "id": 97,
        "officeId": 10,
        "branch": "จังหวัดแม่ฮ่องสอน"
      },
      {
        "id": 98,
        "officeId": 10,
        "branch": "จังหวัดบทช.ฝาง"
      },
      {
        "id": 99,
        "officeId": 10,
        "branch": "จังหวัดบทช.ลี้"
      },
      {
        "id": 100,
        "officeId": 10,
        "branch": "จังหวัดบทช.งาว"
      },
      {
        "id": 101,
        "officeId": 10,
        "branch": "จังหวัดบทช.แม่สะเรียง"
      },
      {
        "id": 102,
        "officeId": 10,
        "branch": "จังหวัดบทช.สมโภชเชียงใหม่700ปี"
      },
      {
        "id": 103,
        "officeId": 10,
        "branch": "จังหวัดบทช.จอมทอง"
      },
      {
        "id": 104,
        "officeId": 12,
        "branch": "จังหวัดนราธิวาส"
      },
      {
        "id": 105,
        "officeId": 12,
        "branch": "จังหวัดยะลา"
      },
      {
        "id": 106,
        "officeId": 12,
        "branch": "จังหวัดปัตตานี"
      },
      {
        "id": 107,
        "officeId": 12,
        "branch": "จังหวัดสตูล"
      },
      {
        "id": 108,
        "officeId": 12,
        "branch": "จังหวัดสงขลา"
      },
      {
        "id": 109,
        "officeId": 12,
        "branch": "จังหวัดบทช.ละงู"
      },
      {
        "id": 110,
        "officeId": 12,
        "branch": "จังหวัดบทช.นาทวี"
      },
      {
        "id": 111,
        "officeId": 12,
        "branch": "จังหวัดบทช.สายบุรี"
      },
      {
        "id": 112,
        "officeId": 12,
        "branch": "จังหวัดบทช.สทิงพระ"
      },
      {
        "id": 113,
        "officeId": 13,
        "branch": "จังหวัดนครนายก"
      },
      {
        "id": 114,
        "officeId": 13,
        "branch": "จังหวัดสระแก้ว"
      },
      {
        "id": 115,
        "officeId": 13,
        "branch": "จังหวัดฉะเชิงเทรา"
      },
      {
        "id": 116,
        "officeId": 13,
        "branch": "จังหวัดปราจีนบุรี"
      },
      {
        "id": 117,
        "officeId": 13,
        "branch": "จังหวัดบทช.วังสมบูรณ์"
      },
      {
        "id": 118,
        "officeId": 13,
        "branch": "จังหวัดบทช.กบินทร์บุรี"
      },
      {
        "id": 119,
        "officeId": 13,
        "branch": "จังหวัดบทช.ท่าตะเกียบ"
      },
      {
        "id": 120,
        "officeId": 13,
        "branch": "จังหวัดบทช.สระขวัญ"
      },
      {
        "id": 121,
        "officeId": 13,
        "branch": "จังหวัดบทช.โคกสูง"
      },
      {
        "id": 122,
        "officeId": 14,
        "branch": "จังหวัดกระบี่"
      },
      {
        "id": 123,
        "officeId": 14,
        "branch": "จังหวัดพังงา"
      },
      {
        "id": 124,
        "officeId": 14,
        "branch": "จังหวัดพัทลุง"
      },
      {
        "id": 125,
        "officeId": 14,
        "branch": "จังหวัดภูเก็ต"
      },
      {
        "id": 126,
        "officeId": 14,
        "branch": "จังหวัดบทช.คลองท่อม"
      },
      {
        "id": 127,
        "officeId": 14,
        "branch": "จังหวัดบทช.ปากพะยูน"
      },
      {
        "id": 128,
        "officeId": 14,
        "branch": "จังหวัดบทช.ตรัง"
      },
      {
        "id": 129,
        "officeId": 15,
        "branch": "จังหวัดอุดรธานี"
      },
      {
        "id": 130,
        "officeId": 15,
        "branch": "จังหวัดหนองคาย"
      },
      {
        "id": 131,
        "officeId": 15,
        "branch": "จังหวัดหนองบัวลำภู"
      },
      {
        "id": 132,
        "officeId": 15,
        "branch": "จังหวัดบทช.พิบูลย์รักษ์"
      },
      {
        "id": 133,
        "officeId": 15,
        "branch": "จังหวัดบึงกาฬ"
      },
      {
        "id": 134,
        "officeId": 15,
        "branch": "จังหวัดบทช.นากลาง"
      },
      {
        "id": 135,
        "officeId": 15,
        "branch": "จังหวัดบทช.เซกา"
      },
      {
        "id": 136,
        "officeId": 15,
        "branch": "จังหวัดบทช.น้ำโสม"
      },
      {
        "id": 137,
        "officeId": 15,
        "branch": "จังหวัดบทช.ศรีธาตุ"
      },
      {
        "id": 138,
        "officeId": 16,
        "branch": "จังหวัดกาฬสินธุ์"
      },
      {
        "id": 139,
        "officeId": 16,
        "branch": "จังหวัดนครพนม"
      },
      {
        "id": 140,
        "officeId": 16,
        "branch": "จังหวัดบทช.หนองกุงศรี"
      },
      {
        "id": 141,
        "officeId": 16,
        "branch": "จังหวัดมุกดาหาร"
      },
      {
        "id": 142,
        "officeId": 16,
        "branch": "จังหวัดสกลนคร"
      },
      {
        "id": 143,
        "officeId": 16,
        "branch": "จังหวัดบทช.วานรนิวาส"
      },
      {
        "id": 144,
        "officeId": 16,
        "branch": "จังหวัดบทช.คำม่วง"
      },
      {
        "id": 145,
        "officeId": 16,
        "branch": "จังหวัดบทช.ห้วยผึ้ง"
      },
      {
        "id": 146,
        "officeId": 16,
        "branch": "จังหวัดบทช.ปลาปาก"
      },
      {
        "id": 147,
        "officeId": 16,
        "branch": "จังหวัดบทช.ศรีสงคราม"
      },
      {
        "id": 148,
        "officeId": 16,
        "branch": "จังหวัดบทช.อากาศอำนวย"
      },
      {
        "id": 149,
        "officeId": 16,
        "branch": "จังหวัดบทช.สว่างแดนดิน"
      },
      {
        "id": 150,
        "officeId": 17,
        "branch": "จังหวัดแพร่"
      },
      {
        "id": 151,
        "officeId": 17,
        "branch": "จังหวัดเชียงราย"
      },
      {
        "id": 152,
        "officeId": 17,
        "branch": "จังหวัดน่าน"
      },
      {
        "id": 153,
        "officeId": 17,
        "branch": "จังหวัดพะเยา"
      },
      {
        "id": 154,
        "officeId": 17,
        "branch": "จังหวัดบทช.แม่สาย"
      },
      {
        "id": 155,
        "officeId": 17,
        "branch": "จังหวัดบทช.ลอง"
      },
      {
        "id": 156,
        "officeId": 17,
        "branch": "จังหวัดบทช.เวียงบูรพา"
      },
      {
        "id": 157,
        "officeId": 18,
        "branch": "จังหวัดนครปฐม"
      },
      {
        "id": 158,
        "officeId": 18,
        "branch": "จังหวัดสุพรรณบุรี"
      },
      {
        "id": 159,
        "officeId": 18,
        "branch": "จังหวัดบทช.ห้วยกระเจา"
      },
      {
        "id": 160,
        "officeId": 18,
        "branch": "จังหวัดกาญจนบุรี"
      },
      {
        "id": 161,
        "officeId": 18,
        "branch": "จังหวัดบทช.เดิมบางนางบวช"
      },
      {
        "id": 162,
        "officeId": 18,
        "branch": "จังหวัดบทช.ทองผาภูมิ"
      },
      {
        "id": 163,
        "officeId": 18,
        "branch": "จังหวัดบทช.ด่านช้าง"
      },
      {
        "id": 164,
        "officeId": 18,
        "branch": "จังหวัดบทช.กำแพงแสน"
      },
      {
        "id": 165,
        "officeId": 18,
        "branch": "จังหวัดบทช.ด่านมะขามเตี้ย"
      },
      {
        "id": 166,
        "officeId": 19,
        "branch": "จังหวัดบทช.ราชพฤกษ์"
      },
      {
        "id": 167,
        "officeId": 19,
        "branch": "จังหวัดบทช.นครอินทร์"
      },
      {
        "id": 168,
        "officeId": 19,
        "branch": "จังหวัดบทช.ชัยพฤกษ์"
      },
      {
        "id": 169,
        "officeId": 19,
        "branch": "จังหวัดบทช.กัลปพฤกษ์"
      }
    ];
  }

  public listRoads() {
    return [
      {
        "seq": 1,
        "branchId": 1,
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
        "branchId": 1,
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
        "branchId": 1,
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
        "branchId": 1,
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
        "branchId": 1,
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
      },
      {
        "seq": 6,
        "branchId": 1,
        "code": "นบ.1007",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 51+100) - แยกทางหลวงหมายเลข 345 (กม.ที่ 7+200)",
        "amphure": "บางบัวทอง,ปากเกร็ด",
        "branch": "นนทบุรี",
        "lengthInKm": 4.65,
        "dirtRoad": "-",
        "pavedRoad": 0.62,
        "concreteRoad": 4.03,
        "startN": 13.9775,
        "startE": 100.438,
        "endN": 13.9489,
        "endE": 100.4471,
        "hasFinished": "true"
      },
      {
        "seq": 7,
        "branchId": 1,
        "code": "นบ.3008",
        "road": "แยกทางหลวงหมายเลข 346 (กม.ที่ 35+300) - แยกทางหลวงหมายเลข 3215 (กม.ที่ 33+800)",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 7.955,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 7.955,
        "startN": 14.0268,
        "startE": 100.327,
        "endN": 13.9649,
        "endE": 100.3503,
        "hasFinished": "true"
      },
      {
        "seq": 8,
        "branchId": 1,
        "code": "นบ.1009",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 40+546) - บ้านหนองไผ่ขาด",
        "amphure": "บางใหญ่,บางบัวทอง",
        "branch": "นนทบุรี",
        "lengthInKm": 21.36,
        "dirtRoad": "-",
        "pavedRoad": 17.6,
        "concreteRoad": 3.76,
        "startN": 13.8887,
        "startE": 100.4083,
        "endN": 13.8556,
        "endE": 100.3333,
        "hasFinished": "true"
      },
      {
        "seq": 9,
        "branchId": 1,
        "code": "นบ.5010",
        "road": "แยกทางหลวงชนบท นบ.5027 (กม.ที่ 11+200) - บ้านหนองเพรางาย",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 16.861,
        "dirtRoad": "-",
        "pavedRoad": 4.069,
        "concreteRoad": 12.792,
        "startN": 13.9715,
        "startE": 100.3102,
        "endN": 13.8907,
        "endE": 100.3257,
        "hasFinished": "true"
      },
      {
        "seq": 10,
        "branchId": 1,
        "code": "นบ.1011",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 31+100) - แยกทางหลวงชนบท นฐ.3004 (กม.ที่ 26+700)",
        "amphure": "บางกรวย",
        "branch": "นนทบุรี",
        "lengthInKm": 11.33,
        "dirtRoad": "-",
        "pavedRoad": 7.93,
        "concreteRoad": 3.4,
        "startN": 13.8038,
        "startE": 100.4107,
        "endN": 13.8131,
        "endE": 100.3226,
        "hasFinished": "true"
      },
      {
        "seq": 11,
        "branchId": 1,
        "code": "นบ.4012",
        "road": "แยกทางหลวงหมายเลข 3215 (กม.ที่ 20+100) - บ้านลำโพ",
        "amphure": "บางบัวทอง",
        "branch": "นนทบุรี",
        "lengthInKm": 5.446,
        "dirtRoad": "-",
        "pavedRoad": 3.447,
        "concreteRoad": 1.999,
        "startN": 13.9094,
        "startE": 100.4258,
        "endN": 13.9484,
        "endE": 100.4452,
        "hasFinished": "true"
      },
      {
        "seq": 12,
        "branchId": 1,
        "code": "นบ.1013",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 43+490) - อำเภอไทรน้อย",
        "amphure": "บางบัวทอง,ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 13.169,
        "dirtRoad": "-",
        "pavedRoad": 13.169,
        "concreteRoad": "-",
        "startN": 13.9152,
        "startE": 100.41,
        "endN": 13.9773,
        "endE": 100.3107,
        "hasFinished": "true"
      },
      {
        "seq": 13,
        "branchId": 1,
        "code": "นบ.5014",
        "road": "แยกทางหลวงชนบท นบ.1011 (กม.ที่ 11+200) - บ้านใหม่",
        "amphure": "บางกรวย,บางใหญ่",
        "branch": "นนทบุรี",
        "lengthInKm": 8.075,
        "dirtRoad": "-",
        "pavedRoad": 3.213,
        "concreteRoad": 4.862,
        "startN": 13.8138,
        "startE": 100.3241,
        "endN": 13.8703,
        "endE": 100.3275,
        "hasFinished": "true"
      },
      {
        "seq": 14,
        "branchId": 1,
        "code": "นบ.3015",
        "road": "แยกทางหลวงหมายเลข 346 (กม.ที่ 39+280) - บ้านคลองหนึ่ง",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 10.884,
        "dirtRoad": "-",
        "pavedRoad": 1.716,
        "concreteRoad": 9.168,
        "startN": 14.0245,
        "startE": 100.2911,
        "endN": 14.107,
        "endE": 100.2954,
        "hasFinished": "true"
      },
      {
        "seq": 15,
        "branchId": 1,
        "code": "นบ.1016",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 36+900) - คลองกำนันจิตร",
        "amphure": "บางใหญ่",
        "branch": "นนทบุรี",
        "lengthInKm": 8.015,
        "dirtRoad": "-",
        "pavedRoad": 0.53,
        "concreteRoad": 7.485,
        "startN": 13.856,
        "startE": 100.4114,
        "endN": 13.881,
        "endE": 100.3698,
        "hasFinished": "true"
      },
      {
        "seq": 16,
        "branchId": 1,
        "code": "นบ.3017",
        "road": "แยกทางหลวงหมายเลข 346 (กม.ที่ 43+250) - อำเภอไทรน้อย",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 8.612,
        "dirtRoad": "-",
        "pavedRoad": 0.5,
        "concreteRoad": 8.112,
        "startN": 14.0143,
        "startE": 100.257,
        "endN": 13.976,
        "endE": 100.31,
        "hasFinished": "true"
      },
      {
        "seq": 17,
        "branchId": 1,
        "code": "นบ.4018",
        "road": "เลี่ยงเมืองนนทบุรี (ช่วง 1)",
        "amphure": "เมืองฯ",
        "branch": "นนทบุรี",
        "lengthInKm": 3.205,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 3.205,
        "startN": 13.8376,
        "startE": 100.4979,
        "endN": 13.8543,
        "endE": 100.4882,
        "hasFinished": "true"
      },
      {
        "seq": 18,
        "branchId": 1,
        "code": "นบ.4018",
        "road": "เลี่ยงเมืองนนทบุรี (ช่วง 2)",
        "amphure": "เมืองฯ",
        "branch": "นนทบุรี",
        "lengthInKm": 2.928,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 2.928,
        "startN": 13.8562,
        "startE": 100.4933,
        "endN": 13.8818,
        "endE": 100.4964,
        "hasFinished": "true"
      },
      {
        "seq": 19,
        "branchId": 1,
        "code": "นบ.3019",
        "road": "เลี่ยงเมืองปากเกร็ด",
        "amphure": "ปากเกร็ด",
        "branch": "นนทบุรี",
        "lengthInKm": 4.755,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 4.755,
        "startN": 13.8869,
        "startE": 100.5115,
        "endN": 13.9219,
        "endE": 100.5209,
        "hasFinished": "true"
      },
      {
        "seq": 20,
        "branchId": 1,
        "code": "นบ.5024",
        "road": "แยกทางหลวงชนบท นบ.3015 (กม.ที่ 3+150) - บ้านคลองหนึ่ง",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 9.1,
        "dirtRoad": "-",
        "pavedRoad": 6.047,
        "concreteRoad": 3.053,
        "startN": 14.0423,
        "startE": 100.2818,
        "endN": 14.1063,
        "endE": 100.2923,
        "hasFinished": "true"
      },
      {
        "seq": 21,
        "branchId": 1,
        "code": "นบ.5025",
        "road": "แยกทางหลวงชนบท นบ.3015 (กม.ที่ 1+350) - บ้านบึงลาดสวาย",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 3.07,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 3.07,
        "startN": 14.0367,
        "startE": 100.2931,
        "endN": 14.0434,
        "endE": 100.2673,
        "hasFinished": "true"
      },
      {
        "seq": 22,
        "branchId": 1,
        "code": "นบ.1026",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 35+700) - วัดต้นเชือก",
        "amphure": "บางใหญ่",
        "branch": "นนทบุรี",
        "lengthInKm": 8.506,
        "dirtRoad": "-",
        "pavedRoad": 2.382,
        "concreteRoad": 6.124,
        "startN": 13.8449,
        "startE": 100.4125,
        "endN": 13.8381,
        "endE": 100.3377,
        "hasFinished": "true"
      },
      {
        "seq": 23,
        "branchId": 1,
        "code": "นบ.5027",
        "road": "แยกทางหลวงชนบท นบ.1009 (กม.ที่ 9+850) - อำเภอไทรน้อย",
        "amphure": "บางใหญ่,ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 13.288,
        "dirtRoad": "-",
        "pavedRoad": 3.056,
        "concreteRoad": 10.232,
        "startN": 13.8713,
        "startE": 100.3311,
        "endN": 13.9871,
        "endE": 100.3159,
        "hasFinished": "true"
      },
      {
        "seq": 24,
        "branchId": 1,
        "code": "นบ.1028",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 51+100) - แยกทางหลวงหมายเลข 340 (กม.ที่ 30+400)",
        "amphure": "บางบัวทอง,ปากเกร็ด",
        "branch": "นนทบุรี",
        "lengthInKm": 5.77,
        "dirtRoad": "-",
        "pavedRoad": 5.77,
        "concreteRoad": "-",
        "startN": 13.9778,
        "startE": 100.4375,
        "endN": 13.9753,
        "endE": 100.3922,
        "hasFinished": "true"
      },
      {
        "seq": 25,
        "branchId": 1,
        "code": "นบ.5029",
        "road": "แยกทางหลวงชนบท นบ.1011 (กม.ที่ 1+900) - บ้านศาลากลาง",
        "amphure": "บางกรวย",
        "branch": "นนทบุรี",
        "lengthInKm": 5.7,
        "dirtRoad": "-",
        "pavedRoad": 0.36,
        "concreteRoad": 5.34,
        "startN": 13.8068,
        "startE": 100.3976,
        "endN": 13.8106,
        "endE": 100.353,
        "hasFinished": "true"
      },
      {
        "seq": 26,
        "branchId": 1,
        "code": "นบ.5031",
        "road": "แยกทางหลวงชนบท นบ.3015 (กม.ที่ 1+900) - บ้านเจ้าเฟื่อง",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 5.57,
        "dirtRoad": "-",
        "pavedRoad": 5.57,
        "concreteRoad": "-",
        "startN": 14.0855,
        "startE": 100.2927,
        "endN": 14.041,
        "endE": 100.293,
        "hasFinished": "true"
      },
      {
        "seq": 27,
        "branchId": 1,
        "code": "นบ.3032",
        "road": "แยกทางหลวงหมายเลข 346 (กม.ที่ 42+910)  -  บ้านคลองห้าร้อย",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 7.43,
        "dirtRoad": "-",
        "pavedRoad": 4.107,
        "concreteRoad": 3.323,
        "startN": 14.0165,
        "startE": 100.2595,
        "endN": 13.9895,
        "endE": 100.3123,
        "hasFinished": "true"
      },
      {
        "seq": 28,
        "branchId": 1,
        "code": "นบ.5033",
        "road": "แยกทางหลวงชนบท นบ.5027 (กม.ที่ 7+700 - บ้านคลองมะสง",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 6.933,
        "dirtRoad": "-",
        "pavedRoad": 0.282,
        "concreteRoad": 6.651,
        "startN": 13.9395,
        "startE": 100.3162,
        "endN": 13.9335,
        "endE": 100.2761,
        "hasFinished": "true"
      },
      {
        "seq": 29,
        "branchId": 1,
        "code": "นบ.5035",
        "road": "แยกทางหลวงชนบท นบ.1001 (กม.ที่ 4+975) - ตลาดบางคูลัด",
        "amphure": "บางใหญ่",
        "branch": "นนทบุรี",
        "lengthInKm": 2.604,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 2.893,
        "startN": 13.8187,
        "startE": 100.373,
        "endN": 13.8404,
        "endE": 100.3648,
        "hasFinished": "true"
      },
      {
        "seq": 30,
        "branchId": 1,
        "code": "นบ.5036",
        "road": "แยกทางหลวงชนบท นบ.3004 (กม.ที่ 0+215) - บ้านลาดบัวหลวง",
        "amphure": "ไทรน้อย , ลาดบัวหลวง",
        "branch": "นนทบุรี",
        "lengthInKm": 16.8,
        "dirtRoad": "-",
        "pavedRoad": 6.931,
        "concreteRoad": 9.869,
        "startN": 14.0281,
        "startE": 100.3123,
        "endN": 14.1663,
        "endE": 100.2995,
        "hasFinished": "true"
      },
      {
        "seq": 31,
        "branchId": 1,
        "code": "นบ.5037",
        "road": "แยกทางหลวงชนบท นบ.5027 (กม.ที่ 5+500) - แยกทางหลวงชนบท นบ.5010",
        "amphure": "ไทรน้อย",
        "branch": "นนทบุรี",
        "lengthInKm": 4.27,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 4.27,
        "startN": 13.9206,
        "startE": 100.3209,
        "endN": 13.9105,
        "endE": 100.2872,
        "hasFinished": "true"
      },
      {
        "seq": 32,
        "branchId": 2,
        "code": "ฉช.3001",
        "road": "แยกทางหลวงหมายเลข 314 (กม.ที่ 14.800) - บ้านลาดกระบัง (ตอนสมุทรปราการ)",
        "amphure": "บ้านโพธิ์",
        "branch": "สมุทรปราการ",
        "lengthInKm": 10.545,
        "dirtRoad": "-",
        "pavedRoad": 10.545,
        "concreteRoad": "-",
        "startN": 13.659,
        "startE": 100.9547,
        "endN": 13.6931,
        "endE": 100.8633,
        "hasFinished": "true"
      },
      {
        "seq": 33,
        "branchId": 2,
        "code": "สป.2001",
        "road": "แยกทางหลวงหมายเลข 34 (กม.ที่ 18+165) - บ้านลาดกระบัง",
        "amphure": "บางพลี",
        "branch": "สมุทรปราการ",
        "lengthInKm": 13.53,
        "dirtRoad": "-",
        "pavedRoad": 13.53,
        "concreteRoad": "-",
        "startN": 13.6111,
        "startE": 100.7604,
        "endN": 13.7167,
        "endE": 100.7853,
        "hasFinished": "true"
      },
      {
        "seq": 34,
        "branchId": 2,
        "code": "สป.4002",
        "road": "แยกทางหลวงหมายเลข 3344 (กม.ที่ 15+568) - บ้านบางพลีใหญ่",
        "amphure": "เมือง",
        "branch": "สมุทรปราการ",
        "lengthInKm": 8.21,
        "dirtRoad": "-",
        "pavedRoad": 8.21,
        "concreteRoad": "-",
        "startN": 13.6309,
        "startE": 100.6293,
        "endN": 13.6078,
        "endE": 100.7006,
        "hasFinished": "true"
      },
      {
        "seq": 35,
        "branchId": 2,
        "code": "สป.5003",
        "road": "เชื่อมทางหลวงท้องถิ่นบางเสาธง - บ้านช้างตาย",
        "amphure": "บางเสาธง",
        "branch": "สมุทรปราการ",
        "lengthInKm": 8.025,
        "dirtRoad": "-",
        "pavedRoad": 8.025,
        "concreteRoad": "-",
        "startN": 13.602,
        "startE": 100.8362,
        "endN": 13.6541,
        "endE": 100.8531,
        "hasFinished": "true"
      },
      {
        "seq": 36,
        "branchId": 2,
        "code": "สป.5004",
        "road": "แยกทางหลวงชนบท ฉช.3001 (กม.ที่ 11+560) - บ้านคลองนิยมยาตรา",
        "amphure": "บางบ่อ",
        "branch": "สมุทรปราการ",
        "lengthInKm": 10.3,
        "dirtRoad": "-",
        "pavedRoad": 3.853,
        "concreteRoad": 6.447,
        "startN": 13.6667,
        "startE": 100.9368,
        "endN": 13.5935,
        "endE": 100.926,
        "hasFinished": "true"
      },
      {
        "seq": 37,
        "branchId": 2,
        "code": "สป.1005",
        "road": "แยกทางหลวงหมายเลข 3 (กม.ที่ 60+250) - บ้านบางพลีน้อย",
        "amphure": "บางบ่อ",
        "branch": "สมุทรปราการ",
        "lengthInKm": 10.85,
        "dirtRoad": "-",
        "pavedRoad": 9.8,
        "concreteRoad": 1.05,
        "startN": 13.4945,
        "startE": 100.8549,
        "endN": 13.5751,
        "endE": 100.8962,
        "hasFinished": "true"
      },
      {
        "seq": 38,
        "branchId": 2,
        "code": "สป.1006",
        "road": "แยกทางหลวงหมายเลข 3 (กม.ที่ 52+600) - เคหะบางพลี",
        "amphure": "บางบ่อ,บางเสาธง",
        "branch": "สมุทรปราการ",
        "lengthInKm": 9.26,
        "dirtRoad": "-",
        "pavedRoad": 9.26,
        "concreteRoad": "-",
        "startN": 13.5129,
        "startE": 100.7885,
        "endN": 13.5944,
        "endE": 100.8056,
        "hasFinished": "true"
      },
      {
        "seq": 39,
        "branchId": 2,
        "code": "สป.5007",
        "road": "แยกทางหลวงชนบท สป.5004 (กม.ที่ 3+520) - บ้านเทพราช",
        "amphure": "บางบ่อ",
        "branch": "สมุทรปราการ",
        "lengthInKm": 1.565,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 1.565,
        "startN": 13.6439,
        "startE": 100.9466,
        "endN": 13.6451,
        "endE": 100.9592,
        "hasFinished": "true"
      },
      {
        "seq": 40,
        "branchId": 2,
        "code": "สป.4008",
        "road": "แยกทางหลวงหมายเลข 3256 (กม.ที่ 17+085) - เขตประเวศ",
        "amphure": "บางพลี",
        "branch": "สมุทรปราการ",
        "lengthInKm": 1.85,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 1.85,
        "startN": 13.6778,
        "startE": 100.7229,
        "endN": 13.6826,
        "endE": 100.706,
        "hasFinished": "true"
      },
      {
        "seq": 41,
        "branchId": 2,
        "code": "สป.4009",
        "road": "แยกทางหลวงหมายเลข 3344 (กม.ที่ 13+750) - ถนนสุขุมวิท (กม.ที่ 17+350)",
        "amphure": "เมือง",
        "branch": "สมุทรปราการ",
        "lengthInKm": 4.023,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 4.023,
        "startN": 13.6588,
        "startE": 100.6008,
        "endN": 13.6445,
        "endE": 100.6368,
        "hasFinished": "true"
      },
      {
        "seq": 42,
        "branchId": 2,
        "code": "สป.4010",
        "road": "เชื่อมทางหลวงหมายเลข 3243 (กม.ที่ 5+317) - เขตบางขุนเทียน",
        "amphure": "พระสมุทรเจดีย์",
        "branch": "สมุทรปราการ",
        "lengthInKm": 4.89,
        "dirtRoad": 0.07,
        "pavedRoad": "-",
        "concreteRoad": 4.82,
        "startN": 13.5632,
        "startE": 100.5323,
        "endN": 13.5497,
        "endE": 100.4919,
        "hasFinished": "true"
      },
      {
        "seq": 43,
        "branchId": 2,
        "code": "สป.1011",
        "road": "แยกทางหลวงหมายเลข 3 (กม.ที่ 49+035) - บ้านบางกะสี",
        "amphure": "เมือง,บางพลี",
        "branch": "สมุทรปราการ",
        "lengthInKm": 7.62,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 7.62,
        "startN": 13.5025,
        "startE": 100.7597,
        "endN": 13.5576,
        "endE": 100.7547,
        "hasFinished": "true"
      },
      {
        "seq": 44,
        "branchId": 2,
        "code": "สป.2014",
        "road": "แยกทางหลวงหมายเลข 34 (กม.ที่ 29+950) - โรงเรียนคลองหลุมลึก",
        "amphure": "บางบ่อ",
        "branch": "สมุทรปราการ",
        "lengthInKm": 3.46,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 3.46,
        "startN": 13.5826,
        "startE": 100.8635,
        "endN": 13.6083,
        "endE": 100.8813,
        "hasFinished": "true"
      },
      {
        "seq": 45,
        "branchId": 3,
        "code": "ปท.4001",
        "road": "แยกทางหลวงหมายเลข 3261 (กม.ที่ 8+800) - บ้านคลองห้า",
        "amphure": "หนองเสือ,คลองหลวง",
        "branch": "ปทุมธานี",
        "lengthInKm": 16.365,
        "dirtRoad": "-",
        "pavedRoad": 16.365,
        "concreteRoad": "-",
        "startN": 14.1323,
        "startE": 100.8239,
        "endN": 14.0948,
        "endE": 100.7102,
        "hasFinished": "true"
      },
      {
        "seq": 46,
        "branchId": 3,
        "code": "ปท.3004",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 15+700) - บ้านลำลูกกา",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 10.005,
        "dirtRoad": "-",
        "pavedRoad": 10.005,
        "concreteRoad": "-",
        "startN": 14.0282,
        "startE": 100.7536,
        "endN": 13.9349,
        "endE": 100.7465,
        "hasFinished": "true"
      },
      {
        "seq": 47,
        "branchId": 3,
        "code": "ปท.3006",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 18+700) - บ้านคลองแปด",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 10.432,
        "dirtRoad": "-",
        "pavedRoad": 10.082,
        "concreteRoad": 0.35,
        "startN": 14.0375,
        "startE": 100.7797,
        "endN": 13.9443,
        "endE": 100.7746,
        "hasFinished": "true"
      },
      {
        "seq": 48,
        "branchId": 3,
        "code": "ปท.3007",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 16+000) - บ้านอินอนุสร",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 20.208,
        "dirtRoad": "-",
        "pavedRoad": 20.208,
        "concreteRoad": "-",
        "startN": 14.0294,
        "startE": 100.7563,
        "endN": 14.2109,
        "endE": 100.7553,
        "hasFinished": "true"
      },
      {
        "seq": 49,
        "branchId": 3,
        "code": "ปท.3008",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 15+650) - บ้านวังน้อย",
        "amphure": "ธัญบุรี, คลองหลวง",
        "branch": "ปทุมธานี",
        "lengthInKm": 20.331,
        "dirtRoad": "-",
        "pavedRoad": 20.331,
        "concreteRoad": "-",
        "startN": 14.0281,
        "startE": 100.753,
        "endN": 14.2107,
        "endE": 100.7548,
        "hasFinished": "true"
      },
      {
        "seq": 50,
        "branchId": 3,
        "code": "ปท.3009",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 26+200) - บ้านปากคลองหกวา",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 11.747,
        "dirtRoad": "-",
        "pavedRoad": 11.747,
        "concreteRoad": "-",
        "startN": 14.0602,
        "startE": 100.8453,
        "endN": 13.954,
        "endE": 100.8388,
        "hasFinished": "true"
      },
      {
        "seq": 51,
        "branchId": 3,
        "code": "ปท.3010",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 10+800) - บ้านคลองห้า",
        "amphure": "ธัญบุรี, คลองหลวง",
        "branch": "ปทุมธานี",
        "lengthInKm": 20.068,
        "dirtRoad": "-",
        "pavedRoad": 20.068,
        "concreteRoad": "-",
        "startN": 14.0108,
        "startE": 100.7124,
        "endN": 14.1896,
        "endE": 100.7101,
        "hasFinished": "true"
      },
      {
        "seq": 52,
        "branchId": 3,
        "code": "ปท.3011",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 34+000) - บ้านคลองสิบสี่หกวา",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 13.346,
        "dirtRoad": "-",
        "pavedRoad": 13.346,
        "concreteRoad": "-",
        "startN": 14.084,
        "startE": 100.9135,
        "endN": 13.9641,
        "endE": 100.9126,
        "hasFinished": "true"
      },
      {
        "seq": 53,
        "branchId": 3,
        "code": "ปท.3012",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 30+950) - บ้านหนองจอก",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 26.264,
        "dirtRoad": "-",
        "pavedRoad": 26.264,
        "concreteRoad": "-",
        "startN": 14.0747,
        "startE": 100.8866,
        "endN": 13.8591,
        "endE": 100.8676,
        "hasFinished": "true"
      },
      {
        "seq": 54,
        "branchId": 3,
        "code": "ปท.3014",
        "road": "แยกทางหลวงหมายเลข 346 (กม.ที่ 21+800) - วัดเจดีย์หอย",
        "amphure": "ลาดหลุมแก้ว",
        "branch": "ปทุมธานี",
        "lengthInKm": 9.575,
        "dirtRoad": "-",
        "pavedRoad": 9.575,
        "concreteRoad": "-",
        "startN": 14.0559,
        "startE": 100.445,
        "endN": 14.1097,
        "endE": 100.3824,
        "hasFinished": "true"
      },
      {
        "seq": 55,
        "branchId": 3,
        "code": "ปท.3015",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 29+200) - บ้านคลองสิบสองสายกลาง",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 12.225,
        "dirtRoad": "-",
        "pavedRoad": 12.225,
        "concreteRoad": "-",
        "startN": 14.0694,
        "startE": 100.8715,
        "endN": 13.9582,
        "endE": 100.8668,
        "hasFinished": "true"
      },
      {
        "seq": 56,
        "branchId": 3,
        "code": "ปท.3017",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 7+700) - บ้านปากคลองสี่ (ถนนผังเมือง ง ถนนไสวประชาราษฎร์ ผังเมืองรวมเมืองคูคต)",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 7.543,
        "dirtRoad": "-",
        "pavedRoad": 7.543,
        "concreteRoad": "-",
        "startN": 13.9999,
        "startE": 100.6858,
        "endN": 13.9327,
        "endE": 100.6827,
        "hasFinished": "true"
      },
      {
        "seq": 57,
        "branchId": 3,
        "code": "ปท.3019",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 22+500) - เลียบคลอง10",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 6.745,
        "dirtRoad": "-",
        "pavedRoad": 6.745,
        "concreteRoad": "-",
        "startN": 14.049,
        "startE": 100.8132,
        "endN": 13.9507,
        "endE": 100.8141,
        "hasFinished": "true"
      },
      {
        "seq": 58,
        "branchId": 3,
        "code": "ปท.3020",
        "road": "แยกทางหลวงหมายเลข 340 (กม.ที่ 32+150) - บ้านคลองบางหลวง",
        "amphure": "บางบัวทอง, ลาดหลุมแก้ว",
        "branch": "ปทุมธานี",
        "lengthInKm": 14.1,
        "dirtRoad": "-",
        "pavedRoad": 13.988,
        "concreteRoad": "-",
        "startN": 13.9883,
        "startE": 100.3815,
        "endN": 14.115,
        "endE": 100.3826,
        "hasFinished": "true"
      },
      {
        "seq": 59,
        "branchId": 3,
        "code": "ปท.5021",
        "road": "แยกถนนเทศบาลท่าโขลง - บ้านคลองสิบสาม",
        "amphure": "คลองหลวง, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 32.655,
        "dirtRoad": "-",
        "pavedRoad": 32.655,
        "concreteRoad": "-",
        "startN": 14.1428,
        "startE": 100.6195,
        "endN": 14.2756,
        "endE": 100.8911,
        "hasFinished": "true"
      },
      {
        "seq": 60,
        "branchId": 3,
        "code": "ปท.3022",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 26+400) - บ้านแสนสุขสกัดห้า",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 21.375,
        "dirtRoad": "-",
        "pavedRoad": 21.375,
        "concreteRoad": "-",
        "startN": 14.0607,
        "startE": 100.8469,
        "endN": 14.2542,
        "endE": 100.8461,
        "hasFinished": "true"
      },
      {
        "seq": 61,
        "branchId": 3,
        "code": "ปท.3023",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 26+350) - เลียบคลอง 11 ฝั่งตะวันตก",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 21.385,
        "dirtRoad": "-",
        "pavedRoad": 21.385,
        "concreteRoad": "-",
        "startN": 14.0606,
        "startE": 100.8465,
        "endN": 14.254,
        "endE": 100.8457,
        "hasFinished": "true"
      },
      {
        "seq": 62,
        "branchId": 3,
        "code": "ปท.3024",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 29+000) - เลียบคลอง 12 ฝั่งตะวันออก",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 21.708,
        "dirtRoad": "-",
        "pavedRoad": 20.008,
        "concreteRoad": 1.7,
        "startN": 14.0688,
        "startE": 100.8698,
        "endN": 14.265,
        "endE": 100.8689,
        "hasFinished": "true"
      },
      {
        "seq": 63,
        "branchId": 3,
        "code": "ปท.3025",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 28+950) - เลียบคลอง 12 ฝั่งตะวันตก",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 21.695,
        "dirtRoad": "-",
        "pavedRoad": 20.095,
        "concreteRoad": 1.6,
        "startN": 14.0686,
        "startE": 100.8692,
        "endN": 14.2648,
        "endE": 100.8685,
        "hasFinished": "true"
      },
      {
        "seq": 64,
        "branchId": 3,
        "code": "ปท.3026",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 31+550) - เลียบคลอง 13 ฝั่งตะวันตก",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 22.025,
        "dirtRoad": "-",
        "pavedRoad": 22.025,
        "concreteRoad": "-",
        "startN": 14.0766,
        "startE": 100.892,
        "endN": 14.2756,
        "endE": 100.8911,
        "hasFinished": "true"
      },
      {
        "seq": 65,
        "branchId": 3,
        "code": "ปท.3027",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 23+750) - เลียบคลอง 10 ฝั่งตะวันตก",
        "amphure": "ธัญบุรี, หนองเสือ",
        "branch": "ปทุมธานี",
        "lengthInKm": 21.054,
        "dirtRoad": "-",
        "pavedRoad": 20.544,
        "concreteRoad": 0.51,
        "startN": 14.0526,
        "startE": 100.8238,
        "endN": 14.2431,
        "endE": 100.8229,
        "hasFinished": "true"
      },
      {
        "seq": 66,
        "branchId": 3,
        "code": "ปท.3028",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 20+650) - เลียบคลอง 9 ฝั่งตะวันตก",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 11.217,
        "dirtRoad": "-",
        "pavedRoad": 10.563,
        "concreteRoad": 0.654,
        "startN": 14.0434,
        "startE": 100.7969,
        "endN": 13.9483,
        "endE": 100.7918,
        "hasFinished": "true"
      },
      {
        "seq": 67,
        "branchId": 3,
        "code": "ปท.1030",
        "road": "แยกทางหลวงหมายเลข 9 (กม.ที่ 51+450) - บ้านคูบางหลวง",
        "amphure": "ลาดหลุมแก้ว",
        "branch": "ปทุมธานี",
        "lengthInKm": 8.35,
        "dirtRoad": "-",
        "pavedRoad": 8.35,
        "concreteRoad": "-",
        "startN": 13.9807,
        "startE": 100.439,
        "endN": 14.0533,
        "endE": 100.4525,
        "hasFinished": "true"
      },
      {
        "seq": 68,
        "branchId": 3,
        "code": "ปท.5031",
        "road": "ถนนภายในสำนักทางหลวงชนบทที่1 (ปทุมธานี)",
        "amphure": "ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 1.825,
        "dirtRoad": "-",
        "pavedRoad": 1.825,
        "concreteRoad": "-",
        "startN": 13.9256,
        "startE": 100.7379,
        "endN": 13.9302,
        "endE": 100.7372,
        "hasFinished": "true"
      },
      {
        "seq": 69,
        "branchId": 3,
        "code": "ปท.3032",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 23+950) - เลียบคลอง10 ฝั่งตะวันออก",
        "amphure": "ธัญบุรี, ลำลูกกา",
        "branch": "ปทุมธานี",
        "lengthInKm": 11.274,
        "dirtRoad": "-",
        "pavedRoad": 11.274,
        "concreteRoad": "-",
        "startN": 14.0533,
        "startE": 100.8257,
        "endN": 13.9509,
        "endE": 100.818,
        "hasFinished": "true"
      },
      {
        "seq": 70,
        "branchId": 3,
        "code": "ปท.3033",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 34+150) - บ้านหนองหมู",
        "amphure": "ธัญบุรี, หนองเสือ, หนองแค",
        "branch": "ปทุมธานี",
        "lengthInKm": 26.25,
        "dirtRoad": "-",
        "pavedRoad": 26.25,
        "concreteRoad": "-",
        "startN": 14.0844,
        "startE": 100.9145,
        "endN": 14.3003,
        "endE": 100.9421,
        "hasFinished": "true"
      },
      {
        "seq": 71,
        "branchId": 3,
        "code": "ปท.3034",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 31+800) - บ้านหนองแค",
        "amphure": "ธัญบุรี, หนองเสือ, หนองแค",
        "branch": "ปทุมธานี",
        "lengthInKm": 21.95,
        "dirtRoad": "-",
        "pavedRoad": 21.95,
        "concreteRoad": "-",
        "startN": 14.0773,
        "startE": 100.8939,
        "endN": 14.2764,
        "endE": 100.8918,
        "hasFinished": "true"
      },
      {
        "seq": 72,
        "branchId": 3,
        "code": "ปท.3035",
        "road": "แยกทางหลวงหมายเลข 305 (กม.ที่ 31+800) - คลองแสนแสบ",
        "amphure": "ธัญบุรี, ลำลูกกา, หนองจอก",
        "branch": "ปทุมธานี",
        "lengthInKm": 24.922,
        "dirtRoad": "-",
        "pavedRoad": 24.922,
        "concreteRoad": "-",
        "startN": 14.0773,
        "startE": 100.8939,
        "endN": 13.8587,
        "endE": 100.8679,
        "hasFinished": "true"
      },
      {
        "seq": 73,
        "branchId": 3,
        "code": "อย.5042",
        "road": "แยกสายทางเทศบาลตำบลบางกระสั้น (กม.ที่ 2+600) - บ้านสวนพริกไทย (ตอนปทุมธานี)",
        "amphure": "บางปะอิน",
        "branch": "ปทุมธานี",
        "lengthInKm": 13.54,
        "dirtRoad": "-",
        "pavedRoad": 2.9,
        "concreteRoad": 10.64,
        "startN": 14.1276,
        "startE": 100.5803,
        "endN": 14.0007,
        "endE": 100.5975,
        "hasFinished": "true"
      },
      {
        "seq": 74,
        "branchId": 4,
        "code": "อย.2003",
        "road": "แยกทางหลวงหมายเลข 32 (กม.ที่ 31+800) - บ้านโพธิ์สามต้น",
        "amphure": "บางปะหัน,พระนครศรีอยุธยา",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 6.345,
        "dirtRoad": "-",
        "pavedRoad": 6.345,
        "concreteRoad": "-",
        "startN": 14.3815,
        "startE": 100.5591,
        "endN": 14.4321,
        "endE": 100.5499,
        "hasFinished": "true"
      },
      {
        "seq": 75,
        "branchId": 4,
        "code": "อย.2005",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 60+206)  - บ้านดาบ",
        "amphure": "นครหลวง",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 11.28,
        "dirtRoad": "-",
        "pavedRoad": 11.28,
        "concreteRoad": "-",
        "startN": 14.4571,
        "startE": 100.6373,
        "endN": 14.4052,
        "endE": 100.592,
        "hasFinished": "true"
      },
      {
        "seq": 76,
        "branchId": 4,
        "code": "อย.4007",
        "road": "แยกทางหลวงหมายเลข 3267 (กม.ที่ 2+150)  - บ้านมหาราช",
        "amphure": "มหาราช",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 6.78,
        "dirtRoad": "-",
        "pavedRoad": 6.78,
        "concreteRoad": "-",
        "startN": 14.5789,
        "startE": 100.5112,
        "endN": 14.5343,
        "endE": 100.5229,
        "hasFinished": "true"
      },
      {
        "seq": 77,
        "branchId": 4,
        "code": "อย.2008",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 58+600)  - บ้านปากแรด",
        "amphure": "นครหลวง,ท่าเรือ",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 19.932,
        "dirtRoad": "-",
        "pavedRoad": 19.862,
        "concreteRoad": 0.07,
        "startN": 14.4557,
        "startE": 100.6151,
        "endN": 14.5306,
        "endE": 100.7445,
        "hasFinished": "true"
      },
      {
        "seq": 78,
        "branchId": 4,
        "code": "อย.3010",
        "road": "แยกทางหลวงหมายเลข 309 (กม.ที่ 5+749)  - บ้านดอนพุทรา",
        "amphure": "วังน้อย,อุทัย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 13.14,
        "dirtRoad": "-",
        "pavedRoad": 12.39,
        "concreteRoad": 0.75,
        "startN": 14.2733,
        "startE": 100.6836,
        "endN": 14.3441,
        "endE": 100.7428,
        "hasFinished": "true"
      },
      {
        "seq": 79,
        "branchId": 4,
        "code": "อย.2012",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 77+700) - บ้านกลาง",
        "amphure": "ภาชี,อุทัย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 12.419,
        "dirtRoad": "-",
        "pavedRoad": 12.419,
        "concreteRoad": "-",
        "startN": 14.4228,
        "startE": 100.7683,
        "endN": 14.3512,
        "endE": 100.701,
        "hasFinished": "true"
      },
      {
        "seq": 80,
        "branchId": 4,
        "code": "อย.3013",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 7+047) -บ้านบางพระครู",
        "amphure": "บางปะหัน,นครหลวง",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 9.398,
        "dirtRoad": "-",
        "pavedRoad": 7.398,
        "concreteRoad": 2,
        "startN": 14.5152,
        "startE": 100.5449,
        "endN": 14.4883,
        "endE": 100.6005,
        "hasFinished": "true"
      },
      {
        "seq": 81,
        "branchId": 4,
        "code": "อย.4015",
        "road": "แยกทางหลวงหมายเลข 3043 (กม.ที่ 3+883) - บ้านลำไทร",
        "amphure": "อุทัย,วังน้อย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 13.875,
        "dirtRoad": "-",
        "pavedRoad": 13.875,
        "concreteRoad": "-",
        "startN": 14.3497,
        "startE": 100.6965,
        "endN": 14.2343,
        "endE": 100.7149,
        "hasFinished": "true"
      },
      {
        "seq": 82,
        "branchId": 4,
        "code": "อย.4021",
        "road": "แยกทางหลวงหมายเลข 3470 (กม.ที่ 15+200) - บ้านศาลาลอย",
        "amphure": "ท่าเรือ",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 4.365,
        "dirtRoad": "-",
        "pavedRoad": 4.365,
        "concreteRoad": "-",
        "startN": 14.5579,
        "startE": 100.7204,
        "endN": 14.5298,
        "endE": 100.7047,
        "hasFinished": "true"
      },
      {
        "seq": 83,
        "branchId": 4,
        "code": "อย.2022",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 67+500) - บ้านศาลาลอย",
        "amphure": "ภาชี,ท่าเรือ",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 11.71,
        "dirtRoad": "-",
        "pavedRoad": 11.71,
        "concreteRoad": "-",
        "startN": 14.4462,
        "startE": 100.691,
        "endN": 14.5297,
        "endE": 100.7202,
        "hasFinished": "true"
      },
      {
        "seq": 84,
        "branchId": 4,
        "code": "อย.1023",
        "road": "แยกทางหลวงหมายเลข 1 (กม.ที่ 71+500) - บ้านหนองโสน",
        "amphure": "วังน้อย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 10.43,
        "dirtRoad": "-",
        "pavedRoad": 10.43,
        "concreteRoad": "-",
        "startN": 14.2536,
        "startE": 100.7631,
        "endN": 14.3179,
        "endE": 100.8079,
        "hasFinished": "true"
      },
      {
        "seq": 85,
        "branchId": 4,
        "code": "อย.4024",
        "road": "แยกทางหลวงหมายเลข 3267 (กม.ที่ 4+040) - บ้านคลองน้อย",
        "amphure": "มหาราช,บ้านแพรก",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 9.63,
        "dirtRoad": "-",
        "pavedRoad": 9.63,
        "concreteRoad": "-",
        "startN": 14.5784,
        "startE": 100.5288,
        "endN": 14.6517,
        "endE": 100.5521,
        "hasFinished": "true"
      },
      {
        "seq": 86,
        "branchId": 4,
        "code": "อย.5026",
        "road": "แยกทางหลวงชนบท อย.3008 (กม.ที่ 9+950) - บ้านตลาด",
        "amphure": "นครหลวง,อุทัย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 17.55,
        "dirtRoad": "-",
        "pavedRoad": 17.55,
        "concreteRoad": "-",
        "startN": 14.4993,
        "startE": 100.6776,
        "endN": 14.3558,
        "endE": 100.6888,
        "hasFinished": "true"
      },
      {
        "seq": 87,
        "branchId": 4,
        "code": "อย.2027",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 75+400) - บ้านดอนข่อย",
        "amphure": "ภาชี,อุทัย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 11.94,
        "dirtRoad": "-",
        "pavedRoad": 11.94,
        "concreteRoad": "-",
        "startN": 14.4348,
        "startE": 100.751,
        "endN": 14.4421,
        "endE": 100.7156,
        "hasFinished": "true"
      },
      {
        "seq": 88,
        "branchId": 4,
        "code": "อย.3032",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 0+000) - บ้านบางระกำ",
        "amphure": "บางปะหัน",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 12.05,
        "dirtRoad": "-",
        "pavedRoad": 11.95,
        "concreteRoad": 0.1,
        "startN": 14.4635,
        "startE": 100.5465,
        "endN": 14.4687,
        "endE": 100.6042,
        "hasFinished": "true"
      },
      {
        "seq": 89,
        "branchId": 4,
        "code": "อย.5035",
        "road": "แยกสายทางเทศบาลนครพระนครศรีอยุธยา (กม.ที่ 1+400) - บ้านปะขาว",
        "amphure": "พระนครศรีอยุธยา,บางบาล",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 16.335,
        "dirtRoad": "-",
        "pavedRoad": 16.335,
        "concreteRoad": "-",
        "startN": 14.3618,
        "startE": 100.5429,
        "endN": 14.4659,
        "endE": 100.464,
        "hasFinished": "true"
      },
      {
        "seq": 90,
        "branchId": 4,
        "code": "อย.5037",
        "road": "แยกทางหลวงชนบท อย.3008 (กม.ที่ 0+100) - บ้านชุ้ง",
        "amphure": "นครหลวง",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 5.36,
        "dirtRoad": "-",
        "pavedRoad": 5.36,
        "concreteRoad": "-",
        "startN": 14.4565,
        "startE": 100.6158,
        "endN": 14.4739,
        "endE": 100.646,
        "hasFinished": "true"
      },
      {
        "seq": 91,
        "branchId": 4,
        "code": "อย.2039",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 79+300) - บ้านไก่จ้น",
        "amphure": "ภาชี,ท่าเรือ",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 17.5,
        "dirtRoad": "-",
        "pavedRoad": 17.5,
        "concreteRoad": "-",
        "startN": 14.4186,
        "startE": 100.7824,
        "endN": 14.5553,
        "endE": 100.763,
        "hasFinished": "true"
      },
      {
        "seq": 92,
        "branchId": 4,
        "code": "อย.4040",
        "road": "แยกทางหลวงหมายเลข 3470 (กม.ที่ 11+200) - เขื่อนพระราม 6",
        "amphure": "ท่าเรือ",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 3.25,
        "dirtRoad": "-",
        "pavedRoad": 3,
        "concreteRoad": "-",
        "startN": 14.5324,
        "startE": 100.7461,
        "endN": 14.5551,
        "endE": 100.7621,
        "hasFinished": "true"
      },
      {
        "seq": 93,
        "branchId": 4,
        "code": "อย.2041",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 79+400) - บ้านหนองกรวย",
        "amphure": "ภาชี",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 6.315,
        "dirtRoad": "-",
        "pavedRoad": 6.315,
        "concreteRoad": "-",
        "startN": 14.4184,
        "startE": 100.7817,
        "endN": 14.467,
        "endE": 100.7506,
        "hasFinished": "true"
      },
      {
        "seq": 94,
        "branchId": 4,
        "code": "อย.5042",
        "road": "แยกสายทางเทศบาลตำบลบางกระสั้น (กม.ที่ 2+600) - เชียงรากน้อย (ตอนอยุธยา)",
        "amphure": "บางปะอิน",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 4.98,
        "dirtRoad": "-",
        "pavedRoad": 4.98,
        "concreteRoad": "-",
        "startN": 14.1725,
        "startE": 100.5741,
        "endN": 14.1276,
        "endE": 100.5803,
        "hasFinished": "true"
      },
      {
        "seq": 95,
        "branchId": 4,
        "code": "อย.1043",
        "road": "แยกทางหลวงหมายเลข 1 (กม.ที่ 49+200) - บ้านข้าวงาม",
        "amphure": "วังน้อย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 21.4,
        "dirtRoad": "-",
        "pavedRoad": 21.4,
        "concreteRoad": "-",
        "startN": 14.144,
        "startE": 100.6186,
        "endN": 14.2306,
        "endE": 100.7955,
        "hasFinished": "true"
      },
      {
        "seq": 96,
        "branchId": 4,
        "code": "อย.2045",
        "road": "แยกทางหลวงหมายเลข 32 (กม.ที่ 19+500) - บ้านอุทัย",
        "amphure": "อุทัย",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 5.69,
        "dirtRoad": "-",
        "pavedRoad": 5.69,
        "concreteRoad": "-",
        "startN": 14.3463,
        "startE": 100.6135,
        "endN": 14.3537,
        "endE": 100.6645,
        "hasFinished": "true"
      },
      {
        "seq": 97,
        "branchId": 4,
        "code": "อย.3046",
        "road": "แยกทางหลวงหมายเลข 309 (กม.ที่ 5+749) - บ้านตลิ่งชัน",
        "amphure": "วังน้อย,บางปะอิน",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 7.25,
        "dirtRoad": "-",
        "pavedRoad": 7.25,
        "concreteRoad": "-",
        "startN": 14.2733,
        "startE": 100.6836,
        "endN": 14.2697,
        "endE": 100.6172,
        "hasFinished": "true"
      },
      {
        "seq": 98,
        "branchId": 4,
        "code": "อย.3048",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 12+345) - เทศบาลตำบลราชคราม",
        "amphure": "บางปะอิน",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 6.16,
        "dirtRoad": "-",
        "pavedRoad": 6.16,
        "concreteRoad": "-",
        "startN": 14.1523,
        "startE": 100.5695,
        "endN": 14.1673,
        "endE": 100.533,
        "hasFinished": "true"
      },
      {
        "seq": 99,
        "branchId": 4,
        "code": "อย.3052",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 10+950) - บ้านปากทางลัด",
        "amphure": "มหาราช, บางปะหัน",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 7.475,
        "dirtRoad": "-",
        "pavedRoad": 7.475,
        "concreteRoad": "-",
        "startN": 14.5425,
        "startE": 100.5334,
        "endN": 14.529,
        "endE": 100.5818,
        "hasFinished": "true"
      },
      {
        "seq": 100,
        "branchId": 4,
        "code": "อย.2053",
        "road": "แยกทางหลวงหมายเลข 32 (กม.ที่ 18+035) - บ้านโปรตุเกส (ถนนเลี่ยงเมือง)",
        "amphure": "พระนครศรีอยุธยา",
        "branch": "พระนครศรีอยุธยา",
        "lengthInKm": 4.291,
        "dirtRoad": "-",
        "pavedRoad": "-",
        "concreteRoad": 4.291,
        "startN": 14.3331,
        "startE": 100.6132,
        "endN": 14.3317,
        "endE": 100.5733,
        "hasFinished": "true"
      },
      {
        "seq": 101,
        "branchId": 5,
        "code": "อท.4001",
        "road": "แยกทางหลวงหมายเลข 3454 (กม.ที่ 45+500) - บ้านหัวเด่น",
        "amphure": "โพธิ์ทอง",
        "branch": "อ่างทอง",
        "lengthInKm": 13.843,
        "dirtRoad": "-",
        "pavedRoad": 13.843,
        "concreteRoad": "-",
        "startN": 14.65,
        "startE": 100.3762,
        "endN": 14.7099,
        "endE": 100.3529,
        "hasFinished": "true"
      },
      {
        "seq": 102,
        "branchId": 5,
        "code": "อท.4002",
        "road": "แยกทางหลวงหมายเลข 3064(กม.ที่ 9+900) - บ้านมหานาม",
        "amphure": "โพธิ์ทอง,ไชโย",
        "branch": "อ่างทอง",
        "lengthInKm": 11.2,
        "dirtRoad": "-",
        "pavedRoad": 11.2,
        "concreteRoad": "-",
        "startN": 14.6548,
        "startE": 100.4118,
        "endN": 14.7239,
        "endE": 100.4552,
        "hasFinished": "true"
      },
      {
        "seq": 103,
        "branchId": 5,
        "code": "อท.3003",
        "road": "แยกทางหลวงหมายเลข 309(กม.ที่ 64+300) - บ้านบางพลับ",
        "amphure": "ไชโย,โพธิ์ทอง",
        "branch": "อ่างทอง",
        "lengthInKm": 5.244,
        "dirtRoad": "-",
        "pavedRoad": 5.244,
        "concreteRoad": "-",
        "startN": 14.6513,
        "startE": 100.4537,
        "endN": 14.6513,
        "endE": 100.411,
        "hasFinished": "true"
      },
      {
        "seq": 104,
        "branchId": 5,
        "code": "อท.4004",
        "road": "แยกทางหลวงหมายเลข 3454 (กม.ที่ 36+000) - บ้านสาวร้องไห้",
        "amphure": "วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 22.883,
        "dirtRoad": "-",
        "pavedRoad": 22.883,
        "concreteRoad": "-",
        "startN": 14.5873,
        "startE": 100.3477,
        "endN": 14.568,
        "endE": 100.2338,
        "hasFinished": "true"
      },
      {
        "seq": 105,
        "branchId": 5,
        "code": "อท.4005",
        "road": "แยกทางหลวงหมายเลข 3501 (กม.ที่ 3+800) - บ้านโคกช้าง",
        "amphure": "เมือง,วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 16.758,
        "dirtRoad": "-",
        "pavedRoad": 16.758,
        "concreteRoad": "-",
        "startN": 14.5612,
        "startE": 100.4421,
        "endN": 14.5005,
        "endE": 100.3897,
        "hasFinished": "true"
      },
      {
        "seq": 106,
        "branchId": 5,
        "code": "อท.4006",
        "road": "แยกทางหลวงหมายเลข 3195 (กม.ที่ 8+500) - บ้านคลองอ้ายทอก",
        "amphure": "วิเศษชัยชาญ,สามโก้",
        "branch": "อ่างทอง",
        "lengthInKm": 8.137,
        "dirtRoad": "-",
        "pavedRoad": 8.137,
        "concreteRoad": "-",
        "startN": 14.5541,
        "startE": 100.2001,
        "endN": 14.6073,
        "endE": 100.2243,
        "hasFinished": "true"
      },
      {
        "seq": 107,
        "branchId": 5,
        "code": "อท.4007",
        "road": "แยกทางหลวงหมายเลข 3195 (กม.ที่ 26+900) - บ้านสามเรือน",
        "amphure": "วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 11.805,
        "dirtRoad": "-",
        "pavedRoad": 11.805,
        "concreteRoad": "-",
        "startN": 14.5995,
        "startE": 100.3625,
        "endN": 14.4987,
        "endE": 100.3701,
        "hasFinished": "true"
      },
      {
        "seq": 108,
        "branchId": 5,
        "code": "อท.4008",
        "road": "แยกทางหลวงหมายเลข 3064 (กม.ที่ 9+800) - บ้านคลองขุน",
        "amphure": "โพธิ์ทอง,วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 9.9,
        "dirtRoad": "-",
        "pavedRoad": 9.9,
        "concreteRoad": "-",
        "startN": 14.6533,
        "startE": 100.4114,
        "endN": 14.5995,
        "endE": 100.3625,
        "hasFinished": "true"
      },
      {
        "seq": 109,
        "branchId": 5,
        "code": "อท.4009",
        "road": "แยกทางหลวงหมายเลข 3064 (กม.ที่ 24+900) - บ้านม่วง",
        "amphure": "แสวงหา,โพธิ์ทอง",
        "branch": "อ่างทอง",
        "lengthInKm": 18.453,
        "dirtRoad": "-",
        "pavedRoad": 18.453,
        "concreteRoad": "-",
        "startN": 14.7515,
        "startE": 100.3229,
        "endN": 14.6849,
        "endE": 100.2389,
        "hasFinished": "true"
      },
      {
        "seq": 110,
        "branchId": 5,
        "code": "อท.4010",
        "road": "แยกทางหลวงหมายเลข 3064( กม.ที่ 20+000 ) - บ้านหงษ์",
        "amphure": "แสวงหา,โพธิ์ทอง",
        "branch": "อ่างทอง",
        "lengthInKm": 8.459,
        "dirtRoad": "-",
        "pavedRoad": 8.459,
        "concreteRoad": "-",
        "startN": 14.7165,
        "startE": 100.3449,
        "endN": 14.739,
        "endE": 100.4114,
        "hasFinished": "true"
      },
      {
        "seq": 111,
        "branchId": 5,
        "code": "อท.4012",
        "road": "แยกทางหลวงหมายเลข 3501 (กม.ที่ 13+050) - บ้านไผ่ดำ",
        "amphure": "ป่าโมก,วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 8.693,
        "dirtRoad": "-",
        "pavedRoad": 8.693,
        "concreteRoad": "-",
        "startN": 14.4939,
        "startE": 100.4417,
        "endN": 14.5313,
        "endE": 100.3943,
        "hasFinished": "true"
      },
      {
        "seq": 112,
        "branchId": 5,
        "code": "อท.4016",
        "road": "แยกทางหลวงหมายเลข 3064 (กม.ที่ 32+200) - บ้านเพชร",
        "amphure": "แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 3.89,
        "dirtRoad": "-",
        "pavedRoad": 3.89,
        "concreteRoad": "-",
        "startN": 14.7551,
        "startE": 100.3082,
        "endN": 14.7746,
        "endE": 100.2789,
        "hasFinished": "true"
      },
      {
        "seq": 113,
        "branchId": 5,
        "code": "อท.4017",
        "road": "แยกทางหลวงหมายเลข 3064( กม.ที่ 8+100 ) - บ้านลาดจินจาน",
        "amphure": "โพธิ์ทอง,วิเศษฯ",
        "branch": "อ่างทอง",
        "lengthInKm": 10.78,
        "dirtRoad": "-",
        "pavedRoad": 10.78,
        "concreteRoad": "-",
        "startN": 14.6386,
        "startE": 100.4103,
        "endN": 14.5535,
        "endE": 100.388,
        "hasFinished": "true"
      },
      {
        "seq": 114,
        "branchId": 5,
        "code": "อท.4018",
        "road": "แยกทางหลวงหมายเลข 3372 (กม.ที่ 17+100) - บ้านสาวร้องไห้",
        "amphure": "วิเศษชัยชาญ,สามโก้",
        "branch": "อ่างทอง",
        "lengthInKm": 14.056,
        "dirtRoad": "-",
        "pavedRoad": 14.056,
        "concreteRoad": "-",
        "startN": 14.5865,
        "startE": 100.2677,
        "endN": 14.5342,
        "endE": 100.2331,
        "hasFinished": "true"
      },
      {
        "seq": 115,
        "branchId": 5,
        "code": "อท.4020",
        "road": "แยกทางหลวงหมายเลข 3064 (กม.ที่ 8+180) - บ้านไผ่ดำ",
        "amphure": "โพธิ์ทอง,วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 12.79,
        "dirtRoad": "-",
        "pavedRoad": 12.79,
        "concreteRoad": "-",
        "startN": 14.6389,
        "startE": 100.4103,
        "endN": 14.5427,
        "endE": 100.3965,
        "hasFinished": "true"
      },
      {
        "seq": 116,
        "branchId": 5,
        "code": "อท.5021",
        "road": "แยกทางหลวงชนบท อท.4024 (กม.ที่ 5+700) - บ้านอบทม",
        "amphure": "วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 8.785,
        "dirtRoad": "-",
        "pavedRoad": 4.985,
        "concreteRoad": 3.8,
        "startN": 14.6329,
        "startE": 100.3074,
        "endN": 14.5703,
        "endE": 100.2924,
        "hasFinished": "true"
      },
      {
        "seq": 117,
        "branchId": 5,
        "code": "อท.4022",
        "road": "แยกทางหลวงหมายเลข 3372(กม.ที่ 11+600) - บ้านสามหน่อ",
        "amphure": "วิเศษฯ",
        "branch": "อ่างทอง",
        "lengthInKm": 9.995,
        "dirtRoad": "-",
        "pavedRoad": 9.995,
        "concreteRoad": "-",
        "startN": 14.5485,
        "startE": 100.2644,
        "endN": 14.4735,
        "endE": 100.2362,
        "hasFinished": "true"
      },
      {
        "seq": 118,
        "branchId": 5,
        "code": "อท.4024",
        "road": "แยกทางหลวงหมายเลข 3454 (กม.ที่ 38+550) - บ้านสีบัวทอง (ช่วงที่ 1)",
        "amphure": "วิเศษชัยชาญ,โพธิ์ทอง,แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 7.534,
        "dirtRoad": "-",
        "pavedRoad": 7.534,
        "concreteRoad": "-",
        "startN": 14.6109,
        "startE": 100.3502,
        "endN": 14.641,
        "endE": 100.2931,
        "hasFinished": "true"
      },
      {
        "seq": 119,
        "branchId": 5,
        "code": "อท.4024",
        "road": "แยกทางหลวงหมายเลข 3454 (กม.ที่ 38+550) - บ้านสีบัวทอง (ช่วงที่ 2)",
        "amphure": "วิเศษชัยชาญ,โพธิ์ทอง,แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 28.55,
        "dirtRoad": "-",
        "pavedRoad": 28.55,
        "concreteRoad": "-",
        "startN": 14.683,
        "startE": 100.2566,
        "endN": 14.7867,
        "endE": 100.2305,
        "hasFinished": "true"
      },
      {
        "seq": 120,
        "branchId": 5,
        "code": "อท.4026",
        "road": "แยกทางหลวงหมายเลข 3509 (กม.ที่ 6+730) - บ้านทองเลื่อน",
        "amphure": "แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 8.365,
        "dirtRoad": "-",
        "pavedRoad": 6.815,
        "concreteRoad": 1.55,
        "startN": 14.7546,
        "startE": 100.3274,
        "endN": 14.7892,
        "endE": 100.2801,
        "hasFinished": "true"
      },
      {
        "seq": 121,
        "branchId": 5,
        "code": "อท.3027",
        "road": "แยกทางหลวงหมายเลข334(กม.ที่4+800)-อินทประมูล",
        "amphure": "เมือง,โพธิ์ทอง",
        "branch": "อ่างทอง",
        "lengthInKm": 8.476,
        "dirtRoad": "-",
        "pavedRoad": 6.976,
        "concreteRoad": 1.5,
        "startN": 14.5933,
        "startE": 100.4484,
        "endN": 14.6484,
        "endE": 100.4159,
        "hasFinished": "true"
      },
      {
        "seq": 122,
        "branchId": 5,
        "code": "อท.5029",
        "road": "แยกทางหลวงชนบท อท. 4032(กม.ที่9+000)-บ้านคลองชะอม",
        "amphure": "โพธิ์ทอง,แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 12.348,
        "dirtRoad": "-",
        "pavedRoad": 12.348,
        "concreteRoad": "-",
        "startN": 14.6941,
        "startE": 100.3135,
        "endN": 14.6904,
        "endE": 100.2665,
        "hasFinished": "true"
      },
      {
        "seq": 123,
        "branchId": 5,
        "code": "อท.4030",
        "road": "แยกทางหลวงหมายเลข3195(กม.ที่13+100)-บ้านท่าตะโก",
        "amphure": "สามโก้,โพธิ์ทอง,แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 22.535,
        "dirtRoad": "-",
        "pavedRoad": 22.092,
        "concreteRoad": 0.443,
        "startN": 14.5694,
        "startE": 100.2373,
        "endN": 14.7239,
        "endE": 100.2692,
        "hasFinished": "true"
      },
      {
        "seq": 124,
        "branchId": 5,
        "code": "อท.3031",
        "road": "แยกทางหลวงหมายเลข334(กม.ที่1+100)-บ้านโรงช้าง",
        "amphure": "เมือง,ป่าโมก",
        "branch": "อ่างทอง",
        "lengthInKm": 14.225,
        "dirtRoad": "-",
        "pavedRoad": 14.225,
        "concreteRoad": "-",
        "startN": 14.5789,
        "startE": 100.4744,
        "endN": 14.4936,
        "endE": 100.4603,
        "hasFinished": "true"
      },
      {
        "seq": 125,
        "branchId": 5,
        "code": "อท.4032",
        "road": "แยกทางหลวงหมายเลข3064(กม.ที่12+100)-บ้านยางห้าร้อย",
        "amphure": "โพธิ์ทอง,แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 17.054,
        "dirtRoad": "-",
        "pavedRoad": 6.804,
        "concreteRoad": 10.25,
        "startN": 14.67,
        "startE": 100.4011,
        "endN": 14.7337,
        "endE": 100.2751,
        "hasFinished": "true"
      },
      {
        "seq": 126,
        "branchId": 5,
        "code": "อท.2033",
        "road": "แยกทางหลวงหมายเลข32(กม.ที่51+700)-บ้านหันสังห์",
        "amphure": "เมือง,มหาราช",
        "branch": "อ่างทอง",
        "lengthInKm": 9.71,
        "dirtRoad": "-",
        "pavedRoad": 9.71,
        "concreteRoad": "-",
        "startN": 14.5944,
        "startE": 100.4752,
        "endN": 14.5416,
        "endE": 100.5046,
        "hasFinished": "true"
      },
      {
        "seq": 127,
        "branchId": 5,
        "code": "อท.2034",
        "road": "แยกทางหลวงหมายเลข 32(กม.ที่ 52+550)-บ้านมหานาม",
        "amphure": "เมือง,ไชโย",
        "branch": "อ่างทอง",
        "lengthInKm": 14.768,
        "dirtRoad": "-",
        "pavedRoad": 14.768,
        "concreteRoad": "-",
        "startN": 14.6008,
        "startE": 100.4711,
        "endN": 14.7188,
        "endE": 100.4434,
        "hasFinished": "true"
      },
      {
        "seq": 128,
        "branchId": 5,
        "code": "อท.5035",
        "road": "แยกทางหลวงชนบท  อท. 4024(กมที่ 33+689)-บ้านรางตะแบก",
        "amphure": "โพธิ์ทอง,แสวงหา",
        "branch": "อ่างทอง",
        "lengthInKm": 10.945,
        "dirtRoad": "-",
        "pavedRoad": 6.162,
        "concreteRoad": 4.783,
        "startN": 14.7753,
        "startE": 100.237,
        "endN": 14.6823,
        "endE": 100.2246,
        "hasFinished": "true"
      },
      {
        "seq": 129,
        "branchId": 5,
        "code": "อท.2038",
        "road": "แยกทางหลวงหมายเลข 32(กม.ที่ 62+600)-บ้านหลักฟ้า",
        "amphure": "ไชโย",
        "branch": "อ่างทอง",
        "lengthInKm": 10,
        "dirtRoad": "-",
        "pavedRoad": 10,
        "concreteRoad": "-",
        "startN": 14.6758,
        "startE": 100.4695,
        "endN": 14.6889,
        "endE": 100.4616,
        "hasFinished": "true"
      },
      {
        "seq": 130,
        "branchId": 5,
        "code": "อท.4039",
        "road": "แยกทางหลวงหมายเลข 3454(กม.ที่ 27+150)-บ้านห้วยโรง",
        "amphure": "วิเศษชัยชาญ",
        "branch": "อ่างทอง",
        "lengthInKm": 15.03,
        "dirtRoad": "-",
        "pavedRoad": 15.03,
        "concreteRoad": "-",
        "startN": 14.5149,
        "startE": 100.3656,
        "endN": 14.5613,
        "endE": 100.2607,
        "hasFinished": "true"
      },
      {
        "seq": 131,
        "branchId": 5,
        "code": "อท.2040",
        "road": "แยกทางหลวงหมายเลข 32(กม.ที่ 49+000)-บ้านโพสะ",
        "amphure": "เมือง",
        "branch": "อ่างทอง",
        "lengthInKm": 3.757,
        "dirtRoad": "-",
        "pavedRoad": 3.757,
        "concreteRoad": "-",
        "startN": 14.5739,
        "startE": 100.4888,
        "endN": 14.5655,
        "endE": 100.4695,
        "hasFinished": "true"
      },
      {
        "seq": 132,
        "branchId": 5,
        "code": "อท.4041",
        "road": "แยกทางหลวงหมายเลข 3064 (กม.ที่ 7+250 ) - แขวงบำรุงทางหลวงชนบทอ่างทอง",
        "amphure": "โพธิ์ทอง",
        "branch": "อ่างทอง",
        "lengthInKm": 1.025,
        "dirtRoad": "-",
        "pavedRoad": 1.025,
        "concreteRoad": "-",
        "startN": 14.6315,
        "startE": 100.4127,
        "endN": 14.6311,
        "endE": 100.4089,
        "hasFinished": "true"
      },
      {
        "seq": 133,
        "branchId": 5,
        "code": "อท.5042",
        "road": "แยกทางหลวงชนบท อท.2040 (กม.ที่ 1+300 ) -บ้านหนองเจ็ดเส้น",
        "amphure": "เมือง",
        "branch": "อ่างทอง",
        "lengthInKm": 4.065,
        "dirtRoad": "-",
        "pavedRoad": 4.065,
        "concreteRoad": "-",
        "startN": 14.5673,
        "startE": 100.4783,
        "endN": 14.5318,
        "endE": 100.4914,
        "hasFinished": "true"
      },
      {
        "seq": 134,
        "branchId": 6,
        "code": "อย.4001",
        "road": "แยกทางหลวงหมายเลข3263 (กม.ที่15+353)- บ้านคู้สลอด",
        "amphure": "เสนา",
        "branch": "บทช.เสนา",
        "lengthInKm": 12.74,
        "dirtRoad": "-",
        "pavedRoad": 12.74,
        "concreteRoad": "-",
        "startN": 14.317,
        "startE": 100.4115,
        "endN": 14.2159,
        "endE": 100.4105,
        "hasFinished": "true"
      },
      {
        "seq": 135,
        "branchId": 6,
        "code": "อย.4004",
        "road": "แยกทางหลวงหมายเลข 3263 (กม.ที่ 27+895) - บ้านเทพมงคล",
        "amphure": "บางซ้าย",
        "branch": "บทช.เสนา",
        "lengthInKm": 11.09,
        "dirtRoad": "-",
        "pavedRoad": 11.09,
        "concreteRoad": "-",
        "startN": 14.3228,
        "startE": 100.2992,
        "endN": 14.2471,
        "endE": 100.2644,
        "hasFinished": "true"
      },
      {
        "seq": 136,
        "branchId": 6,
        "code": "อย.3006",
        "road": "แยกทางหลวงหมายเลข 340 (กม.ที่ 55+900) - บ้านไม้ตรา",
        "amphure": "ลาดบัวหลวง",
        "branch": "บทช.เสนา",
        "lengthInKm": 21.535,
        "dirtRoad": "-",
        "pavedRoad": 21.335,
        "concreteRoad": 0.2,
        "startN": 14.1734,
        "startE": 100.2916,
        "endN": 14.1562,
        "endE": 100.4878,
        "hasFinished": "true"
      },
      {
        "seq": 137,
        "branchId": 6,
        "code": "อย.4009",
        "road": "แยกทางหลวงหมายเลข 3111 (กม.ที่ 19+200) - บ้านปากคูตาฉัตร",
        "amphure": "บางไทร,ลาดบัวหลวง",
        "branch": "บทช.เสนา",
        "lengthInKm": 13.11,
        "dirtRoad": "-",
        "pavedRoad": 13.11,
        "concreteRoad": "-",
        "startN": 14.2318,
        "startE": 100.4606,
        "endN": 14.1561,
        "endE": 100.4088,
        "hasFinished": "true"
      },
      {
        "seq": 138,
        "branchId": 6,
        "code": "อย.3011",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 21+700) - บ้านโคก",
        "amphure": "บางไทร",
        "branch": "บทช.เสนา",
        "lengthInKm": 19.91,
        "dirtRoad": "-",
        "pavedRoad": 19.91,
        "concreteRoad": "-",
        "startN": 14.1974,
        "startE": 100.5508,
        "endN": 14.3257,
        "endE": 100.4721,
        "hasFinished": "true"
      },
      {
        "seq": 139,
        "branchId": 6,
        "code": "อย.4014",
        "road": "แยกทางหลวงหมายเลข 3263 (กม.ที่ 11+250) - บ้านเกาะ",
        "amphure": "บางไทร",
        "branch": "บทช.เสนา",
        "lengthInKm": 15.2,
        "dirtRoad": "-",
        "pavedRoad": 15.2,
        "concreteRoad": "-",
        "startN": 14.3242,
        "startE": 100.4475,
        "endN": 14.2239,
        "endE": 100.4854,
        "hasFinished": "true"
      },
      {
        "seq": 140,
        "branchId": 6,
        "code": "อย.4016",
        "road": "แยกทางหลวงหมายเลข 3263 (กม.ที่ 10+525) - บ้านป้อม",
        "amphure": "บางบาล",
        "branch": "บทช.เสนา",
        "lengthInKm": 11.24,
        "dirtRoad": "-",
        "pavedRoad": 11.24,
        "concreteRoad": "-",
        "startN": 14.3239,
        "startE": 100.4543,
        "endN": 14.3669,
        "endE": 100.5246,
        "hasFinished": "true"
      },
      {
        "seq": 141,
        "branchId": 6,
        "code": "อย.3020",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 21+700) - บ้านพลับ",
        "amphure": "บางปะอิน",
        "branch": "บทช.เสนา",
        "lengthInKm": 4.28,
        "dirtRoad": "-",
        "pavedRoad": 4.28,
        "concreteRoad": "-",
        "startN": 14.1977,
        "startE": 100.5515,
        "endN": 14.2282,
        "endE": 100.5701,
        "hasFinished": "true"
      },
      {
        "seq": 142,
        "branchId": 6,
        "code": "อย.5025",
        "road": "แยกทางหลวงชนบท อย 4044 (กม.ที่ 4+900) - บ้านบางปลาม้า",
        "amphure": "เสนา,บางซ้าย",
        "branch": "บทช.เสนา",
        "lengthInKm": 18.26,
        "dirtRoad": 0.81,
        "pavedRoad": 17.45,
        "concreteRoad": "-",
        "startN": 14.3332,
        "startE": 100.3885,
        "endN": 14.3398,
        "endE": 100.2454,
        "hasFinished": "true"
      },
      {
        "seq": 143,
        "branchId": 6,
        "code": "อย.3029",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 30+620) - บ้านกลึง",
        "amphure": "บางปะอิน,บางไทร",
        "branch": "บทช.เสนา",
        "lengthInKm": 7.13,
        "dirtRoad": "-",
        "pavedRoad": 7.13,
        "concreteRoad": "-",
        "startN": 14.2768,
        "startE": 100.5291,
        "endN": 14.2955,
        "endE": 100.4903,
        "hasFinished": "true"
      },
      {
        "seq": 144,
        "branchId": 6,
        "code": "อย.3030",
        "road": "แยกทางหลวงหมายเลข 347 (กม.ที่ 28+724) - บ้านช้างน้อย",
        "amphure": "บางปะอิน,บางไทร",
        "branch": "บทช.เสนา",
        "lengthInKm": 5.975,
        "dirtRoad": "-",
        "pavedRoad": 5.975,
        "concreteRoad": "-",
        "startN": 14.2605,
        "startE": 100.5342,
        "endN": 14.2473,
        "endE": 100.4862,
        "hasFinished": "true"
      },
      {
        "seq": 145,
        "branchId": 6,
        "code": "อย.4031",
        "road": "แยกทางหลวงหมายเลข 3412 (กม.ที่ 17+150) - บ้านแค",
        "amphure": "บางบาล,เสนา,ผักไห่",
        "branch": "บทช.เสนา",
        "lengthInKm": 26.901,
        "dirtRoad": "-",
        "pavedRoad": 26.901,
        "concreteRoad": "-",
        "startN": 14.3829,
        "startE": 100.4305,
        "endN": 14.4901,
        "endE": 100.4411,
        "hasFinished": "true"
      },
      {
        "seq": 146,
        "branchId": 6,
        "code": "อย.5034",
        "road": "แยกทางหลวงชนบท อย.3006 (กม.ที่ 0+900) - บ้านดอนทอง",
        "amphure": "ลาดบัวหลวง,เสนา",
        "branch": "บทช.เสนา",
        "lengthInKm": 7.635,
        "dirtRoad": "-",
        "pavedRoad": 7,
        "concreteRoad": 0.635,
        "startN": 14.1715,
        "startE": 100.2987,
        "endN": 14.239,
        "endE": 100.2983,
        "hasFinished": "true"
      },
      {
        "seq": 147,
        "branchId": 6,
        "code": "อย.4036",
        "road": "แยกทางหลวงหมายเลข 3412 (กม.ที่ 2+900) - บ้านบางบาล",
        "amphure": "พระนครศรีอยุธยา,บางบาล",
        "branch": "บทช.เสนา",
        "lengthInKm": 14.9,
        "dirtRoad": "-",
        "pavedRoad": 14.9,
        "concreteRoad": "-",
        "startN": 14.3669,
        "startE": 100.5246,
        "endN": 14.3747,
        "endE": 100.4849,
        "hasFinished": "true"
      },
      {
        "seq": 148,
        "branchId": 6,
        "code": "อย.4038",
        "road": "แยกทางหลวงหมายเลข 3412 (กม.ที่ 16+500) - บ้านสวนถั่ว",
        "amphure": "บางบาล,เสนา",
        "branch": "บทช.เสนา",
        "lengthInKm": 13.37,
        "dirtRoad": "-",
        "pavedRoad": 13.37,
        "concreteRoad": "-",
        "startN": 14.4142,
        "startE": 100.4428,
        "endN": 14.33,
        "endE": 100.4339,
        "hasFinished": "true"
      },
      {
        "seq": 149,
        "branchId": 6,
        "code": "อย.4044",
        "road": "แยกทางหลวงหมายเลข 3454 (กม.ที่ 7+500) - บ้านเจ้าเจ็ด",
        "amphure": "เสนา",
        "branch": "บทช.เสนา",
        "lengthInKm": 6.39,
        "dirtRoad": "-",
        "pavedRoad": 6.39,
        "concreteRoad": "-",
        "startN": 14.3662,
        "startE": 100.411,
        "endN": 14.322,
        "endE": 100.392,
        "hasFinished": "true"
      },
      {
        "seq": 150,
        "branchId": 6,
        "code": "อย.4047",
        "road": "แยกทางหลวงหมายเลข 3412 (กม.ที่ 9+800) - บ้านบางหัก",
        "amphure": "บางบาล",
        "branch": "บทช.เสนา",
        "lengthInKm": 15.59,
        "dirtRoad": "-",
        "pavedRoad": 15.59,
        "concreteRoad": "-",
        "startN": 14.3671,
        "startE": 100.4805,
        "endN": 14.4142,
        "endE": 100.4428,
        "hasFinished": "true"
      },
      {
        "seq": 151,
        "branchId": 6,
        "code": "อย.3049",
        "road": "แยกทางหลวงหมายเลข 340 (กม.ที่ 55+900) - บ้านบางตาเถร",
        "amphure": "ลาดบัวหลวง",
        "branch": "บทช.เสนา",
        "lengthInKm": 8.53,
        "dirtRoad": "-",
        "pavedRoad": 8.53,
        "concreteRoad": "-",
        "startN": 14.1734,
        "startE": 100.2916,
        "endN": 14.1812,
        "endE": 100.2137,
        "hasFinished": "true"
      },
      {
        "seq": 152,
        "branchId": 6,
        "code": "อย.2050",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 19+750) - บ้านผักไห่",
        "amphure": "ผักไห่",
        "branch": "บทช.เสนา",
        "lengthInKm": 6.5,
        "dirtRoad": "-",
        "pavedRoad": 6.5,
        "concreteRoad": "-",
        "startN": 14.4681,
        "startE": 100.3115,
        "endN": 14.4653,
        "endE": 100.3658,
        "hasFinished": "true"
      },
      {
        "seq": 153,
        "branchId": 6,
        "code": "อย.2051",
        "road": "แยกทางหลวงหมายเลข 33 (กม.ที่ 19+400) - บ้านดอนลาน",
        "amphure": "ผักไห่",
        "branch": "บทช.เสนา",
        "lengthInKm": 5.52,
        "dirtRoad": "-",
        "pavedRoad": 5.52,
        "concreteRoad": "-",
        "startN": 14.4657,
        "startE": 100.3076,
        "endN": 14.4436,
        "endE": 100.2717,
        "hasFinished": "true"
      }
    ];
  }

}
