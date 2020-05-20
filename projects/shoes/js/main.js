'use strict';

(function () {
    let navToggle = document.querySelector('.nav-toggle');
    let navList = document.querySelector('.main-nav__list');
    let navItems = document.querySelectorAll('.main-nav__item');
    let navContainer = document.querySelector('.submenu__container');


    let submenuDesks = ['Электронный документооборот', 'Отчетность через интернет', 'Все о компаниях и владельцах', 'Поиск и анализ закупок', 'ОФД и онлайн кассы', 'Для магазинов и аптек', 'Для ресторанов, кафе и столовых', 'Для салонов и сферы услуг', 'Заказы и поставки (EDI)', 'Управление бизнес-процессами', 'CRM для активных продаж', 'Корпоративная социальная сеть', 'Управление персоналом', 'Учет и контроль рабочего времени', 'Бухгалтерия и учет', 'Корпоративный удостоверяющий центр', 'Видео коммуникации'];
    let submenuImages = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];
    let submenuLinks = ['https://sbis.ru/edo','https://sbis.ru/ereport', 'https://sbis.ru/contragents', 'https://sbis.ru/tenders', 'https://sbis.ru/ofd', 'https://sbis.ru/retail', 'https://sbis.ru/presto', 'https://sbis.ru/salons', 'https://sbis.ru/edi', 'https://sbis.ru/business_processes', 'https://sbis.ru/crm', 'https://sbis.ru/business_network', 'https://sbis.ru/staff', 'https://sbis.ru/time_management', 'https://sbis.ru/accounting', 'https://sbis.ru/corporate-uc', 'https://sbis.ru/video_communications']


    let getSubmenuItem = function (currentItem) {
        let submenuElementTemplate = document.querySelector('#element').content.querySelector('.submenu__thing');
        let submenuElement = submenuElementTemplate.cloneNode(true);
        let submenuELementLink = submenuElement.querySelector('a');
        let submenuElementPictureTagSource = submenuElement.querySelector('source');
        let submenuElementImage = submenuElement.querySelector('.submenu__pic');
        let submenuElementDesc = submenuElement.querySelector('.submenu__desc');
        submenuELementLink.href = submenuLinks[currentItem];
        submenuElementPictureTagSource.type = `image/webp`;
        submenuElementPictureTagSource.srcset = `img/${submenuImages[currentItem]}.webp`;
        submenuElementImage.src = `img/${submenuImages[currentItem]}.png`;
        submenuElementDesc.textContent = submenuDesks[currentItem];
        return submenuElement;
    };

    let getSubmenuItems = function () {
        let elementFragment = document.createDocumentFragment();
        for (let i = 0; i < submenuDesks.length; i++) {
            elementFragment.appendChild(getSubmenuItem(i));
        };
        return elementFragment;
    };

    let removeOldItems = function () {
        let oldItems = navContainer.querySelectorAll('.submenu__thing');
        oldItems.forEach(function (item) {
            item.remove();
        })
    };

    navToggle.addEventListener('click', function (evt) {
        evt.preventDefault();
        removeOldItems();
        navToggle.classList.toggle('main-nav__toggle--opened');
        navList.classList.toggle('main-nav__list--opened');
        navItems.forEach(elem => elem.classList.toggle('main-nav__item--opened'));
        navContainer.classList.toggle('submenu__container--opened');
        navContainer.appendChild(getSubmenuItems());
    });
})();




