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
        "name": "1. ประเด็นทั่วไป",
        "items": [
          {
            "id": 1,
            "checkable": "true",
            "name": "พื้นที่ก่อสร้างมีความสะอาดและปลอดภัย ใช่หรือไม่"
          },
          {
            "id": 1,
            "checkable": "true",
            "name": "พื้นที่ทำงานก่อสร้างมีความมั่นคงแข็งแรงสามารถรองรับน้ำหนักเครื่องจักรและอุปกรณ์ได้อย่างปลอดภัย ใช่หรือไม่"
          },
          {
            "id": 2,
            "checkable": "true",
            "name": "มีผู้ควบคุมงานในการตรวจสอบความปลอดภัยก่อนและขณะทำการก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": 3,
            "checkable": "true",
            "name": "มีการรักษาความสะอาดในบริเวณพื้นที่ก่อสร้าง โดยจัดเก็บวัสดุและอุปกรณ์ก่อสร้างให้เรียบร้อย ใช่หรือไม่"
          },
          {
            "id": 4,
            "checkable": "true",
            "name": "มีบันไดหรือทางลาดพร้อมทั้งติดตั้งราวกั้นหรือรั้วกันตกที่มั่นคงแข็งแรง ใช่หรือไม่"
          },
          {
            "id": 5,
            "checkable": "true",
            "name": "มีแสงสว่างฉุกเฉินในเขตก่อสร้างเพียงพอ เพื่อใช้ในเวลาไฟฟ้าดับ ใช่หรือไม่"
          },
          {
            "id": 6,
            "checkable": "true",
            "name": "ติดป้ายเตือนอันตรายบริเวณทางเข้า-ออกของยานพาหนะทุกแห่ง และจัดให้มีผู้ให้สัญญาณในขณะที่มียานพาหนะเข้า-ออกพื้นที่ก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": 7,
            "checkable": "true",
            "name": "ติดป้ายแสดงหมายเลขโทรศัพท์ของหน่วยงานที่เกี่ยวข้องเพื่อขอความช่วยเหลือในยามฉุกเฉิน เช่น โรงพยาบาล หน่วยงานดับเพลิง หน่วยงานบรรเทาสาธารณภัย ที่ใกล้ที่สุดไว้บริเวณเขตก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": 8,
            "checkable": "true",
            "name": "ติดตั้งป้ายเตือนและป้ายบังคับในพื้นที่ก่อสร้างโดยใช้เครื่องหมายหรือข้อความที่เข้าใจง่ายและเห็นได้ชัดเจน ใช่หรือไม่"
          },
          {
            "id": 9,
            "checkable": "true",
            "name": "มีการฝึกอบรมลูกจ้างเกี่ยวกับการทำงาน เช่น การใช้เครื่องจักร รหัสสัญญาณต่าง ๆ ที่เกี่ยวข้อง เป็นระยะ ๆ ใช่หรือไม่"
          }
        ]
      },
      {
        "id": 2,
        "name": "2. เขตก่อสร้าง",
        "items": [
          {
            "id": 1,
            "checkable": "true",
            "name": "2.1 สภาพแวดล้อมในเขตก่อสร้าง",
            "items": [
              {
                "id": 1,
                "checkable": "true",
                "name": "มีการกำหนดพื้นที่ก่อสร้างหรือกั้นเขต ด้วยวัสดุที่เหมาะสมตามลักษณะงาน ใช่หรือไม่"
              },
              {
                "id": 1,
                "checkable": "true",
                "name": "มีการจัดทำป้าย “เขตก่อสร้าง” แสดงให้เห็นได้ชัดเจน ใช่หรือไม่"
              },
              {
                "id": 2,
                "checkable": "true",
                "name": "มีการกำหนดทางเข้า-ออกและทำทางเดินเข้า-ออกที่พักอาศัยโดยมิให้ผ่านเขตอันตราย ใช่หรือไม่"
              },
              {
                "id": 3,
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างในเขตก่อสร้างเพียงพอต่อการทำงาน หรือการเดินทางของคนงานในเหตุฉุกเฉิน ใช่หรือไม่"
              },
              {
                "id": 4,
                "checkable": "true",
                "name": "ในเวลากลางคืนมีสัญญาณไฟเตือนสีส้มตลอดเวลา ใช่หรือไม่"
              }
            ]
          },
          {
            "id": 2,
            "checkable": "true",
            "name": "2.2 การดูแลเขตก่อสร้าง",
            "items": [
              {
                "id": 1,
                "checkable": "true",
                "name": "มีพื้นที่ที่ใช้เก็บวัสดุก่อสร้างอย่างเพียงพอ เป็นระเบียบ และไม่ก่อให้เกิดอันตราย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": 3,
            "checkable": "true",
            "name": "2.3 การรักษาพยาบาลเบื้องต้น",
            "items": [
              {
                "id": 1,
                "checkable": "true",
                "name": "มีอุปกรณ์ปฐมพยาบาลพร้อมสำหรับการใช้งาน ในเขตก่อสร้างสำหรับคนงานทุกคน ใช่หรือไม่"
              },
              {
                "id": 2,
                "checkable": "true",
                "name": "มีคนงานที่ได้รับการอบรมความรู้เกี่ยวกับการปฐมพยาบาล เพียงพอกับจำนวนคนงาน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": 4,
            "checkable": "true",
            "name": "2.4 การรักษาความปลอดภัยในเขตก่อสร้าง",
            "items": [
              {
                "id": 1,
                "checkable": "true",
                "name": "เมื่อเขตก่อสร้างอยู่ในสถานที่ เช่น เขตโรงเรียน หรือสถานที่อื่นที่มีลักษณะคล้ายกัน ได้มีการวางแผนเพื่อป้องกันไม่ให้เด็กนักเรียนหรือผู้ไม่มีส่วนเกี่ยวข้องเข้ามาในเขตก่อสร้างร่วมกัน ใช่หรือไม่"
              }
            ]
          }
        ]
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
