export const menuFoodCategories = [
  {
    title: 'Завтраки',
    img: '/menu-food/breakfasts/англиийский 2.webp',
  },
  {
    title: 'Холодные закуски',
    img: '/menu-food/food/вителло тоннато.webp',
  },
  {
    title: 'Салаты',
    img: '/menu-food/food/теплый картофельный салат.webp',
  },
  {
    title: 'Горячие закуски',
    img: '/menu-food/food/жареные острые креветки.webp',
  },
  {
    title: 'Супы',
    img: '/menu-food/food/морской чаудер.webp',
  },
  {
    title: 'Горячие блюда',
    img: '/menu-food/food/бургер.webp',
  },
  {
    title: 'Гарниры',
    img: '/menu-food/food/запеченые шампиньоны.webp',
  },
  {
    title: 'На компанию',
    img: '/menu-food/food/пивной сет.webp',
  },
  {
    title: 'Десерты',
    img: '/menu-food/food/кукис.webp',
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
        img: '/menu-food/breakfasts/англиийский 2.webp',
        weight: '460г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с беконом',
        img: '/menu-food/breakfasts/пермский с беконом.webp',
        weight: '336г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с лососем',
        img: '/menu-food/breakfasts/пермский с лососем.webp',
        weight: '286г',
        price: '1000 ₽',
      },
      {
        title: 'Пермский с пастрами',
        img: '/menu-food/breakfasts/пермский с пастрами.webp',
        weight: '326г',
        price: '1000 ₽',
      },
      {
        title: 'Фитнес завтрак',
        img: '/menu-food/breakfasts/фитнес.webp',
        weight: '302г',
        price: '1000 ₽',
      },
      {
        title: 'Французский завтрак',
        img: '/menu-food/breakfasts/французский.webp',
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
        img: '/menu-food/food/вителло тоннато.webp',
        weight: '200г',
        price: '1100 ₽',
      },
      {
        title: 'Домашнее сало',
        img: '/menu-food/food/домашнее сало.webp',
        weight: '302г',
        price: '820 ₽',
      },
      {
        title: 'Закуска из щучьей икры',
        img: '/menu-food/food/закуска из щучьей икры.webp',
        weight: '303г',
        price: '3850 ₽',
      },
      {
        title: 'Карпаччо',
        img: '/menu-food/food/Карпаччо из телятины.webp',
        weight: '119г',
        price: '920 ₽',
      },
      {
        title: 'Сельдь с картофелем',
        img: '/menu-food/food/сельдь с картофелем.webp',
        weight: '303г',
        price: '450 ₽',
      },
      {
        title: 'Соленые рыжики со сметаной и луком',
        img: '/menu-food/food/соленые рыжики.webp',
        weight: '202г',
        price: '730 ₽',
      },
      {
        title: 'Тартар из телятины',
        img: '/menu-food/food/тар тар.webp',
        weight: '192г',
        price: '920 ₽',
      },
      {
        title: 'Яблочный лосось',
        img: '/menu-food/food/Яблочный лосось слабой соли.webp',
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
        img: '/menu-food/food/греческий.webp',
        weight: '252г',
        price: '750 ₽',
      },
      {
        title: 'Салат с лососем',
        img: '/menu-food/food/салат с лососем.webp',
        weight: '193г',
        price: '1550 ₽',
      },
      {
        title: 'Салат с морскими гадами и манго',
        img: '/menu-food/food/салат с морскими гадами.webp',
        weight: '308г',
        price: '1720 ₽',
      },
      {
        title: 'Салат с подкопченой уткой и инжирным вареньем',
        img: '/menu-food/food/салат с подкопченой уткой.webp',
        weight: '198г',
        price: '950 ₽',
      },
      {
        title: 'Салат с ростбифом',
        img: '/menu-food/food/салат с ростбифом.webp',
        weight: '240г',
        price: '1220 ₽',
      },
      {
        title: 'Стейк салат',
        img: '/menu-food/food/стейк салат.webp',
        weight: '234г',
        price: '1300 ₽',
      },
      {
        title: 'Теплый салат с курицей и беконом',
        img: '/menu-food/food/теплый салат с курицей и беконом.webp',
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
        img: '/menu-food/food/жареные острые креветки.webp',
        weight: '235г',
        price: '1350 ₽',
      },
      {
        title: 'Закуска из телятины',
        img: '/menu-food/food/закуска из телятины.webp',
        weight: '155г',
        price: '1390 ₽',
      },
      {
        title: 'Запеченые мидии с беконом',
        img: '/menu-food/food/запеченые мидии.webp',
        weight: '311г',
        price: '990 ₽',
      },
      {
        title: 'Корюшка жареная',
        img: '/menu-food/food/корюшка жареная.webp',
        weight: '441г',
        price: '1290 ₽',
      },
      {
        title: 'Мидии Блю чиз',
        img: '/menu-food/food/мидии блю чиз.webp',
        weight: '493г',
        price: '1450 ₽',
      },
      {
        title: 'Морской гребешок с клубникой и копченой сметаной',
        img: '/menu-food/food/морской гребешок с клубникой.webp',
        weight: '204г',
        price: '1630 ₽',
      },
      {
        title: 'Посикунчики',
        img: '/menu-food/food/посикунчики.webp',
        weight: '234г',
        price: '730 ₽',
      },
      {
        title: 'Свиные ребрышки с халапенью',
        img: '/menu-food/food/свинные ребрышки.webp',
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
        img: '/menu-food/food/грибной капучино.webp',
        weight: '448г',
        price: '720 ₽',
      },
      {
        title: 'Уха',
        img: '/menu-food/food/уха -обрезать водку и крутон.webp',
        weight: '386г',
        price: '1450 ₽',
      },
      {
        title: 'Морской чаудер',
        img: '/menu-food/food/морской чаудер.webp',
        weight: '379г',
        price: '1450 ₽',
      },
      {
        title: 'Мясной чаудер',
        img: '/menu-food/food/мясной чаудер.webp',
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
        img: '/menu-food/food/голяшка барана.webp',
        weight: '454г',
        price: '1650 ₽',
      },
      {
        title: 'Оссобуко',
        img: '/menu-food/food/оссобуко.webp',
        weight: '409г',
        price: '1330 ₽',
      },
      {
        title: 'Филе Дорада с пряными черри',
        img: '/menu-food/food/дорадо.webp',
        weight: '295',
        price: '1660 ₽',
      },
      {
        title: 'Стейк лосося',
        img: '/menu-food/food/стейк лосося.webp',
        weight: '199г',
        price: '2350 ₽',
      },
      {
        title: 'Свинной рябчик',
        img: '/menu-food/food/свинной рябчик.webp',
        weight: '358г',
        price: '850 ₽',
      },
      {
        title: 'Томленые телячьи щечки',
        img: '/menu-food/food/томленые телячьи щечки.webp',
        weight: '183г',
        price: '1250 ₽',
      },
      {
        title: 'Филе судака с корнеплодом и сливочным цитрусом',
        img: '/menu-food/food/филе судака.webp',
        weight: '229г',
        price: '990 ₽',
      },
      {
        title: 'Цыпленок табака',
        img: '/menu-food/food/цыпленок табака.webp',
        weight: '467г',
        price: '1250 ₽',
      },
      {
        title: 'Бургер',
        img: '/menu-food/food/бургер.webp',
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
        img: '/menu-food/food/запеченые шампиньоны.webp',
        weight: '184г',
        price: '490 ₽',
      },
      {
        title: 'Картофель жареный с белыми грибами',
        img: '/menu-food/food/картофель жаренный.webp',
        weight: '287г',
        price: '670 ₽',
      },
      {
        title: 'Овощи на гриле',
        img: '/menu-food/food/овощи на гриле.webp',
        weight: '156г',
        price: '340 ₽',
      },
      {
        title: 'Теплый картофельный салат',
        img: '/menu-food/food/теплый картофельный салат.webp',
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
        img: '/menu-food/food/пивной сет.webp',
        weight: '934г',
        price: '2720 ₽',
      },
      {
        title: 'Плато гриль',
        img: '/menu-food/food/плато гриль.webp',
        weight: '1 185г',
        price: '8500 ₽',
      },
      {
        title: 'Плато креветок',
        img: '/menu-food/food/плато креветок.webp',
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
        img: '/menu-food/food/печенье брауни.webp',
        weight: '150г',
        price: '630 ₽',
      },
      {
        title: 'Кукис "Орео"',
        img: '/menu-food/food/кукис.webp',
        weight: '151г',
        price: '820 ₽',
      },
      {
        title: 'Мадлены',
        img: '/menu-food/food/мадлены.webp',
        weight: '140г',
        price: '650 ₽',
      },
      {
        title: 'Трюфельные конфеты',
        img: '/menu-food/food/трюфельные конфеты.webp',
        weight: '74г',
        price: '610 ₽',
      },
      {
        title: 'Чизкейк с карамелью и пломбиром',
        img: '/menu-food/food/чизкейк.webp',
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
    .map((pos) => {
      // Используем кэшированное изображение, если оно есть
      const cachedImg =
        window.menuFoodImageCache && window.menuFoodImageCache[pos.img]
          ? window.menuFoodImageCache[pos.img].src
          : pos.img;
      return `
        <div class="menu_food__item">
          <img class="menu_food__item-img" src="${cachedImg}" alt="${pos.title}" />
          <p class="menu_food__item-title">${pos.title}</p>
          <p class="menu_food__item-weight">${pos.weight}</p>
          <div class="menu_food__item-price">
            <p class="menu_food__item-price-text">${pos.price}</p>
          </div>
        </div>
      `;
    })
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
