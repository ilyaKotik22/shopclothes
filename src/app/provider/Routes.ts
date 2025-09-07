import {
    AccountPage,
    AuthPage,
    BasketPage,
    CardPage,
    CatalogPage,
    HomePage,
    ReturnPage,
    PayDeliveryPage
} from '../../pages/index.ts'

export const ROUTES = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/account/:id',
        component: AccountPage
    },
    {
        path: '/Auth',
        component: AuthPage
    },
    {
        path: '/basket',
        component: BasketPage
    },
    {
        path: '/Card/:id',
        component: CardPage
    },
    {
        path: '/catalog',
        component: CatalogPage
    },
    {
        path: '/return',
        component: ReturnPage
    },
    {
        path: '/pay-delivery',
        component: PayDeliveryPage
    },
]