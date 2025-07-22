export const menuFoodCategories = [
  {
    title: 'Завтраки',
    img: './assets/images/menu-food/breakfasts/angliyskiy_2.jpg',
  },
  {
    title: 'Холодные закуски',
    img: './assets/images/menu-food/food/vitello_tonnato.jpg',
  },
  {
    title: 'Салаты',
    img: './assets/images/menu-food/food/teplyy_kartofelnyy_salat.jpg',
  },
  {
    title: 'Горячие закуски',
    img: './assets/images/menu-food/food/zharenye_ostrye_krevetki.jpg',
  },
  {
    title: 'Супы',
    img: './assets/images/menu-food/food/morskoy_chauder.jpg',
  },
  {
    title: 'Горячие блюда',
    img: './assets/images/menu-food/food/burger.jpg',
  },
  {
    title: 'Гарниры',
    img: './assets/images/menu-food/food/zapechenye_shampinony.jpg',
  },
  {
    title: 'На компанию',
    img: './assets/images/menu-food/food/pivnoy_set.jpg',
  },
  {
    title: 'Десерты',
    img: './assets/images/menu-food/food/kukis.jpg',
  },
];

export const sortedMenuFoodCategories = [...menuFoodCategories].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export const menuFoodPositionsByCategory = [
  {
    category: 'Завтраки',
    positions: [
      {
        title: 'Английский завтрак',
        img: './assets/images/menu-food/breakfasts/angliyskiy_2.jpg',
        weight: '460г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с беконом',
        img: './assets/images/menu-food/breakfasts/permskiy_s_bekonom.jpg',
        weight: '336г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с лососем',
        img: './assets/images/menu-food/breakfasts/permskiy_s_lososem.jpg',
        weight: '286г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с пастрами',
        img: './assets/images/menu-food/breakfasts/permskiy_s_pastrami.jpg',
        weight: '326г',
        price: '1000 ₽',
      },
      {
        title: 'Фитнес завтрак',
        img: './assets/images/menu-food/breakfasts/fitnes.jpg',
        weight: '302г',
        price: '1000 ₽',
      },
      {
        title: 'Французский завтрак',
        img: './assets/images/menu-food/breakfasts/frantsuzskiy.jpg',
        weight: '580г',
        price: '1000 ₽',
      },
    ],
  },
  {
    category: 'Холодные закуски',
    positions: [
      {
        title: 'Вителло тоннато',
        img: './assets/images/menu-food/food/vitello_tonnato.jpg',
        weight: '200г',
        price: '1100 ₽',
      },
      {
        title: 'Домашнее сало',
        img: './assets/images/menu-food/food/domashnee_salo.jpg',
        weight: '302г',
        price: '820 ₽',
      },
      {
        title: 'Закуска из щучьей икры',
        img: './assets/images/menu-food/food/zakuska_iz_shchuchey_ikry.jpg',
        weight: '303г',
        price: '3850 ₽',
      },
      {
        title: 'Карпаччо',
        img: './assets/images/menu-food/food/karpachcho_iz_telyatiny.jpg',
        weight: '119г',
        price: '920 ₽',
      },
      {
        title: 'Сельдь с картофелем',
        img: './assets/images/menu-food/food/seld_s_kartofelem.jpg',
        weight: '303г',
        price: '450 ₽',
      },
      {
        title: 'Соленые рыжики со сметаной и луком',
        img: './assets/images/menu-food/food/solenye_ryzhiki.jpg',
        weight: '202г',
        price: '730 ₽',
      },
      {
        title: 'Тартар из телятины',
        img: './assets/images/menu-food/food/tar_tar.jpg',
        weight: '192г',
        price: '920 ₽',
      },
      {
        title: 'Яблочный лосось',
        img: './assets/images/menu-food/food/yablochnyi_losos_slaboy_soli.jpg',
        weight: '152г',
        price: '1260 ₽',
      },
    ],
  },
  {
    category: 'Салаты',
    positions: [
      {
        title: 'Салат Греческий',
        img: './assets/images/menu-food/food/grecheskiy.jpg',
        weight: '252г',
        price: '750 ₽',
      },
      {
        title: 'Салат с лососем',
        img: './assets/images/menu-food/food/salat_s_lososem.jpg',
        weight: '193г',
        price: '1550 ₽',
      },
      {
        title: 'Салат с морскими гадами и манго',
        img: './assets/images/menu-food/food/salat_s_morskimi_gadami.jpg',
        weight: '308г',
        price: '1720 ₽',
      },
      {
        title: 'Салат с подкопченой уткой и инжирным вареньем',
        img: './assets/images/menu-food/food/salat_s_podkopchenoy_utkoy.jpg',
        weight: '198г',
        price: '950 ₽',
      },
      {
        title: 'Салат с ростбифом',
        img: './assets/images/menu-food/food/salat_s_rostbifom.jpg',
        weight: '240г',
        price: '1220 ₽',
      },
      {
        title: 'Стейк салат',
        img: './assets/images/menu-food/food/steyk_salat.jpg',
        weight: '234г',
        price: '1300 ₽',
      },
      {
        title: 'Теплый салат с курицей и беконом',
        img: './assets/images/menu-food/food/teplyy_salat_s_kuritsey_i_bekonom.jpg',
        weight: '262г',
        price: '850 ₽',
      },
    ],
  },
  {
    category: 'Горячие закуски',
    positions: [
      {
        title: 'Жареные острые креветки с клубникой',
        img: './assets/images/menu-food/food/zharenye_ostrye_krevetki.jpg',
        weight: '235г',
        price: '1350 ₽',
      },
      {
        title: 'Закуска из телятины',
        img: './assets/images/menu-food/food/zakuska_iz_telyatiny.jpg',
        weight: '155г',
        price: '1390 ₽',
      },
      {
        title: 'Запеченые мидии с беконом',
        img: './assets/images/menu-food/food/zapechenye_midii.jpg',
        weight: '311г',
        price: '990 ₽',
      },
      {
        title: 'Корюшка жареная',
        img: './assets/images/menu-food/food/koryushka_zharenaya.jpg',
        weight: '441г',
        price: '1290 ₽',
      },
      {
        title: 'Мидии Блю чиз',
        img: './assets/images/menu-food/food/midii_blyu_chiz.jpg',
        weight: '493г',
        price: '1450 ₽',
      },
      {
        title: 'Морской гребешок с клубникой и копченой сметаной',
        img: './assets/images/menu-food/food/morskoy_grebeshek_s_klubnikoy.jpg',
        weight: '204г',
        price: '1630 ₽',
      },
      {
        title: 'Посикунчики',
        img: './assets/images/menu-food/food/posikunchiki.jpg',
        weight: '234г',
        price: '730 ₽',
      },
      {
        title: 'Свиные ребрышки с халапенью',
        img: './assets/images/menu-food/food/svinnye_rebryshki.jpg',
        weight: '420г',
        price: '1150 ₽',
      },
    ],
  },
  {
    category: 'Супы',
    positions: [
      {
        title: 'Грибной капучино',
        img: './assets/images/menu-food/food/gribnoy_kapuchino.jpg',
        weight: '448г',
        price: '720 ₽',
      },
      {
        title: 'Уха',
        img: './assets/images/menu-food/food/uha_obrezat_vodku_i_kruton.jpg',
        weight: '386г',
        price: '1450 ₽',
      },
      {
        title: 'Морской чаудер',
        img: './assets/images/menu-food/food/morskoy_chauder.jpg',
        weight: '379г',
        price: '1450 ₽',
      },
      {
        title: 'Мясной чаудер',
        img: './assets/images/menu-food/food/myasnoi_chauder.jpg',
        weight: '383г',
        price: '850 ₽',
      },
    ],
  },
  {
    category: 'Горячие блюда',
    positions: [
      {
        title: 'Голяшка барана',
        img: './assets/images/menu-food/food/golyashka_barana.jpg',
        weight: '454г',
        price: '1650 ₽',
      },
      {
        title: 'Оссобуко',
        img: './assets/images/menu-food/food/ossobuko.jpg',
        weight: '409г',
        price: '1330 ₽',
      },
      {
        title: 'Филе Дорада с пряными черри',
        img: './assets/images/menu-food/food/dorado.jpg',
        weight: '295',
        price: '1660 ₽',
      },
      {
        title: 'Стейк лосося',
        img: './assets/images/menu-food/food/steyk_lososya.jpg',
        weight: '199г',
        price: '2350 ₽',
      },
      {
        title: 'Свинной рябчик',
        img: './assets/images/menu-food/food/svinnoy_ryabchik.jpg',
        weight: '358г',
        price: '850 ₽',
      },
      {
        title: 'Томленые телячьи щечки',
        img: './assets/images/menu-food/food/tomlenye_telyachyi_shchechki.jpg',
        weight: '183г',
        price: '1250 ₽',
      },
      {
        title: 'Филе судака с корнеплодом и сливочным цитрусом',
        img: './assets/images/menu-food/food/file_sudaka.jpg',
        weight: '229г',
        price: '990 ₽',
      },
      {
        title: 'Цыпленок табака',
        img: './assets/images/menu-food/food/cyplenok_tabaka.jpg',
        weight: '467г',
        price: '1250 ₽',
      },
      {
        title: 'Бургер',
        img: './assets/images/menu-food/food/burger.jpg',
        weight: '542г',
        price: '1700 ₽',
      },
    ],
  },
  {
    category: 'Гарниры',
    positions: [
      {
        title: 'Запеченые шампиньоны',
        img: './assets/images/menu-food/food/zapechenye_shampinony.jpg',
        weight: '184г',
        price: '490 ₽',
      },
      {
        title: 'Картофель жареный с белыми грибами',
        img: './assets/images/menu-food/food/kartofel_zharenyy.jpg',
        weight: '287г',
        price: '670 ₽',
      },
      {
        title: 'Овощи на гриле',
        img: './assets/images/menu-food/food/ovoshchi_na_grile.jpg',
        weight: '156г',
        price: '340 ₽',
      },
      {
        title: 'Теплый картофельный салат',
        img: './assets/images/menu-food/food/teplyy_kartofelnyy_salat.jpg',
        weight: '202г',
        price: '320 ₽',
      },
    ],
  },
  {
    category: 'На компанию',
    positions: [
      {
        title: 'Пивной сет',
        img: './assets/images/menu-food/food/pivnoy_set.jpg',
        weight: '934г',
        price: '2720 ₽',
      },
      {
        title: 'Плато гриль',
        img: './assets/images/menu-food/food/plato_gril.jpg',
        weight: '1 185г',
        price: '8500 ₽',
      },
      {
        title: 'Плато креветок',
        img: './assets/images/menu-food/food/plato_krevetok.jpg',
        weight: '1 065г',
        price: '6700 ₽',
      },
    ],
  },
  {
    category: 'Десерты',
    positions: [
      {
        title: 'Печенье Брауни',
        img: './assets/images/menu-food/food/pechenye_brauni.jpg',
        weight: '150г',
        price: '630 ₽',
      },
      {
        title: 'Кукис "Орео"',
        img: './assets/images/menu-food/food/kukis.jpg',
        weight: '151г',
        price: '820 ₽',
      },
      {
        title: 'Мадлены',
        img: './assets/images/menu-food/food/madleny.jpg',
        weight: '140г',
        price: '650 ₽',
      },
      {
        title: 'Трюфельные конфеты',
        img: './assets/images/menu-food/food/tryufelnye_konfety.jpg',
        weight: '74г',
        price: '610 ₽',
      },
      {
        title: 'Чизкейк с карамелью и пломбиром',
        img: './assets/images/menu-food/food/chizkeyk.jpg',
        weight: '220г',
        price: '650 ₽',
      },
    ],
  },
];

// Функция рендера блюд для конкретной категории
export function renderMenuFoodPositions(categoryTitle) {
  const wrapper = document.querySelector('.menu_food__wrapper.food');
  if (!wrapper) return;

  const categoryToRender =
    menuFoodPositionsByCategory.find((cat) => cat.category === categoryTitle) ||
    menuFoodPositionsByCategory[0];

  if (!categoryToRender) {
    wrapper.innerHTML = '<p>Блюда не найдены.</p>';
    return;
  }

  wrapper.innerHTML = categoryToRender.positions
    .map(
      (pos) => `
        <div class="menu_food__item">
          <img class="menu_food__item-img" src="${pos.img}" alt="${pos.title}" />
          <p class="menu_food__item-title">${pos.title}</p>
          <p class="menu_food__item-weight">${pos.weight}</p>
          <div class="menu_food__item-price">
            <p class="menu_food__item-price-text">${pos.price}</p>
          </div>
        </div>
      `,
    )
    .join('');
}

// Функция рендера категорий и добавления обработчиков кликов
export function renderMenuFoodCategories() {
  const container = document.querySelector('.menu_food__category');
  if (!container) return;

  container.innerHTML = menuFoodCategories
    .map(
      (category) => `
    <div class="menu_food__category-item" data-category="${category.title}">
      <img class="menu_food__category-img" src="${category.img}" alt="${category.title}" />
      <p class="menu_food__category-title">${category.title}</p>
    </div>
  `,
    )
    .join('');

  const categoryItems = container.querySelectorAll('.menu_food__category-item');

  if (categoryItems.length > 0) {
    categoryItems[0].classList.add('active');
  }

  categoryItems.forEach((item) => {
    item.addEventListener('click', () => {
      categoryItems.forEach((i) => i.classList.remove('active'));
      item.classList.add('active');
      const categoryTitle = item.dataset.category;
      renderMenuFoodPositions(categoryTitle);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenuFoodCategories();
  renderMenuFoodPositions(); // Рендерим блюда первой категории по умолчанию
});
