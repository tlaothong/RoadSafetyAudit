import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CheckListsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckListsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CheckListsProvider Provider');
  }

  public getCheckList(listCode: string) {
    return [
      {
        "id": 1,
        "name": "1. ประเด็นทั่วไป"
      },
      {
        "id": 2,
        "name": "2. เขตก่อสร้าง"
      },
      {
        "id": 3,
        "name": "3. งานไฟฟ้าและการป้องกันอัคคีภัย"
      },
      {
        "id": 4,
        "name": "4. งานเจาะและงานขุด"
      },
      {
        "id": 5,
        "name": "5. งานก่อสร้างที่มีเสาเข็ม"
      },
      {
        "id": 6,
        "name": "6. การใช้ค้ำยัน"
      },
      {
        "id": 7,
        "name": "7. เครื่องจักรและปั้นจั่น"
      },
      {
        "id": 8,
        "name": "8. การใช้นั่งร้าน บันได ขาหยั่ง และม้ายืน"
      },
      {
        "id": 9,
        "name": "9. เชือก ลวดสลิง และรอก"
      },
      {
        "id": 10,
        "name": "10. การป้องกันการตกจากที่สูง"
      },
      {
        "id": 11,
        "name": "11. ทางเดินชั่วคราวยกระดับสูง"
      },
      {
        "id": 12,
        "name": "12. งานอุโมงค์"
      },
      {
        "id": 13,
        "name": "13. ชิ้นส่วนแผ่นคอนกรีตในงานก่อสร้าง"
      },
      {
        "id": 14,
        "name": "14. การรื้อถอน ทำลาย"
      },
      {
        "id": 15,
        "name": "15. การจัดการจราจรในบริเวณพื้นที่ก่อสร้าง"
      },
      {
        "id": 16,
        "name": "16. งานคุ้มครองความปลอดภัยส่วนบุคคล"
      }
    ];
  }

}
