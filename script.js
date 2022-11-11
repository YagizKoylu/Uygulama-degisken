/*
    1-Lisede öğrenimi sürdüren iki öğrencinin aşağıdaki bilgileri değişkende saklanıyor.
        Öğrenci 1:
            İsim:
            Doğum Tarihi:
            Matematik Notları:
        
        Öğrenci 2:
            İsim:
            Doğum Tarihi:
            Matematik Notları:
    2-Öğrencilerin yaş bilgileri değişkende tutuluyor.
    3-Öğrencilerin ders ortalama notu değişkende tutuluyor.
    4-Öğrencilerin 60 geçme notuna göre başarı durumları değişkende saklanıyor.
    */

    let ogr1_ad = "Yasemin";
    let ogr1_soyad = "Sengül";
    let ogr1_dogumTarihi = "2004";
    let ogr1_matematik1 = 80;
    let ogr1_matematik2 = 60;
    let ogr1_matematik3 = 50;
    let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
    console.log(parseFloat(ogr1_ortalama));
    console.log(ogr1_ortalama >= 60);
    
    let ogr2_ad = "Ali";
    let ogr3_soyad = "Yigit";
    let ogr2_dogumTarihi = "2002";
    let ogr2_matematik1 = 30;
    let ogr2_matematik2 = 20;
    let ogr2_matematik3 = 100;
    let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
    console.log(parseFloat(ogr2_ortalama));
    console.log(typeof ogr2_ortalama);
    console.log(ogr2_ortalama >= 60);
    
    let suankiYil = new Date().getFullYear();
    
    let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
    let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
    console.log(ogr2_yas);


