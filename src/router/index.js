import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CustomersTable from '../components/CustomersTable.vue';
import CustomerRegisterForm from '../components/CustomerRegisterForm';
import CustomerEditForm from '../components/CustomerEditForm';

//zde doplnim cesty=routes=url
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home, // komponenta, ktera se načte
    },
    {
        path: '/customerstable',
        name: 'Customers Table',
        component: CustomersTable,
    },
    {
        path: '/customerregister',
        name: 'Customer Register Form',
        component: CustomerRegisterForm,
    },
    {
        path: '/customeredit',
        name: 'Customer Edit Form',
        component: CustomerEditForm,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
