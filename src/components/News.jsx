import React, { Component } from 'react'
import Navbar from './Navbar'
// import {Car}

export class News extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='news pt-4'>
        <div className="newsCard mb-4 d-flex">
            <div className="image">
                <img style={{width:'100%',height:'100%'}} src="http://www.yenikonya.com.tr//uploads/2022/11/01/detay1667305723.jpg" alt="" />
            </div>
            <div className="text p-3">
                <p>
                <b>TEKNOFEST 2023 TEKNOLOJİ YARIŞMALARI İÇİN BAŞVURULAR BAŞLADI!</b> <br />
Ayakları yere basmayan tek festival TEKNOFEST heyecanı yeniden başladı.

Cumhuriyetimizin 100. yılında, medeniyetlerin başkenti İstanbul’da gerçekleştirilecek TEKNOFEST 2023’ün Teknoloji Yarışmaları için başvurular açıldı!

Toplumun tamamında teknoloji ve bilim konusunda farkındalık oluşturarak Türkiye’nin bilim ve mühendislik alanlarında yetişmiş insan kaynağını artırmayı hedefleyen TEKNOFEST'te bu sene tamamı geleceğin teknolojileri üzerine kurgulanmış, Türkiye tarihinin en büyük ödüllü 41 farklı teknoloji yarışması bulunuyor.

TEKNOFEST heyecanına ortak olmak ve Milli Teknoloji Hamlesi'ni hayata geçirmek için aşağıdaki linkten başvurunuzu gerçekleştirebilirsiniz.<br/>
<a href="">Daha fazla bilgi için tıklayınız</a>
                </p>
            </div>
        </div>
        <div className="newsCard d-flex">
            <div className="image">
                <img style={{width:'100%',height:'100%'}} src="https://www.bilimsenligi.com/wp-content/uploads/2016/04/matematik-olimpiyati.jpg" alt="" />
            </div>
            <div className="text p-3">
                <p>
               <b> Tübitak Bilim Olimpiyatları</b> Ortaokul Ve Lise Öğrencilerinin Temel Bilimler Ve Bilgisayar Alanlarına İlgilerini Artırmak, Öğrencileri Ulusal Bilim Olimpiyatlarına Hazırlamak Ve Uluslararası/Bölgesel Bilim Olimpiyatlarına Katılımlarını Sağlamak Amacıyla Düzenlenmektedir.

Programın amacı, ortaokul ve lise öğrencilerinin temel bilimler ve bilgisayar alanlarına ilgilerini artırmak, öğrencileri Ulusal Bilim Olimpiyatlarına hazırlamak ve Uluslararası/Bölgesel Bilim Olimpiyatlarına katılımlarını sağlamaktır.

Bu çağrı duyurusu, 2202 Bilim Olimpiyatları Programı’na başvuran ve/veya bu programdan destek alan ve almaya hak kazanan adaylarla ilgili işlem ve yükümlülükleri kapsar. TÜBİTAK işbu çağrı duyurusu üzerinde değişiklik yapma hakkını her zaman saklı tutar.<br/>
<a href="">Daha fazla bilgi için tıklayınız</a>
                </p>
            </div>
        </div>
      

       
      </div>
      </>
    )
  }
}

export default News