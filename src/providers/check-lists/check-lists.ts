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

  public listCheckLists(stage: number) {
    return [
      { id: "11", stage: 1, name: "ทางตรง" },
      { id: "12", stage: 1, name: "ทางโค้ง" },
      { id: "13", stage: 1, name: "ทางแยก" },
      { id: "14", stage: 1, name: "ทางชุมชน" },
      { id: "21", stage: 2, name: "ระหว่างก่อสร้าง" },
      { id: "31", stage: 3, name: "ทางตรง" },
      { id: "32", stage: 3, name: "ทางโค้ง" },
      { id: "33", stage: 3, name: "ทางแยก" },
      { id: "34", stage: 3, name: "ทางชุมชน" },
    ].filter(it => it.stage == stage);
  }

  public getCheckList(listCode: string) {
    switch (listCode) {
      case "11":
        return {
          code: "11",
          items: this.getCheckList11()
        }
      
      case "12":
        return {
          code: "12",
          items: this.getCheckList12()
        }
      
      case "13":
          return {
            code: "13",
            items: this.getCheckList13()
          }
      
      case "14":
          return {
            code: "14",
            items: this.getCheckList14()
          }
          
      case "21":
          return {
            code: "21",
            items: this.getCheckList21()
          }
          
      case "31":
          return {
            code: "31",
            items: this.getCheckList31()
          }
          
      case "32":
          return {
            code: "32",
            items: this.getCheckList32()
          }
          
      case "33":
          return {
            code: "33",
            items: this.getCheckList33()
          }
          
      case "34":
          return {
            code: "34",
            items: this.getCheckList34()
          }
          
      default:
        return {
          code: "21",
          items: this.getCheckList21()
        }
    }
  }

  private getCheckList11() {
    let idCount = 1;

    return [
      {
        "id": "11"+ this.convertIdNumToString(idCount++),
        "name": "1.	ประเด็นการออกแบบทั่วไป",
        "showSubItems": true,
        "items": [
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 มาตรฐานในการออกแบบ",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนสอดคล้องกับการใช้งานของถนน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนทางตรงมีความปลอดภัยต่อผู้ใช้รถใช้ถนนทุกประเภท ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนทางตรง คำนึงถึงสัดส่วนยานพาหนะที่จะเกิดขึ้นบนถนน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการใช้ยานพาหนะออกแบบ (Design Vehicle) เหมาะสมในการออกแบบ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ลักษณะเรขาคณิตของแนวทางราบและแนวทางดิ่ง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบทางราบกับแบบทางดิ่งผสมผสานกันถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางดิ่งมีความคงเส้นคงวาตลอดเส้นทาง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางราบตลอดเส้นทาง มีความคงเส้นคงวา ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบถนน ไม่ทำให้ผู้ขับขี่เกิดความเข้าใจผิดในแนวเส้นทาง เช่น ภาพลวงตา แนวเสาไฟที่ไม่เอื้อต่อการนำทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 รูปตัดทั่วไป",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างช่องจราจร ไหล่ทาง และส่วนอื่นของรูปตัดขวางเหมาะสมกับลักษณะการใช้งานของถนน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างช่องจราจรและผิวจราจร เหมาะสมกับแนวเส้นทาง ปริมาณจราจร ขนาดและความเร็วยานพาหนะ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดผิวของไหล่ทางปลอดภัยสำหรับให้รถวิ่ง ใช่หรือไม่่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดคันทางเหมาะสมกับรถและรถบรรทุกขนาดใหญ่ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดคันทางเหมาะสมกับรถที่จอดหรือเสียหลัก ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์อำนวยความสะดวกสำหรับคนเดินเท้าและคนขี่จักรยานเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 การเปลี่ยนแปลงรูปตัด",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบได้หลีกเลี่ยงการเปลี่ยนแปลงรูปตัดถนนที่ไม่พึงประสงค์ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบลาดผิวทางบริเวณที่เชื่อมต่อถนนที่มีอยู่กับทาง   เข้า-ออก หรือทางเชื่อมเข้าสู่สะพาน มีความปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 การวางผังทางจราจร",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการออกแบบลักษณะการจัดการจราจรเพื่อหลีกเลี่ยงการทำให้เกิดสภาพที่เป็นอันตราย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผังตำแหน่งของเครื่องหมายจราจรและวัสดุสะท้อนแสง    เพียงพอสำหรับการเปลี่ยนแปลงของแนวเส้นทาง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดให้มีพื้นที่การแซงรถอย่างเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีช่องจราจรสำหรับการแซงบริเวณที่จำเป็นและมีจุดเริ่มต้นและสิ้นสุดที่ปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนไม่ก่อให้เกิดปัญหาจากแนวพระอาทิตย์ขึ้น-ลง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.6 ไหล่ทางและขอบทาง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางมีความปลอดภัยสำหรับรถจักรยาน รถจักรยานยนต์ หรือยานพาหนะอื่นที่แล่นช้า ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ชนิดของไหล่ทาง (แบบที่มีการลาดผิวและไม่ลาดผิว) ความกว้างและการทำคันทาง และความลาดผิวของไหล่ทาง บริเวณทางโค้ง มีความเหมาะสมปลอดภัย ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.7 การมองเห็นและระยะมองเห็น",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางราบและแนวทางดิ่งสอดคล้องกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วที่ใช้ในการออกแบบเหมาะสมกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              },
            ]
          }
        ]
      },
      {
        "id": "11"+ this.convertIdNumToString(idCount++),
        "name": "2.	รายละเอียดแนวเส้นทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 การมองเห็นและระยะมองเห็น",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางราบและแนวทางดิ่งสอดคล้องกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างปราศจากการบดบังแนวการมองเห็นจากอุปสรรคต่างๆ เช่น กำแพงรั้ว อุปกรณ์ประกอบถนน สิ่งอำนวยความสะดวกในการจอดรถ ป้ายจราจร สภาพภูมิทัศน์ คอสะพาน ยานพาหนะจอดข้างทาง และยานพาหนะที่หยุดในแถวคอย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างปราศจากอุปกรณ์ในพื้นที่ซึ่งอาจบดบังการมองเห็น ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างปราศจากอุปสรรคที่อยู่เหนือศีรษะ เช่น ถนนหรือทางรถไฟยกระดับ โครงเหล็กป้ายจราจร กิ่งไม้ ซึ่งอาจจำกัดระยะมองเห็นในทางโค้งตั้ง-หงาย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างมีระยะการมองเห็นเพียงพอที่ตำแหน่งทางคนข้าม จักรยานข้าม ทางเชื่อม ทางเข้า-ออก ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 จุดต่อระหว่างถนนออกแบบใหม่กับถนนที่มีอยู่",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณจุดต่อหรือช่วงเปลี่ยนระหว่างถนนเก่ากับถนนออกแบบใหม่ปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการอำนวยความปลอดภัยบริเวณที่จำเป็นต้องมีการเปลี่ยนความเร็วกะทันหัน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเข้า-ออกหรือความขัดแย้งจากสองข้างทางได้รับการจัดการอย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จุดต่อระหว่างถนนออกแบบใหม่กับถนนที่มีอยู่เดิม อยู่ห่างจากจุดอันตราย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ถ้าถนนออกแบบใหม่กับถนนที่มีอยู่เดิมมีมาตรฐานผิวทางที่แตกต่างกัน จุดต่อมีลักษณะการเปลี่ยนแปลงที่ปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณที่มีการเปลี่ยนแปลงสภาพแวดล้อมของถนน เช่น จากถนนในเขตเมืองสู่เขตชนบท บริเวณที่มีการจำกัดพื้นที่สู่บริเวณที่ไม่มีการจำกัด บริเวณที่สว่างสู่บริเวณที่มืด มีการออกแบบไว้อย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการพิจารณาถึงความจำเป็นในการติดตั้งอุปกรณ์เตือนทางข้างหน้า ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 ความเข้าใจในแนวเส้นทางคนขับ",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "คนขับสามารถรับรู้ถึงแบบผังของเส้นทาง ลักษณะเส้นทาง และหน้าที่ของเส้นทางที่สัญจร ในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วที่วิ่งเข้าสู่พื้นที่โครงการเหมาะสม และผู้ขับขี่สามารถนำรถวิ่งผ่านโครงการได้อย่างถูกต้อง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.4 สะพานและท่อลอด",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การเปลี่ยนรูปตัดถนนไปสู่รูปตัดบนสะพาน ได้รับการออกแบบให้ปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "11"+ this.convertIdNumToString(idCount++),
        "name": "3.	ผู้ใช้ถนนอื่น ๆ",
        "showSubItems": true,
        "items": [
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ผู้อยู่อาศัยในพื้นที่ข้างเคียง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเข้า-ออกพื้นที่ข้างเคียงปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างได้พิจารณาถึงความต้องการพิเศษของรถที่ใช้เพื่อการเกษตรและปศุสัตว์ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 คนขับขี่รถจักรยานยนต์",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการหลีกเลี่ยงการวางอุปกรณ์หรือวัตถุบนผิวจราจรที่อาจทำให้รถจักรยานยนต์เสียหลัก ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์เครื่องหมายเตือนและนำทางสำหรับผู้ขับขี่รถจักรยานยนต์เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณที่รถจักรยานยนต์มีโอกาสจะวิ่งหลุดออกนอกถนน สภาพข้างทางมีสภาพไม่เป็นอันตรายหรือมีอุปกรณ์ป้องกัน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการรื้อถอนหรือป้องกันอันตรายจากเสาไฟ ป้าย และอุปกรณ์ที่ไม่จำเป็นที่อาจเป็นอันตรายต่อผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บ่อพักระบายน้ำและท่อลอดระบายน้ำสามารถให้รถจักรยานยนต์วิ่งผ่านได้ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.3 ยานพาหนะเครื่องจักรซ่อมบำรุงทาง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความต้องการของยานพาหนะสำหรับซ่อมบำรุงทาง ได้รับการพิจารณาและติดตั้งอุปกรณ์ป้องกันอย่างเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ยานพาหนะซ่อมบำรุงทางสามารถหยุดในตำแหน่งที่ปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "11"+ this.convertIdNumToString(idCount++),
        "name": "4.	ไฟฟ้าส่องสว่าง ป้าย และอุปกรณ์นำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 ไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งไฟฟ้าส่องสว่างในที่ที่จำเป็น หรือบริเวณที่เกิดอุบัติเหตุบ่อยครั้งเนื่องจากปัญหาไฟฟ้าส่องสว่าง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างปราศจากเสาไฟที่ออกแบบติดตั้งในบริเวณที่อาจเป็นอันตรายข้างทาง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ถ้าเสาไฟอยู่ในตำแหน่งที่จะกลายเป็นอันตรายข้างทาง มีการพิจารณาติดตั้งเสาไฟแบบหักง่ายเมื่อชน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสนหรือความเข้าใจต่อป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แสงสว่างเพียงพอที่บริเวณจุดรวมกระแสจราจร ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างไม่ทำให้เกิดเป็นเงามืด ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 ป้ายจราจร",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรเหมาะสมสอดคล้องกับตำแหน่งที่ติดตั้ง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งที่ตำแหน่งที่สามารถเห็น อ่าน และเข้าใจได้ในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรที่ติดตั้งสอดคล้องกับความต้องการของผู้ขับขี่ เช่น ป้ายบอกทิศทาง ป้ายแนะนำความเร็ว ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งที่ตำแหน่งที่ผู้ขับขี่สามารถรักษาระยะมองเห็นได้ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสารองรับป้ายอยู่ภายนอกเขตปลอดภัย (Clear Zone) ใช่หรือไม่ "
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ถ้าเสารองรับป้ายอยู่ในเขตปลอดภัย (Clear Zone) เสาเหล่านั้นเป็นประเภทหักได้ง่ายเมื่อรถชนหรือได้รับการปกป้อง เช่น รั้วกั้น อุปกรณ์กันอันตราย ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายในถนนโครงการใหม่สอดคล้องกับป้ายในช่วงถนนตอนที่ติดกัน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.3 เครื่องหมายจราจรและเครื่องหมายนำทาง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจร เช่น เส้น ลูกศร ฯลฯ สอดคล้องกับเครื่องหมายตามมาตรฐาน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นห้ามแซงอยู่ในช่วงถนนที่ต้องการห้ามแซง ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มสะท้อนแสง แสดงอยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรในโครงการใหม่สอดคล้องกับเครื่องหมายจราจรในช่วงถนนตอนที่ติดกัน ใช่หรือไม่ "
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรและเครื่องหมายนำทางจะสามารถมองเห็นได้ในเวลากลางคืน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "หลักนำทางเป็นประเภทหักง่ายเมื่อถูกชน ใช่หรือไม่"
              },
            ]
          }
        ]
      },
      {
        "id": "11"+ this.convertIdNumToString(idCount++),
        "name": "5.	ลักษณะกายภาพของอุปกรณ์ในเขตทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 เสา และอุปสรรคอื่นๆ",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาที่ติดตั้งอยู่ห่างจากช่องทางวิ่งของยานพาหนะ หรือเป็นประเภทที่หักง่ายเมื่อถูกชน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างเกาะกลางเพียงพอสำหรับการติดตั้งไฟฟ้าส่องสว่าง หรือต้นไม้ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นที่ข้างทางปราศจากสิ่งกีดขวางที่จะเป็นอันตราย ใช่หรือไม่ ถ้ามีสิ่งกีดขวาง มีมาตรการที่จำเป็นเพื่อรื้อถอน ย้ายหรือปกป้องสิ่งอันตรายเหล่านั้นหรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รางหรือร่องระบายน้ำปลอดภัยเมื่อรถวิ่งออกนอกทาง ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 อุปกรณ์กันอันตราย",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กันอันตรายอยู่ในตำแหน่งที่จำเป็น เช่น คันทางดินถม โครงสร้าง ต้นไม้ เสา ร่องระบายน้ำ ตอม่อสะพาน จุดเลี้ยว และมีรายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กันอันตรายมีความปลอดภัยแก่คนเดินเท้า คนขี่จักรยาน และผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ส่วนปลายของอุปกรณ์กันอันตรายมีความปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.3 อุปกรณ์กั้นเกาะกลาง",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กั้นเกาะกลางมีรายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ส่วนปลายของอุปกรณ์กั้นเกาะกลางมีความปลอดภัย ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "11"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.4 สะพานและท่อลอด",
            "items": [
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กั้นสะพานและปลายท่อ ปลอดภัย มีระยะมองเห็นเพียงพอ เข้าใจรับรู้ได้ง่าย ห่างจากกระแสจราจร ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระดับราวสะพานสูงถูกต้องและแข็งแรงพอ ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางบนสะพานกว้างเท่ากับบนถนนที่ต่อกัน ใช่หรือไม่"
              },
              {
                "id": "11"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดเตรียมพื้นที่สำหรับการจราจรคนเดินเท้าและคนขี่จักรยาน ใช่หรือไม่"
              },
            ]
          }
        ]
      }
    ];
  }

  private getCheckList12() {
    let idCount = 1;

    return [
      {
        "id": "12"+ this.convertIdNumToString(idCount++),
        "name": "1.	ประเด็นการออกแบบทั่วไป",
        "showSubItems": true,
        "items": [
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 มาตรฐานในการออกแบบ",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนทางโค้ง คำนึงถึงความปลอดภัยของผู้ใช้รถใช้ถนนทุกประเภท ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนทางโค้ง คำนึงถึงสัดส่วนยานพาหนะที่จะเกิดขึ้นบนถนน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ได้มีการพิจารณาใช้ยานพาหนะออกแบบ (Design Vehicle) ที่เหมาะสมในการออกแบบทางโค้ง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ลักษณะเรขาคณิตของแนวทางราบและแนวทางดิ่ง",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบทางโค้งราบกับแบบทางดิ่งผสมผสานกันถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางโค้งราบตลอดเส้นทาง มีความคงเส้นคงวา ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางโค้งไม่ทำให้ผู้ขับขี่เกิดความเข้าใจผิดในแนวเส้นทาง เช่น ภาพลวงตา แนวเสาไฟที่ไม่เอื้อต่อการนำทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 รูปตัดทั่วไป",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างช่องจราจรและผิวจราจรบริเวณทางโค้ง เหมาะสมกับ ปริมาณจราจร ขนาดยานพาหนะ และความเร็วยานพาหนะ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดผิวของไหล่ทางปลอดภัยสำหรับให้รถวิ่งทางโค้ง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดคันทางและการยกโค้งเหมาะสมกับรถและรถบรรทุกขนาดใหญ่ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 การวางผังทางจราจร",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีช่องจราจรสำหรับการแซงบริเวณทางโค้งที่จำเป็นและปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ข้อจำกัดการแซงรถบริเวณทางโค้งเป็นที่น่าพอใจ ปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 ไหล่ทางและขอบทาง",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางบริเวณทางโค้งมีความปลอดภัยสำหรับคนขี่จักรยาน ผู้ขับขี่รถจักรยานยนต์ หรือผู้ขับขี่ยานพาหนะอื่นที่แล่นช้า ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ชนิดของไหล่ทาง (แบบที่มีการลาดผิวและไม่ลาดผิว) ความกว้างและการทำคันทาง และความลาดผิวของไหล่ทาง บริเวณทางโค้ง มีความเหมาะสมปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.6 การมองเห็นและระยะมองเห็น",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การมองเห็นและระยะมองเห็นของแนวโค้งราบและแนวโค้งดิ่ง สอดคล้องกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วที่ใช้ในการออกแบบทางโค้ง เหมาะสมกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "12"+ this.convertIdNumToString(idCount++),
        "name": "2.	รายละเอียดแนวเส้นทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 การมองเห็นและระยะมองเห็น",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางบริเวณทางโค้งในแบบก่อสร้างปราศจากการบดบังแนวการมองเห็นจากอุปสรรคต่างๆ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางบริเวณทางโค้งในแบบก่อสร้างปราศจากอุปกรณ์ในพื้นที่ซึ่งอาจบดบังการมองเห็น ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางบริเวณทางโค้งในแบบก่อสร้างมีระยะการมองเห็นเพียงพอที่ตำแหน่งทางคนข้าม จักรยานข้าม หรือสัตว์เดินผ่าน ทางเชื่อม ทางเข้าออก ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 ความเข้าใจในแนวเส้นทางของคนขับ",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "คนขับสามารถรับรู้ถึงแนวทางโค้ง และลักษณะเส้นทาง ในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วที่วิ่งเข้าสู่พื้นที่ทางโค้งเหมาะสม และผู้ขับขี่สามารถนำรถวิ่งผ่านทางโค้งได้ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 รายละเอียดการออกแบบเรขาคณิต",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มาตรฐานออกแบบเหมาะสมกับความต้องการของโครงการ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มาตรฐานทั่วไปและแนวทางออกแบบ เช่น ความกว้างช่องจราจร ลาดผิวทาง มีความสอดคล้องกัน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "12"+ this.convertIdNumToString(idCount++),
        "name": "3.	ผู้ใช้ถนนอื่น ๆ",
        "showSubItems": true,
        "items": [
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ผู้อยู่อาศัยในพื้นที่ข้างเคียง",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเข้า-ออกพื้นที่ข้างเคียงปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 คนขับขี่รถจักรยานยนต์",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวสองข้างทางบริเวณทางโค้ง ปราศจากอุปสรรคหรือสิ่งกีดขวางในบริเวณที่รถจักรยานยนต์อาจเอียงเข้าหาทางโค้ง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์เครื่องหมายเตือนและนำทางโค้ง สำหรับผู้ขับขี่รถจักรยานยนต์เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณที่รถจักรยานยนต์มีโอกาสจะวิ่งหลุดออกนอกถนน สภาพข้างทางมีสภาพไม่เป็นอันตรายหรือมีอุปกรณ์ป้องกัน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการรื้อถอนหรือการป้องกันอันตรายจากเสาไฟ ป้าย และอุปกรณ์ที่ไม่จำเป็น ที่อาจเป็นอันตรายต่อผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "12"+ this.convertIdNumToString(idCount++),
        "name": "4.	ไฟฟ้าส่องสว่าง ป้าย และอุปกรณ์นำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 ไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งไฟฟ้าส่องสว่างในบริเวณทางโค้งที่จำเป็น หรือบริเวณที่เกิดอุบัติเหตุบ่อยครั้งเนื่องจากปัญหาไฟฟ้าส่องสว่าง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างปราศจากเสาไฟที่ออกแบบติดตั้งในบริเวณที่อาจเป็นอันตรายข้างทาง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างไม่ทำให้เกิดเป็นเงามืด ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 ป้ายจราจร",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรเหมาะสมสอดคล้องกับตำแหน่งที่ติดตั้ง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งในตำแหน่งที่สามารถมองเห็น อ่าน และเข้าใจได้ในเวลาเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งในตำแหน่งที่ผู้ขับขี่สามารถรักษาระยะมองเห็นได้ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสารองรับป้ายอยู่ภายนอกเขตปลอดภัย (Clear Zone) ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ถ้าเสารองรับป้ายอยู่ในเขตปลอดภัย (Clear Zone) เสาเหล่านั้นเป็นประเภทหักได้ง่ายเมื่อรถชน หรือได้รับการปกป้อง เช่น รั้วกั้น อุปกรณ์กันอันตราย ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายในถนนที่ออกแบบใหม่สอดคล้องกับป้ายในถนนเดิม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.3 เครื่องหมายจราจรและเครื่องหมายนำทาง",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรบนผิวทาง สอดคล้องกับเครื่องหมายตามมาตรฐาน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นห้ามแซงอยู่ในช่วงถนนทางโค้งที่ต้องการห้ามแซง ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มสะท้อนแสง แสดงอยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายเตือนทางโค้ง บั้งนำทางโค้ง ป้ายแนะนำความเร็วทางโค้ง แสดงอยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรในถนนออกแบบใหม่สอดคล้องกับเครื่องหมายจราจรในช่วงถนนตอนที่ติดกัน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรและเครื่องหมายนำทางจะสามารถมองเห็นได้ในเวลากลางคืน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "หลักนำทางเป็นประเภทหักง่ายเมื่อถูกชน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "12"+ this.convertIdNumToString(idCount++),
        "name": "5.	ลักษณะกายภาพของอุปกรณ์ในเขตทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 เสา และอุปสรรคอื่น ๆ",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาที่ติดตั้งบริเวณทางโค้ง อยู่ห่างจากทางวิ่งของยานพาหนะ หรือเป็นประเภทที่หักง่ายเมื่อถูกชน ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นที่ข้างทางปราศจากสิ่งกีดขวางที่จะเป็นอันตราย ใช่หรือไม่ ถ้ามีสิ่งกีดขวาง มีมาตรการที่จำเป็นเพื่อรื้อถอน ย้ายหรือปกป้องสิ่งอันตรายเหล่านั้นหรือไม่"
              }
            ]
          },
          {
            "id": "12"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 อุปกรณ์กันอันตราย",
            "items": [
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กันอันตรายอยู่ในตำแหน่งบริเวณทางโค้งที่จำเป็น เช่น คันทางดินถม โครงสร้าง ต้นไม้ ร่องระบายน้ำ ตอม่อสะพาน จุดเลี้ยว และมีรายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กันอันตรายบริเวณทางโค้ง มีความปลอดภัยแก่คนเดินเท้า คนขี่จักรยาน และผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "12"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ส่วนปลายของอุปกรณ์กันอันตรายบริเวณทางโค้ง มีความปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];
  }

  private getCheckList13() {
    let idCount = 1;

    return [
      {
        "id": "13"+ this.convertIdNumToString(idCount++),
        "name": "1.	ประเด็นการออกแบบทั่วไป",
        "showSubItems": true,
        "items": [
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 มาตรฐานในการออกแบบ",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยกสอดคล้องกับลักษณะการใช้งานของถนนเชื่อมเข้าสู่ทางแยก ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยก คำนึงถึงความปลอดภัยของผู้ใช้รถใช้ถนนทุกประเภท ใช่หรือไม่ "
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยก คำนึงถึงสัดส่วนการเคลื่อนที่ในแต่ละทิศทางของการจราจร ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยก คำนึงถึงสัดส่วนยานพาหนะที่จะเกิดขึ้นบนถนน ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ได้มีการพิจารณาใช้ยานพาหนะออกแบบ (Design Vehicle) ที่เหมาะสมในการออกแบบ ใช่หรือไม่   "
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ลักษณะเรขาคณิตของแนวทางราบและแนวทางดิ่ง",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางแยกอยู่ในตำแหน่งที่ปราศจากปัญหาการผสมผสานของแบบทางราบกับแบบทางดิ่งที่ไม่ถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบทางแยก ไม่ทำให้ผู้ขับขี่เกิดความเข้าใจผิดในแนวเส้นทาง เช่น ภาพลวงตา แนวเสาไฟที่ไม่เอื้อต่อการนำทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 การเปลี่ยนแปลงของรูปตัด",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบได้หลีกเลี่ยงการเปลี่ยนแปลงรูปตัดถนนที่เชื่อมทางสายหลักและสายรองบริเวณทางแยก ที่ไม่พึงประสงค์ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 การวางผังทางจราจร",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการออกแบบลักษณะการจัดการจราจรเพื่อหลีกเลี่ยงโอกาสที่จะทำให้เกิดสภาพที่เป็นอันตราย ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผังตำแหน่งของเครื่องหมายจราจรและวัสดุสะท้อนแสง เพียงพอสำหรับการเปลี่ยนแปลงของแนวเส้นทาง ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยกไม่ก่อให้เกิดปัญหาจากแนวพระอาทิตย์ขึ้น-ลง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 การมองเห็นและระยะมองเห็น",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วบนถนนที่วิ่งเข้าสู่ทางแยก เหมาะสมกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "13"+ this.convertIdNumToString(idCount++),
        "name": "2.	ทางแยก (Intersections)",
        "showSubItems": true,
        "items": [
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 การมองเห็นทางแยกและการมองเห็นที่ทางแยก",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางราบและแนวทางดิ่งที่ทางแยกหรือทางเข้าสู่ทางแยกสอดคล้องกับความต้องการในการมองเห็น ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มาตรฐานที่ใช้สำหรับออกแบบการมองเห็นมีความเหมาะสมกับความเร็วของการจราจรและประเภทของยานพาหนะที่สัญจร ใช่หรือไม่ "
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณทางแยกในแบบก่อสร้าง ปราศจากการบดบังแนวการมองเห็นจากอุปสรรคต่างๆ เช่น ราวกันอันตราย กำแพงรั้ว อุปกรณ์ประกอบถนน สิ่งอำนวยความสะดวกในการจอดรถ ป้ายจราจร สภาพภูมิทัศน์ ใช่หรือไม่ "
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางตัดรถไฟ สะพาน และอันตรายต่างๆ เห็นได้เด่นชัด ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "**แนวการมองเห็นในพื้นที่สามเหลี่ยมเพียงพอ ใช่หรือไม่ -	จุดทางแยกบริเวณทางแยกรูปตัว Y -	บริเวณทางแยก -	ทางแยกวงเวียน"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 การวางผังของทางแยก",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบผังทางแยกและทางเข้า-ออกเพียงพอสำหรับการเคลื่อนที่ของยานพาหนะทั้งหมด ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยกได้พิจารณายานพาหนะออกแบบที่เหมาะสมในการหาขนาดของการเลี้ยว ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบทางแยกสามารถรองรับแนวการเลี้ยว (Swept Path) ของยานพาหนะทุกประเภท หรือมีการเลือกใช้ยานพาหนะออกแบบที่เหมาะสมในการออกแบบทางแยก ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดให้มีรั้วกั้นคนเดินเท้าบริเวณที่จำเป็น เช่น เพื่อนำทางคนเดินเท้า หรือกันรถมาจอด ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการทำผิวทางที่ต้านการลื่นไถลในที่ที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดการความปลอดภัยหรือจำกัดการจอดรถที่ทางแยกหรือใกล้กับทางแยกได้อย่างเหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 ความเข้าใจของผู้ขับขี่",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่เข้าสู่ทางแยกสามารถรับรู้ได้ถูกต้องและเข้าใจรูปแบบทั่วไปของทางแยกในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วเข้าสู่ทางแยกและยานพาหนะที่ตำแหน่งต่าง ๆ สามารถวิ่งผ่านทางแยกได้อย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบทางแยกปราศจากสิ่งที่จะทำให้เข้าใจผิด ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบทางแยกปราศจากปัญหาเนื่องจากพระอาทิตย์ขึ้น-ลง ซึ่งอาจเป็นอันตรายสำหรับผู้ขับขี่ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.4 รายละเอียดแบบเรขาคณิตของทางแยก",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผังของทางแยกสามารถรองรับสัดส่วนจราจรที่ไม่ปกติหรือในสถานการณ์ที่ไม่ปกติได้ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "**เกาะกลาง หรือเกาะของถนน สามารถอำนวยความปลอดภัยสำหรับ -	แนวและทางวิ่งของรถ -	ไฟสัญญาณที่จะติดตั้งในอนาคต -	พื้นที่รองรับคนเดินเท้า -	ช่องว่างของทางรถเลี้ยว -	ระยะหยุดปลอดภัยถึงหัวเกาะ -	ความสามารถในการแล่นผ่านเกาะกลางได้ในกรณีผู้ขับขี่เกิดความผิดพลาด"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะห่างเหนือศีรษะของโครงสร้าง เช่น สายไฟฟ้า กันสาดร้านค้า อยู่สูงเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.5 ไฟสัญญาณจราจร",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จังหวะและลำดับสัญญาณไฟจราจรปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เวลาสัญญาณไฟจราจรเพียงพอสำหรับการเคลื่อนตัวของจราจรและคนเดินเท้า ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟสัญญาณจราจรสามารถมองเห็นได้ เช่น ไม่ถูกบังด้วยต้นไม้ เสา ป้ายจราจร หรือรถขนาดใหญ่ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟสัญญาณจราจรสำหรับทิศทางอื่นถูกป้องกันจากการมองเห็นในทิศทางของผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ในกรณีที่เกิดปัญหาเนื่องจากพระอาทิตย์ขึ้น-ลง ได้มีการออกแบบใช้สัญญาณไฟที่มีความเข้มสูง หรือแผ่นเป้า (Target Board) ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทาง (โค้งดิ่งและโค้งราบ) มีระยะหยุดปลอดภัยเข้าสู่ทางแยกหรือท้ายแถวคอย เพียงพอใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์สำหรับคนเดินเท้า (รวมถึงจังหวะไฟสำหรับคนเดินข้าม) ได้ออกแบบไว้ในที่ที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่เข้าสู่ทางแยกสามารถมองเห็นคนเดินเท้าได้ชัดเจน ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จังหวะสัญญาณไฟสำหรับรถเลี้ยวถูกจัดให้มีที่ทางแยกที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาไฟสัญญาณติดตั้งอยู่ในตำแหน่งที่ไม่เป็นอันตราย ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรสำหรับรถเลี้ยวอยู่ในตำแหน่งที่เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จังหวะสัญญาณไฟสำหรับคนเดินมีเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.6 ทางแยกอื่น ๆ",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างได้พิจารณาความจำเป็นที่จะมีเกาะยกระดับ หรือเกาะทาสี หรือเกาะพัก ไว้แล้ว ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางแยกมีช่องรอเลี้ยวยาวเพียงพอสำหรับรถรอเลี้ยว ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "13"+ this.convertIdNumToString(idCount++),
        "name": "3.	ผู้ใช้ถนนอื่นๆ",
        "showSubItems": true,
        "items": [
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ผู้อยู่อาศัยในพื้นที่ข้างเคียง",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเข้า-ออกพื้นที่ข้างเคียงบริเวณทางแยกปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างได้พิจารณาถึงความต้องการพิเศษของรถที่ใช้เพื่อการเกษตรและปศุสัตว์บริเวณทางแยก ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 ยานพาหนะเครื่องจักรซ่อมบำรุงทาง",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความต้องการของยานพาหนะสำหรับซ่อมบำรุงทาง ได้รับการพิจารณาและติดตั้งอุปกรณ์ป้องกันอย่างเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ยานพาหนะซ่อมบำรุงทางสามารถหยุดในตำแหน่งที่ปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "13"+ this.convertIdNumToString(idCount++),
        "name": "4.	ไฟฟ้าส่องสว่าง ป้าย และอุปกรณ์นำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 ไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างในบริเวณทางแยกเพียงพอเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างทางแยกปราศจากสิ่งที่จะบดบังการส่องสว่างของแสงไฟ เช่น ต้นไม้ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างทางแยกปราศจากเสาไฟที่จะกลายเป็นอันตรายข้างทางบริเวณทางแยก ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสนหรือความเข้าใจต่อสัญญาณไฟจราจรหรือป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แสงสว่างเพียงพอที่บริเวณจุดทางแยกรูปตัว Y (Gore Area) ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แสงสว่างเพียงพอที่บริเวณจุดรวมกระแสจราจร ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างไม่ทำให้เกิดเป็นเงามืด ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 ป้ายจราจร",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรเหมาะสมสอดคล้องกับตำแหน่งที่ติดตั้ง ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งในตำแหน่งที่สามารถเห็น อ่าน และเข้าใจได้ในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งในตำแหน่งที่ผู้ขับขี่สามารถรักษาระยะมองเห็นได้ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายบริเวณทางแยกออกแบบใหม่สอดคล้องกับป้ายบริเวณทางแยกที่ติดกัน ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.3 เครื่องหมายจราจรและเครื่องหมายนำทาง",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจร เช่น เส้น ลูกศร ฯลฯ สอดคล้องกับเครื่องหมายตามมาตรฐาน ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มสะท้อนแสง แสดงอยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรในทางแยกออกแบบใหม่สอดคล้องกับเครื่องหมายจราจรในทางแยกตอนที่ติดกัน ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรบริเวณทางแยกจะสามารถมองเห็นได้ในเวลากลางคืน ใช่หรือไม่"
              },
            ]
          }
        ]
      },
      {
        "id": "13"+ this.convertIdNumToString(idCount++),
        "name": "5.	ลักษณะกายภาพของอุปกรณ์ในเขตทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 เสาและอุปกรณ์อื่น ๆ",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาที่ติดตั้งบริเวณทางแยก อยู่ห่างจากทางวิ่งของยานพาหนะ หรือเป็นประเภทที่หักง่ายเมื่อถูกชน ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างเกาะกลางเพียงพอสำหรับการติดตั้งไฟฟ้าส่องสว่าง หรือต้นไม้ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตู้ควบคุมไฟสัญญาณและอุปกรณ์สนับสนุนอื่น ๆ อยู่ในตำแหน่ง ที่น่าพอใจ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 อุปกรณ์กั้นเกาะกลาง",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กั้นเกาะกลางได้รับการพิจารณาและให้รายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างทางแยกได้พิจารณาส่วนที่ต้องให้ความสนใจเป็นพิเศษ เช่น ส่วนปลายของราวกันอันตราย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "13"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.3 อุปกรณ์กันอันตราย",
            "items": [
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีอุปกรณ์กันอันตรายในตำแหน่งที่จำเป็น เช่น คันทางดินถม โครงสร้าง ต้นไม้ เสา ร่องระบายน้ำ ตอม่อสะพาน จุดเลี้ยว และมีรายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กันอันตรายมีความปลอดภัยแก่ผู้ใช้ถนน คนเดินเท้า ผู้ใช้จักรยานและรถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "13"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ส่วนปลายของอุปกรณ์กันอันตรายมีความปลอดภัยในระดับน่าพอใจ ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];    
  }

  private getCheckList14() {
    let idCount = 1;

    return [
      {
        "id": "14"+ this.convertIdNumToString(idCount++),
        "name": "1.	ประเด็นการออกแบบทั่วไป",
        "showSubItems": true,
        "items": [
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 มาตรฐานในการออกแบบ",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนในเขตชุมชน สอดคล้องกับลักษณะการใช้งานของถนน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนในเขตชุมชน คำนึงถึงความปลอดภัยของผู้ใช้รถใช้ถนนทุกประเภท ใช่หรือไม่ "
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบถนนในเขตชุมชน คำนึงถึงสัดส่วนยานพาหนะที่จะเกิดขึ้นบนถนน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ได้มีการพิจารณาใช้ยานพาหนะออกแบบ (Design Vehicle) ที่เหมาะสมในการออกแบบ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ลักษณะเรขาคณิตของแนวทางราบและแนวทางดิ่ง",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบทางราบกับแบบทางดิ่งผสมผสานกันถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบถนน ไม่ทำให้ผู้ขับขี่เกิดความเข้าใจผิดในแนวเส้นทาง เช่น ภาพลวงตา แนวเสาไฟที่ไม่เอื้อต่อการนำทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 รูปตัดทั่วไป",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบถนนในเขตชุมชนมีอุปกรณ์อำนวยความสะดวกสำหรับคนเดินเท้าและจักรยานเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 ผลจากความแตกต่างของรูปตัด",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบได้หลีกเลี่ยงการเปลี่ยนแปลงรูปตัดถนนที่ไม่พึงประสงค์ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบลาดผิวทางมีความปลอดภัย (โดยเฉพาะช่วงถนนที่เชื่อมต่อถนนที่มีอยู่กับทางเข้า-ออก หรือทางเชื่อมเข้าสู่สะพาน) ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 การวางผังทางจราจร",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการออกแบบลักษณะการจัดการจราจรเพื่อหลีกเลี่ยงการทำให้เกิดสภาพที่เป็นอันตราย ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผังตำแหน่งของเครื่องหมายจราจรและวัสดุสะท้อนแสงเพียงพอสำหรับการเปลี่ยนแปลงของแนวเส้นทาง ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.6 ไหล่และขอบทาง",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางมีความปลอดภัยสำหรับรถจักรยาน รถจักรยานยนต์ หรือยานพาหนะอื่นที่แล่นช้า ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ชนิดของไหล่ทาง (แบบที่มีการลาดผิวและไม่ลาดผิว) ความกว้างและการทำคันทาง และความลาดผิวของไหล่ทาง บริเวณทางโค้ง มีความเหมาะสมปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "14"+ this.convertIdNumToString(idCount++),
        "name": "2.	รายละเอียดแนวเส้นทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 การมองเห็นและระยะมองเห็น",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางราบและแนวทางดิ่งสอดคล้องกับระยะมองเห็นที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างปราศจากการบดบังแนวการมองเห็นจากอุปสรรคต่างๆ เช่น กำแพงรั้ว อุปกรณ์ประกอบถนน สิ่งอำนวยความสะดวกในการจอดรถ ป้ายจราจร สภาพภูมิทัศน์ คอสะพาน ยานพาหนะจอดข้างทาง และยานพาหนะที่หยุดในแถวคอย ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างปราศจากอุปกรณ์ในพื้นที่ซึ่งอาจบดบังการมองเห็น ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเส้นทางในแบบก่อสร้างมีระยะการมองเห็นเพียงพอที่ตำแหน่งทางคนข้าม จักรยานข้าม ทางเชื่อม ทางเข้า-ออก ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "14"+ this.convertIdNumToString(idCount++),
        "name": "3.	ทางแยก",
        "showSubItems": true,
        "items": [
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 การมองเห็นทางแยกและการมองเห็นที่ทางแยก",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางราบและแนวทางดิ่งที่ทางแยกหรือทางเข้าสู่ทางแยกสอดคล้องกับความต้องการในการมองเห็น ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มาตรฐานที่ใช้สำหรับออกแบบการมองเห็นมีความเหมาะสมกับความเร็วของการจราจรและประเภทของยานพาหนะที่สัญจร ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณทางแยกในแบบก่อสร้าง ปราศจากการบดบังแนวการมองเห็นจากอุปสรรคต่าง ๆ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 การวางผังของทางแยก",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การออกแบบผังทางแยกและทางเข้า-ออกเพียงพอสำหรับการเคลื่อนที่ของยานพาหนะทั้งหมด ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดให้มีรั้วกั้นคนเดินเท้าบริเวณที่จำเป็น เช่น เพื่อนำทางคนเดินเท้า หรือป้องกันการจอดรถบริเวณทางเท้า ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการทำผิวทางที่ต้านการลื่นไถลในที่ที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดการความปลอดภัยหรือจำกัดการจอดรถที่ทางแยกหรือใกล้กับทางแยกได้อย่างเหมาะสม ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.3 ความเข้าใจของผู้ขับขี่",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่เข้าสู่ทางแยกสามารถรับรู้ได้ถูกต้องและเข้าใจรูปแบบทั่วไปของทางแยกในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วเข้าสู่ทางแยกและยานพาหนะที่ตำแหน่งต่างๆ สามารถวิ่งผ่านทางแยกได้อย่างปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "14"+ this.convertIdNumToString(idCount++),
        "name": "4.	ผู้ใช้ถนนอื่น ๆ",
        "showSubItems": true,
        "items": [
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 ผู้อยู่อาศัยในพื้นที่ข้างเคียง",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเข้า-ออกพื้นที่ข้างเคียงบนถนนในเขตชุมชนปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 คนเดินเท้า",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "คนเดินเท้าสามารถเดินข้ามได้อย่างปลอดภัย ที่ทางแยก ทางข้ามทางม้าลาย ทางข้ามมีสัญญาณไฟ ทางข้ามมีเกาะพัก สะพานท่อลอด หรือตำแหน่งอื่น ๆ บนถนนในเขตชุมชน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตำแหน่งทางข้ามเป็นที่น่าพึงพอใจ สำหรับการมองเห็นในแต่ละทิศทาง สำหรับคนพิการ คนสูงอายุ หรือสำหรับเด็กนักเรียนใช้ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รั้วกั้นคนเดินเท้าถูกติดตั้งบริเวณพื้นที่เกาะกลางในที่ที่จำเป็นใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "คนเดินเท้าจะถูกยับยั้งไม่ให้ข้ามในที่ที่ไม่ปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายเกี่ยวข้องกับคนเดินเท้าเหมาะสมและเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างและความลาดชันของทางเดินและทางข้าม เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการลดระดับของขอบทางเท้าลงที่ตำแหน่งทางข้าม ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางข้ามอยู่ในตำแหน่งที่จะใช้งานได้สูงสุด ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตำแหน่งทางข้ามแต่ละจุด มีไฟฟ้าส่องสว่างเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.3 คนขี่จักรยาน",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความต้องการของผู้ใช้จักรยานได้รับการพิจารณาอย่างเหมาะสม ที่ทางแยกหรือวงเวียน และบนทางจักรยานและทางข้าม ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางร่วมระหว่างทางจักรยานกับทางเดินปลอดภัยและมีป้ายเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.4 คนขับขี่รถจักรยานยนต์",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการหลีกเลี่ยงการวางอุปกรณ์หรือวัตถุบนผิวจราจรที่อาจทำให้รถจักรยานยนต์เสียหลัก ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวสองข้างทางปลอดจากอุปสรรคกีดขวางในบริเวณที่รถจักรยานยนต์อาจเอียงเข้าหาทางโค้ง"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์เครื่องหมายเตือนและนำทางสำหรับผู้ขับขี่รถจักรยานยนต์เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณที่รถจักรยานยนต์มีโอกาสจะวิ่งหลุดออกนอกถนน สภาพข้างทางมีสภาพไม่เป็นอันตรายหรือมีอุปกรณ์ป้องกัน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการรื้อถอนหรือการป้องกันอันตรายจากเสาไฟ ป้าย และอุปกรณ์ที่ไม่จำเป็น ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "14"+ this.convertIdNumToString(idCount++),
        "name": "5.	ไฟฟ้าส่องสว่าง ป้าย และอุปกรณ์นำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 ไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งไฟฟ้าส่องสว่างในที่ที่จำเป็นและเพียงพอสำหรับบริเวณที่เกิดอุบัติเหตุบ่อยครั้งเนื่องจากปัญหาไฟฟ้าส่องสว่าง ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างปราศจากเสาไฟที่จะกลายเป็นอันตรายข้างทาง ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการพิจารณาติดตั้งเสาไฟแบบหักง่ายเมื่อถูกชน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสนหรือความเข้าใจต่อสัญญาณไฟจราจรหรือป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างเพียงพอสำหรับทางข้าม หรือทางเดินข้างเคียง หรือเกาะพัก ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แสงสว่างเพียงพอที่บริเวณจุดรวมกระแสจราจร ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างไม่ทำให้เกิดเป็นเงามืด ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 ป้ายจราจร",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรเหมาะสมสอดคล้องกับตำแหน่งที่ติดตั้ง ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งที่ตำแหน่งที่สามารถเห็น อ่าน และเข้าใจได้ในเวลาที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรที่ติดตั้งสอดคล้องกับความต้องการของผู้ขับขี่ เช่น ป้ายบอกทิศทาง ป้ายแนะนำความเร็ว ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งที่ตำแหน่งที่ผู้ขับขี่สามารถรักษาระยะมองเห็นได้ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรติดตั้งในตำแหน่งที่การมองเห็นเพียงพอสำหรับทางเข้า-ออกและทางเชื่อมตัด และคนเดินเท้าและส่วนอื่น ๆ บนถนน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายในถนนออกแบบใหม่สอดคล้องกับป้ายในช่วงถนนตอนที่ติดกัน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.3 เครื่องหมายจราจรและเครื่องหมายนำทาง",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจร สอดคล้องกับเครื่องหมายตามมาตรฐาน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นห้ามแซงอยู่ในช่วงถนนที่ต้องการห้ามแซง ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มสะท้อนแสง แสดงอยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายเตือนทางโค้ง บั้งนำทางโค้ง ป้ายแนะนำความเร็วทางโค้ง แสดงอยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรในโครงการใหม่สอดคล้องกับเครื่องหมายจราจรในช่วงถนนตอนที่ติดกัน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรและเครื่องหมายนำทางจะสามารถมองเห็นได้ในเวลากลางคืน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "หลักนำทางเป็นประเภทหักง่ายเมื่อถูกชน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "14"+ this.convertIdNumToString(idCount++),
        "name": "6.	ลักษณะกายภาพของอุปกรณ์ในเขตทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.1 เสาและอุปสรรคอื่น ๆ",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาทั้งหมดอยู่ห่างจากทางวิ่งของยานพาหนะ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาประเภทที่หักง่ายเมื่อถูกชน อยู่ในตำแหน่งที่ต้องการ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างเกาะกลางเพียงพอสำหรับการติดตั้งไฟฟ้าส่องสว่าง หรือต้นไม้ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตู้ควบคุมไฟสัญญาณและอุปกรณ์สนับสนุนอื่น ๆ อยู่ในตำแหน่งที่น่าพอใจ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นที่ข้างทางปราศจากสิ่งกีดขวางที่จะเป็นอันตราย ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีมาตรการที่จำเป็นเพื่อรื้อถอน ย้ายหรือป้องกันจากสิ่งอันตรายเหล่านั้นใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รางหรือร่องระบายน้ำปลอดภัยเมื่อรถวิ่งออกนอกทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.2 อุปกรณ์กั้นเกาะกลาง",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กั้นเกาะกลางได้รับการพิจารณาและให้รายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แบบก่อสร้างได้พิจารณาส่วนที่ต้องให้ความสนใจเป็นพิเศษ เช่น ส่วนปลายของราวกันอันตราย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.3 อุปกรณ์กันอันตราย",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีอุปกรณ์กันอันตรายในตำแหน่งที่จำเป็น เช่น คันทางดินถม โครงสร้าง ต้นไม้ เสา ร่องระบายน้ำ ตอม่อสะพาน จุดเลี้ยว และมีรายละเอียดเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์กันอันตรายมีความปลอดภัย (สำหรับคนเดินเท้า ผู้ใช้จักรยานและจักรยานยนต์) ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ส่วนปลายของอุปกรณ์กันอันตรายมีความปลอดภัยในระดับน่าพอใจ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รั้วกั้นได้รับการออกแบบตามมาตรฐาน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รั้วกั้นอยู่ในตำแหน่งที่มีความจำเป็น ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "14"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.4 สะพาน ท่อลอด",
            "items": [
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "**อุปกรณ์กั้นสะพานและปลายท่อปลอดภัยเมื่อพิจารณาถึงประเด็น -	การมองเห็น - การเข้าใจรับรู้ได้ง่าย -	ระยะห่างจากกระแสจราจร -	โอกาสที่จะทำให้บาดเจ็บหรือเสียหาย -	ป้ายและเครื่องหมายบอกผู้ขับขี่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระดับราวสะพานสูงถูกต้องและแข็งแรงเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางบนสะพานกว้างเท่ากับบนถนนที่ต่อกัน ใช่หรือไม่"
              },
              {
                "id": "14"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดเตรียมพื้นที่สำหรับการจราจรที่ไม่ใช้เครื่องยนต์ผ่านได้อย่างปลอดภัย เช่น คนเดินเท้า รถจักรยาน ฯลฯ ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];
  }

  private getCheckList21() {
    let idCount = 1;

    return [
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "1. ประเด็นทั่วไป",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "พื้นที่ก่อสร้างมีความสะอาดและปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "พื้นที่ทำงานก่อสร้างมีความมั่นคงแข็งแรงสามารถรองรับน้ำหนักเครื่องจักรและอุปกรณ์ได้อย่างปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีผู้ควบคุมงานในการตรวจสอบความปลอดภัยก่อนและขณะทำการก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการรักษาความสะอาดในบริเวณพื้นที่ก่อสร้าง โดยจัดเก็บวัสดุและอุปกรณ์ก่อสร้างให้เรียบร้อย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีบันไดหรือทางลาดพร้อมทั้งติดตั้งราวกั้นหรือรั้วกันตกที่มั่นคงแข็งแรง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีแสงสว่างฉุกเฉินในเขตก่อสร้างเพียงพอ เพื่อใช้ในเวลาไฟฟ้าดับ ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ติดป้ายเตือนอันตรายบริเวณทางเข้า-ออกของยานพาหนะทุกแห่ง และจัดให้มีผู้ให้สัญญาณในขณะที่มียานพาหนะเข้า-ออกพื้นที่ก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ติดป้ายแสดงหมายเลขโทรศัพท์ของหน่วยงานที่เกี่ยวข้องเพื่อขอความช่วยเหลือในยามฉุกเฉิน เช่น โรงพยาบาล หน่วยงานดับเพลิง หน่วยงานบรรเทาสาธารณภัย ที่ใกล้ที่สุดไว้บริเวณเขตก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ติดตั้งป้ายเตือนและป้ายบังคับในพื้นที่ก่อสร้างโดยใช้เครื่องหมายหรือข้อความที่เข้าใจง่ายและเห็นได้ชัดเจน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการฝึกอบรมลูกจ้างเกี่ยวกับการทำงาน เช่น การใช้เครื่องจักร รหัสสัญญาณต่าง ๆ ที่เกี่ยวข้อง เป็นระยะ ๆ ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "2. เขตก่อสร้าง",
        "showSubItems": true,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 สภาพแวดล้อมในเขตก่อสร้าง",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการกำหนดพื้นที่ก่อสร้างหรือกั้นเขต ด้วยวัสดุที่เหมาะสมตามลักษณะงาน ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดทำป้าย “เขตก่อสร้าง” แสดงให้เห็นได้ชัดเจน ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการกำหนดทางเข้า-ออกและทำทางเดินเข้า-ออกที่พักอาศัยโดยมิให้ผ่านเขตอันตราย ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างในเขตก่อสร้างเพียงพอต่อการทำงาน หรือการเดินทางของคนงานในเหตุฉุกเฉิน ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ในเวลากลางคืนมีสัญญาณไฟเตือนสีส้มตลอดเวลา ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 การดูแลเขตก่อสร้าง",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีพื้นที่ที่ใช้เก็บวัสดุก่อสร้างอย่างเพียงพอ เป็นระเบียบ และไม่ก่อให้เกิดอันตราย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 การรักษาพยาบาลเบื้องต้น",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีอุปกรณ์ปฐมพยาบาลพร้อมสำหรับการใช้งาน ในเขตก่อสร้างสำหรับคนงานทุกคน ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีคนงานที่ได้รับการอบรมความรู้เกี่ยวกับการปฐมพยาบาล เพียงพอกับจำนวนคนงาน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.4 การรักษาความปลอดภัยในเขตก่อสร้าง",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เมื่อเขตก่อสร้างอยู่ในสถานที่ เช่น เขตโรงเรียน หรือสถานที่อื่นที่มีลักษณะคล้ายกัน ได้มีการวางแผนเพื่อป้องกันไม่ให้เด็กนักเรียนหรือผู้ไม่มีส่วนเกี่ยวข้องเข้ามาในเขตก่อสร้างร่วมกัน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "3. งานไฟฟ้าและการป้องกันอัคคีภัย",
        "showSubItems": true,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 งานไฟฟ้า",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีแผนผังการติดตั้งและการใช้ระบบไฟฟ้าในเขตก่อสร้าง ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีสวิตช์ตัดวงจรไฟฟ้าเพื่อควบคุมการใช้ไฟฟ้าในเขตก่อสร้าง ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการต่อสายดินสำหรับหม้อแปลงไฟฟ้า แผงไฟฟ้า   และอุปกรณ์ไฟฟ้าที่ติดตั้งอยู่กับที่ทุกชนิดเพื่อป้องกันกระแสไฟฟ้ารั่ว ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีป้ายที่มีตัวอักษรหรือสัญลักษณ์ซึ่งสะท้อนแสงได้   เพื่อเตือนให้ระวังอันตรายจากไฟฟ้าที่บริเวณหม้อแปลงไฟฟ้าและแผงไฟฟ้า ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 งานป้องกันอัคคีภัย",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีเครื่องดับเพลิงแบบเคลื่อนย้ายได้ที่เหมาะสมกับชนิดของเชื้อเพลิงที่อยู่ในสภาพพร้อมใช้งาน ใช่หรือไม่"
              }
            ]
          },
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "4. งานเจาะและงานขุด",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีราวกั้นหรือรั้วกันตก แสงสว่าง และป้ายเตือนอันตราย ขณะทำการเจาะหรือขุดหลุม บ่อ คู และงานอื่นในลักษณะเดียวกัน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีแผ่นโลหะหรือวัสดุอื่นที่มีความแข็งแรงเพียงพอปิดคลุมหลุม/บ่อ และทำราวล้อมกั้นด้วยไม้หรือโลหะ ขณะทำการเจาะหรือขุดรู หลุม บ่อ คู และงานอื่นในลักษณะเดียวกัน ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "5. งานก่อสร้างที่มีเสาเข็ม",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการอบรมความปลอดภัยให้กับผู้ปฏิบัติงานที่มีหน้าที่บังคับเครื่องตอกเสาเข็ม ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ขั้นตอนการประกอบ การติดตั้ง การทดสอบ การใช้ การซ่อมบำรุง และการตรวจสอบเครื่องตอกเสาเข็ม เจ้าหน้าที่ปฏิบัติตามรายละเอียดคุณลักษณะของเครื่องตอกเสาเข็มและคู่มือการใช้งานที่ผู้ผลิตเครื่องตอกเสาเข็มกำหนดไว้ ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีวิศวกรบันทึกผลการตรวจรับรองประสิทธิภาพของเครื่องตอกเสาเข็ม ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีคู่มือการใช้เครื่องตอกเสาเข็มและคู่มือการใช้สัญญาณสื่อสารระหว่างผู้ปฏิบัติงานในการตอกเสาเข็มสำหรับผู้ปฏิบัติงาน "
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีป้ายพิกัดน้ำหนักยกและป้ายแนะนำการใช้เครื่องตอกเสาเข็มไว้ที่จุดหรือตำแหน่งที่ผู้บังคับเครื่องตอกเสาเข็มเห็นได้ชัดเจน "
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีผู้ควบคุมงานดำเนินการตรวจสอบอุปกรณ์ รางเลื่อน แม่แรง และส่วนประกอบทั้งหมดของเครื่องตอกเสาเข็มให้อยู่ในสภาพที่ใช้งานได้อย่างปลอดภัย ก่อนทำการตอกเสาเข็ม ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ไม่มีสิ่งกีดขวางสายตาผู้บังคับเครื่องตอกเสาเข็มที่จะมองเห็นการทำงานตอกเสาเข็ม ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีระบบระบายอากาศเสียออกจากบริเวณพื้นที่ทำงานในงานก่อสร้างที่มีเสาเข็ม ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "6. การใช้ค้ำยัน",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการคำนวณออกแบบและควบคุมการใช้งานค้ำยัน โดยมีวิศวกรรับรอง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการสร้าง ประกอบ ติดตั้ง และตรวจสอบค้ำยันให้มั่นคงแข็งแรงและมีความปลอดภัย ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "7. เครื่องจักรและปั้นจั่น",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ปั้นจั่นได้รับการตรวจสภาพประจำปีแล้ว ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ปั้นจั่นได้รับการตรวจสภาพประจำวันโดยผู้ควบคุมปั้นจั่นแล้ว ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีวิศวกรวางแผนงานและควบคุมตลอดเวลาที่ทำการติดตั้งหรือทดสอบเครื่องจักรและปั้นจั่น ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ปฏิบัติงานมีความชำนาญในการใช้เครื่องจักร และผ่านการอบรมตามหลักเกณฑ์ วิธีการ และเงื่อนไขที่ปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีเครื่องป้องกันอันตรายสำหรับผู้ปฏิบัติงานซึ่งทำงานกับเครื่องจักรที่ปิดครอบแท่นหมุน เครื่องปิดบังประกายไฟ หรือตะแกรงเหล็กเหนียว ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "เครื่องจักรและอุปกรณ์ที่ใช้ในการทำงานก่อสร้างอยู่ในสภาพใช้งานได้ดีและปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "การใช้งานปั้นจั่นยกของ เหมาะสมกับน้ำหนักถ่วงและรัศมีของปั้นจั่น ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการติดตั้งอุปกรณ์เตือนอันตรายที่เครื่องจักร เช่น สัญญาณเสียงและแสงสำหรับการเดินหน้าหรือถอยหลังของเครื่องจักร และติดป้ายเตือนอันตรายให้เห็นได้ชัดเจน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ควบคุมบังคับปั้นจั่น ผู้ให้สัญญาณแก่ผู้บังคับปั้นจั่น ผู้ยึดเกาะวัสดุ หรือผู้ควบคุมการใช้ปั้นจั่น ได้ผ่านการอบรมหลักสูตรการปฏิบัติหน้าที่ให้ปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ควบคุมบังคับปั้นจั่นใช้งานปั้นจั่นตรงตามคำแนะนำของผู้ผลิต ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ในการตรวจสอบสภาพปั้นจั่นได้รับการตรวจสอบจากผู้ที่ได้รับอนุญาต ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ที่ประกอบ ทดสอบ ใช้งาน และซ่อมบำรุง ได้ปฏิบัติตามรายละเอียดคุณลักษณะของปั้นจั่นและคู่มือการใช้งานที่ผู้ผลิตปั้นจั่นกำหนดไว้ ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการเติมน้ำมันหล่อลื่น และบำรุงรักษาโครงสร้างและชิ้นส่วนของปั้นจั่น ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "8. การใช้นั่งร้าน บันได ขาหยั่ง และม้ายืน",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีวิศวกรตรวจสอบขณะสร้าง ประกอบ และติดตั้งนั่งร้าน ให้เป็นไปตามหลักเกณฑ์และวิธีการที่ปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "นั่งร้านตั้งอยู่บนฐานรากที่มั่งคง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "รอยต่อโครงสร้างของนั่งร้านยึดแน่นและปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ในกรณีที่นั่งร้าน มีความสูงเกินกว่า 3 เมตร มีการติดตั้งอุปกรณ์ป้องกันการพลัดตก ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "บริเวณฐานของนั่งร้านมีการติดตั้งแผ่นรองตีนเสา หรือวัสดุรองแบบอื่น ๆ ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "การใช้งานนั่งร้านมีความเหมาะสมกับความกว้างของพื้นที่ ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "โครงสร้างนั่งร้านมีการผูกหรือยึดเพื่อป้องการแรงลม ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "นั่งร้านที่มีความสูงเกินกว่า 4 เท่าของความกว้างของฐานนั่งร้าน มีการผูกหรือยึดกับโครงสร้างอื่น ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีบันไดที่มีโครงสร้างที่แข็งแรงทนทานและมีความปลอดภัยในการใช้งานตามมาตรฐานในงานก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการดูแลขาหยั่งหรือม้ายืน ให้มีโครงสร้างที่แข็งแรงปลอดภัย และมีพื้นที่สำหรับยืนทำงานอย่างเพียงพอ ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "การเข้า-ออกบริเวณนั่งร้านมีความปลอดภัย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "นั่งร้านที่ถูกติดตั้ง รื้อถอนตามมาตรฐาน ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "9. เชือก ลวดสลิง และรอก",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการใช้เชือกหรือลวดสลิงที่มีขนาดเหมาะสมกับร่องรอก ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "เชือกหรือลวดสลิงอยู่ในสภาพพร้อมใช้งาน ไม่ผุเปื่อยหรือชำรุด ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "10. การป้องกันการตกจากที่สูง",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ปฏิบัติงานที่ทำงานก่อสร้างที่มีความเสี่ยงในการตกจากที่สูงตั้งแต่ 2 เมตร มีอุปกรณ์ป้องกันการตก ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "อุปกรณ์ป้องกันการตกมีการทดสอบ และสามารถใช้งานได้จริง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "อุปกรณ์ป้องกันการตกได้รับการตรวจสภาพ และมีการติดตั้งตรงตามคำแนะนำการใช้งานจากผู้ผลิต ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "อุปกรณ์ป้องกันการตกมีสภาพที่สามารถใช้งานได้ ไม่มีร่องรอยการชำรุดเสียหาย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ปฏิบัติงานได้รับการอบรมและฝึกวิธีการใช้อุปกรณ์ป้องกันการตก ใช่หรือไม่"
          },
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "11. ทางเดินชั่วคราวยกระดับสูง",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการจัดสร้างทางเดินด้วยวัสดุที่มีความแข็งแรงสามารถรับน้ำหนักบรรทุกจรได้ตามสภาพการใช้งานจริง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีราวกั้นหรือรั้วกันตกตามมาตรฐานตลอดทางเดิน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีวัสดุป้องกันการลื่นบริเวณทางเดินชั่วคราว ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "12. งานอุโมงค์",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการอบรมวิธีทำงานในอุโมงค์และวิธีป้องกันอันตรายก่อนเข้าทำงานในอุโมงค์ และต้องอบรมทบทวนหรือเพิ่มเติมเป็นประจำไม่น้อยกว่าเดือนละหนึ่งครั้ง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีวิศวกรซึ่งมีประสบการณ์ด้านอุโมงค์และด้านปฐพีวิศวกรรม เป็นผู้ออกแบบและกำหนดวิธีปฏิบัติงาน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีวิศวกรซึ่งมีประสบการณ์ด้านงานขุดเจาะอุโมงค์เป็นผู้ควบคุมงานตลอดเวลา ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "13. ชิ้นส่วนแผ่นคอนกรีตในงานก่อสร้าง",
        "showSubItems": true,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "13.1 แผ่นคอนกรีตสำเร็จรูป",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการตรวจสอบชิ้นส่วนหรือแผ่นคอนกรีตสำเร็จรูปก่อนการก่อสร้าง ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีรายการคำนวณในการติดตั้งชิ้นส่วนหรือแผ่นคอนกรีตสำเร็จรูป ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการตรวจสอบการสภาพชิ้นส่วนหรือแผ่นคอนกรีตสำเร็จรูป เป็นไปตามรูปแบบที่กำหนด ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การติดตั้งชิ้นส่วนหรือแผ่นคอนกรีตสำเร็จรูป กำลังดำเนินการตามรูปแบบและข้อกำหนด ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีวิศวกรรมรับรอง ว่าชิ้นส่วนหรือแผ่นคอนกรีตสำเร็จรูปมีความพร้อมในการก่อสร้าง ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดพื้นที่ในการการทำงานหรือห้ามเข้าระหว่างการติดตั้งชิ้นส่วนหรือแผ่นคอนกรีตสำเร็จรูป ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "13.2 แบบหล่อคอนกรีตในการก่อสร้าง",
            "items": [
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การติดตั้งแบบหล่อคอนกรีตได้รับการรับรองจากวิศวกรที่ออกแบบหรือวิศวกรควบคุม ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การติดตั้งแบบหล่อคอนกรีตได้รับการรับรองจากวิศวกรที่ออกแบบหรือวิศวกรควบคุม ใช่หรือไม่"
              },
              {
                "id": "21"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การดำเนินการติดตั้งแบบหล่อเป็นไปตามเอกสารรายการติดตั้งแบบหล่อ และเป็นไปตามหลักเกณฑ์การปฏิบัติงาน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "14. การรื้อถอน ทำลาย",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ควบคุมงานได้แจ้งรื้อถอนล่วงหน้า ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการป้องกันวัตถุตกหล่นขณะดำเนินการรื้อถอนตามข้อบังคับเรียบร้อย ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีผู้รับผิดชอบในส่วนของการรื้อถอนอย่างเหมาะสม ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "15. การจัดการจราจรในบริเวณพื้นที่ก่อสร้าง",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "ผู้ควบคุมงานได้จัดการจราจรบริเวณพื้นที่ก่อสร้าง โดยพิจารณาในเรื่องความปลอดภัยและความเสี่ยงในการเกิดอุบัติเหตุที่อาจได้รับผลกระทบจากงานก่อสร้าง ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการจัดการด้านความปลอดภัยของการจราจรก่อนการดำเนินงานก่อสร้าง ใช่หรือไม่"
          }
        ]
      },
      {
        "id": "21"+ this.convertIdNumToString(idCount++),
        "name": "16. งานคุ้มครองความปลอดภัยส่วนบุคคล",
        "showSubItems": false,
        "items": [
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการใช้อุปกรณ์คุ้มครองความปลอดภัยส่วนบุคคลตลอดเวลาที่ทำงาน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการจัดอุปกรณ์คุ้มครองความปลอดภัย ให้เหมาะสมกับลักษณะของงาน และเป็นไปตามมาตรฐาน ใช่หรือไม่"
          },
          {
            "id": "21"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "มีการตรวจสอบและอบรมการใช้อุปกรณ์ก่อนการใช้งานแก่เจ้าหน้าที่ปฏิบัติงาน ใช่หรือไม่"
          }
        ]
      }
    ];
  }
  
  private getCheckList31() {
    let idCount = 1;

    return [
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "1.	แนวทางและรูปตัดของถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 การมองเห็นและระยะการมองเห็น",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอกับความเร็วของการจราจรที่ใช้เส้นทาง ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอกับตำแหน่งทางคนเดินข้าม ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอกับทางเชื่อมและทางเข้า-ออกพื้นที่ข้างทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ความเร็วในการออกแบบ",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "โค้งราบและโค้งดิ่งเหมาะสมกับความเร็วของการจราจร หรือมีการติดตั้งป้ายเตือนการใช้ความเร็วที่เหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 การจำกัดความเร็ว",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ขีดจำกัดความเร็วเหมาะสมกับการใช้งานของถนน เรขาคณิตของถนน การใช้พื้นที่ และระยะการมองเห็น ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 การแซง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่วงระยะของการขับรถแซงปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดพื้นที่สำหรับการแซงของยานพาหนะขนาดใหญ่ในบริเวณที่จำเป็น ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 ความเข้าใจแนวเส้นทางของผู้ขับขี่",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "**ถนนไม่มีส่วนประกอบที่สร้างความสับสนแก่ผู้ขับขี่ เช่น -	แนวทางของถนนมีความชัดเจน ใช่หรือไม่ -	พื้นผิวถนนที่ไม่ได้ใช้งาน ถูกรื้อทิ้งแล้ว ใช่หรือไม่ -	เครื่องหมายจราจรบนผิวทางที่เก่า ถูกกำจัดออกแล้ว ใช่หรือไม่ -	แนวของต้นไม้อยู่ในแนวเดียวกับแนวถนน ใช่หรือไม่ -	แนวของเสาไฟฟ้าอยู่ในแนวเดียวกับแนวถนน ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.6 ความกว้าง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรมีความกว้างเพียงพอสำหรับปริมาณจราจรและประเภทของยานพาหนะที่สัญจร ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เกาะกลางมีความกว้างเพียงพอสำหรับผู้ใช้ทางส่วนใหญ่ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สะพานและทางลอดมีความกว้างสัมพันธ์กับถนนที่วิ่งเข้าสู่สะพานและทางลอด ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.7 ไหล่ทาง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางมีความกว้างเพียงพอที่จะให้ผู้ขับขี่รถที่พลัดหลุดออกนอกถนนสามารถควบคุมรถให้กลับเข้าสู่ถนนได้ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางมีความกว้างเพียงพอสำหรับรถที่ขัดข้องหรือรถฉุกเฉินสามารถหยุดจอดได้ปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางอยู่ในสภาพที่ยานพาหนะและผู้ใช้รถใช้ถนนทุกประเภทสามารถสัญจรได้ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รอยต่อระหว่างผิวทางและไหล่ทางมีความปลอดภัย ไม่มีความแตกต่างระหว่างระดับผิวทางและไหล่ทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.8 ลาดหลังทาง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดหลังทาง (ทั้งผิวจราจรและไหล่ทาง) เพียงพอสำหรับการระบายน้ำ ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.9 ลาดคันทาง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดคันทางยอมให้รถยนต์หรือรถบรรทุกที่พลัดหลุดออกนอกถนนสามารถวิ่งแล่นได้ ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.10 การระบายน้ำ",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระบบระบายน้ำข้างทางและช่องเปิดท่อระบายน้ำ สามารถสัญจรผ่านได้อย่างปลอดภัย ใช่หรือไม่"
              },
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "2.	ช่องทางเสริม ",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 การผายความกว้าง (Tapers)",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จุดเริ่มต้นและจุดสิ้นสุดของการผายความกว้างช่องทางอยู่ในตำแหน่งและอยู่ในแนวที่ถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะมองเห็นจุดปลายของช่องทางเสริมเพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 ไหล่ทาง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างไหล่ทาง ณ จุดรวมกันของช่องทางเสริม มีความเหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 ป้ายและเครื่องหมายจราจร",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรทุกป้ายถูกติดตั้งตามแนวทางที่เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรทุกป้ายมีความเด่นชัดและเห็นได้ชัดเจน ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรบนผิวทางสอดคล้องกับแนวทางที่เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการเตือนล่วงหน้าของช่องจราจรเสริม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.4 การจราจรเลี้ยว",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจำกัดห้ามเลี้ยวขวาจากช่องจราจรตรงไป ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการเตือนล่วงหน้าของช่องจราจรสำหรับเลี้ยว ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "3.	ป้ายจราจร",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ประเด็นป้ายทั่วไป",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจร (ป้ายบังคับ ป้ายเตือน และป้ายบอกทาง) ที่จำเป็น ติดตั้งได้เหมาะสมในการใช้งาน ใช่หรือไม่ และมีความเด่นชัดและชัดเจน ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรที่ติดตั้งถูกต้องเหมาะสมกับสถานการณ์ และจำเป็น ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรมีประสิทธิภาพใช้งานได้ในทุกสภาพแวดล้อม (กลางวัน กลางคืน ฝนตก หมอกควัน พระอาทิตย์ขึ้นหรือลง แสงไฟหน้ารถ หรือสภาพแสงสว่างที่มืด) ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 การมองเห็นป้ายจราจร",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรสามารถมองเห็นได้ชัดเจน ผู้ขับขี่สามารถเห็นและอ่านในระยะที่จำเป็นทั้งกลางวันและกลางคืน ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การสะท้อนแสงและความสว่างของป้ายจราจร เป็นที่น่าพึงพอใจ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรสามารถมองเห็นได้อย่างชัดเจน โดยไม่ถูกบดบังหรือถูกดึงดูดความสนใจจากสิ่งรอบข้างหรือพื้นที่ด้านหลัง ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่ไม่เกิดความสับสนเนื่องจากป้ายจราจรที่มากเกินไป ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.3 เสาติดตั้งป้ายจราจร",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาติดตั้งป้ายจราจรตั้งอยู่ในบริเวณเขตปลอดภัยข้างทาง หรือมีลักษณะที่ไม่เป็นอันตราย เช่น ชนแล้วล้มได้ หรือปิดล้อม ป้องกันด้วยอุปกรณ์กันอันตราย ใช่หรือไม่"
              },
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "4.	เครื่องหมายจราจรและเครื่องหมายนำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 ปัญหาทั่วไป",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นจราจรและเส้นนำทาง เหมาะสมกับการใช้งาน สอดคล้องสัมพันธ์กับแนวเส้นทาง และมีประสิทธิภาพใช้งานได้ในทุกสถานการณ์ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรที่ไม่จำเป็น เช่น ลูกศรนำทางที่ไม่จำเป็น เส้นขอบทางที่ไม่จำเป็น ถูกย้ายหรือลบออกแล้ว ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 เส้นเครื่องหมายจราจรบนพื้นทาง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งทิศทางจราจรปกติ (เส้นประสีเหลือง) และเส้นแบ่งทิศทางจราจรห้ามแซงหรือห้ามแซงเฉพาะด้าน ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งช่องจราจร (เส้นประสีขาว) และเส้นห้ามเปลี่ยนช่องจราจร (เส้นทึบสีขาว) ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นขอบทาง ติดตั้งอย่างเพียงพอเหมาะสม ใช่หรือไม่ "
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มจราจรได้มีการติดตั้งในบริเวณที่จำเป็น และติดตั้งอย่างถูกต้อง และอยู่ในสภาพการที่ใช้งานได้ดี ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.3 หลักนำทางและเป้าสะท้อนแสง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "หลักนำทางและอุปกรณ์นำทาง ถูกติดตั้งได้เหมาะสม สามารถมองเห็นได้ชัดเจน ใช่หรือไม่"
              },
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "5.	สภาพอันตรายข้างทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 เขตปลอดสิ่งกีดขวางข้างทาง (Clear zones)",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณเขตปลอดสิ่งกีดขวางข้างทางมีสภาพที่ยานพาหนะที่เสียหลักพลัดหลุดออกนอกเส้นทาง สามารถแล่นและควบคุมกลับสู่ถนนได้ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สาธารณูปโภคข้างทาง เช่น เสาไฟ ต้นไม้ อยู่ห่างจากแนวการจราจรในระยะที่ปลอดภัย ไม่เป็นอันตรายข้างทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 ราวกันอันตราย",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายถูกติดตั้งบริเวณที่จำเป็น สอดคล้องกับข้อแนะนำ ถูกติดตั้งได้อย่างถูกต้อง และมีความยาวเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ประเภทของราวกันอันตรายเหมาะสมกับวัตถุประสงค์การใช้งาน ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายถูกทาบติดกับราวสะพานได้อย่างถูกต้องปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะห่างระหว่างราวกันอันตรายและเส้นขอบทางเพียงพอที่จะให้ยานพาหนะที่ขัดข้องหยุดจอดได้ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การเก็บปลายของราวกันอันตรายถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายมีการนำทางและการมองเห็นที่เพียงพอในเวลากลางคืน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "6.	พื้นถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.1 สภาพผิวถนน",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนอยู่ในสภาพที่ปลอดภัย ไม่เกิดความเสียหายที่อาจเป็นอันตรายต่อผู้ขับขี่ เช่น พื้นผิวขรุขระ เป็นหลุม การทรุดตัว ผิวเป็นคลื่น ซึ่งอาจส่งผลให้รถเสียการทรงตัว ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนปราศจากเศษหิน ทราย หรือวัสดุอื่นๆ ที่อาจเป็นอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ขอบผิวทางอยู่ในสภาพที่ปลอดภัย ปราศจากระดับของผิวถนนที่มีการเปลี่ยนแปลง เช่น การทรุดตัวของถนนหรือบริเวณคอสะพาน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.2 สภาพความต้านทานการลื่นไถล",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนมีสภาพความต้านทานการลื่นไถลที่เพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.3 สภาพน้ำขังบนผิวถนน",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนมีสภาพที่ปราศจากบริเวณที่ทำให้น้ำขัง ซึ่งนำไปสู่ปัญหาความปลอดภัยได้ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "7.	ไฟฟ้าส่องสว่าง",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "7.1 ปัญหาทั่วไปของไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างที่จัดให้มีเพียงพอในบริเวณที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างมีความชัดเจน โดยไม่มีสิ่งที่อาจบดบังแสงสว่าง เช่น กิ่งไม้ ป้าย สะพานลอย ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสนหรือความเข้าใจผิดต่อสัญญาณไฟและป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างทำให้แสงไฟมีความสม่ำเสมอ (ไม่เกิดเป็นเงามืด) ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "8.	ทางเชื่อม",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "8.1 ปัญหาทั่วไปของทางเชื่อม",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การควบคุมการเข้า-ออกทางเชื่อมเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รัศมีการเลี้ยวบริเวณทางเชื่อมเพียงพอสำหรับยานพาหนะทุกประเภท ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรสำหรับรอเลี้ยวเพื่อเข้า-ออกทางเชื่อมมีไว้อย่างเหมาะสมในกรณีที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความลาดเอียงของทางเชื่อมที่ร่วมเข้ากับทางสายหลัก มีความเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเชื่อมก่อให้เกิดปัญหาความขัดแย้งกันของกระแสจราจร ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "8.2 ระยะการมองเห็นทางเชื่อม",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตำแหน่งของทางเชื่อมสามารถมองเห็นได้อย่างชัดเจนโดยไม่ถูกบดบังจากแนวทางราบหรือแนวดิ่ง ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มุมของทางเชื่อมมีความเหมาะสม ซึ่งทำให้สามารถมองเห็นทางเชื่อมได้อย่างชัดเจน ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นบริเวณทางเชื่อมไม่ถูกบดบังโดยสิ่งกีดขวางต่างๆ เช่น ป้าย สิ่งปลูกสร้าง ต้นไม้ เสาไฟฟ้า รถจอด จุดจอดรถประจำทาง ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "9.	การจอดรถ",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "9.1 ปัญหาทั่วไป",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การจัดสรรหรือจำกัดพื้นที่สำหรับจอดรถ มีความเหมาะสม ไม่ส่งผลให้เกิดอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การจอดรถสำหรับรถรับส่งเพียงพอเหมาะสม โดยไม่ก่อให้เกิดอันตรายเนื่องจากการจอดรถซ้อนคัน ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวการเลี้ยวเข้า-ออกเพื่อจอดรถตามสายทาง เหมาะสมโดยไม่ก่อให้เกิดอันตรายต่อผู้ขับขี่อื่น ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "31"+ this.convertIdNumToString(idCount++),
        "name": "10.	ประเด็นอื่น ๆ",
        "showSubItems": true,
        "items": [
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "10.1 แสงที่สะท้อนเข้าตาผู้ขับขี่",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทัศนวิสัยในการมองเห็นของผู้ขับขี่ถูกรบกวนโดยแสงสะท้อนจากโคมไฟหน้ารถที่อยู่ในทิศทางตรงข้าม (โดยเฉพาะถนน 2 ช่องจราจร) ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทัศนวิสัยในการมองเห็นของผู้ขับขี่ถูกรบกวนโดยแสงสะท้อนจากไฟฟ้าส่องสว่าง แสงไฟจากข้างทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "31"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "10.2 กิจกรรมข้างทาง",
            "items": [
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "กิจกรรมข้างทางมีการจัดการที่ปลอดภัย ไม่ก่อให้เกิดอันตรายต่อผู้ใช้รถใช้ถนน เช่น การจอดรถกีดขวางการจราจรในทางหลักที่มีความเร็วสูง ใช่หรือไม่"
              },
              {
                "id": "31"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "กิจกรรมข้างทางมีป้ายโฆษณาที่ไม่ทำให้ผู้ขับขี่เบี่ยงเบนความสนใจ หรือเกิดความสับสนในการมองเห็นแนวทาง ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];
  }
  
  private getCheckList32() {
    let idCount = 1;

    return [
      {
        "id": "32"+ this.convertIdNumToString(idCount++),
        "name": "1.	แนวทางและรูปตัดของถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 การมองเห็นและระยะการมองเห็น",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอสำหรับความเร็วของการเข้าทางโค้ง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ความเร็วในการออกแบบ",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "โค้งราบและโค้งดิ่งเหมาะสมกับความเร็วของการจราจร (ที่เปอร์เซ็นไทล์ที่ 85) ใช่หรือไม่ "
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ถ้าไม่เหมาะสม แล้วมีการติดตั้งป้ายเตือนแนวทางหรือป้ายเตือนความเร็ว ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความเร็วแนะนำที่ติดตั้งบริเวณทางโค้งเหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 การแซง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจำกัดช่วงถนนห้ามแซงบริเวณทางโค้งได้อย่างเหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 ความเข้าใจแนวเส้นทางของผู้ขับขี่",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "**ถนนทางโค้ง ปราศจากส่วนประกอบที่สร้างความสับสนแก่ผู้ขับขี่ -	แนวทางโค้งมีความชัดเจน ใช่หรือไม่ -	พื้นผิวถนนที่ไม่ได้ใช้งาน ถูกรื้อทิ้งหรือปรับแล้ว ใช่หรือไม่ -	เครื่องหมายจราจรบนผิวทางที่เก่า ถูกกำจัดออกแล้ว ใช่หรือไม่ -	แนวของต้นไม้อยู่ในแนวเดียวกับแนวถนน ใช่หรือไม่ -	แนวของเสาไฟฟ้าอยู่ในแนวเดียวกับแนวถนน ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวทางโค้งหรือการรวมกันของหลายทางโค้ง ไม่ก่อให้เกิดความเข้าใจผิดในการขับขี่ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 ความกว้าง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรทางโค้งมีความกว้างเพียงพอสำหรับปริมาณจราจรและประเภทของยานพาหนะที่สัญจร ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.6 ไหล่ทาง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางบริเวณทางโค้ง มีความกว้างเพียงพอที่จะให้ผู้ขับขี่รถที่พลัดหลุดออกนอกถนนสามารถควบคุมรถให้กลับเข้าสู่ถนนได้ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางบริเวณทางโค้ง มีความกว้างเพียงพอสำหรับรถที่ขัดข้องหรือรถฉุกเฉินสามารถหยุดจอดได้อย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รอยต่อระหว่างผิวทางและไหล่ทางบริเวณทางโค้ง มีความปลอดภัย (ไม่มีความแตกต่างระหว่างระดับผิวทางและไหล่ทาง) ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.7 ความลาดหลังทาง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การยกโค้งบริเวณทางโค้งมีความเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดหลังทาง (ทั้งผิวจราจรและไหล่ทาง) บริเวณทางโค้ง เพียงพอสำหรับการระบายน้ำ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.8 ลาดคันทาง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดคันทางยอมให้รถยนต์หรือรถบรรทุกที่พลัดหลุดออกนอกถนนทางโค้งสามารถวิ่งแล่นได้ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "32"+ this.convertIdNumToString(idCount++),
        "name": "2.	ป้ายจราจร",
        "showSubItems": true,
        "items": [
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 ประเด็นป้ายทั่วไป",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจร (ป้ายบังคับ ป้ายเตือน และป้ายบอกทาง) ที่จำเป็นบริเวณทางโค้ง ติดตั้งได้เหมาะสมในการใช้งาน และมีความเด่นชัดและชัดเจน ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรที่ติดตั้งบริเวณทางโค้ง ถูกต้องเหมาะสมกับสถานการณ์ และจำเป็น ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางโค้งมีประสิทธิภาพใช้งานได้ในทุกสภาพแวดล้อม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 การมองเห็นป้ายจราจร",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางโค้งสามารถมองเห็นได้ชัดเจน ผู้ขับขี่สามารถเห็นและอ่านในระยะที่จำเป็นทั้งกลางวันและกลางคืน ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การสะท้อนแสงและความสว่างของป้ายจราจรบริเวณทางโค้ง เป็นที่น่าพึงพอใจ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางโค้งสามารถมองเห็นได้อย่างชัดเจน โดยไม่ถูกบดบังหรือถูกดึงดูดความสนใจจากสิ่งรอบข้างหรือพื้นที่ด้านหลัง ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่ไม่เกิดความสับสนเนื่องจากป้ายจราจรบริเวณทางโค้งที่มากเกินไป ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 เสาติดตั้งป้ายจราจร",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาติดตั้งป้ายจราจรบริเวณทางโค้งตั้งอยู่ในบริเวณเขตปลอดภัยข้างทาง ใช่หรือไม่ ถ้าไม่ เสาติดตั้งป้ายจราจรมีลักษณะที่ชนแล้วล้มได้ หรือ ปิดล้อมป้องกันด้วยอุปกรณ์กันอันตราย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "32"+ this.convertIdNumToString(idCount++),
        "name": "3.	เครื่องหมายจราจรและเครื่องหมายนำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ปัญหาทั่วไป",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นจราจรและเส้นนำทางโค้ง เหมาะสมกับการใช้งาน สอดคล้องสัมพันธ์กับแนวเส้นทาง และมีประสิทธิภาพใช้งานได้ในทุกสถานการณ์ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรบริเวณทางโค้งที่ไม่จำเป็น ถูกย้ายหรือลบออกแล้ว ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 เส้นจราจร",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งทิศทางจราจรบริเวณทางโค้ง ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งช่องจราจรบริเวณทางโค้ง ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นขอบทางบริเวณทางโค้ง ติดตั้งอย่างเพียงพอเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มจราจรได้มีการติดตั้งในบริเวณที่จำเป็น และติดตั้งอย่างถูกต้อง และอยู่ในสภาพการที่ใช้งานได้ดี ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.3 หลักนำทางและเป้าสะท้อนแสง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "หลักนำทางถูกติดตั้งได้เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์นำทางสามารถมองเห็นได้ชัดเจน ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์นำทางบนราวกันอันตราย ราวกันอันตราย และราวสะพาน สอดคล้องสัมพันธ์กับมาตรฐาน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.4 อุปกรณ์เตือนและอุปกรณ์นำทางโค้ง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายเตือนทางโค้งและป้ายบอกความเร็ว ได้ติดตั้งในบริเวณที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายเตือนความเร็วสอดคล้องสัมพันธ์กับแนวเส้นทาง ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายเตือนถูกติดตั้งอยู่ในตำแหน่งที่เหมาะสมกับทางโค้ง เช่น ไม่ติดตั้งห่างจากทางโค้งเกินไป ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายเตือนมีขนาดที่ใหญ่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บั้งเตือนทางโค้ง ได้ติดตั้งในบริเวณที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตำแหน่งติดตั้งบั้งเตือนทางโค้งมีความเหมาะสมสามารถนำทางโค้งได้อย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บั้งเตือนทางโค้งมีขนาดที่ถูกต้องเหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.5 แถบชะลอความเร็ว (Rumble Strips)",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แถบชะลอความเร็ว อยู่ในสภาพที่สามารถใช้งานได้ตามปกติ ใช่หรือไม่ "
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งแถบชะลอความเร็ว (ความสูง ความยาว จำนวน และระยะห่าง) มีความเหมาะสม สามารถเตือนผู้ขับขี่ถึงอันตรายข้างหน้าได้ และไม่เป็นอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "32"+ this.convertIdNumToString(idCount++),
        "name": "4.	สภาพอันตรายข้างทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 เขตปลอดสิ่งกีดขวางข้างทาง (Clear Zone)",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณเขตปลอดสิ่งกีดขวางข้างทางบริเวณทางโค้งมีสภาพที่ยานพาหนะที่เสียหลักพลัดหลุดออกนอกเส้นทาง สามารถแล่นและควบคุมกลับสู่ถนนได้ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณเขตปลอดสิ่งกีดขวางข้างทางบริเวณทางโค้ง ปราศจากอุปสรรคที่อาจก่อให้เกิดอันตรายต่อผู้ขับขี่ที่อาจเสียหลักพลัดหลุดออกนอกเส้นทาง ใช่หรือไม่  ถ้ามีอุปสรรคเหล่านั้นสามารถรื้อถอนหรือป้องกันได้ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สาธารณูปโภคข้างทาง เช่น เสาไฟ ต้นไม้ ฯลฯ อยู่ห่างจากแนวการจราจรในระยะที่ปลอดภัย ไม่เป็นอันตรายข้างทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 ราวกันอันตราย",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายถูกติดตั้งบริเวณที่จำเป็น สอดคล้องกับข้อแนะนำ ถูกติดตั้งได้อย่างถูกต้อง และมีความยาวเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ประเภทของราวกันอันตรายเหมาะสมกับวัตถุประสงค์การใช้งาน ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายถูกทาบติดกับราวสะพานได้อย่างถูกต้องปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะห่างระหว่างราวกันอันตรายและเส้นขอบทางเพียงพอที่จะให้ยานพาหนะที่ขัดข้องหยุดจอดได้ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การเก็บปลายของราวกันอันตรายถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายมีการนำทางและการมองเห็นที่เพียงพอในเวลากลางคืน ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายมีการนำทางและการมองเห็นที่เพียงพอในเวลากลางคืน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "32"+ this.convertIdNumToString(idCount++),
        "name": "5.	พื้นถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 สภาพผิวถนน",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนบริเวณทางโค้งอยู่ในสภาพที่ปลอดภัย ไม่เกิดความเสียหายที่อาจเป็นอันตรายต่อผู้ขับขี่ เช่น พื้นผิวขรุขระ เป็นหลุม การทรุดตัว ผิวเป็นคลื่น ซึ่งอาจส่งผลให้รถเสียการทรงตัว ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนบริเวณทางโค้ง ปราศจากเศษหิน ทราย หรือวัสดุอื่นๆ ที่อาจเป็นอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ขอบผิวทางบริเวณทางโค้งอยู่ในสภาพที่ปลอดภัย ปราศจากระดับของผิวถนนที่มีการเปลี่ยนแปลง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 สภาพความต้านทานการลื่นไถล",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนบริเวณทางโค้งมีสภาพความต้านทานการลื่นไถลที่เพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.3 สภาพน้ำขังบนผิวถนน",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนมีสภาพที่ปราศจากบริเวณที่ทำให้น้ำขัง ซึ่งนำไปสู่ปัญหาความปลอดภัยได้ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "32"+ this.convertIdNumToString(idCount++),
        "name": "6.	ไฟฟ้าส่องสว่าง",
        "showSubItems": true,
        "items": [
          {
            "id": "32"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.1 ปัญหาทั่วไปของไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างที่จัดให้มีเพียงพอในบริเวณที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างบริเวณทางโค้งมีความชัดเจน โดยไม่ถูกบดบังแสงสว่างจากกิ่งไม้ ป้าย สะพานลอย ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสนหรือความเข้าใจผิดต่อป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "32"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างทำให้แสงไฟมีความสม่ำเสมอ (ไม่เกิดเป็นเงามืด) ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];
  }

  private getCheckList33() {
    let idCount = 1;

    return [
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "1.	ทางแยก",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 ตำแหน่งทางแยก",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางแยกอยู่ในตำแหน่งที่ปลอดภัยจากแนวโค้งราบและโค้งดิ่ง ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เมื่อทางแยกตั้งอยู่บริเวณจุดสิ้นสุดของช่วงถนนที่มีการใช้ความเร็วสูง เช่น ก่อนเข้าสู่เมือง ได้มีการติดตั้งอุปกรณ์ควบคุมจราจรเพื่อเตือนผู้ขับขี่ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 การมองเห็นและระยะการมองเห็นบริเวณทางแยก",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะมองเห็นของทางแยกเหมาะสมสำหรับผู้ใช้รถใช้ถนนทุกประเภทและการจราจรในทุกทิศทาง ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นบริเวณทางแยกถูกบดบังจากสิ่งกีดขวางต่าง ๆ เช่น ต้นไม้ เสาไฟ การจอดรถ ที่หยุดรถประจำทาง ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีระยะหยุดปลอดภัยสำหรับการชนท้ายแถวหรือยานพาหนะเลี้ยวที่แล่นช้า ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะมองเห็นเหมาะสมสำหรับยานพาหนะที่เคลื่อนเข้าหรือออกจากกระแสจราจร ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 อุปกรณ์ควบคุมและอุปกรณ์นำทางบริเวณทางแยก",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจร (เส้นหยุด เส้นให้ทาง) ควบคุมทางแยกเพียงพอเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรควบคุมทางแยก เพียงพอเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีอุปกรณ์หรือเส้นแนวช่องจราจรผ่านทางแยกที่จำเป็นอย่างเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรทุกช่องมีเครื่องหมายจราจรที่เหมาะสม (รวมถึงเครื่องหมายลูกศรนำทาง) ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 รูปแบบทางแยก",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จุดขัดแย้งระหว่างยานพาหนะทั้งหมดบริเวณทางแยกได้รับการจัดการอย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบทางแยกมีความชัดเจนต่อผู้ใช้รถใช้ถนนทุกประเภท ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดช่องจราจร ที่เพียงพอและเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวขอบทาง มีความชัดเจนและเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวเกาะกลาง มีความชัดเจนและเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรบริเวณทางแยกมีความกว้างเพียงพอสามารถรองรับการเคลื่อนตัวของยานพาหนะที่สัญจรผ่าน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะผายความกว้างสำหรับรวมกระแสจราจรมีความยาวเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางแยกไม่มีปัญหาความจุซึ่งอาจสร้างปัญหาด้านความปลอดภัย ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 ประเด็นอื่น ๆ บริเวณทางแยก",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณทางแยกโดยเฉพาะในเขตชนบท ไม่มีปัญหาสภาพผิวจราจรสึกกร่อน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "2.	ป้ายจราจร",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 ประเด็นป้ายทั่วไป",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางแยก (ป้ายบังคับ ป้ายเตือน และป้ายบอกทาง) ที่จำเป็น ติดตั้งได้เหมาะสมในการใช้งาน ใช่หรือไม่ และมีความเด่นชัดและชัดเจน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางแยกที่ติดตั้ง ถูกต้องเหมาะสมกับสถานการณ์ และจำเป็น ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางแยกมีประสิทธิภาพใช้งานได้ในทุกสภาพแวดล้อม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 การมองเห็นป้ายจราจร",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางโค้งสามารถมองเห็นได้ชัดเจน ผู้ขับขี่สามารถเห็นและอ่านในระยะที่จำเป็นทั้งกลางวันและกลางคืน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางแยกสามารถมองเห็นได้อย่างชัดเจน โดยไม่ถูกบดบังหรือถูกดึงดูดความสนใจจากสิ่งรอบข้างหรือพื้นที่ด้านหลัง ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่ไม่เกิดความสับสนเนื่องจากป้ายจราจรบริเวณทางแยกที่มากเกินไป ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 เสาติดตั้งป้ายจราจร",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาติดตั้งป้ายจราจรบริเวณทางโค้งตั้งอยู่ในบริเวณเขตปลอดภัยข้างทาง ใช่หรือไม่ ถ้าไม่ เสาติดตั้งป้ายจราจรมีลักษณะที่ชนแล้วล้มได้ หรือ ปิดล้อมป้องกันด้วยอุปกรณ์กันอันตราย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "3.	เครื่องหมายจราจรและเครื่องหมายนำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ปัญหาทั่วไป",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นจราจรและเส้นนำทางบริเวณทางแยกเหมาะสมกับการใช้งาน สอดคล้องสัมพันธ์กับแนวเส้นทาง และมีประสิทธิภาพใช้งานได้ในทุกสถานการณ์ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรที่ไม่จำเป็น ถูกย้ายหรือลบออกแล้ว ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 เส้นจราจร",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งทิศทางจราจรบริเวณทางแยก ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งช่องจราจรบริเวณทางแยก ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นขอบทางบริเวณทางแยก ติดตั้งอย่างเพียงพอเหมาะสม ใช่หรือไม่ "
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มจราจรได้มีการติดตั้งในบริเวณที่จำเป็น และติดตั้งอย่างถูกต้อง และอยู่ในสภาพการที่ใช้งานได้ดี ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.3 แถบชะลอความเร็ว (Rumble Strips)",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แถบชะลอความเร็วอยู่ในสภาพที่ใช้งานได้ตามปกติ ใช่หรือไม่ "
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งแถบชะลอความเร็ว (ความสูง ความยาว จำนวน และระยะห่าง) มีความเหมาะสม สามารถเตือนผู้ขับขี่ถึงอันตรายข้างหน้าได้ และไม่เป็นอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "4.	สัญญาณไฟจราจร",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 การทำงานของสัญญาณไฟจราจร",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สัญญาณไฟจราจร (จังหวะและระยะเวลาของสัญญาณไฟ) ทำงานอย่างถูกต้องปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จำนวน ตำแหน่ง และชนิดของไฟสัญญาณ เหมาะสมสำหรับยานพาหนะในแต่ละประเภทและสภาพการจราจร ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สัญญาณไฟจราจรเอื้ออำนวยความสะดวกให้กับคนตาบอด คนพิการ หรือผู้สูงอายุ ในกรณีที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตู้ควบคุมสัญญาณไฟจราจรอยู่ในตำแหน่งที่ปลอดภัย เช่น จากการถูกเฉี่ยวชน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 การมองเห็นสัญญาณไฟจราจร",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สัญญาณไฟจราจรอยู่ในสภาพที่ผู้ขับขี่เข้าสู่ทางแยกสามารถมองเห็นได้อย่างชัดเจน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะมองเห็นสำหรับการหยุดจนถึงตำแหน่งท้ายแถวคอยบริเวณทางแยกเพียงพอ ใช่หรือไม่ "
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สัญญาณไฟจราจรสามารถมองเห็นโดยไม่ถูกดึงดูดจากแสงอาทิตย์ แสงสว่างหรือแสงไฟจากข้างทาง และพื้นที่ด้านหลัง ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สัญญาณไฟจราจรสามารถมองเห็นได้เฉพาะทิศทางของผู้ขับขี่ที่ได้กำหนดไว้อย่างถูกต้องเท่านั้น ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ถ้าหัวสัญญาณไฟจราจรไม่สามารถมองเห็นได้จากระยะที่เพียงพอ แล้วมีการติดตั้งป้ายเตือนทางแยกและ/หรือไฟกระพริบ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สัญญาณไฟจราจรไม่ถูกบดบังจากสิ่งกีดขวางต่าง ๆ เช่น ต้นไม้ เสาไฟ ป้ายจราจร ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "5.	คนเดินเท้าและคนขี่จักรยาน",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 ปัญหาทั่วไปสำหรับคนเดินเท้าและคนขี่จักรยาน",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดเตรียมทางเดินเท้าและทางข้ามบริเวณทางแยกที่เหมาะสมสำหรับคนเดินเท้าและคนขี่จักรยาน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งรั้วหรืออุปกรณ์กั้นในบริเวณทางแยกที่จำเป็น เพื่อบังคับให้คนเดินเท้าและคนขี่จักรยานไปข้ามถนนในจุดทางข้ามหรือสะพานต่างระดับ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งอุปกรณ์กั้นในบริเวณทางแยกที่จำเป็น เพื่อแยกกระแสจราจรยานพาหนะ คนเดินเท้าและคนขี่จักรยาน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สิ่งอำนวยความสะดวกสำหรับคนเดินเท้าและคนขี่จักรยานบริเวณทางแยกเหมาะสมกับผู้ใช้เวลากลางคืน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 คนขี่จักรยาน",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางจักรยานบริเวณทางแยกมีความต่อเนื่องและอยู่ในสภาพที่ปลอดภัยต่อผู้ขับขี่จักรยาน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.3 ผู้ขับขี่รถจักรยานยนต์",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนบริเวณทางแยกมีความต้านทานการลื่นไถลเพียงพอเหมาะสมสำหรับรถจักรยานยนต์  ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การจอดรถข้างทางบริเวณทางแยกบดบังแนวการมองเห็นของผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนมีความสอดคล้องและมีมาตรฐานที่เหมาะสมสำหรับรถจักรยานยนต์ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "6.	พื้นถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.1 สภาพผิวถนน",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนบริเวณทางแยกอยู่ในสภาพที่ปลอดภัย ไม่เกิดความเสียหายที่อาจเป็นอันตรายต่อผู้ขับขี่ ซึ่งอาจส่งผลให้รถเสียการทรงตัว ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนบริเวณทางแยกปราศจากเศษหิน ทราย หรือวัสดุอื่นๆ ที่อาจเป็นอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ขอบผิวทางบริเวณทางแยกอยู่ในสภาพที่ปลอดภัย ปราศจากระดับของผิวถนนที่มีการเปลี่ยนแปลง เช่น การทรุดตัวของถนนหรือบริเวณคอสะพาน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.2 สภาพความต้านทานการลื่นไถล",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนช่วงก่อนถึงทางแยกมีสภาพความต้านทานการลื่นไถลที่เพียงพอ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.3 สภาพน้ำขังบนผิวถนน",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนบริเวณทางแยกมีสภาพที่ปราศจากบริเวณที่ทำให้น้ำขัง ซึ่งนำไปสู่ปัญหาความปลอดภัยได้ ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "7.	ไฟฟ้าส่องสว่าง",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "7.1 ปัญหาทั่วไปของไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างที่จัดให้มีเพียงพอในบริเวณทางแยกที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างบริเวณทางแยกมีความชัดเจน โดยไม่ถูกบดบังจากกิ่งไม้ ป้าย สะพานลอย ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างบริเวณทางแยก ไม่สร้างความสับสนหรือความเข้าใจผิดต่อสัญญาณไฟและป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างบริเวณทางแยก ทำให้แสงไฟมีความสม่ำเสมอ (ไม่เกิดเป็นเงามืด) ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "8.	ทางเชื่อม",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "8.1 ปัญหาทั่วไปของทางเชื่อม",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การควบคุมการเข้า-ออกทางเชื่อมเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รัศมีการเลี้ยวบริเวณทางเชื่อมเพียงพอสำหรับยานพาหนะทุกประเภท ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรสำหรับรอเลี้ยวเพื่อเข้า-ออกทางเชื่อมมีไว้อย่างเหมาะสมในกรณีที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความลาดเอียงของทางเชื่อมที่ร่วมเข้ากับทางสายหลัก มีความเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเชื่อมสร้างปัญหาจุดขัดแย้งกันของกระแสจราจร ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "8.2 ระยะการมองเห็นทางเชื่อม",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตำแหน่งของทางเชื่อมสามารถมองเห็นได้อย่างชัดเจนโดยไม่ถูกบดบังจากแนวทางราบหรือแนวดิ่ง ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มุมของทางเชื่อมมีความเหมาะสม ซึ่งทำให้สามารถมองเห็นทางเชื่อมได้อย่างชัดเจน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นบริเวณทางเชื่อมไม่ถูกบัดบังโดยสิ่งกีดขวางต่างๆ เช่น ป้าย สิ่งปลูกสร้าง ต้นไม้ เสาไฟฟ้า รถจอด จุดจอดรถประจำทาง ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "33"+ this.convertIdNumToString(idCount++),
        "name": "9.	การจอดรถ",
        "showSubItems": true,
        "items": [
          {
            "id": "33"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "9.1 ปัญหาทั่วไป",
            "items": [
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การจัดสรรหรือจำกัดพื้นที่สำหรับจอดรถบริเวณทางแยก มีความเหมาะสม ไม่ส่งผลให้เกิดอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การจอดรถบริเวณทางแยกสำหรับรถรับส่งของเพียงพอเหมาะสม โดยไม่ก่อให้เกิดอันตรายเนื่องจากการจอดรถซ้อนคัน ใช่หรือไม่"
              },
              {
                "id": "33"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "แนวการเลี้ยวเข้า-ออกเพื่อจอดรถตามสายทาง เหมาะสมโดยไม่ก่อให้เกิดอันตรายต่อผู้ขับขี่อื่น ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];
  }

  private getCheckList34() {
    let idCount = 1;

    return [
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "1.	แนวทางและรูปตัดของถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.1 การมองเห็นและระยะการมองเห็น",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอสำหรับความเร็วของการจราจรที่ใช้เส้นทาง ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอสำหรับตำแหน่งทางแยกและทางข้าม เช่น ทางคนเดินข้าม จักรยาน จุดตัดทางรถไฟ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นเพียงพอสำหรับทางเชื่อมและทางเข้า-ออกพื้นที่ข้างทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.2 ความเร็วออกแบบและการจำกัดความเร็ว",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ขีดจำกัดความเร็วเหมาะสมเข้ากันได้กับการใช้งานของถนน เรขาคณิตของถนน การใช้พื้นที่ และระยะการมองเห็น ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.3 การแซง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่วงระยะของการขับรถแซงปลอดภัยเหมาะสม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.4 ความเข้าใจแนวเส้นทางของผู้ขับขี่",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "**ถนนปราศจากส่วนประกอบที่อาจสร้างความสับสนแก่ผู้ขับขี่ ใช่หรือไม่ เช่น -	แนวทางของถนนมีความชัดเจน ใช่หรือไม่ -	พื้นผิวถนนที่ไม่ได้ใช้งาน ถูกรื้อทิ้งหรือปรับแล้ว ใช่หรือไม่ -	เครื่องหมายจราจรบนผิวทางที่เก่า ถูกกำจัดเอาออกอย่างเหมาะสมแล้ว ใช่หรือไม่ -	แนวของต้นไม้อยู่ในแนวเดียวกับแนวถนน ใช่หรือไม่ -	แนวของไฟฟ้าส่องสว่างหรือเสาไฟฟ้าอยู่ในแนวเดียวกับแนวถนน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.5 ความกว้าง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรมีความกว้างเพียงพอสำหรับปริมาณจราจรและประเภทของยานพาหนะที่สัญจร ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สะพานและทางลอดมีความกว้างสอดคล้องสัมพันธ์กับสภาพถนนที่วิ่งเข้าสู่สะพานและทางลอด ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.6 ไหล่ทาง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางมีความกว้างเพียงพอที่จะให้ผู้ขับขี่รถที่พลัดหลุดออกนอกถนนสามารถควบคุมรถให้กลับเข้าสู่ถนนได้ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางมีความกว้างเพียงพอสำหรับรถที่ขัดข้องหรือรถฉุกเฉินสามารถหยุดจอดได้อย่างปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไหล่ทางอยู่ในสภาพที่ยานพาหนะและผู้ใช้รถใช้ถนนทุกประเภทสามารถสัญจรได้ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รอยต่อระหว่างผิวทางและไหล่ทางมีความปลอดภัย (ไม่มีความแตกต่างระหว่างระดับผิวทางและไหล่ทาง) ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.7 ความลาดหลังทาง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การยกโค้งบริเวณทางโค้งมีความเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ลาดหลังทาง (ทั้งผิวจราจรและไหล่ทาง) เพียงพอสำหรับการระบายน้ำ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "1.8 การระบายน้ำ",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระบบระบายน้ำข้างทางและช่องเปิดท่อระบายน้ำ สามารถสัญจรผ่านได้อย่างปลอดภัย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "2.	ป้ายจราจร",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.1 ประเด็นป้ายทั่วไป",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจร (ป้ายบังคับ ป้ายเตือน และป้ายบอกทาง) ที่จำเป็น ติดตั้งได้เหมาะสมในการใช้งาน ใช่หรือไม่ และมีความเด่นชัดและชัดเจน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรที่ติดตั้ง ถูกต้องเหมาะสมกับสถานการณ์ และจำเป็น ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรมีประสิทธิภาพใช้งานได้ในทุกสภาพแวดล้อม ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.2 การมองเห็นป้ายจราจร",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรบริเวณทางโค้งสามารถมองเห็นได้ชัดเจน ผู้ขับขี่สามารถเห็นและอ่านในระยะที่จำเป็นทั้งกลางวันและกลางคืน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ป้ายจราจรสามารถมองเห็นได้อย่างชัดเจน โดยไม่ถูกบดบังหรือถูกดึงดูดความสนใจจากสิ่งรอบข้างหรือพื้นที่ด้านหลัง ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผู้ขับขี่ไม่เกิดความสับสนเนื่องจากป้ายจราจรที่มากเกินไป ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "2.3 เสาติดตั้งป้ายจราจร",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เสาติดตั้งป้ายจราจรตั้งอยู่ในบริเวณเขตปลอดภัยข้างทาง หรือมีลักษณะที่ไม่เป็นอันตราย เช่น ชนแล้วล้มได้ หรือปิดล้อมป้องกันด้วยอุปกรณ์กันอันตราย ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "3.	เครื่องหมายจราจรและเครื่องหมายนำทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.1 ปัญหาทั่วไป",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นจราจรและเส้นนำทาง เหมาะสมกับการใช้งาน สอดคล้องสัมพันธ์กับแนวเส้นทาง และมีประสิทธิภาพใช้งานได้ในทุกสถานการณ์ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เครื่องหมายจราจรที่ไม่จำเป็น เช่น ลูกศรนำทางที่ไม่จำเป็น เส้นขอบทางที่ไม่จำเป็น ถูกย้ายหรือลบออกแล้ว ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.2 เส้นเครื่องหมายจราจรบนพื้นทาง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งทิศทางจราจรปกติ และเส้นแบ่งทิศทางจราจรห้ามแซงหรือห้ามแซงเฉพาะด้าน ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นแบ่งช่องจราจร และเส้นห้ามเปลี่ยนช่องจราจร ติดตั้งอย่างเหมาะสม อยู่ในสภาพที่ใช้งานได้ และมีความเด่นชัด ใช่หรือไม่ "
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "เส้นขอบทาง ติดตั้งอย่างเพียงพอเหมาะสม ใช่หรือไม่ "
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ปุ่มจราจรได้มีการติดตั้งในบริเวณที่จำเป็น และติดตั้งอย่างถูกต้อง และอยู่ในสภาพการที่ใช้งานได้ดี ใช่หรือไม่ "
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "3.3 หลักนำทางและเป้าสะท้อนแสง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "หลักนำทางถูกติดตั้งได้เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์นำทางสามารถมองเห็นได้ชัดเจน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "อุปกรณ์นำทางบนราวกันอันตราย ราวกันอันตราย และราวสะพาน สอดคล้องสัมพันธ์กับมาตรฐาน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "4.	สภาพอันตรายข้างทาง",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.1 เขตปลอดสิ่งกีดขวางข้างทาง (Clear Zones)",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณเขตปลอดสิ่งกีดขวางข้างทางมีสภาพที่ยานพาหนะที่เสียหลักพลัดหลุดออกนอกเส้นทาง สามารถแล่นและควบคุมกลับสู่ถนนได้ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "บริเวณเขตปลอดสิ่งกีดขวางข้างทาง ปราศจากอุปสรรคที่อาจก่อให้เกิดอันตรายต่อผู้ขับขี่ที่อาจเสียหลักพลัดหลุดออกนอกเส้นทาง ใช่หรือไม่  ถ้ามีอุปสรรคเหล่านั้นสามารถรื้อถอนหรือป้องกันได้ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สาธารณูปโภคข้างทาง เช่น เสาไฟ ต้นไม้ ฯลฯ อยู่ห่างจากแนวการจราจรในระยะที่ปลอดภัย ไม่เป็นอันตรายข้างทาง ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.2 ราวกันอันตราย",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายถูกติดตั้งบริเวณที่จำเป็น สอดคล้องกับข้อแนะนำ ถูกติดตั้งได้อย่างถูกต้อง และมีความยาวเพียงพอ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ประเภทของราวกันอันตรายเหมาะสมกับวัตถุประสงค์การใช้งาน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายถูกทาบติดกับราวสะพานได้อย่างถูกต้องปลอดภัย ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะห่างระหว่างราวกันอันตรายและเส้นขอบทางเพียงพอที่จะให้ยานพาหนะที่ขัดข้องหยุดจอดได้ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การเก็บปลายของราวกันอันตรายถูกต้อง ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายมีการนำทางและการมองเห็นที่เพียงพอในเวลากลางคืน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.3 รั้ว",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รั้วกั้นคนเดินที่อยู่ภายในเขตปลอดสิ่งกีดขวางข้างทาง มีความปลอดภัย โดยไม่เกิดอันตรายกับยานพาหนะ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "4.4 การมองเห็นราวกันอันตรายและรั้ว",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ราวกันอันตรายและรั้วมีการนำทางและการมองเห็นที่เพียงพอในเวลากลางคืน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "5.	คนเดินเท้าและคนขี่จักรยาน",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.1 ปัญหาทั่วไปสำหรับคนเดินเท้าและคนขี่จักรยาน",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการจัดเตรียมทางเดินเท้าและทางข้ามที่เหมาะสมสำหรับคนเดินเท้าและคนขี่จักรยาน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งรั้วหรืออุปกรณ์กั้นในบริเวณที่จำเป็น เพื่อบังคับให้คนเดินเท้าและคนขี่จักรยานไปข้ามถนนในจุดทางข้ามหรือสะพานต่างระดับ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีการติดตั้งอุปกรณ์กั้นในบริเวณที่จำเป็น เพื่อแยกกระแสจราจรยานพาหนะ คนเดินเท้าและคนขี่จักรยาน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สิ่งอำนวยความสะดวกสำหรับคนเดินเท้าและคนขี่จักรยานเหมาะสมกับผู้ใช้เวลากลางคืน ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.2 คนเดินเท้า",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางคนเดินหรือทางเท้ามีความต่อเนื่อง หรือมีสภาพที่ไม่ก่อให้เกิดอันตรายต่อคนเดินเท้า ใช่หรือไม่ "
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะห่างระหว่างกระแสจราจรยานพาหนะและคนเดินเท้าบนทางเท้ามีระยะที่เพียงพอ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "จำนวนและตำแหน่งของทางข้ามเพียงพอเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นบริเวณทางข้ามมีความชัดเจน โดยไม่ถูกบดบังจากแนวเส้นทางราบหรือทางดิ่ง และสิ่งกีดขวางต่าง ๆ เช่น ต้นไม้ ป้าย เสาไฟฟ้า รถที่จอด ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีสิ่งอำนวยความสะดวกสำหรับคนเดินเท้ากลุ่มผู้สูงอายุ คนพิการ เด็ก และล้อเข็นเด็ก เช่น ราวจับ ลาดขอบทางขึ้น-ลงทางเท้าและเกาะกลาง ที่ความเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มีราวจับคนเดินที่เพียงพอในบริเวณที่จำเป็น เช่น สะพาน ทางขึ้นลง ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สิ่งอำนวยความสะดวกสำหรับคนเดินใกล้บริเวณเขตโรงเรียนหรือโรงพยาบาลเพียงพอและใช้งานได้ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะห่างจากเส้นหยุดรถถึงทางข้ามเพียงพอสำหรับผู้ขับขี่สามารถมองเห็นคนเดินเท้า ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.3 คนขี่จักรยาน",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ความกว้างของถนนเพียงพอสำหรับปริมาณผู้ขับขี่รถจักรยาน ใช่หรือไม่ "
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางจักรยานมีความต่อเนื่องและอยู่ในสภาพที่ปลอดภัยต่อผู้ขับขี่จักรยาน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตะแกรงฝาท่อระบายน้ำบนผิวจราจร อยู่ในสภาพที่ปลอดภัยต่อผู้ขับขี่รถจักรยานหรือจักรยานยนต์ ใช่หรือไม่"
              }
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "5.4 ผู้ขับขี่รถจักรยานยนต์",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนมีความต้านทานการลื่นไถลเพียงพอเหมาะสมสำหรับรถจักรยานยนต์  ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การจอดรถข้างทางบดบังแนวการมองเห็นของผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ส่วนปลายของราวกันอันตรายเป็นอันตรายต่อผู้ขับขี่รถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "พื้นผิวถนนมีความสอดคล้องและมีมาตรฐานที่เหมาะสมสำหรับรถจักรยานยนต์ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "สภาพข้างทางไม่เป็นอันตรายต่อผู้ขับขี่รถจักรยานยนต์ เช่น ปราศจากหินหรืออุปสรรคบริเวณเกาะกลาง ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "6.	พื้นถนน",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "6.1 สภาพผิวถนน",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนอยู่ในสภาพที่ปลอดภัย ไม่เกิดความเสียหายที่อาจเป็นอันตรายต่อผู้ขับขี่ เช่น พื้นผิวขรุขระ เป็นหลุม การทรุดตัว ผิวเป็นคลื่น ซึ่งอาจส่งผลให้รถเสียการทรงตัว ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ผิวถนนปราศจากเศษหิน ทราย หรือวัสดุอื่นๆ ที่อาจเป็นอันตรายต่อผู้ขับขี่ ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ขอบผิวทางปลอดภัยจากการเปลี่ยนแปลงของระดับผิวถนน เช่น การทรุดตัวของถนนหรือบริเวณคอสะพาน ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "7.	ไฟฟ้าส่องสว่าง",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "7.1 ปัญหาทั่วไปของไฟฟ้าส่องสว่าง",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างที่จัดให้มีเพียงพอในบริเวณที่จำเป็น ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ไฟฟ้าส่องสว่างมีความชัดเจน โดยไม่มีการบดบังแสงสว่างจากกิ่งไม้ ป้าย สะพานลอย ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบไฟฟ้าส่องสว่างไม่สร้างความสับสนหรือความเข้าใจผิดต่อสัญญาณไฟและป้ายจราจร ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รูปแบบการติดตั้งไฟฟ้าส่องสว่างทำให้แสงไฟมีความสม่ำเสมอ (ไม่เกิดเป็นเงามืด) ใช่หรือไม่"
              }
            ]
          }
        ]
      },
      {
        "id": "34"+ this.convertIdNumToString(idCount++),
        "name": "8.	ทางเชื่อม",
        "showSubItems": true,
        "items": [
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "8.1 ปัญหาทั่วไปของทางเชื่อม",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "การควบคุมการเข้า-ออกทางเชื่อมเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "รัศมีการเลี้ยวบริเวณทางเชื่อมเพียงพอสำหรับยานพาหนะทุกประเภท ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ช่องจราจรสำหรับรอเลี้ยวเข้า-ออกทางเชื่อมเหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเชื่อมที่ร่วมเข้ากับทางสายหลัก มีความลาดเอียงที่เหมาะสม ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ทางเชื่อมสร้างปัญหาจุดขัดแย้งกันของกระแสจราจร ใช่หรือไม่"
              },
            ]
          },
          {
            "id": "34"+ this.convertIdNumToString(idCount++),
            "checkable": "true",
            "name": "8.2 ระยะการมองเห็นทางเชื่อม",
            "items": [
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ตำแหน่งของทางเชื่อมสามารถมองเห็นได้อย่างชัดเจนโดยไม่ถูกบดบังจากแนวทางราบหรือแนวดิ่ง ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "มุมของทางเชื่อมมีความเหมาะสม ซึ่งทำให้สามารถมองเห็นทางเชื่อมได้อย่างชัดเจน ใช่หรือไม่"
              },
              {
                "id": "34"+ this.convertIdNumToString(idCount++),
                "checkable": "true",
                "name": "ระยะการมองเห็นบริเวณทางเชื่อมไม่ถูกบัดบังโดยสิ่งกีดขวางต่าง ๆ เช่น ป้าย เสาไฟฟ้า จุดจอดรถประจำทาง ใช่หรือไม่"
              }
            ]
          }
        ]
      }
    ];
  }

  private convertIdNumToString(value: number): string{
    if(value < 10) return "0" + value;
    else return value.toString();
  }

}
