import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./Layout/Pages/HomePage/HomePage.tsx";
import {MainLayout} from "./Layout/MainLayout.tsx";
import {PageNotFound} from "./Layout/Pages/PageNotFound/PageNotFound.tsx";
import {DetailsPage} from "./Layout/Pages/DetailsPage/DetailsPage.tsx";
import {ContactPage} from "./Layout/Pages/ContactPage/ContactPage.tsx";
import {CareersPage} from "./Layout/Pages/CareersPage/CareersPage.tsx";
import {StoryPage} from "./Layout/Pages/StoryPage/StoryPage.tsx";
import {FranchisingPage} from "./Layout/Pages/FranchisingPage/FranchisingPage.tsx";
import {MenuPage} from "./Layout/Pages/MenuPage/MenuPage.tsx";
import {SingleProductPage} from "./Layout/Pages/SingleProductPage/SingleProductPage.tsx";
import {WishlistPage} from "./Layout/Pages/WishlistPage/WishlistPage.tsx";
import {BasketPage} from "./Layout/Pages/BasketPage/BasketPage.tsx";
import {CheckoutPage} from "./Layout/Pages/CheckoutPage/CheckoutPage.tsx";
import {CompletedPage} from "./Layout/Pages/CompletedPage/CompletedPage.tsx";


const router = () => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "*",
                element: <PageNotFound/>
            },
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: 'home',
                element: <HomePage/>,
            },
            {
                path: 'details/:category',
                element: <DetailsPage/>,

            },
            {
                path: 'contact',
                element: <ContactPage/>,
            },
            {
                path: 'careers',
                element: <CareersPage/>,

            },
            {
                path: 'story',
                element: <StoryPage/>,
            },
            {
                path: 'franchising',
                element: <FranchisingPage/>,
            },
            {
                path: 'menu',
                element: <MenuPage/>,
            },
            {
                path: 'single-product/:id',
                element: <SingleProductPage/>,
            },
            {
                path: 'wishlist',
                element: <WishlistPage/>,
            },
            {
                path: 'cart',
                element: <BasketPage/>,
            },
            {
                path: 'checkout',
                element: <CheckoutPage/>
            },
            {
                path: 'completed',
                element: <CompletedPage/>
            }
        ],
    },

]);
const MainRouter = () => {
    return <RouterProvider router={router()}/>;
};

export default MainRouter;