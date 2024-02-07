import './style.css';


const sliders: NodeListOf<HTMLInputElement> = document.querySelectorAll('.amount');
const slidersYar: NodeListOf<HTMLInputElement> = document.querySelectorAll('.yare');

sliders[0].addEventListener('input', () => {
 if(+sliders[0].value > +sliders[1].value){
    sliders[1].value = String(+sliders[0].value);
  }
});

sliders[1].addEventListener('input', () => {
 if(+sliders[1].value < +sliders[0].value){
    sliders[0].value = String(+sliders[1].value);
  }
});

sliders.forEach((slider) => {
  slider.addEventListener('change', () => {
    let a: NodeListOf<HTMLDivElement> = document.querySelectorAll('.range-slider_numb')
    a[0].innerText = ` ${sliders[0].value}`;
    a[1].innerText = ` ${sliders[1].value}`;
    FilterSetting.minKol = sliders[0].value;
    FilterSetting.maxKol = sliders[1].value;
  })
});


slidersYar[0].addEventListener('input', () => {
  if(+slidersYar[0].value > +slidersYar[1].value){
     slidersYar[1].value = String(+slidersYar[0].value);
   }
 });
 
 slidersYar[1].addEventListener('input', () => {
  if(+slidersYar[1].value < +slidersYar[0].value){
     slidersYar[0].value = String(+slidersYar[1].value);
   }
 });
 
 slidersYar.forEach((slider) => {
   slider.addEventListener('change', () => {
     console.log(`from ${slidersYar[0].value} to ${slidersYar[1].value}`);
     let a: NodeListOf<HTMLDivElement> = document.querySelectorAll('.range-slider_numb')
    a[2].innerText = ` ${slidersYar[0].value}`;
    a[3].innerText = ` ${slidersYar[1].value}`;
    FilterSetting.minYare = slidersYar[0].value;
    FilterSetting.maxYare = slidersYar[1].value;
   })
 });

const sel: HTMLSelectElement | null  = document.querySelector('.sel')
if (sel !== null) {
 sel.addEventListener('change', () => {
  console.log(sel.value)
  if (sel.value == 'По названию, от А до Я') {
    sortAZ()
    FilterSetting.sort = 'По названию, от А до Я'
    productCreate()
  }
  if (sel.value == 'По названию, от Я до А') {
    sortZA()
    FilterSetting.sort = 'По названию, от Я до А'
    productCreate()
  }
  if (sel.value == 'По убыванию, года выпуска') {
    sortYare91()
    FilterSetting.sort = 'По убыванию, года выпуска'
    productCreate()
  }
  if (sel.value == 'По возрастанию, года выпуска') {
    sortYare19()
    FilterSetting.sort = 'По возрастанию, года выпуска'
    productCreate()
  }
  if (sel.value == 'По убыванию, количества') {
    sortKol91()
    FilterSetting.sort = 'По убыванию, количества'
    productCreate()
  }
  if (sel.value == 'По возрастанию, количества') {
    sortKol19()
    FilterSetting.sort = 'По возрастанию, количества'
    productCreate()
  }
   }
 );} 

 const inp: HTMLInputElement | null  = document.querySelector('.search')
if (inp !== null) {
 inp.addEventListener('input', () => {
  console.log(inp.value)
  FilterSetting.poisk = inp.value;
 })
}
function Reset () {
  FilterSetting.proiz.Apple = false;
  FilterSetting.proiz.Samsung = false;
  FilterSetting.proiz.Xiaomi = false;
  FilterSetting.color.red = false;
  FilterSetting.color.yellou = false;
  FilterSetting.color.white = false;
  FilterSetting.cam.One = false;
  FilterSetting.cam.Tu = false;
  FilterSetting.cam.Thre = false;
  FilterSetting.favor = false;
  FilterSetting.minKol = '1';
  FilterSetting.maxKol = '12';
  FilterSetting.minYare = '2000';
  FilterSetting.maxYare = '2022';
}
let reset: HTMLElement | null  = document.querySelector('.Reset_button')
if (reset !== null) {
  reset.addEventListener('click', () => {
  Reset()
  })
 }
 class cardProd {
   name: string;
   srcImg: string;
   kol: string;
   yare: string;
   proiz: string;
   color: string;
   cam: string;
   favor: string;
   filtr: boolean;
   constructor(filtr: boolean, name: string, kol: string, yare: string, proiz: string, color: string, cam: string, favor: string, srcImg: string) {
    this.name = name,
    this.kol = kol,
    this.yare = yare,
    this.proiz = proiz,
    this.color = color,
    this.cam = cam,
    this.favor = favor,
    this.srcImg = srcImg
    this.filtr = filtr
   }
creatCard(): void {
  let productCard = document.createElement('div');
  productCard.className = "product-card";
  let productCardH4 = document.createElement('h4');
  productCardH4.className = 'product-card-zag';
  productCardH4.innerText = `${this.name}`
  let productCardImgwrap = document.createElement('div');
  productCardImgwrap.className = 'img-wrap';
  let img = document.createElement('img');
  img.className = 'img'
  img.setAttribute('src', `${this.srcImg}`);
  productCardImgwrap.append(img)
  let productCardH51 = document.createElement('h5');
  productCardH51.className = 'product-card-info'
  productCardH51.innerText = `Количество: ${this.kol}`;
  let productCardH52 = document.createElement('h5');
  productCardH52.className = 'product-card-info'
  productCardH52.innerText = `Год выхода: ${this.yare}`;
  let productCardH53 = document.createElement('h5');
  productCardH53.className = 'product-card-info'
  productCardH53.innerText = `Производитель: ${this.proiz}`;
  let productCardH54 = document.createElement('h5');
  productCardH54.className = 'product-card-info'
  productCardH54.innerText = `Цвет: ${this.color}`;
  let productCardH55 = document.createElement('h5');
  productCardH55.className = 'product-card-info'
  productCardH55.innerText = `Количество камер: ${this.cam}`;
  let productCardH56 = document.createElement('h5');
  productCardH56.className = 'product-card-info'
  productCardH56.innerText = `Популярный: ${this.favor}`;
  productCard.append(productCardH4);
  productCard.append(productCardImgwrap);
  productCard.append(productCardH51);
  productCard.append(productCardH52);
  productCard.append(productCardH53);
  productCard.append(productCardH54);
  productCard.append(productCardH55);
  productCard.append(productCardH56);
  document.querySelector('.product')?.append(productCard)
 }
}


let ObjProd: Array<cardProd> = [
new cardProd (true, 'Apple Aiphone 12', '2', '2010', 'Apple', 'желтый', '3', 'нет', `../src/assets/image/9.png`),
new cardProd (true, 'Apple Aiphone 13', '6', '2011', 'Apple', 'красный', '3', 'нет', `../src/assets/image/8.png`),
new cardProd (true, 'Apple Aiphone SE', '3', '2005', 'Apple', 'белый', '1', 'нет', `../src/assets/image/10.png`),
new cardProd (true, 'Samsung Galaxy A03', '4', '2000', 'Samsung', 'красный', '2', 'нет', `../src/assets/image/2.png`),
new cardProd (true, 'Samsung Galaxy S20', '2', '2021', 'Samsung', 'желтый', '1', 'нет', `../src/assets/image/3.png`),
new cardProd (true, 'Samsung Galaxy S21', '8', '2022', 'Samsung', 'белый', '3', 'нет', `../src/assets/image/1.png`),
new cardProd (true, 'Xiaomi Poco X4 pro', '1', '2014', 'Xiaomi', 'желтый', '2', 'нет', `../src/assets/image/4.png`),
new cardProd (true, 'Xiaomi Redmi 9C 3/64gb', '7', '2010', 'Xiaomi', 'красный', '2', 'нет', `../src/assets/image/6.png`),
new cardProd (true, 'Apple Aiphone 11', '12', '2018', 'Apple', 'белый', '3', 'да', `../src/assets/image/7.png`),
new cardProd (true, 'Xiaomi Redmi Note 11', '5', '2012', 'Xiaomi', 'белый', '1', 'да', `../src/assets/image/5.png`),
]


function sortAZ() {
  let arr = []
  for (let key of ObjProd) {
    arr.push(key);
  }
  var n = arr.length;
  for (let i = 0; i < n-1; i++)
   { for (let j = 0; j < n-1-i; j++)
      {
        let re:string = arr[j+1].name.toLowerCase();
        let rep:string = arr[j].name.toLowerCase();
         if (re < rep)
         { let t: cardProd = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = t;
          }
      }
   }                     
  ObjProd = arr;
}
function sortZA() {
  let arr = []
  let key: keyof typeof ObjProd;
  for (key in ObjProd) {
    arr.push(ObjProd[key]);
  }
  var n = arr.length;
  for (let i = 0; i < n-1; i++)
   { for (let j = 0; j < n-1-i; j++)
      {
        let re:string = arr[j+1].name.toLowerCase();
        let rep:string = arr[j].name.toLowerCase();
         if (re > rep)
         { let t: cardProd = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = t;
          }
      }
   }                     
   ObjProd = arr;
}
function sortKol19() {
  let arr = []
  let key: keyof typeof ObjProd;
  for (key in ObjProd) {
    arr.push(ObjProd[key]);
  }
  var n = arr.length;
  for (let i = 0; i < n-1; i++)
   { for (let j = 0; j < n-1-i; j++)
      {
        let re:number = Number(arr[j+1].kol);
        let rep:number = Number(arr[j].kol);
         if (re < rep)
         { let t: cardProd = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = t;
          }
      }
   }                     
   ObjProd = arr;
}
function sortKol91() {
  let arr = []
  for (let key of ObjProd) {
    arr.push(key);
  }
  var n = arr.length;
  for (let i = 0; i < n-1; i++)
   { for (let j = 0; j < n-1-i; j++)
      {
        let re:number = Number(arr[j+1].kol);
        let rep:number = Number(arr[j].kol);
         if (re > rep)
         { let t: cardProd = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = t;
          }
      }
   }                     
   ObjProd = arr;
}
function sortYare19() {
  let arr = []
  for (let key of ObjProd) {
    arr.push(key);
  }
  var n = arr.length;
  for (let i = 0; i < n-1; i++)
   { for (let j = 0; j < n-1-i; j++)
      {
        let re:number = Number(arr[j+1].yare);
        let rep:number = Number(arr[j].yare);
         if (re < rep)
         { let t: cardProd = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = t;
          }
      }
   }                     
   ObjProd = arr;
}
function sortYare91() {
  let arr = []
  for (let key of ObjProd) {
    arr.push(key);
  }
  var n = arr.length;
  for (let i = 0; i < n-1; i++)
   { for (let j = 0; j < n-1-i; j++)
      {
        let re:number = Number(arr[j+1].yare);
        let rep:number = Number(arr[j].yare);
         if (re > rep)
         { let t: cardProd = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = t;
          }
      }
   }                     
   ObjProd = arr;
}



function productCreate (): void {
  let a = document.querySelector('.product')
  if (a !== null) {
    a.innerHTML = ''
  }
for ( let key of ObjProd) {
  let cam: boolean = false;
  let brand: boolean = false;
  let color: boolean = false;
  let fav: boolean = FilterSetting.favor;
  let kol: boolean = false;
  let yare:boolean = false;
  let iner: boolean = true;
  if (FilterSetting.poisk !== '') {
    iner = false;
    let Poisk: string = FilterSetting.poisk.toLowerCase()
    let Name: string = key.name.toLowerCase()
    if (Name.includes(Poisk)) {
      iner = true
    }
  }
  if (Number(key.kol) >= Number(FilterSetting.minKol)) {
    if (Number(key.kol) <= Number(FilterSetting.maxKol)) {
      kol = true
    }
  }
  if (Number(key.yare) >= Number(FilterSetting.minYare)) {
    if (Number(key.yare) <= Number(FilterSetting.maxYare)) {
      yare = true
    }
  }
  if (key.proiz === 'Apple') {
    if (FilterSetting.proiz.Apple === true) {
      brand = true
    }
  }
  if (key.proiz === 'Samsung') {
    if (FilterSetting.proiz.Samsung === true) {
      brand = true
    }
  }
  if (key.proiz === 'Xiaomi') {
    if (FilterSetting.proiz.Xiaomi === true) {
      brand = true
    }
  }
  if (key.cam === '1') {
    if (FilterSetting.cam.One === true) {
      cam = true
    }
  }
  if (key.cam === '2') {
    if (FilterSetting.cam.Tu === true) {
      cam = true
    }
  }
  if (key.cam === '3') {
    if (FilterSetting.cam.Thre === true) {
      cam = true
    }
  }
  if (key.color === 'красный') {
    if (FilterSetting.color.red === true) {
      color = true
    }
  }
  if (key.color === 'белый') {
    if (FilterSetting.color.white === true) {
      color = true
    }
  }
  if (key.color === 'желтый') {
    if (FilterSetting.color.yellou === true) {
      color = true
    }
  }
  if (cam && brand && color && yare && kol && iner) {
    if (fav) {
      if ('да' === key.favor) {
        key.creatCard()
      }
    } else {
      key.creatCard()
    }
  }
}
}
let FilterSetting = {
  proiz: {
    _Apple: false,
    _Samsung: false,
    _Xiaomi: false,
    set Apple(val: boolean) {
      this._Apple = val
      productCreate();
      if (val) {
      localStorage.setItem('Apple', '1');
      if(App) {
      App.classList.add('button_brand_active')
      }
      } else {
        if(App) {
          App.classList.remove('button_brand_active')
          }
        localStorage.setItem('Apple', '0')
      }
    },
    get Apple() {
      if (this._Apple || this._Samsung || this._Xiaomi) {
        return this._Apple
      } else {
        return true
      }
    },
    set Samsung(val: boolean) {
      this._Samsung = val;
      productCreate()
      if (val) {
        if(Sam) {
          Sam.classList.add('button_brand_active')
          }
        localStorage.setItem('Samsung', '1')
        } else {
          if(Sam) {
            Sam.classList.remove('button_brand_active')
            }
          localStorage.setItem('Samsung', '0')
        }
    },
    get Samsung() {
      if (this._Apple || this._Samsung || this._Xiaomi) {
        return this._Samsung
      } else {
        return true
      }
    },
    set Xiaomi(val: boolean) {
      this._Xiaomi = val;
      productCreate()
      if (val) {
        if(Xia) {
          Xia.classList.add('button_brand_active')
          }
        localStorage.setItem('Xiaomi', '1')
        } else {
          if(Xia) {
            Xia.classList.remove('button_brand_active')
            }
          localStorage.setItem('Xiaomi', '0')
        }
    },
    get Xiaomi() {
      if (this._Apple || this._Samsung || this._Xiaomi) {
        return this._Xiaomi
      } else {
        return true
      }
    }
  },
  cam: {
    _One: false,
    _Tu: false,
    _Thre: false,
    set One(val: boolean) {
      this._One = val;
      productCreate()
      if (val) {
        if(cam1) {
          cam1.classList.add('button_brand_active')
          }
        localStorage.setItem('One', '1')
        } else {
          if(cam1) {
            cam1.classList.remove('button_brand_active')
            }
          localStorage.setItem('One', '0')
        }
    },
    get One() {
      if (this._One || this._Tu || this._Thre) {
        return this._One
      } else {
        return true
      }
    },
    set Tu(val: boolean) {
      this._Tu = val;
      productCreate()
      if (val) {
        if(cam2) {
          cam2.classList.add('button_brand_active')
          }
        localStorage.setItem('Tu', '1')
        } else {
          if(cam2) {
            cam2.classList.remove('button_brand_active')
            }
          localStorage.setItem('Tu', '0')
        }
    },
    get Tu() {
      if (this._One || this._Tu || this._Thre) {
        return this._Tu
      } else {
        return true
      }
    },
    set Thre(val: boolean) {
      this._Thre = val;
      productCreate()
      if (val) {
        if(cam3) {
          cam3.classList.add('button_brand_active')
          }
        localStorage.setItem('Thre', '1')
        } else {
          if(cam3) {
            cam3.classList.remove('button_brand_active')
            }
          localStorage.setItem('Thre', '0')
        }
    },
    get Thre() {
      if (this._One || this._Tu || this._Thre) {
        return this._Thre
      } else {
        return true
      }
    }
  },
  color: {
    _red: false,
    _yellou: false,
    _white: false,
    set red(val: boolean) {
      this._red = val;
      productCreate()
      if (val) {
        if(colRed) {
          colRed.classList.add('button_brand_active')
          }
        localStorage.setItem('red', '1')
        } else {
          if(colRed) {
            colRed.classList.remove('button_brand_active')
            }
          localStorage.setItem('red', '0')
        }
    },
    get red() {
      if (this._red || this._yellou || this._white) {
        return this._red
      } else {
        return true
      }
    },
    set yellou(val: boolean) {
      this._yellou = val;
      productCreate()
      if (val) {
        if(colYel) {
          colYel.classList.add('button_brand_active')
          }
        localStorage.setItem('yellou', '1')
        } else {
          if(colYel) {
            colYel.classList.remove('button_brand_active')
            }
          localStorage.setItem('yellou', '0')
        }
    },
    get yellou() {
      if (this._red || this._yellou || this._white) {
        return this._yellou
      } else {
        return true
      }
    },
    set white(val: boolean) {
      this._white = val;
      productCreate()
      if (val) {
        if(colWhite) {
          colWhite.classList.add('button_brand_active')
          }
        localStorage.setItem('white', '1')
        } else {
          if(colWhite) {
            colWhite.classList.remove('button_brand_active')
            }
          localStorage.setItem('white', '0')
        }
    },
    get white() {
      if (this._red || this._yellou || this._white) {
        return this._white
      } else {
        return true
      }
    }
  },
  _favor: false,
  get favor() {
    return this._favor
  },
  set favor(val:boolean) {
    this._favor = val;
    productCreate()
    if (val) {
      if (FavorInp) {
      FavorInp.checked = true
      }
      localStorage.setItem('favor', '1')
      } else {
        if (FavorInp) {
          FavorInp.checked = false
          }
        localStorage.setItem('favor', '0')
      }
  },
  _minKol: '1',
  get minKol () {
    return this._minKol;
  },
  set minKol(val: string) {
    this._minKol = val;
    productCreate()
    if (sliders[0]) {
      sliders[0].value = val
      }
    localStorage.setItem('minKol', val)
  },
  _maxKol: '12',
  get maxKol () {
    return this._maxKol;
  },
  set maxKol(val: string) {
    this._maxKol = val;
    productCreate()
    if (sliders[1]) {
      sliders[1].value = val
      }
    localStorage.setItem('maxKol', val)
  },
  _minYare: '2000',
  get minYare () {
    return this._minYare;
  },
  set minYare(val: string) {
    this._minYare = val;
    productCreate()
    if (slidersYar[0]) {
      slidersYar[0].value = val
      }
     localStorage.setItem('minYare', val)
  },
  _maxYare: '2022',
  get maxYare () {
    return this._maxYare;
  },
  set maxYare(val: string) {
    this._maxYare = val;
    productCreate()
    if (slidersYar[1]) {
      slidersYar[1].value = val
      }
    localStorage.setItem('maxYare', val)
  },
  _sort: 'По названию, от А до Я',
  get sort() {
    return this._sort
  },
  set sort(val) {
    this._sort = val;
    if (sel)  {sel.value = val}
    localStorage.setItem('sort', val)
  },
  _poisk: '',
  get poisk() {
    return this._poisk
  },
  set poisk(val) {
    this._poisk = val;
    if(inp) {inp.value = val}
    productCreate()
    localStorage.setItem('poisk', val)
  }
}
let Sam = document.querySelector('.type-Sam');
let App = document.querySelector('.type-App');
let Xia = document.querySelector('.type-Mi');
Sam?.addEventListener('click', () => {
  if (Sam?.classList[2]) {
    Sam.classList.remove('button_brand_active')
    FilterSetting.proiz.Samsung = false;
  } else {
    Sam?.classList.add('button_brand_active')
    FilterSetting.proiz.Samsung = true
  }
})
App?.addEventListener('click', () => {
  if (App?.classList[2]) {
    App.classList.remove('button_brand_active')
    FilterSetting.proiz.Apple = false;
  } else {
    App?.classList.add('button_brand_active')
    FilterSetting.proiz.Apple = true
  }
})
Xia?.addEventListener('click', () => {
  if (Xia?.classList[2]) {
    Xia.classList.remove('button_brand_active')
    FilterSetting.proiz.Xiaomi = false;
  } else {
    Xia?.classList.add('button_brand_active')
    FilterSetting.proiz.Xiaomi = true
  }
})

let cam1 = document.querySelector('.type-small');
let cam2 = document.querySelector('.type-medium');
let cam3 = document.querySelector('.type-large');
cam1?.addEventListener('click', () => {
  if (cam1?.classList[2]) {
    cam1.classList.remove('button_brand_active')
    FilterSetting.cam.One = false;
  } else {
    cam1?.classList.add('button_brand_active')
    FilterSetting.cam.One = true
  }
})
cam2?.addEventListener('click', () => {
  if (cam2?.classList[2]) {
    cam2.classList.remove('button_brand_active')
    FilterSetting.cam.Tu = false;
  } else {
    cam2?.classList.add('button_brand_active')
    FilterSetting.cam.Tu = true
  }
})
cam3?.addEventListener('click', () => {
  if (cam3?.classList[2]) {
    cam3.classList.remove('button_brand_active')
    FilterSetting.cam.Thre = false;
  } else {
    cam3?.classList.add('button_brand_active')
    FilterSetting.cam.Thre = true
  }
})
let colRed = document.querySelector('.button_color-red');
let colYel = document.querySelector('.button_color-yellow');
let colWhite = document.querySelector('.button_color-white');
colRed?.addEventListener('click', () => {
  if (colRed?.classList[2]) {
    colRed.classList.remove('button_brand_active')
    FilterSetting.color.red = false;
  } else {
    colRed?.classList.add('button_brand_active')
    FilterSetting.color.red = true
  }
})
colYel?.addEventListener('click', () => {
  if (colYel?.classList[2]) {
    colYel.classList.remove('button_brand_active')
    FilterSetting.color.yellou = false;
  } else {
    colYel?.classList.add('button_brand_active')
    FilterSetting.color.yellou = true
  }
})
colWhite?.addEventListener('click', () => {
  if (colWhite?.classList[2]) {
    colWhite.classList.remove('button_brand_active')
    FilterSetting.color.white = false;
  } else {
    colWhite?.classList.add('button_brand_active')
    FilterSetting.color.white = true
  }
})
let FavorInp: HTMLInputElement | null = document.querySelector('.favor-input');
FavorInp?.addEventListener('input', () => {
  if (FavorInp) {
  FilterSetting.favor = FavorInp.checked
  }
})

if (localStorage.getItem('Apple')) {
  if  (localStorage.getItem('Apple') === '1')
  FilterSetting.proiz.Apple = true
} else {
  FilterSetting.proiz.Apple = false
}
if (localStorage.getItem('Samsung')) {
  if  (localStorage.getItem('Samsung') === '1')
  FilterSetting.proiz.Samsung = true
} else {
  FilterSetting.proiz.Samsung = false
}
if (localStorage.getItem('Xiaomi')) {
  if  (localStorage.getItem('Xiaomi') === '1')
  FilterSetting.proiz.Xiaomi = true
} else {
  FilterSetting.proiz.Xiaomi = false
}
if (localStorage.getItem('One')) {
  if  (localStorage.getItem('One') === '1')
  FilterSetting.cam.One = true
} else {
  FilterSetting.cam.One = false
}
if (localStorage.getItem('Tu')) {
  if  (localStorage.getItem('Tu') === '1')
  FilterSetting.cam.Tu = true
} else {
  FilterSetting.cam.Tu = false
}
if (localStorage.getItem('Thre')) {
  if  (localStorage.getItem('Thre') === '1')
  FilterSetting.cam.Thre = true
} else {
  FilterSetting.cam.Thre = false
}
if (localStorage.getItem('red')) {
  if  (localStorage.getItem('red') === '1')
  FilterSetting.color.red = true
} else {
  FilterSetting.color.red = false
}
if (localStorage.getItem('yellou')) {
  if  (localStorage.getItem('yellou') === '1')
  FilterSetting.color.yellou = true
} else {
  FilterSetting.color.yellou = false
}
if (localStorage.getItem('white')) {
  if  (localStorage.getItem('white') === '1')
  FilterSetting.color.white = true
} else {
  FilterSetting.color.white = false
}
if (localStorage.getItem('favor')) {
  if  (localStorage.getItem('favor') === '1')
  FilterSetting.favor = true
} else {
  FilterSetting.favor = false
};
let a = localStorage.getItem('maxKol')
if (a !== null) {
  FilterSetting.maxKol = a
}
let b = localStorage.getItem('minKol')
if (b !== null) {
  FilterSetting.minKol = b
}
let c = localStorage.getItem('maxYare')
if (c !== null) {
  FilterSetting.maxYare = c
}
let d = localStorage.getItem('minYare')
if (d !== null) {
  FilterSetting.minYare = d
}
let e = localStorage.getItem('poisk')
if (e !== null) {
  FilterSetting.poisk = e
}
let f = localStorage.getItem('sort')
if (f !== null) {
  FilterSetting.sort = f
}
productCreate()